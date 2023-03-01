import React from "react";
import { ButtonType } from "../../const/button";
import {
  ButtonColorType,
  ButtonVariantInterface,
} from "../../models/InterfaceButton";
import { handlerButtonWrapper } from "../../tools/wrappersHelper";

interface ButtonProps {
  title?: string;
  variant: ButtonVariantInterface;
  type: ButtonType;
  disabled?: boolean;
  children?: any;
  onClick?: () => void;
  startIcon?: any;
  endIcon?: any;
  fullWidth?: boolean;
  color: ButtonColorType;
  className?: string;
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
    fullWidth,
    color,
    className,
  } = props;

  const CurrentWrapper = handlerButtonWrapper(color);

  return (
    <CurrentWrapper
      variant={variant}
      type={type}
      disabled={disabled}
      onClick={onClick}
      startIcon={startIcon}
      endIcon={endIcon}
      fullWidth={fullWidth}
      className={className}
    >
      {title}
      {children}
    </CurrentWrapper>
  );
};
