import Image from "next/image";
import Link from "next/link";

function CoverImage({ coverImageUrl, title, slug }) {
  return (
    <Link href={`/blogs/${slug}`} className=" ">
      <div className=" relative aspect-video rounded-md border border-secondary-300 overflow-hidden">
        <Image
          src={coverImageUrl}
          alt={title}
          fill
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover hover:scale-110 object-center ease-out rounded-md"
          quality={100}
        />
      </div>
    </Link>
  );
}

export default CoverImage;
