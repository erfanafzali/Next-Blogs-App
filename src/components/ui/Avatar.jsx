import Image from "next/image";

function Avatar({ src, width = 24 ,height=24}) {
  return (
    <Image
      src={src || "/images/avatar.png"}
      width={width}
      height={height}
      className="rounded-full max-h-8 ring-1 ring-secondary-200 ml-2"
      alt={src}
    />
  );
}
export default Avatar;
