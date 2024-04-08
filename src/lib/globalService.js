import { baseQuery } from "./api";

export const handleDownload = (endpoint) => {
  const imageUrl = `${baseQuery}/uploads/${endpoint}`;
  fetch(imageUrl)
    .then((response) => response.blob())
    .then((blob) => {
      // Create a blob URL for the image
      const blobUrl = URL.createObjectURL(blob);

      // Create a temporary anchor element
      const a = document.createElement("a");
      a.href = blobUrl;
      a.download = "image"; // You can set the default name of the downloaded file here

      // Append the anchor element to the body and trigger the download
      document.body.appendChild(a);
      a.click();

      // Remove the anchor element from the body
      document.body.removeChild(a);

      // Revoke the blob URL to free up memory
      URL.revokeObjectURL(blobUrl);
    })
    .catch((error) => {
      console.error("Error downloading image:", error);
    });
};
// export const handleDownload = (endpoint) => {
//   const fileUrl = `${baseQuery}/uploads/${endpoint}`;
//   const link = document.createElement("a");
//   link.href = fileUrl;
//   link.download = "downloaded.ext";
//   //   link.target = "_blank";
//   document.body.appendChild(link);
//   link.click();
//   document.body.removeChild(link);
// };
