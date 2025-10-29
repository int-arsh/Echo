import Image from "next/image";
import {auth} from "@clerk/nextjs/server";
import prisma from "@/lib/client";

const AddPost = async () => {

    const {userId} = await auth();
    // console.log(userId);

    // const testAction = async (formData: FormData) => {
    //     "use server";

    //     if (!userId) return

    //     const desc = formData.get("desc") as string;
    //     try {
    //         const res = await prisma.post.create({
    //             data: {
    //                 userId: userId as string,
    //                 desc: desc,
    //             },
    //         });
    //         console.log(res);

    //     } catch (err){
    //         console.log(err);
    //     }
    // }

  return (
    <div className="p-4 bg-white shadow-md rounded-lg flex gap-4 justify-between text-sm">
        {/* Avatar */}
        <Image
            src={"https://images.pexels.com/photos/33865269/pexels-photo-33865269.jpeg"}
            alt=""
            width={48}
            height={48}
            className="w-12 h-12 object-cover rounded-full"
        ></Image>
        {/* POST */}
        <div className=" flex-1">
            {/*text input*/}
            <form action = "" className="flex gap-4">
                <textarea placeholder="What's on your mind?" 
                className=" flex-1 bg-slate-100 rounded-lg p-2"
                name = "desc"
                required
                ></textarea>
                <Image
                src="/emoji.png"
                alt=""
                width={20}
                height={20}
                className="w-5 h-5 cursor-pointer self-end"
                />
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">Post</button>
            </form>
            {/*Post options */}
            <div className="flex items-center gap-4 mt-4 text-gray-400 flex-wrap">
                <div className="flex items-center gap-2 cursor-pointer">
                    <Image
                        src="/addimage.png"
                        alt=""
                        width={20}
                        height={20}
                        className="w-5 h-5 cursor-pointer"
                    />
                    Photo
                </div>
                <div className="flex items-center gap-2 cursor-pointer">
                    <Image
                        src="/addVideo.png"
                        alt=""
                        width={20}
                        height={20}
                        className="w-5 h-5 cursor-pointer"
                    />
                    Video
                </div>
                <div className="flex items-center gap-2 cursor-pointer">
                    <Image
                        src="/poll.png"
                        alt=""
                        width={20}
                        height={20}
                        className="w-5 h-5 cursor-pointer"
                    />
                    Poll
                </div>
                <div className="flex items-center gap-2 cursor-pointer">
                    <Image
                        src="/addevent.png"
                        alt=""
                        width={20}
                        height={20}
                        className="w-5 h-5 cursor-pointer"
                    />
                    Event
                </div>
            </div>
        </div>
    </div>  
    )
}

export default AddPost;