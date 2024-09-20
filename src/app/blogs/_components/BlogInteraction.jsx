"use client";

import ButtonIcon from "@/components/ui/ButtonIcon";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { FaBookmark } from "react-icons/fa";
import { BiLike } from "react-icons/bi";
import { AiFillLike } from "react-icons/ai";
import { FaRegBookmark } from "react-icons/fa";
import { toPersianDigits } from "@/utils/numberFormatter";
import { bookmarkPostApi, likePostApi } from "@/services/postServices";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

function PostInteraction({ post }) {
  const router = useRouter();

  const likeHandler = async (postId) => {
    try {
      const { message } = await likePostApi(postId);
      toast.success(message);
      router.refresh();
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  const bookmarkHandler = async (postId) => {
    try {
      const { message } = await bookmarkPostApi(postId);
      toast.success(message);
      router.refresh();
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <div className="flex justify-start  items-center gap-x-4">
      <ButtonIcon variant="secondary">
        <IoChatbubbleEllipsesOutline />
        <span>{toPersianDigits(post.commentsCount)}</span>
      </ButtonIcon>
      <ButtonIcon variant="red" onClick={() => likeHandler(post._id)}>
        {post.isLiked ? <AiFillLike /> : <BiLike />}
      </ButtonIcon>
      <ButtonIcon variant="primary" onClick={() => bookmarkHandler(post._id)}>
        {post.isBookmarked ? <FaBookmark /> : <FaRegBookmark />}
      </ButtonIcon>
    </div>
  );
}

export default PostInteraction;
