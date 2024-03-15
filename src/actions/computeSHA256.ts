export const computeSHA256 = async (file: File) => {
  //
  /**
   * Function hashes the file (using the SHA-256 security standard), turns it into a string which we then send to our s3 bucket server
   *
   * This validates that by the time it gets to s3, nothing bad happened to the file
   */

  const buffer = await file.arrayBuffer();
  const hasBuffer = await crypto.subtle.digest("SHA-256", buffer);

  const hasArray = Array.from(new Uint8Array(hasBuffer));
  const hashHex = hasArray.map((b) => b.toString(16).padStart(2, "0")).join("");

  return hashHex;
};
