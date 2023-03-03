import React from "react";
import { SvgIcon } from "@material-ui/core";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ErrorIcon from "@mui/icons-material/Error";

interface IconsHelperProps {
  iconType: string;
}

export const IconsHelper: React.FunctionComponent<IconsHelperProps> = (
  props
) => {
  const { iconType } = props;

  if (iconType === "successIcon")
    return <SvgIcon component={CheckCircleIcon} viewBox="0 0 22 22" />;

  return <SvgIcon component={ErrorIcon} viewBox="0 0 22 22" />;
};
