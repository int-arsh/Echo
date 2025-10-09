import Link from "next/link";
import Image from "next/image";

const Ad = ({size}: {size: "sm" | "md" | "lg"}) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm">
        {/* top */}
        <div className="flex items-center justify-between text-gray-500 font-medium">
            <span >Sponsored Ads</span>
            <Image src="/more.png" alt="Ad" width={16} height={16} />

        </div>
        {/* bottom */}
        <div className={`flex flex-col mt-4 ${size === "sm" ? "gap-2" : "gap-4"}`}>
            <div className={`relative w-full ${size === "sm" ? "h-24" : size === "md" ? "h-36" : "h-48"}`}>
                <Image src="https://images.pexels.com/photos/6195655/pexels-photo-6195655.jpeg" alt="Ad" fill className="object-cover rounded-lg" />
            </div>
            <div className="flex items-center gap-4">
                <Image src="https://images.pexels.com/photos/6195655/pexels-photo-6195655.jpeg" alt="Ad" width={24} height={24} className="w-6 h-6 rounded-full object-cover" />
                <span className="font-semibold">
                    BigChef Lounge
                </span>
            </div>
            <p className={size === "sm" ? "text-xs" : "text-sm"}>
                {size === "sm"
                ? "Lorem ipsum dolor sit amet consectetur adipisicing elit."
                : size === "md"
                ? "Lorem ipsum dolor sit amet consectetur adipisicing elit.  Lorem ipsum dolor sit amet consectetur adipisicing elit."
                : "Lorem ipsum dolor sit amet consectetur adipisicing elit.  Lorem ipsum dolor sit amet consectetur adipisicing elit.  Lorem ipsum dolor sit amet consectetur adipisicing elit."}
            </p>
            <button className="bg-gray-200 text-gray-500 p-2 text-xs rounded-lg">Learn More</button>

        </div>
    </div>
  )
}

export default Ad;