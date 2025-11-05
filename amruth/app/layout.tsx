
import { Navbar } from "./components/common/Navbar";
import { Footer } from "./components/common/Footer";

export const metadata = {
  title: "Amruth | Portfolio",
  description: "Personal portfolio built with Next.js and Tailwind CSS.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white font-sans">
        <Navbar />
        <main className="pt-20 min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
