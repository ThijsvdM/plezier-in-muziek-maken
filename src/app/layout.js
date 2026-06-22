import Navbar from "../components/Navbar";
import Mascot from "../components/Mascot";
import "./globals.css";
import "./theme.css";

export const metadata = {
  title: "Plezier in Muziek Maken",
  description: "Leer muziek op een leuke manier",
  icons: {
    icon: "/music-note.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="nl">
      <body>

        <Navbar />

        {children}

        <Mascot />

      </body>
    </html>
  );
}