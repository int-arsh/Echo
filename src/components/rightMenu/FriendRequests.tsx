import Link from "next/link";
import Image from "next/image";
import { auth } from "@clerk/nextjs/server";
import prisma from "@/lib/client";

const FriendRequests = async () => {

  const { userId} = await auth();
  if (!userId) return null;

  const requests = await prisma.followRequest.findMany({
    where: {
      receiverId: userId,
    },
    include: {
      sender: true,
    },
  });

  if(requests.length === 0) return null;


  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
        {/* top */}
        <div className="flex justify-between items-center font-medium">
            <span className="text-gray-500">Friend Requests</span>
            <Link href="/">View All</Link>
        </div>

        {/* user */}
        <FriendRequestList requests={requests} />
    </div>
  )
}

export default FriendRequests;