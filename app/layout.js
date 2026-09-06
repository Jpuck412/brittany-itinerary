import "./globals.css";

export const metadata = {
  title: "Brittany ✦ Trip",
  description: "Brittany's private travel command center",
  applicationName: "Brittany Trip",
  manifest: "/manifest.webmanifest",
  appleWebApp: {
    capable: true,
    title: "Brittany Trip",
    statusBarStyle: "black-translucent"
  },
  formatDetection: { telephone: false }
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#10251d"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
