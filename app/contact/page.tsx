
import React from 'react'

export default function Contact () {

  const contacts = [
    {
      type: 'Email',
      value: 'contact@bambyno.com',
      href: 'mailto:contact@bambyno.com',
      icon: '📧',
    },
    {
      type: 'LinkedIn',
      value: 'linkedin.com/in/stephane-bazebibouta-17665b332',
      href: 'www.linkedin.com/in/stephane-bazebibouta-17665b332',
      icon: '🔗',
    },
    {
      type: 'Facebook',
      value: 'https://www.facebook.com/profile.php?id=61567303036436',
      href: 'https://www.facebook.com/profile.php?id=61567303036436&mibextid=ZbWKwL',
      icon: '📘',
    },
    {
      type: 'Téléphone',
      value: '+242 06 483 76 37',
      href: 'tel:+242064837637',
      icon: '📞',
    },
  ];

    return (
      <>
      <div className="flex flex-col items-center justify-center max-w-2xl px-4 pt-16 mx-auto sm:max-w-xl md:max-w-2xl lg:pt-32 md:px-8">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <div>
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
              Mes contacts
            </p>
          </div>
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            <span className="relative inline-block">
              <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
              >
                <defs>
                  <pattern
                    id="9ef1ff62-feb2-41fe-8163-772b4c79de7b"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7" />
                  </pattern>
                </defs>
                <rect
                  fill="url(#9ef1ff62-feb2-41fe-8163-772b4c79de7b)"
                  width="52"
                  height="24"
                />
              </svg>
              <span className="relative">Un partenaire</span>
            </span>{' '}
            technique sur qui vous pouvez compter.
          </h2>
          <p className="text-base text-gray-700 md:text-lg">
          Derrière Bambyno, c’est moi, Stéphane Bamby, un passionné de technologie. J’ai accompagné de nombreux clients dans leur transformation digitale. Avec une écoute attentive et un engagement total.  
          </p>
        </div>
        {/*<form className="flex flex-col items-center w-full mb-4 md:flex-row md:px-16">
          <input
            placeholder="Email"
            required
            type="text"
            className="flex-grow w-full h-12 px-4 mb-3 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none md:mr-2 md:mb-0 focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
          />
          <button
            type="submit"
            className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
          >
            Subscribe
          </button>
    </form>*/}
        
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 max-w-screen-md mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Contactez-moi</h2>
          <ul className="space-y-4">
            {contacts.map((contact, index) => (
              <li key={index} className="flex items-center space-x-4">
                <span className="text-2xl">{contact.icon}</span>
                <div>
                  <p className="text-gray-600 font-medium">{contact.type}</p>
                  <a
                    href={contact.href}
                    className="text-blue-500 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {contact.value}
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </>
      
    );
  };