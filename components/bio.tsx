export const Bio = () => {
    return (
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-5 row-gap-8 lg:grid-cols-2">
          <div className="flex flex-col justify-center">
            <div className="max-w-xl mb-6">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              Ma procédure de travail :
                <br className="hidden md:block" />
                Une collaboration efficace{' '}
                <span className="relative px-1">
                  <div className="absolute inset-x-0 bottom-0 h-3 transform -skew-x-12 bg-teal-accent-400" />
                  <span className="relative inline-block text-deep-purple-accent-400">
                   et transparente
                  </span>
                </span>
              </h2>
              <p className="text-base text-gray-700 md:text-lg">
              Je commence par analyser vos besoins et établir un cahier des charges détaillé, suivi par la création éventuelle de prototypes ou maquettes. Ensuite, j'entame le développement en phases, avec des points réguliers pour valider chaque étape. 
              </p>
            </div>
            <div className="grid gap-5 row-gap-8 sm:grid-cols-2">
              <div className="bg-white border-l-4 shadow-sm border-deep-purple-accent-400">
                <div className="h-full p-5 border border-l-0 rounded-r">
                  <h6 className="mb-2 font-semibold leading-5">
                  Tests et validation
                  </h6>
                  <p className="text-sm text-gray-900">
                  Après des tests approfondis, je livre le projet final accompagné de toute la documentation nécessaire.
                  </p>
                </div>
              </div>
              <div className="bg-white border-l-4 shadow-sm border-deep-purple-accent-400">
                <div className="h-full p-5 border border-l-0 rounded-r">
                  <h6 className="mb-2 font-semibold leading-5">
                  Livraison finale 
                  </h6>
                  <p className="text-sm text-gray-900">
                   Enfin, j’offre  des services de maintenance sur demande pour garantir la pérennité de votre projet.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <img
              className="object-contain w-full h-56 rounded shadow-lg sm:h-96"
              src="5e535e872b568af61d1d1e65_peep-sitting-5.png"
              alt=""
            />
          </div>
        </div>
      </div>
    );
  };