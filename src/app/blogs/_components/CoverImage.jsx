import Image from "next/image";
import Link from "next/link";

function CoverImage({ coverImageUrl, title, slug }) {
  return (
    <div className="relative aspect-video rounded-md border border-secondary-300 overflow-hidden">
      <Link href={`/blogs/${slug}`}>
       
        <Image
          src={coverImageUrl}
          alt={title}
          fill
          className="object-cover hover:scale-110 object-center ease-out rounded-md"
          quality={100}
        />
      </Link>
    </div>
  );
}

export default CoverImage;
