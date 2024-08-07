import { NavBar, Footer } from "@/components";
import "./globals.css";

export const metadata = {
  title: "Flexible",
  description: "Showcase and discover remakable developer portfolios",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
