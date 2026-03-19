"use client"

import Image from "next/image"
import { Stethoscope, Award, BookOpen, Activity, Star } from "lucide-react"

export default function qualification() {
  return (
    <section className="w-full py-10! flex justify-center">
      <div className="max-w-6xl w-full bg-[#25544c] flex flex-col justify-center items-center text-white rounded-3xl px-12! py-8! relative">
        <Image
        src="/images/leaf.png"
        alt=""
        width={220}
        height={220}
        className="absolute -top-5 -right-6 rotate-13 pointer-events-none"
        />
        <Image
        src="/images/leaf2.png"
        alt=""
        width={220}
        height={220}
        className="absolute -top-5 -left-4 rotate-25 pointer-events-none"
        />

        {/* Title */}
        <h2 className="text-center text-4xl font-semibold mb-2! font-(family-name:--font-subhead)">
          Dr. Kanupriya Kapil
        </h2>
        <div className="w-[390px]  h-[1.5px] bg-white mx-auto mb-12! mt-2! opacity-80"></div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 items-center gap-8!">

          {/* Left Points */}
          <div className="space-y-10!">

            <div className="flex items-center gap-4!">
              <div className="bg-white text-[#25544c] p-3! rounded-lg">
                <Activity size={27} />
              </div>
              <p className="text-[17px] font-(family-name:--font-subhead)">
                Hair transplant surgeon practicing in Bareilly, Uttar Pradesh
              </p>
            </div>

            <div className="flex items-center gap-4!">
              <div className="bg-white text-[#25544c] p-3! rounded-lg">
                <Stethoscope size={27} />
              </div>
              <p className="text-[17px] font-(family-name:--font-subhead)">
                Passion for clinical and cosmetic dermatology
              </p>
            </div>

            <div className="flex items-center gap-4!">
              <div className="bg-white text-[#25544c] p-3! rounded-lg">
                <Star size={27} />
              </div>
              <p className="text-[17px] font-(family-name:--font-subhead)">
                Completed MBBS from prestigious King George Medical University,
                Lucknow
              </p>
            </div>

          </div>

          {/* Center Image */}
          <div className="flex justify-center">
            <div className="relative w-69! h-90! rounded-[90px] overflow-hidden border-2 border-white">
              <Image
                src="/images/picture.png"
                alt="Doctor"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Points */}
          <div className="space-y-10!">

            <div className="flex items-center gap-4">
              <div className="bg-white text-[#25544c] p-3! rounded-lg">
                <Award size={27} />
              </div>
              <p className="text-[17px] font-(family-name:--font-subhead)">
                Board-certified dermatologist (MBBS, MD, DNB DVL)
              </p>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-white text-[#25544C] p-3! rounded-lg">
                <Star size={27} />
              </div>
              <p className="text-[17px] font-(family-name:--font-subhead)">
                All India rank 50 in NEET PG
              </p>
            </div>

            <div className="flex items-center gap-4!">
              <div className="bg-white text-[#25544C] p-3! rounded-lg">
                <BookOpen size={27} />
              </div>
              <p className="text-[17px] font-(family-name:--font-subhead)">
                Pursued MD in Dermatology from VMMC and Safdarjung hospital,
                New Delhi
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}