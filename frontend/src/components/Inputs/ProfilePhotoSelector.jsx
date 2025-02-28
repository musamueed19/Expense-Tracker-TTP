import React, { useRef, useState } from "react";

// import icons
import { LuUser, LuUpload, LuTrash } from "react-icons/lu";

const ProfilePhotoSelector = ({ image, setImage }) => {
  // input ref for  file upload
  const inputRef = useRef(null);

  // state for file preview
  const [previewUrl, setPreviewUrl] = useState(null);

  // handle Image Change
  function handleImageChange(e) {
    const file = e.target.files[0];

    if (file) {
      // set the image State
      setImage(file);

      // Generate preview URL from the file
      const preview = URL.createObjectURL(file);
      setPreviewUrl(preview);
    }
  }

  // handle image remove
  function handleRemoveImage() {
    setImage(null);
    setPreviewUrl(null);
  }

  // handle file onClick
  function onChooseFile() {
    inputRef.current.click();
  }

  return (
    <div className="flex justify-center mb-6">
      <input
        type="file"
        accept="image/*"
        ref={inputRef}
        onChange={handleImageChange}
        className="hidden"
          />
          
          {!image ? (
              <div className="">
                  <LuUser />
                  <button onClick={onChooseFile}>
                      <LuUpload />
                  </button>
              </div>
          ) : (<div>
                  <img src={previewUrl} alt="profile photo" />
                  <button onClick={handleRemoveImage}>
                      <LuTrash />
                  </button>
          </div>)}
    </div>
  );
};

export default ProfilePhotoSelector;
