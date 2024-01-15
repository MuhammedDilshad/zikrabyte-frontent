import React, { useState } from "react";
import axios from "axios";
import { uploadImage, uploadPost } from "../../Api/UploadImag";

function Uploadimage() {
  const [image, setImage] = useState(null);
  const [data, setData] = useState({
    producttitle: "",
    productcontent: "",
  });
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setImage(img);
    }
  };

  const reset = () => {
    setImage(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newPost = {
      productTitle: data.producttitle,
      productContent: data.productcontent,
    };
    if (image) {
      const data = new FormData();
      const filename = Date.now() + image.name;
      data.append("name", filename);
      data.append("image", image);
      newPost.image = filename;

      try {
        uploadImage(data);
      } catch (error) {
        console.log(error);
      }
    }
    uploadPost(newPost);
    reset();
  };
  // const [file, setFile] = useState("");
  // const [image, setImage] = useState("");
  // const [uploadeImg, setUploaded] = useState("");

  // function perview(file) {
  //   const reader = new FileReader();
  //   reader.readAsDataURL(file);
  //   reader.onload = () => {
  //     setImage(reader.result);
  //   };
  // }
  // const handleChane = (e) => {
  //   const file = e.target.files[0];
  //   setFile(file);
  //   perview(file);
  // };
  // const handlesubmit = async (e) => {
  //   e.preventDefault();
  //   const result = await axios.post("http://localhost:4500/uploadImage", {
  //     image: image,
  //   });
  //   try {
  //     const uploadeImg = result.data.public_key;
  //     setUploaded(uploadeImg);
  //     console.log(result.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="bg-yellow">
          <label htmlFor="productImage"> Image</label>
          <input
            type="file"
            id="productImage"
            name="productimage"
            onChange={onImageChange}
          />
        </div>
        <div className="">
          <label htmlFor="productTitle">Product Title</label>
          <input
            type="text"
            id="productTitle"
            name="producttitle"
            onChange={handleChange}
            value={data.producttitle}
          />
        </div>
        <div className="">
          <label htmlFor="productContent">Product Content</label>

          <textarea
            id="productContent"
            name="productcontent"
            value={data.productcontent}
            onChange={handleChange}
          ></textarea>
        </div>

        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default Uploadimage;
