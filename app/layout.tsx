import { Container } from "../components/Container";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Hero, HeroSubtitle, HeroTitle } from "../components/Hero";
import "../styles/globals.css";

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, height=device-height, initial-scale=1.0"
        />
      </head>
      <body>
        <div>
          <Header />
          <main className="bg-page-gradient pt-[var(--navigation-height)]">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

export const metadata = {
  title: "Home",
  description: "Welcome to Next.js",
};
