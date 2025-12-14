import Link from 'next/link';
import { Stethoscope, GraduationCap, Cog, ArrowRight, Download } from 'lucide-react';

export default function ProgramCards() {
  const programs = [
    {
      name: 'Filière Santé',
      icon: Stethoscope,
      items: ['Médecine Générale', 'Biologie Médicale', 'Biochimie et Microbiologie'],
      color: 'from-primary to-primary-800',
      image: '/images/image_program/Maison-de-la-sante-500.jpg',
    },
    {
      name: 'Sciences de l\'Education',
      icon: GraduationCap,
      items: ['Professeur de Collèges', 'Professeur de Lycées'],
      color: 'from-secondary to-secondary-700',
      image: '/images/image_program/education-large.jpg',
    },
    {
      name: 'Sciences et Technologies',
      icon: Cog,
      items: ['Conception Mécanique Intégrée (CMI)', 'Matériaux et Innovation Technologique (MIT)', 'Fiabilité et Qualité Industrielle (FQI)'],
      color: 'from-accent to-accent-600',
      image: '/images/image_program/Technology-.png',
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-white" aria-labelledby="programs-heading">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 id="programs-heading" className="text-4xl sm:text-5xl font-extrabold text-primary mb-4">
            Nos Filières en Vedette
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
             Découvrez nos programmes d'excellence conçus pour former les professionnels de demain
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => {
            const Icon = program.icon;
            return (
              <article
                key={index}
                className="group bg-white border-2 border-gray-200 rounded-xl sm:rounded-2xl overflow-hidden hover:border-secondary hover:shadow-2xl transition-all duration-500 hover:-translate-y-3"
              >
                <div className="relative h-64 sm:h-72 lg:h-80 overflow-hidden">
                  <img
                    src={program.image}
                    alt={program.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 lg:p-8 z-10">
                    <div className="inline-flex items-center justify-center w-16 h-16 sm:w-18 sm:h-18 bg-gradient-to-br from-accent to-accent-600 rounded-xl sm:rounded-2xl mb-3 sm:mb-4 shadow-2xl">
                      <Icon className="w-8 h-8 sm:w-9 sm:h-9 text-gray-900" aria-hidden="true" />
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white">
                      {program.name}
                    </h3>
                  </div>
                </div>

                <div className="p-5 sm:p-6 lg:p-8 bg-gradient-to-br from-gray-50 to-white">
                  <ul className="space-y-3 sm:space-y-4">
                    {program.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-700 group/item">
                        <span className="w-2.5 h-2.5 bg-gradient-to-br from-accent to-secondary rounded-full mt-2 flex-shrink-0 group-hover/item:scale-125 transition-transform"></span>
                        <span className="font-semibold text-base sm:text-lg">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
          <Link
            href="/programs"
            className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-800 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-xl hover:scale-105"
          >
            Voir toutes nos filières
            <ArrowRight className="w-5 h-5" aria-hidden="true" />
          </Link>
          <a
            href="/pdf/formulaire d'inscription.pdf"
            download
            className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-600 text-gray-900 px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-xl hover:scale-105"
          >
            <Download className="w-5 h-5" />
            Télécharger le formulaire
          </a>
        </div>
      </div>
    </section>
  );
}
