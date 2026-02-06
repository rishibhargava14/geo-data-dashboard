import { useState } from "react";
import { useGeoData } from "../hooks/useGeoData";
import DataTable from "../components/DataTable";
import MapView from "../components/MapView";

export default function Dashboard() {
  const [page] = useState(0);
  const [limit] = useState(5000);
  const [selected, setSelected] = useState(null);

  const { rows } = useGeoData(page, limit);

  return (
    <div style={{ padding: 20 }}>
      <h2>Geo Data Dashboard</h2>

      <MapView rows={rows} selected={selected} onSelect={setSelected} />

      <DataTable
        rows={rows}
        selectedId={selected?.id}
        onSelect={setSelected}
      />
    </div>
  );
}
