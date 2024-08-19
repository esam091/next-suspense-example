import Image from "next/image";
import { getComments } from "../utils";

export async function CommentSection() {
  const comments = await getComments();

  return (
    <div>
      <h3 className="text-lg font-semibold mb-2">Comments</h3>

      <div className="flex flex-col gap-5">
        {comments.map((comment) => (
          <div key={comment.id} className="flex gap-3">
            <Image
              alt="Profile picture"
              src={comment.commenterPictureUrl}
              className="w-10 h-10 rounded-full"
              width={40}
              height={40} />

            <div>
              <div className="font-medium">{comment.commenterName}</div>
              <div className="opacity-75">{comment.content}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
