import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon-2x.png",
  iconUrl:
    "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png",
  shadowUrl:
    "https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png"
});

export default function MapView({ rows, selected, onSelect }) {
  return (
    <MapContainer
      center={[20.5937, 78.9629]}
      zoom={5}
      style={{ height: 400 }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      {rows.map((r) => (
        <Marker
          key={r.id}
          position={[r.latitude, r.longitude]}
          eventHandlers={{
            click: () => onSelect(r)
          }}
        >
          <Popup>
            <b>{r.projectName}</b>
            <br />
            {r.status}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
