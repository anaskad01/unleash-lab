"use client";
import SectionTitle from "../Common/SectionTitle";
import SingleValue from "./SingleValue";
import valuesData from "./valuesData";
import { useLanguage } from "@/context/LanguageContext";

const Values = () => {
  const { messages } = useLanguage();
  const valuesSection = (messages as any).valuesSection;
  
  return (
    <section
      id="values"
      className="relative py-16 md:py-20 lg:py-28 overflow-hidden bg-white dark:bg-black"
    >
      {/* Animated background shapes */}
      <div className="absolute inset-0 z-0 opacity-20 dark:opacity-30 pointer-events-none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 800"
          className="w-full h-full"
          preserveAspectRatio="xMidYMid slice"
        >
          <circle cx="200" cy="150" r="20" fill="#48937E" opacity="0.6">
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0 0; 300 -80; 600 0; 900 80"
              dur="50s"
              repeatCount="indefinite"
            />
          </circle>
          <circle cx="1000" cy="650" r="15" fill="#34D399" opacity="0.5">
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0 0; -300 120; -600 0; -900 -120"
              dur="60s"
              repeatCount="indefinite"
            />
          </circle>
          <polygon
            points="60,20 100,40 100,80 60,100 20,80 20,40"
            fill="#2DD4BF"
            opacity="0.5"
          >
            <animateTransform
              attributeName="transform"
              type="translate"
              values="1100 650; 750 450; 350 550; 0 650"
              dur="65s"
              repeatCount="indefinite"
            />
          </polygon>
        </svg>
      </div>

      <div className="container relative z-10">
        <SectionTitle
          title={valuesSection?.title || "Nos Valeurs"}
          paragraph=""
          center
        />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 mt-12">
          {valuesData.map((value) => (
            <SingleValue key={value.id} value={value} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;
