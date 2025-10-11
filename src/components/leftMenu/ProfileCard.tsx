import Image from "next/image";

const ProfileCard = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-6">
        <div className="h-20 relative">
            <Image src="https://images.pexels.com/photos/30253590/pexels-photo-30253590.jpeg" alt="Profile" fill className="rounded-md object-cover" />
            <Image src="https://images.pexels.com/photos/33229965/pexels-photo-33229965.jpeg" alt="Profile" width={48} height={48} className="absolute object-cover rounded-full w-12 h-12 -bottom-6 left-0 right-0 m-auto ring-1 ring-white z-10" />
        </div>
        <div className="h-20 flex flex-col gap-2 items-center">
          <span className="font-semibold">Aman Kurek</span>
          <div className="flex items-center gap-4">
            <div className="flex">
              <Image src="https://images.pexels.com/photos/33229965/pexels-photo-33229965.jpeg" alt="Profile" width={12} height={12} className="object-cover rounded-full w-3 h-3" />
              <Image src="https://images.pexels.com/photos/33229965/pexels-photo-33229965.jpeg" alt="Profile" width={12} height={12} className="object-cover rounded-full w-3 h-3" />
              <Image src="https://images.pexels.com/photos/33229965/pexels-photo-33229965.jpeg" alt="Profile" width={12} height={12} className="object-cover rounded-full w-3 h-3" />

            </div>
            <span className="text-xs text-gray-500">300 followers</span>

          </div>
          <button className="bg-blue-600 text-white text-xs rounded-md p-2">My Profile</button>
        </div>
    </div>
  )
}

export default ProfileCard;