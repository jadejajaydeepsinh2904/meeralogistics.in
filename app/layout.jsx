import { SpeedInsights } from '@vercel/speed-insights/next';

export const metadata = {
  title: "Meera Logistics",
  description: "Transport Services Gujarat",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
