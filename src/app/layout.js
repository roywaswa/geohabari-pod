import { Alata } from "next/font/google";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import "./globals.scss";
import Header from "@/components/Header/Header"
import Footer from "@/components/Footer/Footer";
import { ThemeProvider, useTheme } from "@/context/ThemeContext";
import ThemedLayout from "@/components/ThemedLayout/ThemedLayout";

const alata = Alata({ 
  weight: '400',
  subsets: ["latin"]    
});

export const metadata = {
  title: "Geohabari Podcast",
  description: "Geohabari is a tech podcast on a mission to amplify African Tech Stories and elevate technical Brilliance.We do this through our audio podcast and video series which are available across all our streaming platforms.",
  icons: {
    icon: "/favicon.png"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ThemeProvider><ThemedLayout>
          <Analytics/>
          <SpeedInsights/>
          <header><Header/></header>
          <main>{children}</main>
          <footer><Footer/></footer>
        </ThemedLayout>
        </ThemeProvider>
    </html>
  );
}
