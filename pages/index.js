import { Geist, Geist_Mono } from "next/font/google";
import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from 'react';
import PopupMenu from "@/components/PopupMenu";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  const [animals, setAnimals] = useState([]);
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const fetchAnimals = async () => {
      const res = await fetch('/api/animals');
      const data = await res.json();
      setAnimals(data.res);
    };

    fetchAnimals();
  }, []);


  return (
    <div className="px-5 bg-light-background text-light-primary">
      <header className="max-w-4xl mx-auto grid py-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        <PopupMenu />
        <h1 className="text-2xl font-bold mx-auto,">Animal Shelter</h1>
      </header>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 h-screen">
        {animals.map((animal) => (
          <Link href={`/animals/${animal.id}`} key={animal.id}>
            <div className="p-4 border rounded-lg shadow-lg hover:shadow-2xl transition">
              <h2 className="text-xl font-bold">{animal.name}</h2>
              <p className="text-light-text">{animal.species}</p>
            </div>
          </Link>
        ))}
      </div>
      <Footer />
    </div>
  )
}