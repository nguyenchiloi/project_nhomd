import React, { useEffect, useState } from 'react';
import { LoadScript } from '@react-google-maps/api';

const Map = () => {
//   const [map, setMap] = useState(null);

//   useEffect(() => {
//     const handleScriptLoad = (google) => {
//       const mapOptions = {
//         center: { lat: 37.7749, lng: -122.4194 },
//         zoom: 12,
//       };

//       const map = new google.maps.Map(document.getElementById('map'), mapOptions);
//       setMap(map);
//     };

//     const googleMapsScript = document.createElement('script');
//     // googleMapsScript.src = `https://maps.googleapis.com/maps/api/js?key=${YOUR_API_KEY}&libraries=places`;
//     googleMapsScript.onload = () => {
//       handleScriptLoad(window.google);
//     };
//     document.body.appendChild(googleMapsScript);
//   }, []);

//   if (!map) {
//     return <div>Loading...</div>;
//   }

  return (
    <iframe styel src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.474909851657!2d106.75548917583893!3d10.851437757803996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752797e321f8e9%3A0xb3ff69197b10ec4f!2zVHLGsOG7nW5nIGNhbyDEkeG6s25nIEPDtG5nIG5naOG7hyBUaOG7pyDEkOG7qWM!5e0!3m2!1svi!2ssg!4v1700879177546!5m2!1svi!2ssg" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
  );
};

export default Map;
