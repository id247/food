import { ImageBE } from '../types';

export const getThumb = (images: ImageBE[] = []) => {
  const { url } = images[0] && images[0].responsive;
  if (!url) {
    return 'about:blank';
  }

  return url.replace('upload/v', 'upload/c_fill,w_270,h_270/v');
};
