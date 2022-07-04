import React from 'react';

import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from '@reach/combobox';
import { GoogleMap, useLoadScript, InfoWindow } from '@react-google-maps/api';
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from 'use-places-autocomplete';

import '@reach/combobox/styles.css';
import MapStyle from './mapStyles';

/// /////////////////////////////////////////////////////////////
/// /////////////////////////////////////////////////////////////
const libraries = ['places'];
const mapContainerStyle = {
  height: '800px',
  width: '1200px',
};
const options = {
  styles: MapStyle,
  disableDefaultUI: true,
  zoomControl: true,
};
const center = {
  lat: 40.7703,
  lng: -73.9883,
};

// function App() {
//   const [data, setData] = React.useState(null);

//   //   React.useEffect(() => {
//   //     fetch("/api")
//   //       .then((res) => res.json())
//   //       .then((data) => setData(data.message));
//   //   }, []);
//   // }
//   React.useEffect(() => {
//     fetch('http://localhost:3003/api')
//       .then((response) => response.json())
//       .then((data) => console.log(data), setData(data.ComboboxInput));
//   }, []);
// }

// Get location from the browser function
function Locate({ panTo }) {
  return (
    <button
      className=" absolute right-4 top-4 z-10 flex w-8"
      onClick={() => {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            panTo({
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            });
          },
          () => null
        );
      }}
    >
      <img src="/compass.svg" alt="Locate yourself" />
    </button>
  );
}

// Search function with input and list result
function Search({ panTo }) {
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      location: new google.maps.LatLng(40.7703, -73.9883),
      radius: 50 * 1000,
    },
  });

  // https://developers.google.com/maps/documentation/javascript/reference/places-autocomplete-service#AutocompletionRequest

  const handleInput = (e) => {
    setValue(e.target.value);
  };

  const handleSelect = async (address) => {
    setValue(address, false);
    clearSuggestions();

    try {
      const results = await getGeocode({ address });
      const { lat, lng } = getLatLng(results[0]);
      panTo({ lat, lng });
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log('😱 Error: ', error);
    }
  };

  return (
    <div id="search">
      <Combobox onSelect={handleSelect}>
        <ComboboxInput
          value={value}
          onChange={handleInput}
          disabled={!ready}
          placeholder="Search your location here"
        />
        <ComboboxPopover>
          <ComboboxList>
            {status === 'OK' &&
              data.map(({ id, description }) => (
                <ComboboxOption key={id} value={description} />
              ))}
          </ComboboxList>
        </ComboboxPopover>
      </Combobox>
    </div>
  );
}

export default function Maps(this: any) {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: 'AIzaSyBL9zPZXbqYtJWC-my7mrTNVfrQLJ4g2Xw',
    libraries,
  });
  const [, setMarkers] = React.useState([]);
  const [selected, setSelected] = React.useState(null);

  // This hook is not going to be used
  // This hook creates a marker whenever the user clicks and add info to the infobox.
  const onMapClick = React.useCallback((_e) => {
    setMarkers((current) => [...current]);
  }, []);

  const mapRef = React.useRef<GoogleMap | null>(null);
  const onMapLoad = React.useCallback((map) => {
    mapRef.current = map;
  }, []);
  // Hook to move the maps depending on user input location and zoom to that location
  const panTo = React.useCallback(({ lat, lng }) => {
    const map = mapRef.current;
    if (!map) return; // No map (yet)? (This return narrows the type of `map` from `MyMap | null` to just `MyMap`, so the following work.)
    map.panTo({ lat, lng });
    map.setZoom(14);
  }, []);

  if (loadError) return 'Error';
  if (!isLoaded) return 'Loading...';

  return (
    <div className=" justify-center object-center">
      <Locate panTo={panTo} />
      <Search panTo={panTo} />

      <GoogleMap
        id="map"
        // className="ml-10 content-center justify-center"
        mapContainerStyle={mapContainerStyle}
        zoom={10}
        center={center}
        options={options}
        onClick={onMapClick}
        onLoad={onMapLoad}
      >
        {/* {eWaste.features.map((dropOff) => (
          <Marker
            key={dropOff.properties.zipcode}
            position={{
              lat: dropOff.geometry.coordinates[1],
              lng: dropOff.geometry.coordinates[0],
            }}
            onClick={() => {
              setSelected(dropOff);
            }}
            icon={{
              url: `/recycling.png`,
              origin: new window.google.maps.Point(0, 0),
              anchor: new window.google.maps.Point(15, 15),
              scaledSize: new window.google.maps.Size(30, 30),
            }}
          />
        ))} */}

        {selected ? (
          <InfoWindow
            position={{
              lat: this.selected.geometry.coordinates[1],
              lng: this.selected.geometry.coordinates[0],
            }}
            onCloseClick={() => {
              setSelected(null);
            }}
          >
            <div>
              <h2>
                <span role="img" aria-label="Recycling">
                  ♻️
                </span>{' '}
                {this.selected.properties.dropoff_sitename}{' '}
                <span role="img" aria-label="Recycling">
                  ♻️
                </span>
              </h2>
              <p> Address: {this.selected.properties.address} </p>
              <p> </p>
            </div>
          </InfoWindow>
        ) : null}
      </GoogleMap>
    </div>
  );
}
