import { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";

const MapboxMap = ({ selectedTheme, longLat, linkLocation }) => {
  const [map, setMap] = useState();

  const mapNode = useRef(null);

  useEffect(() => {
    const node = mapNode.current;
    if (typeof window === "undefined" || node === null) return;

    const mapboxMap = new mapboxgl.Map({
      container: node,
      accessToken: process.env.NEXT_PUBLIC_MAPBOX_TOKEN,
      style: `${
        selectedTheme === "light"
          ? "mapbox://styles/mapbox/light-v11"
          : "mapbox://styles/mapbox/dark-v11"
      }`,
      center: longLat,
      zoom: 16,
    });

    const marker = new mapboxgl.Marker({
      color: "#973939",
      draggable: false,
    })
      .setLngLat(longLat)
      .setPopup(
        new mapboxgl.Popup({ closeButton: false, className: `mapbox-container ${selectedTheme === "light" ? "mapbox-container-light" : "mapbox-container-dark" }` }).setHTML(
          `<a class="mapbox-text ${selectedTheme === "light" ? "mapbox-text-light" : "mapbox-text-dark"}" href=${linkLocation} target="_blank">Cómo llegar</a>`
        )
      )
      .addTo(mapboxMap);

    setMap(mapboxMap);

    return () => {
      mapboxMap.remove();
    };
  }, [selectedTheme]);

  return <div ref={mapNode} style={{ height: "100%", width: "100%" }}></div>;
};

export default MapboxMap;
