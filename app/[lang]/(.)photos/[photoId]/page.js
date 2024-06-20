import Modal from "@/components/Modal";
import PhotoDetails from "@/components/PhotoDetails";

export default function PhotoDetailModal({ params: { lang, photoId } }) {
  return (
    <Modal>
      <PhotoDetails lang={lang} photoId={photoId} />
    </Modal>
  );
}
