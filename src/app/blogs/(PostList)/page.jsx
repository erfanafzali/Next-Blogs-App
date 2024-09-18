 import { Suspense } from "react";
import PostList from "../_components/PostList";
import Spinner from "@/components/ui/Spinner";
 
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
  return (
    <div className="w-full">
      {/* <h2 className="font-bold md:text-xl mb-4">بلاگ ها</h2> */}
      <Suspense fallback={<Spinner />}>
        <PostList />
      </Suspense>
    </div>
  );
}

export default BlogPage;
