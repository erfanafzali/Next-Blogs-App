import Link from "next/link";

async function CategoryList() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/category/list`);
  const {
    data: { categories },
  } = await res.json();

  return (
    <div className="w-full ">
      <ul className="w-full flex flex-col justify-center items-start gap-y-3 md:gap-y-4 md:text-lg font-semibold ">
        <Link href="/blogs">همه</Link>
        {categories.map((category) => (
          <li key={category._id}>
            <Link href={`/blogs/category/${category.slug}`}>
              {category.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CategoryList;
