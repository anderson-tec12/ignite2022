import { ImgHTMLAttributes } from "react";
import styles from "./Avatar.module.css";

interface Props extends ImgHTMLAttributes<HTMLImageElement> {
  hasBorder: boolean;
  src: string;
  alt: string;
}

export function Avatar(props: Props) {
  const hasBorder = props.hasBorder !== false;

  return (
    <img
      {...props}
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      src={props.src}
    />
  );
}
