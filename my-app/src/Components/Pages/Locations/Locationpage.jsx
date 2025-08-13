import React, { useState, useEffect } from 'react';
import LocationDisplay from './Locationdisplay';
import axios from 'axios';

const patientId = 'REPLACE_WITH_REAL_PATIENT_ID'; // temp until auth is wired

export default function Locationpage() {
  const [location, setLocation] = useState({ lat: null, lng: null, accuracy: null });
  const [error, setError] = useState('');
  const [perm, setPerm] = useState('checking');

  useEffect(() => {
    // show permission state (Chrome/Edge)
    if (navigator.permissions && navigator.permissions.query) {
      navigator.permissions.query({ name: 'geolocation' }).then(p => {
        setPerm(p.state);
        p.onchange = () => setPerm(p.state);
      }).catch(() => {});
    }

    if (!('geolocation' in navigator)) {
      setError('Geolocation is not supported by this browser');
      return;
    }

    // 1) get one reading immediately (so you see Lahore right away)
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude, accuracy } = pos.coords;
        setLocation({ lat: latitude, lng: longitude, accuracy });
        sendLocation(latitude, longitude);
        console.log('getCurrentPosition:', pos.coords);
      },
      (err) => setError(err.message),
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 0 }
    );

    // 2) then keep watching for live updates
    const watchId = navigator.geolocation.watchPosition(
      (pos) => {
        const { latitude, longitude, accuracy } = pos.coords;
        setLocation({ lat: latitude, lng: longitude, accuracy });
        sendLocation(latitude, longitude);
        console.log('watchPosition:', pos.coords);
      },
      (err) => setError(err.message),
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 0 }
    );

    return () => navigator.geolocation.clearWatch(watchId);
  }, []);

  async function sendLocation(lat, lng) {
    try {
      await axios.post(
        'http://localhost:5000/api/location',    // make sure your backend route matches this
        { lat, lng, patientId },
        { headers: { 'Content-Type': 'application/json' } }
      );
    } catch (e) {
      console.log('Backend save failed:', e?.response?.data || e.message);
    }
  }

  return (
    <div>
      <h2 style={{ color: '#AF3E3E', paddingLeft: '350px', fontSize: '35px' }}>
        Live Location Tracking
      </h2>

      {perm && <p style={{ paddingLeft: 30, color: '#666' }}>Permission: {perm}</p>}
      {location.accuracy != null && (
        <p style={{ paddingLeft: 30, color: '#666' }}>Accuracy: ~{Math.round(location.accuracy)} m</p>
      )}
      {error && <p style={{ color: 'red', paddingLeft: 30 }}>Error: {error}</p>}

      <LocationDisplay lat={location.lat} lng={location.lng} />
    </div>
  );
}
