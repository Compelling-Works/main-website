export async function saveImage(signedUrl: string, image: File) {
  return await fetch(signedUrl, {
    method: "PUT",
    body: image,
    headers: {
      "Content-Type": image.type,
    },
  });
}
