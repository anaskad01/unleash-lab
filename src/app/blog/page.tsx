import ClientServicesContent from "@/components/Blog/ClientServicesContent";
import { generatePageMetadata } from "@/lib/seo";
import { Metadata } from "next";

export const metadata: Metadata = generatePageMetadata({
  title: "Services",
  description: "Découvrez nos services en Business Analysis : conseil IT, accompagnement stratégique, formation et recrutement de Business Analysts. Solutions sur-mesure pour votre entreprise.",
  path: "/blog",
  keywords: ["services business analysis", "conseil IT", "formation business analyst", "recrutement IT", "accompagnement stratégique"]
});

const ServicesPage = () => {
  return (
    <section className="relative py-20 md:py-28 bg-white dark:bg-black overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-80px] top-[-80px] h-[380px] w-[380px] rounded-full bg-primary/10 blur-3xl opacity-30 dark:opacity-10" />
        <div className="absolute right-[-60px] bottom-[-60px] h-[320px] w-[320px] rounded-full bg-teal-200/10 blur-2xl opacity-25 dark:opacity-6" />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <ClientServicesContent />
        </div>
      </div>
    </section>
  );
};

export default ServicesPage;
