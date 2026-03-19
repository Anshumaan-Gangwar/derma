"use client";
import { Phone, MapPin, Clock } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
export default function HeroSection() {
  const router = useRouter();
  return (
    <section className="relative w-full px-4!">
      {/* ── Hero Card ── */}
      <div className="relative bg-[#25544C] w-full rounded-4xl  px-10! py-14! flex flex-col gap-8! lg:h-135 overflow-hidden">
        <Image
          src="/images/leaf.png"
          alt=""
          aria-hidden="true"
          width={270}
          height={270}
          className="absolute -top-8 -right-6 rotate-13 pointer-events-none"
        />
        <Image
          src="/images/leaf.png"
          alt=""
          aria-hidden="true"
          width={270}
          height={270}
          className="absolute -bottom-10 -left-10 rotate-180 pointer-events-none"
        />
        <div className="absolute bottom-0 right-30 hidden md:block">
          <Image
            src="/images/model.png"
            alt="model"
            width={560}
            height={650}
            className="object-contain"
          />
        </div>
        <div className="ml-25! mt-2! flex flex-col gap-8!">
          <h1 className="max-w-[600px] text-white font-semibold font-(family-name:--font-heading) text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight mt-6!">
            Evidence-based Solutions
            <br />
            for your Endless
            <br />
            Beauty
          </h1>

          <p className="text-white/80 text-xl max-w-md font-(family-name:--font-subhead) font-light">
            At dermal we believe in creating solutions that drive real world
            impact.
          </p>

          <div className="flex flex-wrap gap-9">
            <button onClick={() => router.push("/hair-test")} className="text-[#25544C] cursor-pointer bg-white font-(family-name:--font-subhead) text-lg px-8! py-2! rounded-full font-normal hover:bg-gray-200 transition active:scale-95">
              Take Hair Test
            </button>
            <button onClick={() => router.push("/skin-test")} className="text-[#25544C] cursor-pointer bg-white font-(family-name:--font-subhead) px-8! text-lg py-2! rounded-full font-normal hover:bg-gray-200 transition active:scale-95">
              Take Skin Test
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-3! justify-between ml-15!">
        <div className="flex items-start gap-4">
          <div className="mt-1! text-[#25544C]">
            <Phone size={22} strokeWidth={1.5} />
          </div>
          <div className="space-y-1">
            <h3 className="font-bold text-lg font-(family-name:--font-subhead) text-[#25544C]">Contact Us</h3>
            <p className="text-sm text-gray-500 font-(family-name:--font-subhead)">
              Email: info@dermatologistbareilly.in
            </p>
            <p className="text-sm text-gray-500 font-(family-name:--font-subhead)">Phone: +91-8077772817</p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="mt-1! text-[#25544C]">
            <MapPin size={24} strokeWidth={1.5} />
          </div>
          <div className="space-y-1">
            <h3 className="font-bold text-lg font-(family-name:--font-subhead) text-[#25544C]">Our Location</h3>
            <p className="text-sm text-gray-500 leading-relaxed font-(family-name:--font-subhead)">
              Kaushik gastro and skin centre, 112/3, Civil Lines, near
              Siddhivinayak hospital, Bareilly, UP
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="mt-1! text-[#25544C] ml-30!">
            <Clock size={24} strokeWidth={1.5} />
          </div>
          <div className="space-y-1">
            <h3 className="font-bold text-lg font-(family-name:--font-subhead) text-[#25544C]">Working Hours</h3>
            <p className="text-sm text-gray-500   font-(family-name:--font-subhead)">
              Monday–Friday: 9:00 am to 5:00 pm
            </p>
            <p className="text-sm text-gray-500 font-(family-name:--font-subhead)">
              Weekends: Emergency only
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
