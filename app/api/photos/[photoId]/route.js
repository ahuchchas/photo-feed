import { getPhotoById } from "@/lib/image-data";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { photoId } = params;
  const data = await getPhotoById(photoId);

  return NextResponse.json(data);
}
