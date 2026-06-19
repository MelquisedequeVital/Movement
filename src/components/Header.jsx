import Image from "next/image";

export default function Header() {
  return (
    <header className="py-4 border-b flex flex-col gap-4 items-center justify-between px-4 md:flex-row">
      <Image 
        src="/logo-light.png" 
        alt="Logo do site" 
        width={150} 
        height={48} 
        priority 
      />
    </header>
  );
}