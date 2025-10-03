import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "R.E.I.G.N. | Mindful Measures Inc.",
  description: "Eliminate bias. Empower your workforce. Transform your hiring process with R.E.I.G.N.",
  icons: {
    icon: '/logo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}

