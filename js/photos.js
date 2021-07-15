const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

const renderPhotoPreview = (input, preview) => {
  const file = input.files[0];
  const fileName = file.name.toLowerCase();
  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));
  if (matches) {
    const reader = new FileReader();

    reader.addEventListener('load', () => {
      if (preview.tagName.toLowerCase() === 'img') {
        preview.src = reader.result;
      } else {
        const previewImage = document.createElement('img');
        previewImage.alt = 'фото объявления';
        previewImage.width = '70';
        previewImage.height = '70';
        previewImage.src = reader.result;
        preview.appendChild(previewImage);
      }
    });
    reader.readAsDataURL(file);
  }
};

export {renderPhotoPreview};
