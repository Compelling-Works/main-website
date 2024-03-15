export async function downloadFile(url: string) {
  const file = await fetch(url);
  return file;
}
