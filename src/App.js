import './App.css';
import Header from './components/Header';
import Apartments from './components/Apartments';
import { useEffect, useState } from 'react';
import Footer from './components/Footer';
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet';
import MarkerClusterGroup from 'react-leaflet-cluster';
import { CiMap } from 'react-icons/ci';

function App() {
  const [mapIntegration, setMapIntegration] = useState(true);

  const [showMap, setMap] = useState(false);

  const markers = [
    {
      geocode: [41.24, 2.24],
      popUp: 'Hey there i am pop up 1',
    },
    {
      geocode: [41.533, 2.3],
      popUp: 'Hey there i am pop up 2',
    },
    {
      geocode: [41.0, 2.367],
      popUp: 'Hey there i am pop up 3',
    },
    {
      geocode: [35.5138, 24.018],
      popUp: 'Hey there i am pop up 4',
    },
    {
      geocode: [23.685, 90.3563],
      popUp: 'Hey there i am pop up 5',
    },
    {
      geocode: [39.3999, 8.2245],
      popUp: 'Hey there i am pop up 6',
    },
    {
      geocode: [25.2048, 55.2708],
      popUp: 'Hey there i am pop up 7',
    },
  ];

  const customIcon = new Icon({
    iconUrl: require('./images/location.png'),
    iconSize: [38, 38],
  });

  const handleScroll = () => {
    const scrollPoint = 300;
    setMapIntegration(window.scrollY <= scrollPoint);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const [center, setCenter] = useState({
    lat: 41.3874,
    lng: 2.1686,
  });
  const ZOOM_LEVEL = 13;

  return (
    <div className="mb-5">
      <Header />

      {mapIntegration && (
        <div className="relative w-100">
          <button
            className="map-style block fixed bottom-12 left-[45%] p-2.5  rounded-full font-bold text-white bg-black"
            onClick={() => {
              setMap(!showMap);
            }}
          >
            {showMap ? (
              'Show List'
            ) : (
              <div className=" flex gap-1 font-[Calibri] text-[15px]">
                <p>Show Map</p>
                <div className="mt-1">
                  <CiMap />
                </div>
              </div>
            )}
          </button>
        </div>
      )}

      {showMap ? (
        <MapContainer center={center} zoom={ZOOM_LEVEL}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />

          <MarkerClusterGroup>
            {markers.map((marker) => (
              <Marker position={marker.geocode} icon={customIcon}>
                <Popup>{marker.popUp}</Popup>
              </Marker>
            ))}
          </MarkerClusterGroup>
        </MapContainer>
      ) : (
        <Apartments />
      )}

      <Footer />
    </div>
  );
}

export default App;
