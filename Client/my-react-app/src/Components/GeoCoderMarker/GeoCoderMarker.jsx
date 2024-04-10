import React, { useEffect, useState } from "react";
import { Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import * as ELG from "esri-leaflet-geocoder";

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;
const GeoCoderMarker = ({ address }) => {
  const map = useMap();
  const [position, setPosition] = useState([60, 10]);

  useEffect(() => {
    const geocodeService = ELG.geocodeService();

    geocodeService
      .geocode()
      .text(address)
      .run((err, result, response) => {
        if (!err && result.results.length > 0) {
          const { lat, lng } = result.results[0].latlng;
          setPosition([lat, lng]);
          map.flyTo([lat, lng], 6);
        }
      });
  }, [address, map]);

  return (
    <Marker position={position} icon={DefaultIcon}>
      <Popup>{address}</Popup>
    </Marker>
  );
};

export default GeoCoderMarker;
