import Search from "@/components/ui/Search";
import CategoryList from "../_components/CategoryList";

export const metadata = {
  title: "بلاگ ها",
};

async function Layout({ children }) {
  return (
    <div>
      <div className="w-full flex lg:flex-row flex-col-reverse gap-y-4 justify-between items-center mb-8 ">
        <h1 className="font-bold md:text-xl text-lg">لیست بلاگ ها</h1>
        <Search />
      </div>
      <div className="grid grid-cols-12 gap-8 justify-center items-start">
        <div className="col-span-12 md:col-span-4 lg:col-span-3 text-secondary-500 space-y-4  xl:col-span-3 ">
          <CategoryList />
        </div>
        <div className="col-span-12 md:col-span-8 lg:col-span-9 ">
          {children}
        </div>
      </div>
    </div>
  );
}

export default Layout;
