import { FC } from "react";

import { FillButton } from "./ButtonStyles";

interface IButton {
  variant: "fill"; // This can be evolved in different variants & sizes
  onClick: () => void;
  bgColor: string;
  bgColorLight: string;
}

// Component
const Button: FC<IButton> = ({
  variant,
  children,
  onClick,
  bgColor,
  bgColorLight
}): JSX.Element => {
  let Component;

  if (variant === "fill") {
    Component = FillButton;
  } else {
    throw new Error(`Unrecognized Button variant: ${variant}`);
  }
  return (
    <Component onClick={onClick} bgColor={bgColor} bgColorLight={bgColorLight}>
      {children}
    </Component>
  );
};

export default Button;
