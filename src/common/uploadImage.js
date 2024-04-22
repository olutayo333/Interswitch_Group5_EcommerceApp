const url = `https://api.cloudinary.com/v1_1/dqdyvz0qu/image/upload`;

const uploadImage = async (image) => {
  const formData = new FormData();
  formData.append("file", image);
  formData.append("upload_preset", "Caesershop");

  const response = await fetch(url, {
    method: "post",
    body: formData,
  });
  return response.json();
};
export default uploadImage;
