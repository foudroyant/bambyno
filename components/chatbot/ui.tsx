'use client';

import { useEffect } from 'react';

export default function ChatbotWidget() {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'module';
    script.defer = true;
    script.innerHTML = `
      import Chatbot from "https://cdn.n8nchatui.com/v1/embed.js";
      Chatbot.init({
        n8nChatUrl: "https://n8n.bambyno.xyz/webhook/9d40707f-ae02-43f7-8a6d-70c0a3d0db93/chat",
        metadata: {},
        theme: {
          button: {
            backgroundColor: "#520df2",
            right: 20,
            bottom: 20,
            size: 50,
            iconColor: "#f5efef",
            customIconSrc: "/sms-5-svgrepo-com.svg",
            customIconSize: 60,
            customIconBorderRadius: 15,
            autoWindowOpen: {
              autoOpen: false,
              openDelay: 2
            },
            borderRadius: "circle"
          },
          tooltip: {
            showTooltip: true,
            tooltipMessage: "Salut 👋 Je suis l'assistant virtuel de Bambyno",
            tooltipBackgroundColor: "#fff9f6",
            tooltipTextColor: "#050505",
            tooltipFontSize: 15
          },
          chatWindow: {
            borderRadiusStyle: "rounded",
            avatarBorderRadius: 25,
            messageBorderRadius: 6,
            showTitle: true,
            title: "Bambyno Assistant",
            titleAvatarSrc: "https://www.bambyno.com/5e535e872b568af61d1d1e65_peep-sitting-5.png",
            avatarSize: 40,
            welcomeMessage: "Vous êtes sur l'assistant virtuel de Bambyno, que puis-je faire pour vous ?",
            errorMessage: "Veuillez contacter par WhatsApp car je rencontre un problème de connexion.",
            backgroundColor: "#ffffff",
            height: 600,
            width: 400,
            fontSize: 16,
            starterPrompts: [
              "Quels sont vos services",
              "Est-ce que vous faites des accompagnements en privé ?",
            ],
            starterPromptFontSize: 15,
            renderHTML: false,
            clearChatOnReload: false,
            showScrollbar: false,
            botMessage: {
              backgroundColor: "#f36539",
              textColor: "#fafafa",
              showAvatar: true,
              avatarSrc: "https://www.bambyno.com/5e535e872b568af61d1d1e65_peep-sitting-5.png"
            },
            userMessage: {
              backgroundColor: "#fff6f3",
              textColor: "#050505",
              showAvatar: true,
              avatarSrc: "/user.jpg"
            },
            textInput: {
              placeholder: "Saisissez votre message",
              backgroundColor: "#ffffff",
              textColor: "#1e1e1f",
              sendButtonColor: "#f36539",
              maxChars: 50,
              maxCharsWarningMessage: "Vous avez dépassé la limite de caractères.",
              autoFocus: false,
              borderRadius: 6,
              sendButtonBorderRadius: 50
            }
          }
        }
      });
    `;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script); // Nettoyage
    };
  }, []);

  return null;
}
