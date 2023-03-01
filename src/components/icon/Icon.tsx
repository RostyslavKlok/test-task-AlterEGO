import React, { memo } from "react";

import { IconType } from "../../const/icons";
import { getIcon } from "../../tools/iconHelper";

interface IconProps {
  className?: string;
  type: IconType;
  fill?: string;
  stroke?: string;
  ref?: React.Ref<SVGSVGElement> | undefined;
}

export const CommonIcon: React.FC<IconProps> = memo(
  ({ type, ref, ...props }) => {
    const Icon = getIcon(type);

    return <Icon {...props} ref={ref} />;
  }
);
