import React from "react"
import { CurrentHairSection } from "./hair-current-section"
import { PersonalInfoForm } from "./personal-form"
import { Question } from "./question"

export const HairTest = () => {
    return <section className="">
        <h1 className="text-[#25544C] font-serif text-[44px] mt-20! font-semibold ">Let us know more about you.</h1>

        <CurrentHairSection />
        <div className="flex justify-center">
            <Question/>
        </div>
    </section>
}