import Image from 'next/image';

const projects = [
  {
    title: 'YT Helper Bot',
    description: 'Un bot Telegram qui résume des vidéos YouTube avec l’IA. Intégré à l’API de Telegram et à des services de résumé automatique.',
    image: '/yt-youtube.jpg',
    link: 'https://t.me/ytresumehelper_bot',
  },
  {
    title: 'Pitch Perfect',
    description: 'Génère automatiquement des réponses personnalisées à des offres de mission ou d’emploi à partir de votre profil.',
    image: '/pitchperfect.jpeg',
    link: 'https://n8n.bambyno.xyz/form/pitchperfect',
  },
  /*{
    title: 'Bambyno.com',
    description: 'Mon site de services de développement web & mobile, automatisation et création d’agents IA.',
    image: '/pitchperfect.jpeg',
    link: 'https://bambyno.com',
  },*/
];

export default function ProjectGallery() {
  return (
    <section className="py-12 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Mes Projets</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              className="group bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="relative h-48">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
                <p className="text-gray-600 text-sm">{project.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}



