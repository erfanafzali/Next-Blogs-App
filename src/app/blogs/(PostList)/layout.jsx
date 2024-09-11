import { Suspense } from "react";
import CategoryList from "../_components/CategoryList";
import Spinner from "@/components/ui/Spinner";

function Layout({ children }) {
  return (
    <div>
      <h1 className="font-bold md:text-xl mb-8">لیست بلاگ ها</h1>
      <div className="grid grid-cols-12 gap-8 justify-center items-start">
        <div className="col-span-12 md:col-span-4 lg:col-span-3 text-secondary-500 space-y-4  xl:col-span-3 ">
          <Suspense fallback={<Spinner />}>
            <CategoryList />
          </Suspense>
        </div>
        <div className="col-span-12 md:col-span-8 lg:col-span-9 ">
          {children}
        </div>
      </div>
    </div>
  );
}

export default Layout;
