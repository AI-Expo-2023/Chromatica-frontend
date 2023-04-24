export const imgUrltoBase64 = (url: string): Promise<string> => {
  return new Promise((res, rej) => {
    const img = new Image();
    img.crossOrigin = 'Anonymous';
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext("2d");
      ctx?.drawImage(img, 0, 0);
      const dataUrl = canvas.toDataURL();
      res(dataUrl)
    }
    img.onerror = rej;
    img.src = url;
  })
}
