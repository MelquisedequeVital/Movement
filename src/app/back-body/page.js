// app/back-body/page.js
'use client';

import { useEffect, useRef } from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Section from '../components/Section';
import { addInteractivity } from '@/public/js/svg.js';

export default function BackBody() {
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
        <h1 className="flex justify-center text-3xl font-bold mb-5 mt-20">Região Posterior</h1>
        <hr className="w-[90%] mx-auto border-t" />
        <object ref={svgRef} className="h-screen" data="/assets/back-body.svg" type="image/svg+xml" />
      </section>

      {/* Seções Musculares */}
      <Section
        title="Costas"
        description="Os músculos das costas, como o latíssimo do dorso e trapézio, são essenciais para puxar, estabilizar e movimentar a coluna."
        imageSrc="/assets/exercises/barra-fixa.jpg"
        altText="Exercício de Barra Fixa"
        exercise="A barra fixa fortalece o latíssimo do dorso, melhorando a capacidade de puxar e suportar cargas."
      />
      
      <Section
        title="Tríceps"
        description="Os tríceps são responsáveis pela extensão do cotovelo, fundamentais para empurrar objetos e realizar movimentos de arremesso."
        imageSrc="/assets/exercises/triceps-testa.jpg"
        altText="Exercício de Tríceps Testa"
        exercise="O tríceps testa isola o tríceps, promovendo o fortalecimento ao estender o antebraço."
      />
      
      <Section
        title="Glúteos"
        description="Os glúteos, incluindo o glúteo máximo, médio e mínimo, são responsáveis pela extensão, abdução e rotação externa do quadril, essenciais para correr, saltar e manter a postura."
        imageSrc="/assets/exercises/elevacao-pelvica.jpg"
        altText="Exercício de Elevação de Quadril"
        exercise="Elevações de quadril ativam intensamente os glúteos, fortalecendo a extensão do quadril."
      />

      <Section
        title="Posteriores da Coxa"
        description="Os músculos posteriores da coxa, como o bíceps femoral, realizam a flexão do joelho e a extensão do quadril, importantes para correr e saltar."
        imageSrc="/assets/exercises/stiff.jpg"
        altText="Exercício de Stiff"
        exercise="O exercício stiff foca na extensão do quadril, alongando e fortalecendo os posteriores da coxa."
      />

      <Section
        title="Panturrilha"
        description="Os músculos da panturrilha, como o gastrocnêmio e sóleo, são responsáveis pela flexão plantar do tornozelo, essenciais para caminhar, correr e saltar."
        imageSrc="/assets/exercises/panturrilha.jpg"
        altText="Exercício de Elevação de Panturrilha"
        exercise="Elevações de panturrilha fortalecem a flexão plantar, melhorando a estabilidade e o desempenho atlético."
      />
    </main>
  );
}
