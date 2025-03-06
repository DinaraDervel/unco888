import type { Metadata } from 'next';
import './globals.css';
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';
import 'vanilla-cookieconsent/dist/cookieconsent.css';
import CookieConsentComponent from '@/components/CookieConsent/CookieConsent';
import Script from 'next/script';

const GA_ID = process.env.GOOGLE_ANALYTICS_ID; // Google Analytics ID (если нужно отслеживать посещаемость сайта)
const ADS_ID = process.env.GOOGLE_ADS_ID; // Google Ads ID (если нужно отслеживать конверсии)

export const metadata: Metadata = {
  title: 'Unco-888',
  description: 'Unco-888',
};

type Props = {
  children: React.ReactNode;
};

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    gtag?: (...args: any[]) => void;
  }
}

export default async function RootLayout({ children }: Props) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <head>
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0'
        />
        {/* Google Analytics (если нужно)*/}
        <Script
          strategy='afterInteractive'
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        />
        <Script
          id='google-analytics'
          strategy='afterInteractive'
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){ dataLayer.push(arguments); }
              gtag('js', new Date());
              gtag('config', '${GA_ID}', { page_path: window.location.pathname });
            `,
          }}
        />

        {/* Google Ads (если нужно) */}
        <Script
          id='google-ads'
          strategy='afterInteractive'
          dangerouslySetInnerHTML={{
            __html: `
              gtag('config', '${ADS_ID}');
            `,
          }}
        />
      </head>
      <body>
        <NextIntlClientProvider messages={messages}>
          <CookieConsentComponent />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
