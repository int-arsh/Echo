import Link from "next/link";
import Image from "next/image";

const FriendRequests = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
        {/* top */}
        <div className="flex justify-between items-center font-medium">
            <span className="text-gray-500">Friend Requests</span>
            <Link href="/">View All</Link>
        </div>
        {/* user */}
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
                <Image src="https://images.pexels.com/photos/33668064/pexels-photo-33668064.jpeg" alt="Profile" width={32} height={32} className="w-8 h-8 rounded-full" />
                <span className="font-semibold">John Doe</span>
            </div>
            <div className="flex justify-end gap-3">
                <Image src="/accept.png" alt="Add" width={20} height={20} className="cursor-pointer" />
                <Image src="/reject.png" alt="Reject" width={20} height={20} className="cursor-pointer" />
            </div>
        </div>
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
                <Image src="https://images.pexels.com/photos/33668064/pexels-photo-33668064.jpeg" alt="Profile" width={32} height={32} className="w-8 h-8 rounded-full" />
                <span className="font-semibold">John Doe</span>
            </div>
            <div className="flex justify-end gap-3">
                <Image src="/accept.png" alt="Add" width={20} height={20} className="cursor-pointer" />
                <Image src="/reject.png" alt="Reject" width={20} height={20} className="cursor-pointer" />
            </div>
        </div>
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
                <Image src="https://images.pexels.com/photos/33668064/pexels-photo-33668064.jpeg" alt="Profile" width={32} height={32} className="w-8 h-8 rounded-full" />
                <span className="font-semibold">John Doe</span>
            </div>
            <div className="flex justify-end gap-3">
                <Image src="/accept.png" alt="Add" width={20} height={20} className="cursor-pointer" />
                <Image src="/reject.png" alt="Reject" width={20} height={20} className="cursor-pointer" />
            </div>
        </div>
    </div>
  )
}

export default FriendRequests;