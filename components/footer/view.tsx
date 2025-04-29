// app/components/Footer.tsx
export default function Footer() {
    const socialLinks = [
      {
        name: 'LinkedIn',
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
          </svg>
        ),
        url: 'https://www.linkedin.com/in/stephane-bazebibouta-17665b332/'
      },
      {
        name: 'GitHub',
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
          </svg>
        ),
        url: 'https://github.com/foudroyant'
      }
    ]
  
    return (
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <span className="text-2xl font-bold">Bambyno</span>
              <p className="text-gray-400 mt-2">Développeur Web & Mobile | Créateur d'Agents IA</p>
            </div>
            
            <div className="flex space-x-6">
              {socialLinks.map((link, index) => (
                <a key={index} href={link.url} className="text-gray-400 hover:text-white transition hover:scale-110">
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">© 2025 Bambyno. Tous droits réservés.</p>
            <div className="flex space-x-6">
              <a href="/" className="text-gray-400 hover:text-white text-sm transition">Mentions légales</a>
              <a href="/" className="text-gray-400 hover:text-white text-sm transition">Politique de confidentialité</a>
            </div>
          </div>
        </div>
      </footer>
    )
  }