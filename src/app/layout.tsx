import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import ErrorBoundary from "@/components/ErrorBoundary";
import { Inter } from "next/font/google";
import "../styles/index.css";
import { Providers } from "./providers";
import { LanguageProvider } from "@/context/LanguageContext";
import { generateOrganizationSchema, generateWebSiteSchema } from "@/lib/seo";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const organizationSchema = generateOrganizationSchema();
  const websiteSchema = generateWebSiteSchema();

  return (
    <html suppressHydrationWarning lang="fr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className={`bg-[#FCFCFC] dark:bg-black ${inter.className}`}>
        <ErrorBoundary>
          <Providers>
            <LanguageProvider>
              <Header />
              <main className="min-h-screen pt-16 lg:pt-20">
                {children}
              </main>
              <Footer />
              <ScrollToTop />
              <Analytics />
            </LanguageProvider>
          </Providers>
        </ErrorBoundary>
      </body>
    </html>
  );
}
