const Hero = () => {
    return (
      <section className="gradient-bg text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-500 opacity-50"></div>
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
            <div className="absolute top-0 left-1/4 w-64 h-64 bg-purple-400 rounded-full filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
            <div className="absolute top-0 right-1/4 w-64 h-64 bg-blue-400 rounded-full filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
            <div className="absolute bottom-0 left-1/2 w-64 h-64 bg-pink-400 rounded-full filter blur-3xl opacity-20 animate-blob"></div>
          </div>
        </div>
        
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center relative z-10">
          <div className="md:w-1/2 mb-10 md:mb-0 fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Transformez vos idées en réalité numérique</h1>
            <p className="text-xl mb-8">Développeur Web & Mobile spécialisé dans la création de solutions SAAS, d'agents IA et d'automatisations sur mesure.</p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a href="#contact" className="bg-white text-purple-600 hover:bg-gray-100 font-bold py-3 px-6 rounded-full text-center transition duration-300 pulse">
                Me Contacter
              </a>
              <a href="#services" className="border-2 border-white text-white hover:bg-white hover:text-purple-600 font-bold py-3 px-6 rounded-full text-center transition duration-300">
                Mes Services
              </a>
            </div>
          </div>
          
          <div className="md:w-1/2 flex justify-center fade-in" style={{ transitionDelay: '0.3s' }}>
            <div className="relative">
              <img 
                src="https://cdn-icons-png.flaticon.com/512/1055/1055687.png" 
                alt="Développement Web" 
                className="w-64 h-64 floating wave"
              />
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-yellow-400 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -top-6 -left-6 w-16 h-16 bg-purple-400 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  export default Hero