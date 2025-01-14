import { Geist, Geist_Mono } from "next/font/google";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Home  -  Zchat",
  description: "Zchat",
};
import {
  ClerkProvider,
  
} from '@clerk/nextjs'
import Navbar from "./Navbar";
import './globals.css'

export default function RootLayout({ children }) {
  return (
    <ClerkProvider publishableKey="pk_test_bGl2aW5nLXNvbGUtNzcuY2xlcmsuYWNjb3VudHMuZGV2JA">
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar/>
        {children}
        
      </body>
    </html>
    </ClerkProvider>  );
}
