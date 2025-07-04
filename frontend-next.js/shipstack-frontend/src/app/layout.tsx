import { Space_Grotesk } from "next/font/google";
import Footer from "./components/CoreComponents/footer";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], // choose what you need
})



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={spaceGrotesk.className}>
      <body>
        {children}
        <Footer />
      </body>
      
    </html>
  );
}
