import ButtonIcon from "@/components/ui/ButtonIcon";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { BiLike } from "react-icons/bi";
import { FaRegBookmark } from "react-icons/fa";
import { toPersianDigits } from "@/utils/numberFormatter";

function PostInteraction({ post }) {
 
  return (
    <div className="flex justify-start  items-center gap-x-4">
      <ButtonIcon variant="secondary">
        <IoChatbubbleEllipsesOutline />
        <span>{toPersianDigits(post.commentsCount)}</span>
      </ButtonIcon>
      <ButtonIcon variant="red">
        <BiLike />
      </ButtonIcon>
      <ButtonIcon variant="primary">
        <FaRegBookmark />
      </ButtonIcon>
    </div>
  );
}

export default PostInteraction;
