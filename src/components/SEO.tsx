import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  jsonLd?: object;
}

const SEO = ({ title, description, jsonLd }: SEOProps) => {
  useEffect(() => {
    document.title = title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", description);

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", title);

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute("content", description);

    // JSON-LD
    if (jsonLd) {
      let script = document.querySelector('#json-ld') as HTMLScriptElement;
      if (!script) {
        script = document.createElement("script");
        script.id = "json-ld";
        script.type = "application/ld+json";
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(jsonLd);
    }
  }, [title, description, jsonLd]);

  return null;
};

export default SEO;
