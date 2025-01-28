import { Geist, Geist_Mono } from "next/font/google";
import Head from "next/head";
import Link from "next/link";
import { useState } from 'react';
import PopupMenu from "@/components/PopupMenu";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="px-5">
      <header className="flex items-center justify-evenly py-4 mb-5 text-2xl">
        <PopupMenu />
        <h1 className="text-3xl font-bold">Animal Shelter</h1>
      </header>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        We are an animal shelter fr ong no cap
      </div>
    </div>
  )
}