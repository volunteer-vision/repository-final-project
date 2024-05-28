import React from "react"
import { ComposableMap, Geographies, Geography } from "react-simple-maps"
import styles from "../styles/MapComponent.module.css"

const geoUrl =
"https://raw.githubusercontent.com/datasets/geo-countries/master/data/countries.geojson"
export default function MapChart() {
  return (
<div className={styles.mapContainer}>
      <ComposableMap
        projectionConfig={{ scale: 200 }}
        style={{ width: "100%", height: "auto" }}
      >
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                style={{
                  default: {
                    fill: "#D6D6DA",
                    outline: "#none",
                  },
                  hover: {
                    fill: "#FFB1B1",
                    outline: "none",
                  },
                  pressed: {
                    fill: "#FF5722",
                    outline: "none",
                  },
                }}
              />
            ))
          }
        </Geographies>
      </ComposableMap>
    </div>
  );
};