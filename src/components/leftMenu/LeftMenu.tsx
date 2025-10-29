import ProfileCard from "./ProfileCard";
import Link from "next/link";
import Image from "next/image";
import Ad from "../Ad";

const LeftMenu = ({type}: {type: "profile" | "home"}) => {
  return (
    <div className="flex flex-col gap-6">
      {type === "home" && <ProfileCard />}
      <div className="p-4 bg-white rounded-lg shadow-md text-sm text-gray-500 flex flex-col gap-4">
        <Link href="/" className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100">
          <Image src="/posts.png" alt="Home" width={20} height={20} />
          <span>My Posts</span>
        </Link>
        <hr className="border-gray-50 w-36 self-center border-t-1" />
        <Link href="/" className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100">
          <Image src="/activity.png" alt="Home" width={20} height={20} />
          <span>Activity</span>
        </Link>
        <hr className="border-gray-50 w-36 self-center border-t-1" />
        <Link href="/" className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100">
          <Image src="/market.png" alt="Home" width={20} height={20} />
          <span>Marketplace</span>
        </Link>
        <hr className="border-gray-50 w-36 self-center border-t-1" />
        <Link href="/" className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100">
          <Image src="/events.png" alt="Home" width={20} height={20} />
          <span>Events</span>
        </Link>
        <hr className="border-gray-50 w-36 self-center border-t-1" />
        <Link href="/" className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100">
          <Image src="/albums.png" alt="Home" width={20} height={20} />
          <span>Albums</span>
        </Link>
        <hr className="border-gray-50 w-36 self-center border-t-1" />
        <Link href="/" className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100">
          <Image src="/videos.png" alt="Home" width={20} height={20} />
          <span>Videos</span>
        </Link>
        <hr className="border-gray-50 w-36 self-center border-t-1" />
        <Link href="/" className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100">
          <Image src="/posts.png" alt="Home" width={20} height={20} />
          <span>My Posts</span>
        </Link>
        <hr className="border-gray-50 w-36 self-center border-t-1" />
        <Link href="/" className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100">
          <Image src="/news.png" alt="Home" width={20} height={20} />
          <span>News</span>
        </Link>
        <hr className="border-gray-50 w-36 self-center border-t-1" />
        <Link href="/" className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100">
          <Image src="/courses.png" alt="Home" width={20} height={20} />
          <span>Courses</span>
        </Link>
        <hr className="border-gray-50 w-36 self-center border-t-1" />
        <Link href="/" className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100">
          <Image src="/lists.png" alt="Home" width={20} height={20} />
          <span>Lists</span>
        </Link>
        <hr className="border-gray-50 w-36 self-center border-t-1" />
        <Link href="/" className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100">
          <Image src="/settings.png" alt="Home" width={20} height={20} />
          <span>Settings</span>
        </Link>
        <hr className="border-gray-50 w-36 self-center border-t-1" />
      </div>
      <Ad size="md" />
    </div>

  )
}

export default LeftMenu