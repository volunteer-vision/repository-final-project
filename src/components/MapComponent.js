import React, { useState } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import styles from "../styles/MapComponent.module.css";

const geoUrl =
  "https://raw.githubusercontent.com/datasets/geo-countries/master/data/countries.geojson";

export default function MapChart() {
  const [tooltipContent, setTooltipContent] = useState("");

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
                  }}
                  onMouseLeave={() => {
                    setTooltipContent("");
                  }}
                  style={{
                    default: {
                      fill: "#D6D6DA",
                      outline: "none",
                    },
                    hover: {
                      fill: "#FF6722",
                      outline: "none",
                    },
                    pressed: {
                      fill: "#FF1000",
                      outline: "none",
                    },
                  }}
                />
              );
            })
          }
        </Geographies>
      </ComposableMap>
      {tooltipContent && (
        <div className={styles.tooltip}>
          {tooltipContent}
        </div>
      )}
    </div>
  );
}
