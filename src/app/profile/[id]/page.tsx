import LeftMenu from "@/components/leftMenu/LeftMenu";
import Feed from "@/components/feed/Feed";
import RightMenu from "@/components/rightMenu/RightMenu";
import UserInfoCard from "@/components/UserInfoCard";
import Image from "next/image";


export default function ProfilePage() {
	return (
		<div className="flex gap-6 pt-6">
			<div className="hidden xl:block w-[20%]">
				<LeftMenu type="profile" />
			</div>
			<div className="w-full lg:w-[70%] xl:w-[50%]">
				<div className="flex flex-col gap-6">
					<div className="flex flex-col items-center justify-center">
						<div className="w-full h-64 relative">
							<Image src="https://images.pexels.com/photos/30253590/pexels-photo-30253590.jpeg" alt="Profile" fill className="object-cover rounded-md" />
							<Image src="https://images.pexels.com/photos/33229965/pexels-photo-33229965.jpeg" alt="Profile" width={128} height={128} className="absolute object-cover rounded-full w-32 h-32 -bottom-16 left-0 right-0 m-auto ring-4 ring-white z-10" />
						</div>
						<h1 className="mt-20 mb-4 font-medium text-2xl">Aman Kurek</h1>
						<div className="flex items-center justify-center gap-12 mb-4">
							<div className="flex flex-col items-center">
								<span className="font-medium">123</span>
								<span className="text-sm">Posts</span>
							</div>
							<div className="flex flex-col items-center">
								<span className="font-medium">1.2K</span>
								<span className="text-sm">Followers</span>
							</div>
							<div className="flex flex-col items-center">
								<span className="font-medium">1.2K</span>
								<span className="text-sm">Following</span>
							</div>
						</div>

					</div>
					<Feed />
				</div>
			</div>
			<div className="hidden lg:block w-[30%]">
				<RightMenu userId="test"/>
			</div>
		</div>
	);
}