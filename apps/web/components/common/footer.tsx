import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-[#25544C] flex justify-center text-white">
      <div className="max-w-[1300px] mx-auto px-6! py-12!">

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10!">

          {/* LOGO + DESCRIPTION */}
          <div className="space-y-4!">
            <h2 className="text-2xl font-bold font-(family-name:--font-viga)">XYZ</h2>

            <p className="text-[16px] opacity-90 leading-relaxed font-(family-name:--font-subhead)">
              We are dedicated to providing personalized skincare and haircare
              solutions through advanced testing and expert consultation.
            </p>

            {/* SOCIAL ICONS */}
            <div className="flex gap-4! pt-2!">
              <Facebook className="cursor-pointer hover:scale-110 transition size-7"/>
              <Instagram className="cursor-pointer hover:scale-110 transition size-7"/>
              <Twitter className="cursor-pointer hover:scale-110 transition size-7"/>
            </div>
          </div>

          {/* QUICK LINKS */}
          
          <div className="pl-4!">
            <h3 className="font-semibold text-[25px] mb-4! font-(family-name:--font-subhead)">Quick Links</h3>

            <ul className="space-y-2! text-[16px] font-(family-name:--font-subhead)">
              <li><Link href="/" className="hover:text-gray-200 transition">Home</Link></li>
              <li><Link href="/about" className="hover:text-gray-200 transition">About Us</Link></li>
              <li><Link href="/services" className="hover:text-gray-200 transition">Services</Link></li>
              <li><Link href="/blog" className="hover:text-gray-200 transition">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-gray-200 transition">Contact Us</Link></li>
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <h3 className="font-semibold text-[25px] mb-4! font-(family-name:--font-subhead)">Services</h3>

            <ul className="space-y-2! text-[16px] font-(family-name:--font-subhead)">
              <li><Link href="#" className="hover:text-gray-200 transition">Skin Test</Link></li>
              <li><Link href="#" className="hover:text-gray-200 transition">Hair Test</Link></li>
              <li><Link href="#" className="hover:text-gray-200 transition">Consultation</Link></li>
              <li><Link href="#" className="hover:text-gray-200 transition">Treatment</Link></li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="font-semibold text-[25px] mb-4! font-(family-name:--font-subhead)">Contact Info</h3>

            <ul className="space-y-3! text-[16px] font-(family-name:--font-subhead)">

              <li className="flex items-center gap-3">
                <Mail size={19}/>
                <span>info@dermatologistbareilly.in</span>
              </li>

              <li className="flex items-center gap-3">
                <Phone size={19}/>
                <span>+91-8077772817</span>
              </li>

              <li className="flex items-start gap-3 ">
                <MapPin className="-mt-2!" size={50}/>
                <span>Kaushik gastro and skin centre, 112/3, Civil Lines, near Siddhivinayak hospital, Bareilly, UP</span>
              </li>

            </ul>
          </div>

        </div>

        {/* BOTTOM */}
        <div className="border-t border-white/20 mt-10! pt-6! flex flex-col md:flex-row justify-between items-center text-sm">

          <p className="font-(family-name:--font-subhead)">
            © {new Date().getFullYear()} XYZ. All rights reserved.
          </p>

          <div className="flex gap-10">
            <Link href="#" className="hover:text-gray-200 transition font-(family-name:--font-subhead)">Privacy Policy</Link>
            <Link href="#" className="hover:text-gray-200 transition font-(family-name:--font-subhead)">Terms</Link>
          </div>

        </div>

      </div>
    </footer>
  )
}