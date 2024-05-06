import React, { useEffect } from "react";
import useAuthStore from "../../signInLogic/auth";
const ChatwootWidget = (props) => {
  const { lng } = props;
  const user = useAuthStore((state) => state.user);
  useEffect(() => {
    // Use setTimeout to update the message after 2000 milliseconds (2 seconds)
    const timeoutId = setTimeout(() => {
      const username = user.uid;
      const email = user.email;
      if (!!window.$chatwoot) {
        window.$chatwoot.setUser(username, {
          email: email,
        });
      }
    }, 4000);

    // Cleanup function to clear the timeout if the component unmounts
    return () => clearTimeout(timeoutId);
  }, [user]); // Empty dependency array ensures the effect runs only once

  useEffect(() => {
    if (!user) {
      return;
    }
    const username = user.uid;
    const email = user.email;

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
      // if (!!window.$chatwoot) {
      //   window.$chatwoot.setUser(username, {
      //     email: email,
      //   });
      // }
    })(document, "script");
  }, [user]);

  return null;
};
export default ChatwootWidget;
