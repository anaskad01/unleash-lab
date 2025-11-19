"use client";
import SingleBlog from "@/components/Blog/SingleBlog";
import blogData from "@/components/Blog/blogData";
import { useLanguage } from "@/context/LanguageContext";

const ClientServicesContent = () => {
  const { messages } = useLanguage();

  const formatText = (text: string) => {
    let formatted = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    formatted = formatted.replace(/\*(.*?)\*/g, '<em>$1</em>');
    return formatted;
  };

  return (
    <>
      <header className="mb-16 text-center max-w-3xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold text-black dark:text-white mb-4 leading-tight">
          {messages.servicesPage.breadcrumb.title}
        </h1>
        <p 
          className="text-xl text-primary dark:text-primary italic font-medium"
          dangerouslySetInnerHTML={{
            __html: formatText(messages.servicesPage.breadcrumb.description)
          }}
        />
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
        {blogData.map((blog) => (
          <div key={blog.id} className="w-full">
            <SingleBlog blog={blog} />
          </div>
        ))}
      </div>
    </>
  );
};

export default ClientServicesContent;