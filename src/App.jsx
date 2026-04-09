import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ScrollIndicator from './components/ScrollIndicator';
import ScrollSection from './components/ScrollSection';

// Asset Imports
import img1 from './assets/1.jpeg';
import img2 from './assets/2.jpeg';
import img3 from './assets/3.jpeg';
import img4 from './assets/4.jpeg';

const NARRATIVE_DATA = [
  {
    phrase: "Eu mudaria o que fosse preciso em mim, deixando de lado teimosias e defeitos para que a gente possa crescer e dar certo juntos",
    image: img1
  },
  {
    phrase: "Eu seria o seu porto seguro nos dias ruins, oferecendo apoio total e paciência, mesmo quando as coisas estivessem difíceis para mim",
    image: img2
  },
  {
    phrase: "Eu seria fiel e honesto em cada detalhe, agindo sempre com respeito por você, não importa o que acontecesse",
    image: img3
  },
  {
    phrase: "Eu colocaria os nossos planos como prioridade, trabalhando muito todos os dias para construir uma vida confortável e feliz ao seu lado",
    image: img4
  }
];

function App() {
  return (
    <main className="relative min-h-screen w-full bg-linen">
      {/* Background Texture Overlay */}
      <div className="fixed inset-0 pointer-events-none z-0 bg-texture opacity-[0.08]" />

      {/* Interactive/Animated Subtle Gradient (matching the watercolor feel) */}
      <div className="fixed inset-0 pointer-events-none z-0 bg-gradient-to-tr from-watercolor-dark/20 via-transparent to-watercolor-light/20" />

      {/* Hero Section */}
      <Hero />

      {/* Narrative Scroll Sections */}
      <div className="relative z-10">
        {NARRATIVE_DATA.map((data, index) => (
          <ScrollSection
            key={index}
            index={index}
            phrase={data.phrase}
            imagePath={data.image}
          />
        ))}
      </div>

      <ScrollIndicator />
    </main>
  );
}

export default App;