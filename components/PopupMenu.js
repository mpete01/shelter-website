import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function PopupMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative bg-light-background">
        <motion.button
        onClick={toggleMenu}
        className="fixed left-6 z-50 bg-light-primary text-light-background p-2 rounded-md"
        whileHover={{ scale: 1.1 }} 
        whileTap={{ scale: 0.9 }} 
        >
            <div className="space-y-1">
                <div className="w-6 h-0.5 bg-white"></div>
                <div className="w-6 h-0.5 bg-white"></div>
                <div className="w-6 h-0.5 bg-white"></div>
            </div>
        </motion.button>

        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        className="fixed inset-0 bg-black bg-opacity-50 z-40"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={toggleMenu}
                    />
                    <motion.div
                        className="fixed left-0 top-0 h-full w-64 bg-white shadow-lg z-50 p-6"
                        initial={{ x: "-100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "-100%" }}
                        transition={{ type: "spring", stiffness: 120, damping: 20 }}
                    >
                        <h2 className="text-3xl font-bold mb-8 text-light-primary">Menu</h2>
                        <ul className="space-y-4">
                            {[
                                { name: "Home", path: "/" },
                                { name: "Our Animals", path: "/everyAnimal/" },
                                { name: "About Us", path: "/about/" },
                                { name: "Adoption", path: "/adoption/" },
                                { name: "Volunteer", path: "/volunteers/" },
                            ].map(({ name, path }) => (
                                <motion.li key={path} whileHover={{ x: 8 }} transition={{ duration: 0.2 }}>
                                    <Link href={path} className="text-light-primary hover:text-light-button font-semibold">
                                        {name}
                                    </Link>
                                </motion.li>
                            ))}
                        </ul>
                        <motion.button
                            onClick={toggleMenu}
                            className="mt-6 px-4 py-2 bg-light-primary text-light-background rounded-md hover:bg-light-button fixed bottom-3 w-52" 
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Close
                        </motion.button>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    </div>
  );
}
