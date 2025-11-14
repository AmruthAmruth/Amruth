import "./globals.css";
import Navbar from "./components/common/Navbar";
import { Footer } from "./components/common/Footer";
import { ThemeProvider } from "next-themes";

export const metadata = {
  title: "Amruth Shyju | Full-Stack Developer",
  description: "Portfolio of Amruth Shyju — Full-Stack Developer skilled in Next.js, TypeScript, and clean design.",
  keywords: ["Amruth Shyju", "Full-Stack Developer", "Next.js Portfolio", "MERN Stack Developer"],
  openGraph: {
    title: "Amruth Shyju | Portfolio",
    description: "Creative Full-Stack Developer specializing in modern web apps.",
    url: "https://amruthshyju.dev",
    images: ["/images/og-image.png"],
  },
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        
        <Navbar/>
          <main className="pt-10 min-h-screen">{children}</main>
          <Footer />
    
      </body>
    </html>
  );
}
