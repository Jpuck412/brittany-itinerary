import "./globals.css";

export const metadata = {
  title: "Brittany Itinerary",
  description: "Brittany trip command center"
};

export default function RootLayout({ children }) {
  return <html lang="en"><body>{children}</body></html>;
}
