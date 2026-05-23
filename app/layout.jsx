export const metadata = {
  title: "Meera Logistics",
  description: "Trusted Gujarat Transport Service",
};

export default function RootLayout({ children }) {
  return (
    <html lang="gu">
      <body>{children}</body>
    </html>
  );
}
