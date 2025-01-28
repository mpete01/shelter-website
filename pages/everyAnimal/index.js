import { Geist, Geist_Mono } from "next/font/google";
import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from 'react';
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

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="px-5">
      <header className="flex items-center justify-evenly py-4 mb-5 text-2xl">
        <PopupMenu />
        <h1 className="text-3xl font-bold">Animal Shelter</h1>
      </header>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {animals.map((animal) => (
          <Link href={`/animals/${animal.id}`} key={animal.id}>
            <div className="p-4 border rounded-lg shadow-lg hover:shadow-2xl transition">
              <h2 className="text-xl font-bold">{animal.name}</h2>
              <p className="text-gray-700">{animal.species}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}