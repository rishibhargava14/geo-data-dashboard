import data from "../data/mockData.json";

export const fetchGeoData = async (page, limit) => {
  await new Promise((res) => setTimeout(res, 300));

  const start = page * limit;
  const end = start + limit;

  return {
    rows: data.slice(start, end),
    total: data.length
  };
};
