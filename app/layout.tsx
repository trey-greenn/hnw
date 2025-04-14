import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script"; // Ensure Script is imported
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HousesNearWater | Find Waterfront Homes Across the United States",
  description: "Discover lakefront, oceanfront, riverfront, and canal homes for sale across all 50 states. Browse waterfront properties by state, city, or water body.",
};

// Define your Google Analytics Measurement ID
// Best practice: Use an environment variable
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'G-4BX93BQGM9'; // Fallback to your ID if env var isn't set

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}

        {/* --- Google Analytics Scripts --- */}
        {GA_MEASUREMENT_ID && (
          <>
            {/* 1. Load the gtag.js library */}
            <Script
              strategy="afterInteractive"
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
            />
            {/* 2. Initialize gtag and send page views */}
            <Script
              id="google-analytics"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());

                  gtag('config', '${GA_MEASUREMENT_ID}');
                `,
              }}
            />
          </>
        )}
        {/* --- End Google Analytics Scripts --- */}

      </body>
    </html>
  );
}