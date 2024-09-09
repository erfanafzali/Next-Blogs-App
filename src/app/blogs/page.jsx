import { Suspense } from "react";
import PostList from "./_components/PostList";
import Spinner from "@/components/ui/Spinner";

export const metadata = {
  title: "بلاگ ها",
};

async function BlogPage() {
  return (
    <div>
      <h2></h2>
      <Suspense fallback={<Spinner />}>
        <PostList />
      </Suspense>
    </div>
  );
}

export default BlogPage;
