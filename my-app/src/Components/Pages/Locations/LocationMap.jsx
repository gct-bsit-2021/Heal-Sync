import React, { useEffect, useState } from "react";
import './LocationMap.css';
import axios from "axios";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const LocationMap = ({ userId }) => {
  const [location, setLocation] = useState(null);

  const saveUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const { latitude, longitude } = position.coords;

        await axios.post("http://localhost:5000/api/location", {
          userId,
          latitude,
          longitude,
        });

        setLocation({ latitude, longitude });
      });
    } else {
      alert("Geolocation not supported");
    }
  };

  const fetchLocation = async () => {
    const res = await axios.get(`http://localhost:5000/api/location/${userId}`);
    setLocation(res.data);
  };

  useEffect(() => {
    fetchLocation();
  }, []);

  return (
    <div>
      <button  onClick={saveUserLocation} class="button-57" role="button"><span class="text">Save My Location</span><span>Location Save</span></button>
      <button  onClick={fetchLocation} class="button-57" role="button"><span class="text"  >Get Latest Location </span><span>Latest Location</span></button>

      {location && (
        <MapContainer
          center={[location.latitude, location.longitude]}
          zoom={15}
          style={{ height: "400px", width: "100%" }}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker position={[location.latitude, location.longitude]}>
            <Popup>User Location</Popup>
          </Marker>
        </MapContainer>
      )}
    </div>
  );
};

export default LocationMap;
