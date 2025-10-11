import Link from "next/link";
import Image from "next/image";

const UserInfoCard = ({userId}: {userId: string}) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
        {/* top */}
        <div className="flex justify-between items-center font-medium">
            <span className="text-gray-500">User Information</span>
            <Link href="/">See all</Link>
        </div>
        {/* Bottom */}
        <div className="flex flex-col gap-4 text-gray-500">
          <div className="flex items-center gap-2">
            <span className="text-xl text-black">Aman Kurek</span>
            <span className="text-sm">@aman</span>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
          </p>
          <div className="flex items-center gap-2">
            <Image src="/map.png" alt="Location" width={16} height={16} />
            <span>Living in <b>Bhopal</b></span>
          </div>
          <div className="flex items-center gap-2">
            <Image src="/school.png" alt="Location" width={16} height={16} />
            <span>Went to <b>DPS Bhopal</b></span>
          </div>
          <div className="flex items-center gap-2">
            <Image src="/work.png" alt="Location" width={16} height={16} />
            <span>Works in <b>Appointee inc.</b></span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex gap-1 items-center">
              <Image src="/link.png" alt="link" width={16} height={16} />
              <Link href="https://www.aman.com" className="text-blue-500 font-medium">
                aman.com
              </Link>
            </div>
            <div className="flex gap-1 items-center">
              <Image src="/date.png" alt="invite" width={16} height={16} />
              <span>Joined August 2021</span>
            </div>
          </div>
          <button className="bg-blue-600 text-white text-sm rounded-md p-2">Follow</button>
          <span className="text-red-400 self-end text-xs cursor-pointer">Block User</span>
        </div>
    </div>
  )
}

export default UserInfoCard;