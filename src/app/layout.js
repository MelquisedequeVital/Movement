import Header from "@/components/Header";
import "./globals.css";

export const metadata = {
  title: "Movement",
  description: "Site para acompanhar os treinos",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <Header/>
        <main>{children}</main>
      </body>
    </html>
  );
}
