import "./globals.css";
import { Navbar } from "./components/common/Navbar";
import { Footer } from "./components/common/Footer";
import { ThemeProvider } from "next-themes";

export const metadata = {
  title: "Amruth | Portfolio",
  description: "Personal portfolio built with Next.js and Tailwind CSS.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-background-light text-text-light dark:bg-background-dark dark:text-text-dark transition-colors duration-500 font-sans">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={true}>
          <Navbar />
          <main className="pt-20 min-h-screen">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
