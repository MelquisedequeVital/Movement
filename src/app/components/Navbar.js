// components/Navbar.js
export default function Navbar() {
  return (
    <nav id="mobile-menu" className="hidden bg-gray-100 border-b border-gray-300">
      <ul className="flex flex-col">
        <li><a href="/" className="py-2 px-4 block text-lg-sm font-medium hover:bg-gray-200">HOME</a></li>
        <li><a href="/front-body" className="py-2 px-4 block text-lg-sm font-medium hover:bg-gray-200">Corpo: Parte Frontal</a></li>
        <li><a href="/back-body" className="py-2 px-4 block text-lg-sm font-medium hover:bg-gray-200">Corpo: Parte Posterior</a></li>
      </ul>
    </nav>
  );
}
