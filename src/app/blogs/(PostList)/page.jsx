import { cookies } from "next/headers";
import PostList from "../_components/PostList";
import setCookiesOnReq from "@/utils/setCookieOnReq";
import { getPosts } from "@/services/postServices";

export const metadata = {
  title: "بلاگ ها",
};

// how to revalidate time-based:
// export const revalidate = 60 * 60;
// export const experimental_ppr = true;

// after 1h re-build ==>
// 1. path time interval
// 2. new incoming request to re-build thid page

// update data will be shown to the next user !! ==> ISR =>inceremental static re-generation

async function BlogPage() {
  const cookieStore = cookies();
  const options = setCookiesOnReq(cookieStore);
  const posts = await getPosts(options);

  return (
    <div className="w-full">
      <PostList posts={posts} />
    </div>
  );
}

export default BlogPage;
