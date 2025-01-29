import Link from "next/link"

export default function Footer() {
    return (
        <div className="mt-5 bg-light-background fixed bottom-1 w-[100%] border border-t-1 border-t-light-text">
            <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                <div>
                    <h3 className="text-lg font-semibold mb-2 text-light-primary">Socials</h3>
                    <ul className="list-none space-y-1 text-gray-700">
                        <li>Instagram</li>
                        <li>Facebook</li>
                        <li>TikTok</li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-lg font-semibold mb-2 text-light-primary">Support Us</h3>
                    <ul className="list-none space-y-1 text-gray-700">
                        <li>PayPal</li>
                        <li>Tax Return</li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-lg font-semibold mb-2 text-light-primary">Contact</h3>
                    <ul className="list-none space-y-1 text-gray-700">
                        <li>Email</li>
                        <li>Phone</li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-lg font-semibold mb-2 text-light-primary">Company</h3>
                    <ul className="list-none space-y-1 text-gray-700">
                        <li>About Us</li>
                        <li>Careers</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}