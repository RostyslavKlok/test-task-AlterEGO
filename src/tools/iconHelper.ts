import React from "react";

import { IconType } from "../const/icons";
import { ReactComponent as DeleteIcon } from "../assets/icons/deleteIcon.svg";

const icons = {
  [IconType.deleteIcon]: DeleteIcon,
};

interface IconProps {
  className?: string;
  ref?: React.Ref<SVGSVGElement> | undefined;
}

export function getIcon(type: IconType): React.FC<IconProps> {
  return icons[type] as React.FC<IconProps>;
}
