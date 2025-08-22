import { tourDates } from "../data/tourDates.tsx";

export default function TourData() {
  return (
    <div className="flex gap-4">
        {tourDates.map((show) => (
        <div key={show.date}>
            <p>{show.date} - {show.city} @ {show.venue}</p>
        </div>
        ))}
    </div>
  );
}