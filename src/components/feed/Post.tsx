import Image from "next/image";
import Comments from "../feed/Comments";
const Post = () => {
  return (
    <div className="flex flex-col gap-4">
        {/* User */}
        <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
                <Image src="https://images.pexels.com/photos/11167438/pexels-photo-11167438.jpeg" alt="Profile" width={40} height={40} className="w-10 h-10 rounded-full" />
                <span className="font-medium">John Doe</span>
            </div>
            <Image src="/more.png" alt="Post" width={16} height={16}/>
        </div>
        {/* Desc */}
        <div className="flex flex-col gap-4">
            <div className="w-full min-h-96 relative">
                <Image src="https://images.pexels.com/photos/34144976/pexels-photo-34144976.jpeg" alt="Post" fill className="object-cover rounded-md" />
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consec. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
        </div>
        {/* Interactions */}
        <div className="flex items-center justify-between text-sm my-4">
            <div className="flex gap-8">
                <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
                    <Image src="/like.png" alt="Like" width={16} height={16} className="cursor-pointer"/>
                    <span className="text-gray-300">|</span>
                    <span className="text-gray-500">123<span className="hidden md:inline" > Likes</span></span>
                </div>
                <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
                    <Image src="/comment.png" alt="Like" width={16} height={16} className="cursor-pointer"/>
                    <span className="text-gray-300">|</span>
                    <span className="text-gray-500">123<span className="hidden md:inline" > Comments</span></span>
                </div>
            </div>
            <div className="">
                <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
                    <Image src="/share.png" alt="Like" width={16} height={16} className="cursor-pointer"/>
                    <span className="text-gray-300">|</span>
                    <span className="text-gray-500">123<span className="hidden md:inline" > Shares</span></span>
                </div>
            </div>
            
        </div>
        <Comments />
    </div>
  )
}

export default Post;