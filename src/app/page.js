// app/page.js
import Header from './components/Header'; // Importa o componente Header
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="max-w-3xl mx-auto py-6 px-6">
      <Header /> {/* Aqui está o Header como componente */}

      <section id="muscular-system" className="mb-8">
        <h2 className="text-3xl font-semibold mb-2 flex items-center justify-center cursor-pointer toggle-section">
          Os Músculos e o Movimento do Corpo
        </h2>
        <div>
          <Image src="/assets/muscular-system-overview.png" alt="Ilustração do Sistema Muscular" className="w-full mb-4" height={600} width={900} />
          <p className="font-bold mb-3">O que são os músculos?</p>
          <p className="text-lg mb-5">
            Os músculos são estruturas fundamentais para o funcionamento do corpo humano, permitindo o movimento, garantindo a estabilidade e desempenhando funções essenciais para a sobrevivência. O corpo possui mais de 600 músculos, que trabalham de forma coordenada...
          </p>
        </div>
      </section>

      <h3 className="flex justify-center text-3xl font-semibold mb-20">Regiões do corpo</h3>
      <section className="flex flex-col justify-center w-full gap-20 md:flex-row">
        <Link className="flex flex-col items-center group" href="/front-body">
          <p className="text-lg font-semibold transition-colors duration-500 ease-out group-hover:text-blue-500 group-hover:-translate-y-6">Região Frontal</p>
          <Image src="/assets/front-body.jpg" alt="Região Frontal" className="transition-transform duration-300 group-hover:scale-110" height={300} width={500} />
        </Link>
        <Link className="flex flex-col items-center group" href="/back-body">
          <p className="text-lg font-semibold transition-colors duration-500 ease-out group-hover:text-blue-500 group-hover:-translate-y-6">Região Posterior</p>
          <Image src="/assets/back-body.jpg" alt="Região Posterior" className="transition-transform duration-300 group-hover:scale-110" height={300} width={500} />
        </Link>
      </section>
    </main>
  );
}
