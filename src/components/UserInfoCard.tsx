import Link from "next/link";

const UserInfoCard = ({userId}: {userId: string}) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
        {/* top */}
        <div className="flex justify-between items-center font-medium">
            <span className="text-gray-500">User Information</span>
            <Link href="/">View All</Link>
        </div>
    </div>
  )
}

export default UserInfoCard;