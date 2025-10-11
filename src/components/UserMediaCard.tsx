import Link from "next/link";
import Image from "next/image";

const UserMediaCard = ({userId}: {userId: string}) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
        {/* top */}
        <div className="flex justify-between items-center font-medium">
            <span className="text-gray-500">User Information</span>
            <Link href="/" className="text-blue-500 text-xs">
              See All
            </Link>
        </div>
        {/* bottom */}
        <div className="flex gap-4 justify-between flex-wrap">
          <div className="relative w-1/5 h-24">
            <Image 
              src="https://images.pexels.com/photos/34036546/pexels-photo-34036546.jpeg" alt="" fill 
              className="object-cover rounded-md" 
            />
          </div>        
          <div className="relative w-1/5 h-24">
            <Image 
              src="https://images.pexels.com/photos/34036546/pexels-photo-34036546.jpeg" alt="Media" fill 
              className="object-cover rounded-md" 
            />
          </div>        
          <div className="relative w-1/5 h-24">
            <Image 
              src="https://images.pexels.com/photos/34036546/pexels-photo-34036546.jpeg" alt="Media" fill 
              className="object-cover rounded-md" 
            />
          </div>        
          <div className="relative w-1/5 h-24">
            <Image 
              src="https://images.pexels.com/photos/34036546/pexels-photo-34036546.jpeg" alt="Media" fill 
              className="object-cover rounded-md" 
            />
          </div>        
          <div className="relative w-1/5 h-24">
            <Image 
              src="https://images.pexels.com/photos/34036546/pexels-photo-34036546.jpeg" alt="Media" fill 
              className="object-cover rounded-md" 
            />
          </div>        
          <div className="relative w-1/5 h-24">
            <Image 
              src="https://images.pexels.com/photos/34036546/pexels-photo-34036546.jpeg" alt="Media" fill 
              className="object-cover rounded-md" 
            />
          </div>        
          <div className="relative w-1/5 h-24">
            <Image 
              src="https://images.pexels.com/photos/34036546/pexels-photo-34036546.jpeg" alt="Media" fill 
              className="object-cover rounded-md" 
            />
          </div>        
          <div className="relative w-1/5 h-24">
            <Image 
              src="https://images.pexels.com/photos/34036546/pexels-photo-34036546.jpeg" alt="Media" fill 
              className="object-cover rounded-md" 
            />
          </div>        
        </div>
        
    </div>
  )
}

export default UserMediaCard;