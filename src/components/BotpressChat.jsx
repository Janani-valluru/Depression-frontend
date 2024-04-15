import React, { useEffect } from "react";

const BotpressChat = () => {
  useEffect(() => {
    const botpressScript = document.createElement("script");
    botpressScript.src = "https://cdn.botpress.cloud/webchat/v1/inject.js";
    botpressScript.async = true;

    const configScript = document.createElement("script");
    configScript.src =
      "https://mediafiles.botpress.cloud/b6b0d8c8-aa4e-43a2-92d9-66390b173d97/webchat/config.js";
    configScript.defer = true;

    document.body.appendChild(botpressScript);
    document.body.appendChild(configScript);

    return () => {
      document.body.removeChild(botpressScript);
      document.body.removeChild(configScript);
    };
  }, []);

  return null;
};

export default BotpressChat;
