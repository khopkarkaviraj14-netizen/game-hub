import noImage from '../assets/1000_F_671923740_x0zOL3OIuUAnSF6sr7PuznCI5bQFKhI0.webp';
const getCroppedImageUrl = (url: string) => {
  if (!url) return noImage;
  const target = 'media/';  
  const index = url.indexOf(target) + target.length;
  return url.slice(0, index) + 'crop/600/400/' + url.slice(index);

}

export default getCroppedImageUrl;