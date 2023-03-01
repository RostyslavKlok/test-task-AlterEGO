import React from "react";
import { ButtonType } from "../../const/button";
import { ButtonVariantInterface } from "../../models/InterfaceButton";
import { ButtonWrapper } from "./Button.style";

interface ButtonProps {
  title?: string;
  variant: ButtonVariantInterface;
  type: ButtonType;
  disabled?: boolean;
  children?: any;
  onClick?: () => void;
  startIcon?: any;
  endIcon?: any;
}

export const Button: React.FunctionComponent<ButtonProps> = (props) => {
  const {
    title,
    variant,
    type,
    disabled,
    children,
    onClick,
    startIcon,
    endIcon,
  } = props;

  return (
    <ButtonWrapper
      variant={variant}
      type={type}
      disabled={disabled}
      onClick={onClick}
      startIcon={startIcon}
      endIcon={endIcon}
    >
      {title}
      {children}
    </ButtonWrapper>
  );
};
