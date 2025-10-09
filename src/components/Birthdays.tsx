import Link from "next/link";
import Image from "next/image";

const Birthdays = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
        {/* top */}
        <div className="flex justify-between items-center font-medium">
            <span className="text-gray-500">Birthdays</span>
        </div>
        {/* user */}
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
                <Image src="https://images.pexels.com/photos/33668064/pexels-photo-33668064.jpeg" alt="Profile" width={32} height={32} className="w-8 h-8 rounded-full" />
                <span className="font-semibold">John Doe</span>
            </div>
            <div className="flex justify-end gap-3">
                <button className="bg-blue-600 text-white px-2 py-1 rounded-md">Celebrate</button>
            </div>
        </div>
        {/* upcoming */}
        <div className="flex items-center gap-4 p-4 bg-slate-100 rounded-lg">
            <Image src="/gift.png" alt="Profile" width={24} height={24} />
            <Link href="/" className="flex flex-col gap-1 text-xs">
                <span className="text-gray-700 font-semibold">Upcoming Birthdays</span>
                <span className="text-gray-500">See other 16 have upcoming birthdays</span>
            </Link>
        </div>
    </div>
  )
}

export default Birthdays;