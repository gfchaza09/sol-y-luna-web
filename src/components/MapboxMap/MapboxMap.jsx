import { useEffect, useRef, useState } from 'react'
import mapboxgl from 'mapbox-gl';

const MapboxMap = ({selectedTheme, longLat}) => {

  const [map, setMap] = useState();

  const mapNode = useRef(null);

  useEffect(() => {
    const node = mapNode.current;
    if (typeof window === "undefined" || node === null) return;

    const mapboxMap = new mapboxgl.Map({
      container: node,
      accessToken:
        "pk.eyJ1IjoiZ2ZjaGF6YTA5IiwiYSI6ImNsZjIxaXI5ZDAzMzkzeG1veDZsNTMzbG8ifQ.JFi25asPOPU568PgXB6tZw",
      style: `${selectedTheme === "light" ? "mapbox://styles/mapbox/light-v11" : "mapbox://styles/mapbox/dark-v11"}`,
      center: longLat,
      zoom: 16,
    });

    const marker = new mapboxgl.Marker({
        color: "#973939",
        draggable: false,
    }).setLngLat(longLat).addTo(mapboxMap)

    setMap(mapboxMap);

    return () => {
      mapboxMap.remove();
    };
  }, [selectedTheme]);

  return (
    <div
        ref={mapNode}
        style={{ height: "100%", width: "100%" }}
    ></div>
  )
}

export default MapboxMap