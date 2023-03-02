import React from "react";

import { IconType } from "../const/icons";

import { ReactComponent as DeleteIcon } from "../assets/icons/deleteIcon.svg";
import { ReactComponent as ErrorIcon } from "../assets/icons/errorIcon.svg";
import { ReactComponent as SuccessIcon } from "../assets/icons/successIcon.svg";
import { ReactComponent as UserIcon } from "../assets/icons/userIcon.svg";
import { ReactComponent as KeyIcon } from "../assets/icons/keyIcon.svg";
import { ReactComponent as EyeOpenedIcon } from "../assets/icons/eyeOpenedIcon.svg";
import { ReactComponent as EyeClosedIcon } from "../assets/icons/eyeClosedIcon.svg";

const icons = {
  [IconType.deleteIcon]: DeleteIcon,
  [IconType.errorIcon]: ErrorIcon,
  [IconType.successIcon]: SuccessIcon,
  [IconType.userIcon]: UserIcon,
  [IconType.keyIcon]: KeyIcon,
  [IconType.eyeOpenedIcon]: EyeOpenedIcon,
  [IconType.eyeClosedIcon]: EyeClosedIcon,
};

interface IconProps {
  className?: string;
  ref?: React.Ref<SVGSVGElement> | undefined;
}

export function getIcon(type: IconType): React.FunctionComponent<IconProps> {
  return icons[type] as React.FunctionComponent<IconProps>;
}
