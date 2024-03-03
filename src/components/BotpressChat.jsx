import React, { useEffect } from "react";

const BotpressChat = ({ isHomePage }) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.botpress.cloud/webchat/v1/inject.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      window.botpressWebChat.init({
        composerPlaceholder: "Chat with bot",
        botConversationDescription:
          "This chatbot was built surprisingly fast with Botpress",
        botId: "b6b0d8c8-aa4e-43a2-92d9-66390b173d97",
        hostUrl: "https://cdn.botpress.cloud/webchat/v1",
        messagingUrl: "https://messaging.botpress.cloud",
        clientId: "b6b0d8c8-aa4e-43a2-92d9-66390b173d97",
        webhookId: "febca2af-6ca5-4752-83cf-944fca3525b1",
        lazySocket: true,
        themeName: isHomePage ? "prism" : "other-theme",
        frontendVersion: "v1",
        showPoweredBy: true,
        theme: isHomePage ? "prism" : "other-theme",
        themeColor: isHomePage ? "#2563eb" : "#other-color",
      });
    };

    return () => {
      document.body.removeChild(script);
    };
  }, [isHomePage]);

  return null;
};

export default BotpressChat;
