import React from "react";
import { useEffect } from "react";

const useScript = (url, widgetCode) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.setAttribute("type", "text/javascript");

    let code = `var $zoho=$zoho || {};$zoho.salesiq = $zoho.salesiq || {widgetcode: "${widgetCode}", values:{},ready:function(){}};var d=document;s=d.createElement("script");s.type="text/javascript";s.id="zsiqscript";s.defer=true;s.src="${url}";t=d.getElementsByTagName("script")[0];t.parentNode.insertBefore(s,t);d.innerHTML = "<div id='zsiqwidget'></div>";`;

    script.appendChild(document.createTextNode(code));
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [url]);
};

export default function SalesIQ() {
  return (
    <React.Fragment>
      {useScript(
        "https://salesiq.zoho.com/widget",
        "siq66a30ca52e42cb17e4aa7999c5557f9a03e84d492579063f6dc00ec10cd85f4e"
      )}
    </React.Fragment>
  );
}
