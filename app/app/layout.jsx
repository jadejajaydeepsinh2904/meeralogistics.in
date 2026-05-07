export const metadata = {
  title: "Meera Logistics",
  description: "Tipper, Dumper and Truck Transport Service in Gujarat",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
