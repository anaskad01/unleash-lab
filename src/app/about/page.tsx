import SimpleAbout from "@/components/About/SimpleAbout";
import { generatePageMetadata } from "@/lib/seo";
import { Metadata } from "next";

export const metadata: Metadata = generatePageMetadata({
  title: "À Propos",
  description: "Découvrez Unleash Lab, votre partenaire expert en Business Analysis et innovation durable. Notre équipe transforme la complexité en clarté pour libérer le potentiel de votre entreprise.",
  path: "/about",
  keywords: ["équipe business analysis", "expertise métier", "conseil stratégique", "innovation durable", "transformation entreprise"]
});

const AboutPage = () => {
  return (
    <>
      <SimpleAbout />
    </>
  );
};

export default AboutPage;
