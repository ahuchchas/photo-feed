import PhotoDetails from "@/components/PhotoDetails";

export default function PhotoDetailsPage({ params: { lang, photoId } }) {
  return <PhotoDetails lang={lang} photoId={photoId} />;
}
