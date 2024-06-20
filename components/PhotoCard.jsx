import Image from "next/image";
import Link from "next/link";

export default function PhotoCard({ photo }) {
  return (
    <Link href={`photos/${photo.id}`} className="group">
      <Image src={photo.url} alt={photo.title} width={600} height={800} />

      <div className="title-container">
        <h4 className="title">{photo.title}</h4>
      </div>
    </Link>
  );
}
