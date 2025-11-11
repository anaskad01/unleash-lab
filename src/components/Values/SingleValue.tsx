"use client";
import { Value } from "@/types/value";
import { useLanguage } from "@/context/LanguageContext";

const SingleValue = ({ value }: { value: Value }) => {
  const { messages } = useLanguage();
  const { icon, titleKey, descriptionKey } = value;
  const valuesSection = (messages as any).valuesSection;

  return (
    <div className="group relative overflow-hidden rounded-2xl bg-gray-100 dark:bg-[#1a1a1a] p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 dark:border-[#1a1a1a]">
      {/* Gradient background on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative z-10">
        {/* Icon */}
        <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
          {icon}
        </div>

        {/* Title */}
        <h3 className="mb-4 text-2xl font-bold text-black dark:text-white group-hover:text-primary dark:group-hover:text-primary transition-colors duration-300">
          {valuesSection?.values?.[titleKey] || titleKey}
        </h3>

        {/* Description */}
        <p className="text-base text-body-color dark:text-body-color-dark leading-relaxed">
          {valuesSection?.values?.[descriptionKey] || descriptionKey}
        </p>
      </div>

      {/* Decorative element */}
      <div className="absolute -bottom-2 -right-2 w-24 h-24 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-all duration-300" />
    </div>
  );
};

export default SingleValue;
