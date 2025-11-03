import Link from "next/link";
import Image from "next/image";
import { User } from "generated/prisma";
import prisma from "@/lib/client";
import { auth } from "@clerk/nextjs/server";

const UserMediaCard = async ({user}: {user: User}) => {
  const { userId: currentUserId } = await auth();
  if (!currentUserId) return null;

  const postsWithMedia = await prisma.post.findMany({
    where: {
      userId: user.id,
      img: {
        not: null,
      },
    },
    take: 8,
    orderBy: {
      createdAt: "desc",
    },
  });


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
          {postsWithMedia.length ? postsWithMedia.map((post) => (
            <div className="relative w-1/5 h-24" key={post.id}>
              <Image 
                src={post.img!} alt="" fill 
                className="object-cover rounded-md" 
              />
            </div>   
           )): "No media found"
          }          
        </div>
        
    </div>
  )
}

export default UserMediaCard;