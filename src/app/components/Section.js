// app/components/Section.js
import Image from 'next/image';

export default function Section({ title, description, imageSrc, altText, exercise }) {
  return (
    <section className="mb-11 border-t border-gray-300 pt-4">
      <h2 className="text-lg-2xl font-semibold flex items-center cursor-pointer">{title}</h2>
      <p className="text-lg mb-3">{description}</p>
      <Image src={imageSrc} alt={altText} className="w-full mb-4" height={400} width={600} />
      <p className="mb-5 text-lg"><strong>Exercício:</strong> {exercise}</p>
    </section>
  );
}
