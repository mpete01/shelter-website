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


  /*
            {animals.map((animal) => (
          <Link href={`/animals/${animal.id}`} key={animal.id} className="h-fit">
            <div className="p-4 border rounded-lg shadow-lg hover:shadow-2xl transition">
              <h2 className="text-xl font-bold">{animal.name}</h2>
              <p className="text-light-text">{animal.species}</p>
            </div>
          </Link>
        ))}
  */

  return (
    <div className=" bg-light-background text-light-primary h-screen">
      <header className="max-w-4xl mx-auto grid py-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        <PopupMenu />
        <h1 className="text-2xl font-bold mx-auto,">Animal Shelter</h1>
      </header>
      <section className="w-full bg-light-background py-12">
        <div className="flex flex-col md:flex-row md:even:flex-row-reverse items-center justify-between w-full max-w-7xl mx-auto p-8 gap-8">
          <img 
            src="https://ichef.bbci.co.uk/ace/standard/976/cpsprodpb/501A/production/_130960502_ty.jpg" 
            alt="Random Animal" 
            className="w-full md:w-1/2 h-auto object-cover rounded-xl mr-24"
          />
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl font-bold text-gray-800">Who are we?</h2>
            <p className="mt-4 text-gray-700 text-lg">
              We are Noah's Ark Animal Shelter Foundation and our goal is saving lost and abandoned animals then nurture them and hope to give them to loving homes. 
              If you're interested and want to read more about us and our misson please consider clicking the button below.
            </p>
            <Link 
              href="/about" 
              className="inline-block mt-6 px-8 py-3 bg-orange-500 text-white font-semibold text-lg rounded-md hover:bg-orange-600 transition"
            >
              Who are we
            </Link>
          </div>
        </div>
      </section>

      <section className="w-full bg-light-background py-12">
        <div className="flex flex-col md:flex-row md:even:flex-row-reverse items-center justify-between w-full max-w-7xl mx-auto p-8 gap-8">
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl font-bold text-gray-800">Planning on adoption?</h2>
            <p className="mt-4 text-gray-700 text-lg">
              Our animals can be adopted for free, however we will conduct a small background check to make sure our animals will have the best home possible. Our soon-to-be owners
              can choose between dogs, cats, rabbits and many more to adopt. If you're interested we highly recommend checking out our current animals.
            </p>
            <Link 
              href="/adoption" 
              className="inline-block mt-6 px-8 py-3 bg-orange-500 text-white font-semibold text-lg rounded-md hover:bg-orange-600 transition"
            >
              Adopt a pet
            </Link>
          </div>
          <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt4EB5tp7qnX614k9M6soLhoYcmQtbcV5WKRhJx7KZBBHL4PeypTuMs35V_oA7OlbMxYc&usqp=CAU" 
            alt="Random Animal" 
            className="w-full md:w-1/2 h-auto object-cover rounded-xl mr-24"
          />
        </div>
      </section>

      <section className="w-full bg-light-background py-12">
        <div className="flex flex-col md:flex-row md:even:flex-row-reverse items-center justify-between w-full max-w-7xl mx-auto p-8 gap-8">
          <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4NlYciWK6QkqM-X5YFHkeiYZ3hsH6pV8bzA&s" 
            alt="Random Animal" 
            className="w-full md:w-1/2 h-auto object-cover rounded-xl mr-24"
          />
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl font-bold text-gray-800">Volunteer at us</h2>
            <p className="mt-4 text-gray-700 text-lg">
              We welcome anyone who feels like they want to serve a better cause and help us care for our animals. We appreciate each and everyone who decides to help us.
              We are certain our animals will thank your kindness.
            </p>
            <Link 
              href="/adoption" 
              className="inline-block mt-6 px-8 py-3 bg-orange-500 text-white font-semibold text-lg rounded-md hover:bg-orange-600 transition"
            >
              I'm interested
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}