import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function AboutPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12 flex flex-col md:flex-row gap-10 items-start">
      
      {/* Foto + socials */}
      <div className="flex flex-col items-center gap-4 md:w-48">
        <img
          src="tyler.jpg"
          alt="Mijn foto"
          className="w-48 h-48 rounded-full object-cover shadow-lg border-3 border-text"
        />

        {/* Social icons onder foto */}
        <div className="flex gap-4 mt-2">
          <a
            href="https://be.linkedin.com/in/tyler-imagbudu-6006b0223"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 transition-colors text-2xl"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/tyler-ty"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 hover:text-gray-900 transition-colors text-2xl"
          >
            <FaGithub />
          </a>
        </div>
      </div>

      {/* Info sectie */}
      <div className="flex-1 flex flex-col justify-center gap-6">
        {/* Naam en korte intro */}
        <h1 className="text-3xl md:text-4xl font-bold text-heading">
          Tyler Imagbudu
        </h1>
        <p className="text-text text-base md:text-lg leading-relaxed">
            Hallo! Ik ben student aan de AP Hogeschool en stagiair bij Trans-IT. 
            Tijdens mijn studie heb ik interesse ontwikkeld in full stack development, en vooral in React.js. 
            Ik vind het fascinerend hoe je applicaties kunt maken die nuttig zijn en een echte meerwaarde bieden.
        </p>

        {/* Stagebedrijf info */}
        <div className=" p-4 ">
          <h2 className="text-heading text-xl font-semibold mb-2">Mijn rol</h2>
          <p className="text-text text-base md:text-lg leading-relaxed">
            Tijdens mijn stage krijg ik de kans om ervaring op te doen door zelf mee te werken in het team. Aan de hand van tickets
            kan ik zelf bijdragen en nieuwe functionaliteit aanmaken. Hierdoor leer ik hoe het eruit ziet in een professionele werkomgeving.
          </p>
          <p className="text-text text-base md:text-lg leading-relaxed">

          </p>
        </div>

        <div className=" p-4 ">
          <h2 className="text-heading text-xl font-semibold mb-2">Informatie over het bedrijf</h2>
          <p className="text-text text-base md:text-lg leading-relaxed">
            <a className="text-link hover:underline transition-colors" href="https://trans-it.be/en/home-eng/">Trans-IT</a> is een Belgisch technologiebedrijf dat zich richt op het ontwikkelen van slimme 
            softwareoplossingen voor de transport- en logistieke sector. 
            Hun kernproduct is een AI-gestuurd Transport Management Systeem (TMS) dat speciaal is ontworpen voor containervervoer. 
            Het systeem helpt transportbedrijven om hun operaties efficiënter te plannen, te monitoren en te automatiseren, waardoor 
            ze meer bestellingen kunnen verwerken met minder middelen.
          </p>
          <p className="text-text text-base md:text-lg leading-relaxed mt-2">
            Het hoofd kantoor bevindt zich op 
            Impulsstraat 6
            2220 Heist-op-den-Berg
          </p>
        </div>
      </div>
    </div>
  );
}
