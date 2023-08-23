import "./globals.css";

export const metadata = {
  title: "Car Automobile",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className='overflow-x-hidden'>{children}</body>
    </html>
  );
}