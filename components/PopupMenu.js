import { useState } from "react";
import Link from "next/link";

export default function PopupMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative bg-light-background">
        <button onClick={toggleMenu} className="fixed left-6 z-50 bg-light-primary text-light-background p-2 rounded-md">
            <div className="space-y-1">
                <div className="w-6 h-0.5 bg-white"></div>
                <div className="w-6 h-0.5 bg-white"></div>
                <div className="w-6 h-0.5 bg-white"></div>
            </div>
        </button>

        {isOpen && (        
            <div className={`fixed inset-0 bg-black bg-opacity-75 z-40 flex items-center justify-center transform transition-transform duration-300 ${isOpen ? "translate-y-0" : "-translate-y-full"}`}>
                <div className="bg-white rounded-lg shadow-lg w-3/4 max-w-md p-6 text-center">
                <h2 className="text-xl font-bold mb-4 text-gray-800">Menu</h2>
                <ul className="space-y-4">
                    <li>
                        <Link href={`/`} className="text-gray-800 hover:text-gray-500 font-semibold">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href={`/everyAnimal/`} className="text-gray-800 hover:text-gray-500 font-semibold">
                            Our animals
                        </Link>
                    </li>   
                    <li>
                        <Link href={`/about/`} className="text-gray-800 hover:text-gray-500 font-semibold">
                            About us
                        </Link>
                    </li>
                    <li>
                        <Link href={`/adoption/`} className="text-gray-800 hover:text-gray-500 font-semibold">
                            Adoption
                        </Link>
                    </li>
                    <li>
                        <Link href={`/volunteers/`} className="text-gray-800 hover:text-gray-500 font-semibold">
                            Volunteer
                        </Link>
                    </li>
                </ul>
                <button onClick={toggleMenu} className="mt-6 px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700">
                    Close
                </button>
                </div>
            </div>
        )}
    </div>
  );
}
