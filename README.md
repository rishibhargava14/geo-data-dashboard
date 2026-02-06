## 📊 Data Table

- Displays:
  - Project Name
  - Latitude
  - Longitude
  - Status
  - Last Updated
- Uses `react-window` for virtualization
- Handles large datasets smoothly
- Click a row → highlights the map marker

---

## 🗺️ Map Integration

- Built using **Leaflet**
- Markers plotted using latitude & longitude
- Click a marker → highlights table row
- Popup displays project details

---

## 🧠 State Management

- Local state using `useState`
- Shared selection state lifted to Dashboard
- No external state libraries used

---

## ⚡ Performance Optimizations

- Virtualized table rendering
- Minimal re-renders
- Separated UI and data logic
- Mock pagination support

---

## 🏃‍♂️ How to Run Locally

```bash
npm install
npm run dev


# geo-data-dashboard
