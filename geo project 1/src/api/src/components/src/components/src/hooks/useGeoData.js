import { useEffect, useState } from "react";
import { fetchGeoData } from "../api/geoService";

export const useGeoData = (page, limit) => {
  const [rows, setRows] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    fetchGeoData(page, limit).then((res) => {
      setRows(res.rows);
      setTotal(res.total);
    });
  }, [page, limit]);

  return { rows, total };
};
