"use client"
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

export default function Header() {

  const router = useRouter();
  const pathname = usePathname();

  return (
    <header className="py-4 border-b flex flex-col gap-4 items-center justify-between px-4 md:flex-row">
      <Image
        src="/logo-light.png"
        alt="Logo do site"
        width={150}
        height={48}
        priority
      />
      {pathname !== "/" && (
        <span 
          onClick={() => router.back()} 
          className="inline-flex items-center text-lg font-medium text-gray-500 hover:text-gray-900 transition-colors cursor-pointer"
        >
          <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
          </svg>
          Voltar
        </span>
      )}
    </header>
  );
}