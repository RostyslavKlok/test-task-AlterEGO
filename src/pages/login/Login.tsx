import { IconButton, InputAdornment } from "@material-ui/core";
import { useFormik } from "formik";
import React, { useCallback } from "react";
import { useSelector } from "react-redux";
import { Button, CommonIcon, CommonInput } from "../../components";
import {
  ButtonColorType,
  ButtonType,
  ButtonVariantType,
} from "../../const/button";
import { IconType } from "../../const/icons";
import {
  InputType,
  INPUT_ADORNMENT_POSITION_END,
  INPUT_ADORNMENT_POSITION_START,
} from "../../const/input";
import { selectLoginErrorMesage } from "../../redux/selectors";
import { logInSchema } from "../../tools/validationSchemas";
import {
  ErrorWrapper,
  InputPasswordTitle,
  InputPasswordWrapper,
  InputUsernameTitle,
  InputUsernameWrapper,
  LoginButtonsWrapper,
  LoginFormWrapper,
  LoginPageWrapper,
} from "./Login.style";

export const LoginPage: React.FunctionComponent = () => {
  const error = useSelector(selectLoginErrorMesage);

  const submitHandler = (values: any) => {
    console.log("Hello world!");
  };

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
      showPass: false,
    },
    onSubmit: submitHandler,
    validationSchema: logInSchema,
    validateOnBlur: true,
    validateOnChange: true,
  });

  const handleClickShowPassword = useCallback(() => {
    formik.setFieldValue("showPass", !formik.values.showPass);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formik.values.showPass]);

  return (
    <LoginPageWrapper>
      <LoginFormWrapper>
        <form onSubmit={formik.handleSubmit} autoComplete="off">
          {error && <ErrorWrapper>{error}</ErrorWrapper>}

          <InputUsernameWrapper>
            <InputUsernameTitle
              formikerror={formik.touched.username && formik.errors.username}
            >
              Username
            </InputUsernameTitle>
            <CommonInput
              type={InputType.text}
              placeholder="Enter username.."
              name="username"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              startAdornment={
                <InputAdornment position={INPUT_ADORNMENT_POSITION_START}>
                  <CommonIcon type={IconType.userIcon} />
                </InputAdornment>
              }
              errorText={
                formik.touched.username && formik.errors.username
                  ? formik.errors.username
                  : null
              }
              autoComplete="off"
            />
          </InputUsernameWrapper>
          <InputPasswordWrapper>
            <InputPasswordTitle
              formikerror={formik.touched.password && formik.errors.password}
            >
              Password
            </InputPasswordTitle>
            <CommonInput
              placeholder="Enter password.."
              name="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              type={
                formik.values.showPass ? InputType.text : InputType.password
              }
              startAdornment={
                <InputAdornment position={INPUT_ADORNMENT_POSITION_START}>
                  <CommonIcon type={IconType.userIcon} />
                </InputAdornment>
              }
              adornment={
                <InputAdornment position={INPUT_ADORNMENT_POSITION_END}>
                  <IconButton
                    id="showPass"
                    name="showPass"
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                  >
                    {formik.values.showPass ? (
                      <CommonIcon type={IconType.eyeOpenedIcon} />
                    ) : (
                      <CommonIcon type={IconType.eyeClosedIcon} />
                    )}
                  </IconButton>
                </InputAdornment>
              }
              errorText={
                formik.touched.password && formik.errors.password
                  ? formik.errors.password
                  : null
              }
              autoComplete="off"
            />
          </InputPasswordWrapper>
          <LoginButtonsWrapper>
            <Button
              title="Cancel"
              color={ButtonColorType.outlined}
              type={ButtonType.button}
              variant={ButtonVariantType.outlined}
              fullWidth
            />
            <Button
              title="Sign in"
              color={ButtonColorType.contained}
              type={ButtonType.submit}
              variant={ButtonVariantType.contained}
              fullWidth
              disabled={!formik.isValid}
            />
          </LoginButtonsWrapper>
        </form>
      </LoginFormWrapper>
    </LoginPageWrapper>
  );
};
