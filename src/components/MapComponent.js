// import React, { useState } from "react";
// import { ComposableMap, Geographies, Geography } from "react-simple-maps";
// import styles from "../styles/MapComponent.module.css";

// const geoUrl =
//   "https://raw.githubusercontent.com/datasets/geo-countries/master/data/countries.geojson";

// export default function MapChart() {
//   const [tooltipContent, setTooltipContent] = useState("");

//   return (
//     <div className={styles.mapContainer}>
//       <ComposableMap
//         projectionConfig={{ scale: 170 }}
//         style={{ width: "auto", height: "auto" }}
//       >
//         <Geographies geography={geoUrl}>
//           {({ geographies }) =>
//             geographies.map((geo) => {
//               const { ADMIN } = geo.properties;
//               return (
//                 <Geography
//                   key={geo.rsmKey}
//                   geography={geo}
//                   onMouseEnter={() => {
//                     setTooltipContent(`${ADMIN}`);
//                   }}
//                   onMouseLeave={() => {
//                     setTooltipContent("");
//                   }}
//                   style={{
//                     default: {
//                       fill: "#D6D6DA",
//                       outline: "none",
//                     },
//                     hover: {
//                       fill: "#FF6722",
//                       outline: "none",
//                     },
//                     pressed: {
//                       fill: "#FF1000",
//                       outline: "none",
//                     },
//                   }}
//                 />
//               );
//             })
//           }
//         </Geographies>
//       </ComposableMap>
//       {tooltipContent && (
//         <div className={styles.tooltip}>
//           {tooltipContent}
//         </div>
//       )}
//     </div>
//   );
// }
import React, { useState } from "react";
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";
import styles from "../styles/MapComponent.module.css";

const geoUrl =
  "https://raw.githubusercontent.com/datasets/geo-countries/master/data/countries.geojson";

export default function MapChart() {
  const [tooltipContent, setTooltipContent] = useState("");
  const [hoveredCountry, setHoveredCountry] = useState("");

  const markers = [
    { markerOffset: 15, name: "Global Aid Network", coordinates: [10.271826, -1.684598], country: "Ghana" },
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
              fill="none"
              stroke="#ff0000"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              transform="translate(-18, -36)"
            >
              <circle cx="18" cy="15" r="4.5" />
              <path d="M18 32.55C25.95 25.5 30 19.5 30 15a12 12 0 1 0-24 0c0 4.5 4.05 10.5 12 17.55z" />
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