/* eslint-disable @next/next/no-img-element */
import React from 'react';
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from '@react-google-maps/api';
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from 'use-places-autocomplete';
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from '@reach/combobox';

import '@reach/combobox/styles.css';
import MapStyle from './mapStyles';
import Electronics from './Electronics_Drop_Off_NYC';

/// /////////////////////////////////////////////////////////////
const libraries = ['places'];
const mapContainerStyle = {
  position: 'absolute',
  top: '120px',
  left: '10px',
  right: '10px',
  bottom: '100px',
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

// Get location from the browser function
function Locate({ panTo }) {
  return (
    <button
      className=" absolute right-8 top-6 z-10 flex w-8 mt-28 self"
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
      location: { lat: () => 40.7703, lng: () => -73.9883 },
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
      const { lat, lng } = await getLatLng(results[0]);
      panTo({ lat, lng });
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log('😱 Error: ', error);
    }
  };

  return (
    <div className="search">
      <Combobox onSelect={handleSelect}>
        <ComboboxInput
          value={value}
          onChange={handleInput}
          disabled={!ready}
          placeholder="Search your location here!"
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
//       .then(() => console.log(data), setData(data.ComboboxInput));
//   }, [data, data.ComboboxInput]);
// }

export default function MyMaps() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_MAPS_API,
    libraries,
  });
  const [, setMarkers] = React.useState([]);
  const [selected, setSelected] = React.useState(null);

  // This hook is not going to be used
  // This hook creates a marker whenever the user clicks and add info to the infobox.
  const onMapClick = React.useCallback(() => {
    setMarkers((current) => [...current]);
  }, []);

  const mapRef = React.useRef();
  const onMapLoad = React.useCallback((map) => {
    mapRef.current = map;
  }, []);
  // Hook to move the maps depending on user input location and zoom to that location
  const panTo = React.useCallback(({ lat, lng }) => {
    mapRef.current.panTo({ lat, lng });
    mapRef.current.setZoom(14);
  }, []);

  if (loadError) {
    return <div>Map cannot be loaded right now, sorry.</div>;
  }
  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <div
      className=" justify-center object-center"
      // style={{
      //   height: 350,
      //   width: '100%',
      //   display: 'flex',
      //   flexFlow: 'row nowrap',
      //   justifyContent: 'center',
      //   padding: 0,
      // }}
    >
      <Locate panTo={panTo} />
      <Search panTo={panTo} />

      <GoogleMap
        id="map"
        className="mapContainerStyle"
        mapContainerStyle={mapContainerStyle}
        zoom={10}
        center={center}
        options={options}
        onClick={onMapClick}
        onLoad={onMapLoad}
      >
        {Electronics.features.map((dropOff) => (
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
        ))}

        {selected ? (
          <InfoWindow
            position={{
              lat: selected.geometry.coordinates[1],
              lng: selected.geometry.coordinates[0],
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
                {selected.properties.dropoff_sitename}{' '}
                <span role="img" aria-label="Recycling">
                  ♻️
                </span>
              </h2>
              <p> Address: {selected.properties.address} </p>
              <p> </p>
            </div>
          </InfoWindow>
        ) : null}
      </GoogleMap>
    </div>
  );
}
