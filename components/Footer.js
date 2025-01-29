import Link from "next/link"

export default function Footer() {
    return (
        <div className="bg-light-primary relative w-[100%] border border-t-1 border-t-light-text">
            <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 text-light-background">
                <div>
                    <h3 className="text-lg font-semibold mb-2 ">Socials</h3>
                    <ul className="list-none space-y-1 text-gray-700">
                        <li>Instagram</li>
                        <li>Facebook</li>
                        <li>TikTok</li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-lg font-semibold mb-2">Support Us</h3>
                    <ul className="list-none space-y-1 text-gray-700">
                        <li>PayPal</li>
                        <li>Tax Return</li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-lg font-semibold mb-2 ">Contact</h3>
                    <ul className="list-none space-y-1 text-gray-700">
                        <li>Email</li>
                        <li>Phone</li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-lg font-semibold mb-2">Company</h3>
                    <ul className="list-none space-y-1 text-gray-700">
                        <li>About Us</li>
                        <li>Careers</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}