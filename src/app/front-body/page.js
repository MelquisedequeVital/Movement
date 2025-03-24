'use client';

import { useEffect, useRef } from 'react';
import { addInteractivity } from '@/public/js/svg'; // Importa a função de interatividade do SVG
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Section from '../components/Section';

export default function FrontBody() {
  const svgRef = useRef(null);

  useEffect(() => {
    if (svgRef.current) {
      addInteractivity(svgRef.current);
    }
  }, []);

  return (
    <main className="max-w-3xl mx-auto py-6 px-6">
      {/* Header e Navbar */}
      <Header />
      <Navbar />

      {/* Seção SVG */}
      <section id="nav-svg" className="flex flex-col justify-center">
        <h1 className="flex justify-center text-3xl font-bold mb-5 mt-20">REGIÃO FRONTAL</h1>
        <hr className="w-[90%] mx-auto border-t" />
        <object ref={svgRef} className="h-screen" data="/assets/front-body.svg" type="image/svg+xml" />
      </section>

      {/* Seções Musculares */}
      {[ 
        {
          title: "Peito",
          description: "Os músculos peitorais são responsáveis por movimentos de adução...",
          imageSrc: "/assets/exercises/Flexão-de-braço.jpg",
          altText: "Exercício de Flexão de Braços",
          exercise: "Flexões de braço ativam o peitoral maior..."
        },
        {
          title: "Bíceps",
          description: "Os bíceps realizam a flexão do cotovelo e a supinação do antebraço, fundamentais para puxar, levantar objetos e girar o antebraço.",
          imageSrc: "/assets/exercises/rosca-direta.jpg",
          altText: "Exercício de Rosca Direta",
          exercise: "A rosca direta foca na flexão do cotovelo, destacando a contração dos bíceps para elevação do peso."
        },
        {
          title: "Ombros",
          description: "Os músculos do ombro, incluindo o deltoide anterior, medial e posterior, são responsáveis por movimentos de abdução, flexão, extensão e rotação do braço, essenciais para levantar, empurrar e estabilizar cargas acima da cabeça.",
          imageSrc: "/assets/exercises/desenvolvimento-com-halteres.jpg",
          altText: "Exercício de Desenvolvimento de Ombros",
          exercise: "O desenvolvimento de ombros trabalha a flexão e abdução do braço, ativando principalmente o deltoide para levantar o peso acima da cabeça."
        }
      ].map(({ title, description, imageSrc, altText, exercise }) => (
        <Section
          key={title.replace(/[^a-zA-Z]/g, "-").toLowerCase()}
          title={title.toUpperCase()}
          description={description}
          imageSrc={imageSrc}
          altText={altText}
          exercise={exercise}
        />
      ))}
    </main>
  );
}
