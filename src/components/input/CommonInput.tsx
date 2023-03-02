import { InputBaseProps } from "@material-ui/core";
import React, { memo } from "react";
import { DEFAULT_INPUT_AUTO_COMPLETE_OFF } from "../../const/input";
import { InputAutoCompleteType } from "../../models/InterfaceInput";
import { capitalizeFirstLetter } from "../../tools/wrappersHelper";
import { ErrorWrapper, InputWrapper } from "./CommonInput.style";

interface CommonInputProps {
  placeholder?: string;
  type?: string;
  value?: string;
  name?: string;
  adornment?: React.ReactNode;
  startAdornment?: React.ReactNode;
  errorText?: string | null;
  autoComplete?: InputAutoCompleteType;
}

export const CommonInput: React.FunctionComponent<
  CommonInputProps & InputBaseProps
> = memo(
  ({
    placeholder,
    type,
    value,
    name,
    adornment,
    startAdornment,
    errorText,
    autoComplete = DEFAULT_INPUT_AUTO_COMPLETE_OFF,
    ...props
  }) => {
    return (
      <>
        <InputWrapper
          placeholder={placeholder}
          value={value}
          type={type}
          name={name}
          startAdornment={startAdornment}
          endAdornment={adornment}
          error={!!errorText}
          autoComplete={autoComplete}
          {...props}
        />
        {errorText ? (
          <ErrorWrapper>{capitalizeFirstLetter(errorText)}</ErrorWrapper>
        ) : null}
      </>
    );
  }
);
