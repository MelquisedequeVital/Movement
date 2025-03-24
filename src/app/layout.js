import './globals.css';


export const metadata = {
  title: "Sistema Muscular",
  description: "Informações sobre os músculos e seu funcionamento.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt">
      <head>
        <script src="https://cdn.tailwindcss.com"></script>
        <link rel="stylesheet" href="/globals.css" />
      </head>
      <body className="bg-white text-lg-black">
        {children}
      </body>
    </html>
  );
}
