'use client';
import { useState } from 'react';
import { GraduationCap, Stethoscope, Cog, ChevronDown, ChevronUp, X } from 'lucide-react';

export default function FilieresOverview() {
  const [expandedProgram, setExpandedProgram] = useState<string | null>(null);
  const [selectedFiliere, setSelectedFiliere] = useState<number | null>(null);

  const filieres = [
    {
      icon: Stethoscope,
      title: 'Filière Santé',
      color: 'from-primary to-primary-800',
      iconBg: 'bg-accent',
      image: '/images/filières/santé.jpg',
      parcours: ['Licence (3 ans)', 'Master (2 ans)', 'Doctorat (3 ans)'],
      modalites: ['Cours magistraux', 'Travaux pratiques', 'Stages hospitaliers', 'Examens semestriels', 'Mémoire'],
      programs: [
        { name: 'Médecine Générale', description: 'Formation complète de 7 ans pour devenir médecin. Stages hospitaliers, cliniques et accompagnement personnalisé.' },
        { name: 'Biologie Médicale', description: 'Spécialisation en analyses biologiques, diagnostic médical et recherche en laboratoire.' },
        { name: 'Biochimie et Microbiologie', description: 'Étude des processus biochimiques et micro-organismes appliqués à la santé humaine.' }
      ]
    },
    {
      icon: GraduationCap,
      title: 'Sciences de l\'Éducation',
      color: 'from-secondary to-secondary-700',
      iconBg: 'bg-accent',
      image: '/images/filières/Sciences de l\'Éducation.jpeg',
      parcours: ['CAPC (Collèges)', 'CAPES (Lycées)', 'Master professionnel', 'Master recherche'],
      modalites: ['Formation théorique', 'Stages en établissements', 'Mémoire professionnel', 'Soutenance', 'Certification État'],
      programs: [
        { name: 'Professeur de Collèges', description: 'Formation pédagogique pour enseigner au collège. Diplôme CAPC reconnu par l\'État.' },
        { name: 'Professeur de Lycées', description: 'Formation avancée pour l\'enseignement au lycée. Diplôme CAPES reconnu par l\'État.' }
      ]
    },
    {
      icon: Cog,
      title: 'Sciences et Technologies',
      color: 'from-accent to-accent-600',
      iconBg: 'bg-primary',
      image: 'images/Matériel_iufmes/photo 5.jpg',
      subtitle: 'Spécialités',
      parcours: ['Licence (3 ans)', 'Master spécialisé (2 ans)', 'Ingénieur (5 ans)'],
      modalites: ['Cours théoriques', 'Travaux pratiques', 'Projets industriels', 'Stage entreprise', 'Projet fin études'],
      programs: [
        { name: 'Conception Mécanique Intégrée (CMI)', description: 'Formation en conception et modélisation de systèmes mécaniques complexes.' },
        { name: 'Matériaux et Innovation Technologique (MIT)', description: 'Recherche et développement de nouveaux matériaux pour l\'industrie moderne.' },
        { name: 'Fiabilité et Qualité Industrielle (FQI)', description: 'Gestion de la qualité, contrôle et optimisation des processus industriels.' }
      ]
    },
    {
      icon: GraduationCap,
      title: 'Sciences Juridiques et Économiques',
      color: 'from-primary to-primary-800',
      iconBg: 'bg-accent',
      image: '/images/filières/Sciences Juridiques et Économiques.jpeg',
      subtitle: 'Droit et Economie',
      parcours: ['Licence professionnelle', 'CAPES', 'Master professionnel', 'Master recherche'],
      modalites: ['Cours magistraux', 'Travaux dirigés', 'Études de cas', 'Examens écrits/oraux', 'Mémoire recherche'],
      programs: [
        { name: 'Droit', description: 'CAPES, Licence professionnelle d\'enseignement du 2nd degré, Master professionnel d\'enseignement du 2nd degré, Master recherche.' },
        { name: 'Economie', description: 'CAPES, Licence professionnelle d\'enseignement du 2nd degré, Master professionnel d\'enseignement du 2nd degré, Master recherche.' }
      ]
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 via-white to-primary/5">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary mb-3 sm:mb-4 tracking-tight px-2">Nos Filières d'Excellence</h2>
          <div className="w-24 sm:w-32 h-1 sm:h-1.5 bg-gradient-to-r from-primary via-accent to-secondary mx-auto mb-4 sm:mb-6"></div>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">Des programmes innovants pour façonner les leaders de demain</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 w-full mx-auto px-4">
          {filieres.map((filiere, index) => (
            <div key={index} className="group bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 sm:hover:-translate-y-4 border-2 border-transparent hover:border-accent">
              <div className="relative h-48 sm:h-56 lg:h-64 overflow-hidden cursor-pointer" onClick={() => setSelectedFiliere(index)}>
                <img src={filiere.image} alt={filiere.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 z-10">
                  <div className={`inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 ${filiere.iconBg} rounded-xl sm:rounded-2xl mb-2 sm:mb-3 shadow-2xl`}>
                    <filiere.icon className="w-6 h-6 sm:w-8 sm:h-8 text-gray-900" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-1 sm:mb-2">{filiere.title}</h3>
                  {filiere.subtitle && <p className="text-xs text-white/90 leading-relaxed">{filiere.subtitle}</p>}
                </div>
              </div>
            </div>
          ))}
        </div>
          

        {selectedFiliere !== null && (
          <div className="fixed inset-0 bg-slate-900/95 backdrop-blur-md z-50 flex items-center justify-center p-4" onClick={() => setSelectedFiliere(null)}>
            <div className="bg-slate-50 border-2 border-primary/20 max-w-5xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative" onClick={(e) => e.stopPropagation()}>
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{backgroundImage: 'linear-gradient(#00337a 1px, transparent 1px), linear-gradient(90deg, #00337a 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
              
              <div className="relative border-b-2 border-primary/20">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent"></div>
                <img src={filieres[selectedFiliere].image} alt={filieres[selectedFiliere].title} className="w-full h-48 sm:h-64 object-cover opacity-20 grayscale" />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-slate-900/90"></div>
                
                <button onClick={() => setSelectedFiliere(null)} className="absolute top-4 right-4 bg-slate-900 hover:bg-accent border-2 border-accent/50 hover:border-accent p-2 transition group">
                  <X className="w-5 h-5 text-accent group-hover:text-slate-900" />
                </button>
                
                <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-between">
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-accent font-mono text-xs tracking-wider">
                        <span className="w-2 h-2 bg-accent animate-pulse"></span>
                        FILIÈRE #{String(selectedFiliere + 1).padStart(2, '0')}
                      </div>
                      <div className="h-px w-32 bg-gradient-to-r from-accent to-transparent"></div>
                    </div>
                  </div>
                  
                  <div>
                    {(() => {
                      const IconComponent = filieres[selectedFiliere].icon;
                      return (
                        <div className="inline-flex items-center justify-center w-14 h-14 bg-accent border-2 border-slate-900 mb-4">
                          <IconComponent className="w-7 h-7 text-slate-900" />
                        </div>
                      );
                    })()}
                    <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2 font-mono tracking-tight">{filieres[selectedFiliere].title.toUpperCase()}</h2>
                    {filieres[selectedFiliere].subtitle && <p className="text-sm text-accent/90 font-mono">{filieres[selectedFiliere].subtitle}</p>}
                  </div>
                </div>
              </div>
              
              <div className="p-6 sm:p-8 relative">
                <div className="mb-6 pb-4 border-b border-primary/20">
                  <div className="flex items-center gap-3">
                    <div className="w-1 h-8 bg-accent"></div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  {filieres[selectedFiliere].programs.map((program, i) => (
                    <div key={i} className="border-l-4 border-accent bg-white p-5 hover:shadow-lg transition-all group relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-16 h-16 opacity-5">
                        <div className="absolute inset-0" style={{backgroundImage: 'linear-gradient(45deg, #00337a 25%, transparent 25%, transparent 75%, #00337a 75%), linear-gradient(45deg, #00337a 25%, transparent 25%, transparent 75%, #00337a 75%)', backgroundSize: '4px 4px', backgroundPosition: '0 0, 2px 2px'}}></div>
                      </div>
                      <div className="flex items-start gap-4 relative">
                        <div className="flex-shrink-0 w-8 h-8 bg-primary/10 border border-primary/30 flex items-center justify-center font-mono text-xs font-bold text-primary">
                          {String(i + 1).padStart(2, '0')}
                        </div>
                        <div className="flex-1">
                          <h4 className="text-base sm:text-lg font-bold text-slate-900 mb-2 group-hover:text-primary transition">{program.name}</h4>
                          <p className="text-sm text-slate-600 leading-relaxed">{program.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="grid md:grid-cols-2 gap-6 mt-8">
                  <div className="border-l-4 border-primary bg-white p-5">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 bg-primary/10 border border-primary/30 flex items-center justify-center">
                        <GraduationCap className="w-4 h-4 text-primary" />
                      </div>
                      <h4 className="text-lg font-bold text-primary font-mono">PARCOURS</h4>
                    </div>
                    <ul className="space-y-2">
                      {filieres[selectedFiliere].parcours.map((p, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-slate-700">
                          <span className="w-1.5 h-1.5 bg-accent"></span>
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="border-l-4 border-accent bg-white p-5">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 bg-accent/10 border border-accent/30 flex items-center justify-center">
                        <Cog className="w-4 h-4 text-accent" />
                      </div>
                      <h4 className="text-lg font-bold text-accent font-mono">MODALITÉS</h4>
                    </div>
                    <ul className="space-y-2">
                      {filieres[selectedFiliere].modalites.map((m, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-slate-700">
                          <span className="w-1.5 h-1.5 bg-primary"></span>
                          {m}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-primary/20 flex items-center justify-between text-xs font-mono text-slate-400">
                  <span>HEALTH & EDUCATION UNIVERSITY</span>
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-accent animate-pulse"></span>
                    SYSTÈME ACTIF
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
