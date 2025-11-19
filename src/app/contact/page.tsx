import Contact from "@/components/Contact";
import { generatePageMetadata } from "@/lib/seo";
import { Metadata } from "next";

export const metadata: Metadata = generatePageMetadata({
  title: "Contact",
  description: "Contactez nos experts en Business Analysis pour transformer votre entreprise. Conseil personnalisé, accompagnement stratégique et solutions innovantes en Suisse.",
  path: "/contact",
  keywords: ["contact business analyst", "conseil entreprise", "devis gratuit", "accompagnement IT", "Genève", "Suisse"]
});

const ContactPage = () => {
  return (
    <>
      <Contact />
    </>
  );
};

export default ContactPage;
