import React, { useState } from "react";
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";
import styles from "../styles/MapComponent.module.css";
import { useRouter } from "next/router";

const geoUrl =
  "https://raw.githubusercontent.com/datasets/geo-countries/master/data/countries.geojson";

export default function MapChart() {
  const [tooltipContent, setTooltipContent] = useState("");
  const [hoveredCountry, setHoveredCountry] = useState("");
  const router = useRouter()

  const markers = [
    { markerOffset: 15, name: "Global Aid Network", coordinates: [10.2718, -1.68459], country: "Gabon" },
    { markerOffset: 15, name: "Green Future Initiative", coordinates: [-51.9253, -14.235], country: "Brazil" },
    { markerOffset: 15, name: "Hope for Health Foundation", coordinates: [113.9213, -0.7893], country: "Indonesia" },
    { markerOffset: 15, name: "Community Builders Alliance", coordinates: [37.9062, -0.0236], country: "Kenya" },
    { markerOffset: 15, name: "Green Future Initiative", coordinates: [33.1489, 1.3733], country: "Uganda" },
    { markerOffset: 15, name: "Wildlife Conservation Society", coordinates: [24.9668, 45.9432], country: "Romania" },
    { markerOffset: 15, name: "Mountain Health Initiative", coordinates: [84.124, 28.3949], country: "Nepal" },
    { markerOffset: 15, name: "Coral Reef Conservation Foundation", coordinates: [178.065, -17.7134], country: "Fiji" },
    { markerOffset: 15, name: "Antarctic Research Foundation", coordinates: [135.0, -82.8628], country: "Antarctica" },
  ];

  return (
    <div className={styles.mapContainer}>
      <ComposableMap
        projectionConfig={{ scale: 170 }}
        style={{ width: "auto", height: "auto" }}
      >
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const { ADMIN } = geo.properties;
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onMouseEnter={() => {
                    setTooltipContent(`${ADMIN}`);
                    setHoveredCountry(ADMIN);
                  }}
                  onMouseLeave={() => {
                    setTooltipContent("");
                    setHoveredCountry("");
                  }}
                  style={{
                    default: {
                      fill: "#EFD5C3",
                      outline: "#000000",
                    },
                    hover: {
                      fill: "#927D4F",
                      outline: "#000000",
                    },
                    pressed: {
                      fill: "#7a6944",
                      outline: "#000000",
                    },
                  }}
                />
              );
            })
          }
        </Geographies>
        {markers.map(({ name, coordinates, markerOffset, country }, index) => (
          <Marker key={index} coordinates={coordinates}>
           <g
                  fill="#FF6347"
                  stroke="#FF4500"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  onClick={() => router.push(`/events?events=${country}`)}
                  style={{ cursor: 'pointer' }}
                  transform="translate(-12, -24)"
                  // onClick={() => router.push("./events")}
                >
                  <path d="M12 21.35C12 21.35 4 13.28 4 8a8 8 0 1 1 16 0c0 5.28-8 13.35-8 13.35z" />
                  <circle cx="12" cy="8" r="3" fill="#FFFFFF" />
                </g>
            {hoveredCountry === country && (
              <text
                textAnchor="middle"
                y={markerOffset}
                style={{ fill: "#000000" }}
                className={styles.markerText}
              >
                {name}
              </text>
            )}
          </Marker>
        ))}
      </ComposableMap>
      {tooltipContent && (
        <div className={styles.tooltip}>
          {tooltipContent}
        </div>
      )}
    </div>
  );
}
