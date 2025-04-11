// app/components/Contact.tsx
'use client'

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* ... autres éléments ... */}
        
        <div className="mt-16 bg-purple-50 rounded-xl p-8 max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-6">Intéressé par mes services ?</h3>
          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            <a href="mailto:contact@bambyno.com" className="flex items-center bg-white hover:bg-gray-100 text-purple-600 font-bold py-3 px-6 rounded-full transition duration-300 hover:scale-105">
              {/* Icône email */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
              contact@bambyno.com
            </a>
            <a href="https://wa.me/message/PE63FQO747POH1" target="_blank" className="flex items-center bg-white hover:bg-gray-100 text-purple-600 font-bold py-3 px-6 rounded-full transition duration-300 hover:scale-105">
              {/* Icône WhatsApp */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
              </svg>
              Envoyer un message
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}