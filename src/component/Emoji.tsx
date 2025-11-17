import bullsEye from '../assets/bulls eye.webp';
import thumbsUp from '../assets/thumbs up.webp';
import meh from '../assets/meh.webp';
 
interface Props {
  rating: number;
}
 
const Emoji = ({ rating }: Props) => {
  if (rating < 3) return null;
 
  const emojiMap: { [key: number]: { src: string; alt: string; size: number } } = {
    3: { src: meh, alt: "meh", size: 25 },
    4: { src: thumbsUp, alt: "recommended", size: 25 },
    5: { src: bullsEye, alt: "exceptional", size: 35 },
  };
 
  const emoji = emojiMap[rating];
 
  return (
<img
      src={emoji.src}
      alt={emoji.alt}
      style={{ width: emoji.size, height: emoji.size, marginTop: 5 }}
    />
  );
};
 
export default Emoji;
