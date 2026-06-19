import "./globals.css";

export const metadata = {
  title: "Movement",
  description: "Site para acompanhar os treinos",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <header>
          <h1>Movement</h1>
        </header>
        <main>{children}</main>
        <footer>
          <p>Rodapé do site</p>
        </footer>
      </body>
    </html>
  );
}
