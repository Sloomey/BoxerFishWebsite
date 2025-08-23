export type tourDate = {
  date: string;
  venue: string;
  city: string;
  state: string;
  link: string;
};

export const tourDates: tourDate[] = [
    {
        date: "2024-01-15",
        venue: "The Echo",
        city: "Los Angeles",
        state: "CA",
        link: "https://www.example.com/tickets/echo",
    },
    {
        date: "2024-02-20",
        venue: "The Fillmore",
        city: "San Francisco",
        state: "CA",
        link: "https://www.example.com/tickets/fillmore",
    },
    {
        date: "2024-03-10",
        venue: "Brooklyn Bowl",
        city: "New York",
        state: "NY",
        link: "https://www.example.com/tickets/brooklynbowl",
    }
];