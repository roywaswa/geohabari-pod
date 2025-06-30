import { Alata, Red_Hat_Display, Share_Tech_Mono, Montserrat, DM_Serif_Text, Inter } from "next/font/google";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/react";
import { GoogleAnalytics } from '@next/third-parties/google'
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.scss";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { ThemeProvider } from "@/context/ThemeContext";
import BackdropBlur from "@/components/BackdropBlur/BackdropBlur";
import DarkModeSwitch from "@/components/DarkModeSwitch/DarkModeSwitch";

const fontFamily = DM_Serif_Text({ 
  weight: '400',
  subsets: ["latin"]    
});

const benderFont = localFont({
  src: [
    {
      path:"../fonts/Bender.otf",
      weight: "400",
      style: "normal"
    },
    {
      path: "../fonts/Bender-Bold.otf",
      weight: "700",
      style: "normal"
    },
    {
      path: "../fonts/Bender-Italic.otf",
      weight: "400",
      style: "italic"
    },
    {
      path: "../fonts/Bender-BoldItalic.otf",
      weight: "700",
      style: "italic"
    },
    {
      path: "../fonts/Bender-Black.otf",
      weight: "900",
      style: "normal"
    },
    {
      path: "../fonts/Bender-BlackItalic.otf",
      weight: "900",
      style: "italic"
    },
    {
      path: "../fonts/Bender-Light.otf",
      weight: "300",
      style: "normal"
    },
    {
      path: "../fonts/Bender-LightItalic.otf",
      weight: "300",
      style: "italic"
    }
  ]
})

export const metadata = {
  title: "Geohabari Podcast",
  description: "Geohabari is a tech podcast on a mission to amplify African Tech Stories and elevate technical Brilliance. We do this through our audio podcast and video series which are available across all our streaming platforms.",
  icons: {
    icon: "/favicon.png"
  },
  lang: "en"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Analytics />
      <GoogleAnalytics gaId="G-YTCNDXEVER" />
      <SpeedInsights />
      <body className={`${benderFont.className}`}>
        <ThemeProvider>
          <Header />
          {/* <DarkModeSwitch /> */}
          {children}
          {/* <BackdropBlur /> */}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}