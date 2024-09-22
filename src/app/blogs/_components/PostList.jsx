import CoverImage from "./CoverImage";
import Link from "next/link";
import { FaRegClock } from "react-icons/fa";
import Author from "./Author";
import PostInteraction from "./BlogInteraction";
 

async function PostList({posts}) {


  

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-8">
      {posts.map((post) => (
        <div
          key={post._id}
          className="border border-secondary-300 rounded-md p-2 "
        >
          <CoverImage {...post} />

          {/* Post Content */}
          <div>
            <Link href={`/blogs/${post.slug}`}>
              <h2 className="font-bold text-secondary-700 mb-3 mt-3">
                {post.title}
              </h2>
            </Link>

            {/* blog category and author */}

            {/* blog author-category */}
            <div className="flex items-center  justify-between mb-4">
              <Author {...post.author} />
              <div className="flex items-center text-sm md:text-[10px] text-secondary-500">
                <FaRegClock className="w-4 h-4 stroke-secondary-500 ml-1" />
                <span className="ml-1"> خواندن:</span>
                <span className="ml-1 leading-3">{post.readingTime}</span>
                <span>دقیقه</span>
              </div>
            </div>
            {/* blog interactioin */}
            <PostInteraction post={post} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default PostList;
