import Image from "next/image";

const Stories = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md overflow-scroll text-xs scrollbar-hide">
        <div className="flex gap-8 w-max">
            {/* story */}
            <div className="flex flex-col items-center gap-2 cursor-pointer">
                <Image src="https://images.pexels.com/photos/33857654/pexels-photo-33857654.jpeg" alt="Stories" width={80} height={80} className="w-20 h-20 rounded-full" />
                <span className="font-medium">Pawan</span>
            </div>
            {/* story */}
            <div className="flex flex-col items-center gap-2 cursor-pointer">
                <Image src="https://images.pexels.com/photos/33857654/pexels-photo-33857654.jpeg" alt="Stories" width={80} height={80} className="w-20 h-20 rounded-full" />
                <span className="font-medium">Pawan</span>
            </div>
            {/* story */}
            <div className="flex flex-col items-center gap-2 cursor-pointer">
                <Image src="https://images.pexels.com/photos/33857654/pexels-photo-33857654.jpeg" alt="Stories" width={80} height={80} className="w-20 h-20 rounded-full" />
                <span className="font-medium">Pawan</span>
            </div>
            {/* story */}
            <div className="flex flex-col items-center gap-2 cursor-pointer">
                <Image src="https://images.pexels.com/photos/33857654/pexels-photo-33857654.jpeg" alt="Stories" width={80} height={80} className="w-20 h-20 rounded-full" />
                <span className="font-medium">Pawan</span>
            </div>
            {/* story */}
            <div className="flex flex-col items-center gap-2 cursor-pointer">
                <Image src="https://images.pexels.com/photos/33857654/pexels-photo-33857654.jpeg" alt="Stories" width={80} height={80} className="w-20 h-20 rounded-full" />
                <span className="font-medium">Pawan</span>
            </div>
            {/* story */}
            <div className="flex flex-col items-center gap-2 cursor-pointer">
                <Image src="https://images.pexels.com/photos/33857654/pexels-photo-33857654.jpeg" alt="Stories" width={80} height={80} className="w-20 h-20 rounded-full" />
                <span className="font-medium">Pawan</span>
            </div>
            {/* story */}
            <div className="flex flex-col items-center gap-2 cursor-pointer">
                <Image src="https://images.pexels.com/photos/33857654/pexels-photo-33857654.jpeg" alt="Stories" width={80} height={80} className="w-20 h-20 rounded-full" />
                <span className="font-medium">Pawan</span>
            </div>
        </div>
    </div>
  )
}

export default Stories;