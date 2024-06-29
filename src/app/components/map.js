// src/components/Map.js
import React, { useEffect, useState } from 'react';
import { Loader } from '@googlemaps/js-api-loader';

const Map = ({ regions }) => {
  const [selectedRegion, setSelectedRegion] = useState(null);
  const [map, setMap] = useState(null);

  useEffect(() => {
    console.log("API Key:", process.env.REACT_APP_GOOGLE_MAPS_API_KEY);
    console.log("Regions data:", regions);

    const loader = new Loader({
      apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
      version: "weekly",
    });

    loader.load().then(() => {
      console.log("Google Maps script loaded successfully");
      const mapInstance = new window.google.maps.Map(document.getElementById('map'), {
        center: { lat: 39.0742, lng: 21.8243 }, // Center of Greece
        zoom: 6,
        styles: [
          {
            featureType: "administrative.country",
            elementType: "geometry",
            stylers: [
              { visibility: "off" }
            ]
          }
        ]
      });
      setMap(mapInstance);
      console.log("Map instance created");
    }).catch(error => {
      console.error("Error loading Google Maps: ", error);
    });
  }, [regions]);

  useEffect(() => {
    if (map && regions) {
      console.log("Map and regions available, rendering polygons");
      regions.forEach(region => {
        try {
          // Create polygon for each region
          const regionPolygon = new window.google.maps.Polygon({
            paths: region.coords,
            strokeColor: '#FF0000',
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: '#FF0000',
            fillOpacity: 0.35
          });
          regionPolygon.setMap(map);

          // Add hover effect
          regionPolygon.addListener('mouseover', function() {
            this.setOptions({ fillOpacity: 0.8 });
          });
          regionPolygon.addListener('mouseout', function() {
            this.setOptions({ fillOpacity: 0.35 });
          });

          // Add click event
          regionPolygon.addListener('click', function() {
            setSelectedRegion(region);
          });

          // Add a label for each region
          const bounds = new window.google.maps.LatLngBounds();
          region.coords.forEach(coord => bounds.extend(coord));
          const center = bounds.getCenter();
          new window.google.maps.Marker({
            position: center,
            map: map,
            label: {
              text: region.name,
              color: "black",
              fontSize: "12px",
              fontWeight: "bold"
            },
            icon: {
              path: window.google.maps.SymbolPath.CIRCLE,
              scale: 0
            }
          });
          console.log(`Region ${region.name} rendered successfully`);
        } catch (error) {
          console.error(`Error rendering region ${region.name}:`, error);
        }
      });
    }
  }, [map, regions]);

  return (
    <div>
      <div id="map" style={{ height: '100vh', width: '100%' }}></div>
      {selectedRegion && (
        <div className="region-properties">
          <h2>{selectedRegion.name}</h2>
          {/* Add any additional information you want to display for the selected region */}
        </div>
      )}
    </div>
  );
};

export default Map;