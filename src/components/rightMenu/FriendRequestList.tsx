"use client";

import Image from "next/image";
import { FollowRequest, User } from "generated/prisma";
import { useState, useOptimistic } from "react";

type RequestWithUser = FollowRequest & {
  sender: User;
};

const FriendRequestList = ({ requests }: { requests: RequestWithUser[] }) => {

    const [requestState, setRequestState] = useState(requests);

    const accept = async (requestId: number, userId: string) => {
        removeOptimisticRequest(requestId);
        try {
            await acceptFollowRequest(userId);
            setRequestState((prev) => prev.filter((req) => req.id !== requestId));
        } catch (err) {
            console.log(err);
        }
    };

    const decline = async (requestId: number, userId: string) => {
        removeOptimisticRequest(requestId);
        try {
            await declineFollowRequest(userId);
            setRequestState((prev) => prev.filter((req) => req.id !== requestId));
        } catch (err) {
            console.log(err);
        }
    };

    const [optimisticRequests, removeOptimisticRequest] = useOptimistic(
        requestState,
        (state, value: number) => state.filter((req) => req.id !== value)
    );

  return (
    <div className="">
      {optimisticRequests.map((request) => (
      <div className="flex items-center justify-between" key={request.id}>
        <div className="flex items-center gap-4">
          <Image
            src={request.sender.avatar || "/noAvatar.png"}
            alt="Profile"
            width={32}
            height={32}
            className="w-8 h-8 rounded-full"
          />
          <span className="font-semibold">{request.sender.name && request.sender.surname ? request.sender.name + " " + request.sender.surname : request.sender.username}</span>
        </div>
        <div className="flex justify-end gap-3">
          <form action={() => accept(request.id, request.sender.id)}>
            <button type="submit">
              <Image
                src="/accept.png"
                alt="Add"
                width={20}
                height={20}
                className="cursor-pointer"
              />
            </button>
          </form>
          <form action={() => decline(request.id, request.sender.id)}>
            <button type="submit">
              <Image
                src="/reject.png"
                alt="Reject"
                width={20}
                height={20}
                className="cursor-pointer"
              />
            </button>
          </form>
        </div>
      </div>
      ))}
    </div>
  );
};

export default FriendRequestList;
