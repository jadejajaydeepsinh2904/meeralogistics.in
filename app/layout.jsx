import { Analytics } from '@vercel/analytics/next';

export const metadata = {
  title: "Meera Logistics",
  description: "Transport Services Gujarat",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
