import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import ErrorBoundary from "@/components/ErrorBoundary";
import { Inter } from "next/font/google";
import "../styles/index.css";
import { Providers } from "./providers";
import { LanguageProvider } from "@/context/LanguageContext";
import { generateOrganizationSchema, generateWebSiteSchema, defaultMetadata, defaultViewport } from "@/lib/seo";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata, Viewport } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = defaultMetadata;
export const viewport: Viewport = defaultViewport;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const organizationSchema = generateOrganizationSchema();
  const websiteSchema = generateWebSiteSchema();

  return (
    <html suppressHydrationWarning lang="fr">
      <head>
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow, max-video-preview:-1, max-image-preview:large, max-snippet:-1" />
        <link rel="canonical" href="https://unleash-lab.tech" />
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
              <main className="min-h-screen pt-16 lg:pt-20" role="main">
                {children}
              </main>
              <Footer />
              <ScrollToTop />
              <Analytics />
              <SpeedInsights />
            </LanguageProvider>
          </Providers>
        </ErrorBoundary>
      </body>
    </html>
  );
}
