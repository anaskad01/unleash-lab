/**
 * Configuration et utilitaires pour Vercel Speed Insights
 * Monitore les Core Web Vitals et les performances en temps réel
 */

'use client';

import { SpeedInsights } from '@vercel/speed-insights/next';
import React from 'react';

// Configuration des seuils pour les métriques Web Vitals
export const WEB_VITALS_THRESHOLDS = {
  // Largest Contentful Paint - Temps de chargement du plus gros élément
  LCP: {
    good: 2500,      // < 2.5s = bon
    needsWork: 4000  // 2.5-4s = à améliorer, > 4s = mauvais
  },
  // First Input Delay - Temps de réponse à la première interaction
  FID: {
    good: 100,       // < 100ms = bon
    needsWork: 300   // 100-300ms = à améliorer, > 300ms = mauvais
  },
  // Cumulative Layout Shift - Stabilité visuelle
  CLS: {
    good: 0.1,       // < 0.1 = bon
    needsWork: 0.25  // 0.1-0.25 = à améliorer, > 0.25 = mauvais
  },
  // Interaction to Next Paint - Réactivité globale
  INP: {
    good: 200,       // < 200ms = bon
    needsWork: 500   // 200-500ms = à améliorer, > 500ms = mauvais
  }
};

// Types pour les métriques personnalisées
interface CustomMetric {
  name: string;
  value: number;
  unit?: string;
  tags?: Record<string, string>;
}

// Fonction pour tracker des métriques personnalisées
export const trackCustomMetric = (metric: CustomMetric) => {
  if (process.env.NODE_ENV === 'production') {
    console.log('Custom Metric:', metric);
  }
};

// Hook pour monitorer les temps de chargement des composants
export const useComponentPerformance = (componentName: string) => {
  const startTime = performance.now();
  
  return {
    markComplete: () => {
      const duration = performance.now() - startTime;
      trackCustomMetric({
        name: 'Component Load Time',
        value: duration,
        unit: 'ms',
        tags: { component: componentName }
      });
    }
  };
};

// Configuration pour différents environnements
export const getSpeedInsightsConfig = () => {
  const config: any = {
    // Configuration de base
    debug: process.env.NODE_ENV === 'development',
  };

  // En production, on peut ajouter des options spécifiques
  if (process.env.NODE_ENV === 'production') {
    config.beforeSend = (metric: any) => {
      // Log des métriques critiques
      if (metric.value > WEB_VITALS_THRESHOLDS[metric.name as keyof typeof WEB_VITALS_THRESHOLDS]?.needsWork) {
        console.warn(`🚨 Performance Alert: ${metric.name} is ${metric.value}ms`);
      }
      return metric;
    };
  }

  return config;
};

// Composant Speed Insights configuré  
export const ConfiguredSpeedInsights = () => {
  const config = getSpeedInsightsConfig();
  return React.createElement(SpeedInsights, config);
};

// Utilitaires pour le monitoring avancé
export const performanceUtils = {
  // Mesurer le temps de rendu d'une page
  measurePageLoad: (pageName: string) => {
    if (typeof window !== 'undefined') {
      window.addEventListener('load', () => {
        const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
        trackCustomMetric({
          name: 'Page Load Time',
          value: loadTime,
          tags: { page: pageName }
        });
      });
    }
  },

  // Mesurer le temps TTFB (Time To First Byte)
  measureTTFB: () => {
    if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          if (entry.responseStart > 0) {
            const ttfb = entry.responseStart - entry.requestStart;
            trackCustomMetric({
              name: 'Time To First Byte',
              value: ttfb,
              tags: { url: entry.name }
            });
          }
        });
      });
      observer.observe({ entryTypes: ['navigation'] });
    }
  },

  // Surveiller les erreurs JavaScript
  monitorJSErrors: () => {
    if (typeof window !== 'undefined') {
      window.addEventListener('error', (event) => {
        trackCustomMetric({
          name: 'JavaScript Error',
          value: 1,
          tags: { 
            error: event.error?.message || 'Unknown',
            filename: event.filename || 'Unknown'
          }
        });
      });
    }
  }
};

export default ConfiguredSpeedInsights;