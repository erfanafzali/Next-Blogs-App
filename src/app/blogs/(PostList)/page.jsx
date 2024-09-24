import { cookies } from "next/headers";
import setCookiesOnReq from "@/utils/setCookieOnReq";
import { getPosts } from "@/services/postServices";
import queryString from "query-string";
import PostList from "../_components/PostList";

// export const metadata = {
//   title: "بلاگ ها",
// };
async function BlogPage({ searchParams }) {
  const queries = queryString.stringify(searchParams);
  const cookieStore = cookies();
  const options = setCookiesOnReq(cookieStore);
  const posts = await getPosts(queries, options);

  return (
    <div className="w-full">
      <PostList posts={posts} />
    </div>
  );
}

export default BlogPage;

// how to revalidate time-based:
// export const revalidate = 60 * 60;
// export const experimental_ppr = true;

// after 1h re-build ==>
// 1. path time interval
// 2. new incoming request to re-build thid page

// update data will be shown to the next user !! ==> ISR =>inceremental static re-generation
