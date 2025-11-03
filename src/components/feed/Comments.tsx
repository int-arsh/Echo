import Image from "next/image";

const Comments = () => {
  return (
    <div className="">
        {/* Write */}
        <div className="flex items-center gap-4">
            <Image src="https://images.pexels.com/photos/11421980/pexels-photo-11421980.jpeg" alt="" width={32} height={32} className="w-8 h-8 rounded-full" />
            <div className="flex-1 flex items-center justify-between bg-slate-100 rounded-xl py-2 px-6 text-sm w-full">
                <input type="text" placeholder="Write a comment..." className="bg-transparent outline-none flex-1" />
                <Image src="/emoji.png" alt="Emoji" width={16} height={16} className=" cursor-pointer" />
            </div>
        </div>
        {/* Comments */}
        <div className="">
            {/* Comment */}
            <div className="flex gap-4 justify-between mt-6">
                {/* Avatar */}
                <Image src="https://images.pexels.com/photos/27628067/pexels-photo-27628067.jpeg" alt="" width={40} height={40} className="w-10 h-10 rounded-full" />
                {/* DESC */}
                <div className="flex flex-col gap-2 flex-1">
                    <span className="font-medium">John Doe</span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
                    <div className="flex items-center gap-8 text-xs text-gray-500 mt-2">
                        <div className="flex items-center gap-4">
                            <Image src="/like.png" alt="Like" width={12} height={12} className="cursor-pointer w-4 h-4" />
                            <span className="text-gray-300">|</span>
                            <span className="text-gray-500">123</span>
                        </div>
                        <div className="">Reply</div>
                    </div>
                </div>
                {/* icon */}
                <Image src="/more.png" alt="More" width={16} height={16} className="cursor-pointer w-4 h-4" />
            </div>

        </div>
    </div>
  )
}

export default Comments;