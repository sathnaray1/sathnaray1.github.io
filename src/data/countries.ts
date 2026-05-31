/* Visited countries (from visited_data.csv "Been" + USA "Live").
   lat/lng are approximate centroids. `photo` (in /public/globe/) and
   `caption` populate the hover card where available. */

export type Country = {
  country: string;
  lat: number;
  lng: number;
  photo?: string;
  caption?: string;
};

export const visited: Country[] = [
  { country: "United States", lat: 39.5, lng: -98.35, photo: "/globe/usa.jpg", caption: "Home base — Hawaii to Arizona" },
  { country: "Peru", lat: -9.19, lng: -75.02, photo: "/globe/peru.jpg", caption: "Taught English in the Andes" },
  { country: "Spain", lat: 40.46, lng: -3.75, photo: "/globe/spain.jpg", caption: "Plaza de España, Seville" },
  { country: "Morocco", lat: 31.79, lng: -7.09, photo: "/globe/morocco.jpg", caption: "Golden hour in the Sahara" },
  { country: "Thailand", lat: 15.87, lng: 100.99, photo: "/globe/thailand.jpg", caption: "Chiang Mai" },
  { country: "Costa Rica", lat: 9.75, lng: -83.75, photo: "/globe/costa-rica.jpg", caption: "Through the moon gate" },
  { country: "Japan", lat: 36.2, lng: 138.25, photo: "/globe/japan.jpg", caption: "Izu Peninsula" },
  { country: "Canada", lat: 56.13, lng: -106.35, photo: "/globe/canada.jpg", caption: "Moraine Lake" },

  { country: "Mexico", lat: 23.63, lng: -102.55 },
  { country: "Bolivia", lat: -16.3, lng: -63.6 },
  { country: "Chile", lat: -35.7, lng: -71.5 },
  { country: "Aruba", lat: 12.52, lng: -69.97 },
  { country: "Barbados", lat: 13.19, lng: -59.54 },
  { country: "Bermuda", lat: 32.32, lng: -64.75 },
  { country: "British Virgin Islands", lat: 18.42, lng: -64.64 },
  { country: "Cayman Islands", lat: 19.31, lng: -81.25 },
  { country: "Puerto Rico", lat: 18.22, lng: -66.59 },
  { country: "U.S. Virgin Islands", lat: 18.34, lng: -64.9 },
  { country: "Turks & Caicos", lat: 21.69, lng: -71.8 },
  { country: "The Bahamas", lat: 25.03, lng: -77.4 },

  { country: "United Kingdom", lat: 55.38, lng: -3.44 },
  { country: "Ireland", lat: 53.41, lng: -8.24 },
  { country: "France", lat: 46.6, lng: 2.2 },
  { country: "Belgium", lat: 50.5, lng: 4.5 },
  { country: "Netherlands", lat: 52.13, lng: 5.29 },
  { country: "Luxembourg", lat: 49.82, lng: 6.13 },
  { country: "Germany", lat: 51.17, lng: 10.45 },
  { country: "Austria", lat: 47.5, lng: 14.5 },
  { country: "Switzerland", lat: 46.82, lng: 8.23 },
  { country: "Monaco", lat: 43.75, lng: 7.41 },
  { country: "Italy", lat: 41.87, lng: 12.57 },
  { country: "Vatican City", lat: 41.9, lng: 12.45 },
  { country: "Portugal", lat: 39.4, lng: -8.22 },
  { country: "Czech Republic", lat: 49.82, lng: 15.47 },
  { country: "Greece", lat: 39.07, lng: 21.82 },
  { country: "Iceland", lat: 64.96, lng: -19.02 },

  { country: "Morocco (Western Sahara)", lat: 24.22, lng: -12.89 },
  { country: "Qatar", lat: 25.35, lng: 51.18 },
  { country: "United Arab Emirates", lat: 23.42, lng: 53.85 },

  { country: "India", lat: 20.59, lng: 78.96 },
  { country: "Nepal", lat: 28.39, lng: 84.12 },
  { country: "Maldives", lat: 3.2, lng: 73.22 },
  { country: "China", lat: 35.86, lng: 104.2 },
  { country: "South Korea", lat: 35.91, lng: 127.77 },
  { country: "Myanmar", lat: 21.91, lng: 95.96 },
  { country: "Laos", lat: 19.86, lng: 102.5 },
  { country: "Cambodia", lat: 12.5, lng: 104.9 },
  { country: "Vietnam", lat: 14.06, lng: 108.28 },
  { country: "Malaysia", lat: 4.21, lng: 101.98 },
  { country: "Singapore", lat: 1.35, lng: 103.82 },
  { country: "Indonesia", lat: -2.55, lng: 118.0 },
];
