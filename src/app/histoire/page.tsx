import { Clock, Award, Users, Globe } from 'lucide-react';

export default function Histoire() {
  return (
    <div className="min-h-screen relative overflow-hidden py-16">
      <div className="absolute inset-0 z-0">
        <img
          src="/images/Photo Notre Histoire/arrière B.jpg"
          alt="Background Notre Histoire"
          className="w-full h-full object-cover opacity-80 animate-[zoom_20s_ease-in-out_infinite_alternate]"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50/80 to-white/80"></div>
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-primary mb-4">
            Notre Histoire
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            L'IUFMES, un parcours d'excellence au service de la formation en santé et éducation
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          {/* Section principale */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <Clock className="w-8 h-8 text-accent" />
              <h2 className="text-2xl font-bold text-primary">Nos Débuts</h2>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              Fondé en 2024, l'Institut Universitaire de Formation aux Métiers de l'Éducation et de la Santé (IUFMES) 
              s'est imposé comme un acteur majeur de la formation aux métiers de la santé et de l'éducation en Afrique Centrale.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Situé à Owendo-SNI à Libreville, Gabon, notre institut a été créé avec une vision claire : former des professionnels 
              compétents et engagés, capables de répondre aux défis sanitaires et éducatifs du continent africain.
            </p>
          </div>

          {/* Mission */}
          <div className="bg-gradient-to-br from-primary to-primary-800 text-white rounded-2xl shadow-xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <Award className="w-8 h-8 text-accent" />
              <h2 className="text-2xl font-bold">Notre Mission</h2>
            </div>
            <p className="leading-relaxed mb-4">
              Notre mission est de former des professionnels de santé et de l'éducation hautement qualifiés, 
              dotés des compétences techniques et humaines nécessaires pour exceller dans leurs domaines respectifs.
            </p>
            <p className="leading-relaxed">
              Nous nous engageons à offrir une formation d'excellence alliant rigueur académique, innovation pédagogique 
              et accompagnement personnalisé pour garantir la réussite de chaque étudiant.
            </p>
          </div>

          {/* Valeurs */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-secondary">
              <Users className="w-10 h-10 text-secondary mb-4" />
              <h3 className="text-xl font-bold text-primary mb-3">Excellence Académique</h3>
              <p className="text-gray-700">
                Un corps professoral d'excellence et des programmes conformes aux standards internationaux.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-accent">
              <Globe className="w-10 h-10 text-accent mb-4" />
              <h3 className="text-xl font-bold text-primary mb-3">Partenariats Solides</h3>
              <p className="text-gray-700">
                Des collaborations avec des institutions prestigieuses en Afrique et dans le monde.
              </p>
            </div>
          </div>

          {/* Aujourd'hui */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-primary mb-6">Aujourd'hui</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              L'IUFMES continue de croître et d'innover, offrant des programmes de formation dans plusieurs domaines clés :
            </p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-accent rounded-full"></span>
                Médecine Générale
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-accent rounded-full"></span>
                Sciences Infirmières
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-accent rounded-full"></span>
                Pharmacie Clinique
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-accent rounded-full"></span>
                Kinésithérapie
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
