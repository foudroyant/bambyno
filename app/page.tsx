"use client";
import FloatingTechIcons from "@/components/FloatingTechIcons/view";
import ParallaxSection from "@/components/ParallaxSection/view";
import Testimonials from "@/components/Testimonials/view";
import About from "@/components/about/view";
import Contact from "@/components/contact/view";
import { _Header } from "@/components/header";
import Hero from "@/components/hero/view";
import Services from "@/components/services/view";
import Image from "next/image";


import '@n8n/chat/style.css';
import { createChat } from '@n8n/chat';
import { useEffect } from 'react';
import { Projects } from "@/components/projects";
import ProjectGallery from "@/components/projets/ProjectGallery";

export default function Home() {

  useEffect(() => {
		/*createChat({
			webhookUrl: 'https://n8n.bambyno.xyz/webhook/9d40707f-ae02-43f7-8a6d-70c0a3d0db93/chat',
      target: '#n8n-chat',
      mode: 'window',
      chatInputKey: 'chatInput',
      chatSessionKey: 'sessionId',
      metadata: {
        title: 'Foudroyant',
        description: 'L’assistant intelligent de Bambyno',
        logo: 'https://www.foudroyant.com/wp-content/uploads/2021/03/logo-foudroyant.png',
        keywords: ['Foudroyant', 'Assistant intelligent', 'Bambyno', 'IA', 'Intelligence Artificielle'],
        color: '#4A90E2',
      },
      showWelcomeScreen: false,
      defaultLanguage: 'en',
      initialMessages: [
        "💡 Bienvenue ! Je suis Foudroyant, l'assistant intelligent de Bambyno. Pouvez poser vos questions sur nos services y compris demander un devis.👋",
      ],
		});*/
	}, []);

  return (
    <>
    <Hero />
    <FloatingTechIcons />
    <Services />
    <About />
    <ProjectGallery />
    <Testimonials />
    <Contact />
    </>
  );
}
