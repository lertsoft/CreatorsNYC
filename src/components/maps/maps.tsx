import React from 'react';

import {
  GoogleMap,
  Marker,
  InfoWindow,
  useLoadScript,
} from '@react-google-maps/api';
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from 'use-places-autocomplete';

import { eWaste } from './Electronics_Drop_Off_NYC';
import MapStyle from './mapStyles';

// const libraries = ['places'];
const containerStyle = {
  width: '1200px',
  height: '800px',
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

// const geoError = console.log;

// function App() {
//   const [data, setData] = React.useState(null);

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
      className=""
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
      <img src="/compass.svg" alt="compass" />
    </button>
  );
}

// Search function with input and list result
function Search({ panTo }) {
  const {
    // eslint-disable-next-line unused-imports/no-unused-vars
    ready,
    // eslint-disable-next-line unused-imports/no-unused-vars
    value,
    // suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      location: { lat: () => 40.7703, lng: () => -73.9883 },
      radius: 50 * 1000,
    },
  });

  // https://developers.google.com/maps/documentation/javascript/reference/places-autocomplete-service#AutocompletionRequest

  // eslint-disable-next-line unused-imports/no-unused-vars
  const handleInput = (e: { target: { value: string } }) => {
    setValue(e.target.value);
  };

  // eslint-disable-next-line unused-imports/no-unused-vars
  const handleSelect = async (address: string) => {
    setValue(address, false);
    clearSuggestions();

    try {
      const results = await getGeocode({ address });
      const { lat, lng } = await getLatLng(results[0]);
      panTo({ lat, lng });
    } catch (error) {
      geoError('😱 Error: ', error);
    }
  };
}

export default function Maps() {
  const { isLoaded, loadError } = useLoadScript({
    id: 'google-map-script',
    libraries: [],
    googleMapsApiKey: 'AIzaSyBL9zPZXbqYtJWC-my7mrTNVfrQLJ4g2Xw',
  });

  const [, setMarkers] = React.useState([]);
  const [selected, setSelected] = React.useState(null);
  // eslint-disable-next-line unused-imports/no-unused-vars
  // const [map, setMap] = React.useState(null);

  // This hook is not going to be used
  // This hook creates a marker whenever the user clicks and add info to the infobox.
  const onMapClick = React.useCallback((_e: any) => {
    setMarkers((current) => [...current]);
  }, []);

  const mapRef = React.useRef();
  const onMapLoad = React.useCallback((map: any) => {
    mapRef.current = map;
  }, []);
  // Hook to move the maps depending on user input location and zoom to that location
  const panTo = React.useCallback(({ lat, lng }) => {
    mapRef?.current?.panTo({ lat, lng });
    mapRef?.current?.setZoom(14);
  }, []);

  // Error logs
  if (loadError) return 'Error';
  if (!isLoaded) return 'Loading...';

  // const onLoad = React.useCallback(function callback(map) {
  //   const bounds = new window.google.maps.LatLngBounds(center);
  //   map.fitBounds(bounds);
  //   setMap(map);
  // }, []);

  // const onUnmount = React.useCallback(function callback(map) {
  //   setMap(null);
  // }, []);

  return isLoaded ? (
    <div className="flex justify-center object-center">
      <Locate panTo={panTo} />
      <Search panTo={panTo} />

      <GoogleMap
        id="Recycle-map"
        mapContainerStyle={containerStyle}
        center={center}
        options={options}
        onClick={onMapClick}
        zoom={10}
        onLoad={onMapLoad}
        // onUnmount={onUnmount}
      >
        {/* Child components, such as markers, info windows, etc. */}
        {eWaste.features.map((dropOff) => (
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
        ;<></>
      </GoogleMap>
    </div>
  ) : (
    <></>
  );
}

// export default React.memo(Maps);
