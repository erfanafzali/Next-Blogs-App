import PostList from "@/app/blogs/_components/PostList";
import { getPosts } from "@/services/postServices";
import setCookiesOnReq from "@/utils/setCookieOnReq";
import { cookies } from "next/headers";
import queryString from "query-string";

async function Category({ params, searchParams }) {
  const { categorySlug } = params;
  const queries =
    queryString.stringify(searchParams) + "&" + `categorySlug=${categorySlug}`;

  const cookieStore = cookies();
  const options = setCookiesOnReq(cookieStore);
  const posts = await getPosts(queries, options);

  const { q } = searchParams;

  return (
    <>
      {q ? (
        <p className="mb-4 text-secondary-700">
          {posts.length === 0
            ? "هیچ پستی با این مشخصات پیدا نشد"
            : `نتیجه برای ${posts.length} نشان دادن`}
          <span className="font-bold">&quot;{q}&quot;</span>
        </p>
      ) : null}
      <PostList posts={posts} />
    </>
  );
}

export default Category;
