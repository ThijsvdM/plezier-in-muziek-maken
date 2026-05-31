import Navbar from "../components/Navbar";
import Mascot from "../components/Mascot";
import "./globals.css";
import "./theme.css";

export const metadata = {
  title: "Muziek Avontuur",
  description: "Leer muziek op een leuke manier",
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