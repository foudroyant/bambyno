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

export default function Home() {

  useEffect(() => {
		createChat({
			webhookUrl: 'https://n8n.bambyno.xyz/webhook/9d40707f-ae02-43f7-8a6d-70c0a3d0db93/chat',
      target: '#n8n-chat',
      mode: 'window',
      chatInputKey: 'chatInput',
      chatSessionKey: 'sessionId',
      metadata: {},
      showWelcomeScreen: false,
      defaultLanguage: 'en',
      initialMessages: [
        "💡 Bienvenue ! Je suis Foudroyant, l'assistant intelligent de Bambyno. Pouvez poser vos questions sur nos services y compris demander un devis.👋",
      ],
		});
	}, []);

  return (
    <>
    <Hero />
    <FloatingTechIcons />
    <Services />
    <About />
    <Testimonials />
    <Contact />
    </>
  );
}
