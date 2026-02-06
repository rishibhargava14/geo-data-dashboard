import { FixedSizeList } from "react-window";
import { Paper } from "@mui/material";

export default function DataTable({ rows, onSelect, selectedId }) {
  const Row = ({ index, style }) => {
    const row = rows[index];

    return (
      <div
        style={{
          ...style,
          display: "flex",
          padding: "10px",
          cursor: "pointer",
          background: row.id === selectedId ? "#e3f2fd" : "white"
        }}
        onClick={() => onSelect(row)}
      >
        <div style={{ flex: 2 }}>{row.projectName}</div>
        <div style={{ flex: 1 }}>{row.latitude}</div>
        <div style={{ flex: 1 }}>{row.longitude}</div>
        <div style={{ flex: 1 }}>{row.status}</div>
        <div style={{ flex: 1 }}>{row.lastUpdated}</div>
      </div>
    );
  };

  return (
    <Paper style={{ height: 400 }}>
      <FixedSizeList
        height={400}
        itemCount={rows.length}
        itemSize={50}
        width="100%"
      >
        {Row}
      </FixedSizeList>
    </Paper>
  );
}
