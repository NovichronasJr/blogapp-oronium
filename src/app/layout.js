import { Inter,Geist, Geist_Mono } from "next/font/google";
import {ReactQueryProvider} from '../lib/react-query/react-query-provider'
import "./globals.css";
import Navbar from "../components/Navbar";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const inter = Inter({
  subsets:['latin'],
  display:"swap"
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Blog App",
  description: "Blogging app using Beyond UI",
  icons :{
    icon:'/beyond-ui-logo (replace with your).png'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`flex flex-col gap-16 ${inter.className} antialiased`}
      >
        <Navbar/>
        <ReactQueryProvider>
        {children}
        </ReactQueryProvider>
        
      </body>
    </html>
  );
}
