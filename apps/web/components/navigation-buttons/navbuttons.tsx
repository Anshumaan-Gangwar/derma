import { Button } from "../ui/button"

export const NavigationButton = () => {
    return <div className="flex justify-center gap-8 mt-10! [&_button]:px-6! [&_button]:py-5! [&_button]:bg-[#25544C]
                           [&_button]:hover:bg-[#2F6A60] [&_button]:cursor-pointer [&_button]:text-[17px]">
        <Button size="lg">
            Previous
        </Button>
        <Button size="lg">
            Next
        </Button>
    </div>
}

