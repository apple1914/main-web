import React, { useEffect } from "react";
import useAuthStore from "../../signInLogic/auth";
const ChatwootWidget = (props) => {
  const { lng } = props;
  const user = useAuthStore((state) => state.user);

  useEffect(() => {
    if (!user) {
      return;
    }
    window.chatwootSettings = {
      hideMessageBubble: false,
      position: "left", // This can be left or right
      locale: lng || "en", // Language to be set
      type: "expanded_bubble", // [standard, expanded_bubble]
    };

    // Paste the script from inbox settings except the <script> tag
    (function (d, t) {
      var BASE_URL =
        "https://chatwoot-sante-support-aa03c200cca5.herokuapp.com";
      var g = d.createElement(t),
        s = d.getElementsByTagName(t)[0];
      g.src = BASE_URL + "/packs/js/sdk.js";
      g.defer = true;
      g.async = true;
      s.parentNode.insertBefore(g, s);
      g.onload = function () {
        window.chatwootSDK.run({
          websiteToken: "j2EpENxG6x6bMqACSfRKZ43W",
          baseUrl: BASE_URL,
        });
      };
    })(document, "script");
  }, [user]);

  return null;
};
export default ChatwootWidget;
