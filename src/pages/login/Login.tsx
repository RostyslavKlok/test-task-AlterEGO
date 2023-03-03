import { IconButton, InputAdornment, SvgIcon } from "@material-ui/core";
import { useFormik } from "formik";
import React, { useCallback } from "react";
import { useSelector } from "react-redux";
import { Button, CommonInput } from "../../components";
import {
  ButtonColorType,
  ButtonType,
  ButtonVariantType,
} from "../../const/button";
import {
  InputType,
  INPUT_ADORNMENT_POSITION_END,
  INPUT_ADORNMENT_POSITION_START,
} from "../../const/input";
import {
  selectLoginErrorMesage,
  selectMockUserCredentialsData,
} from "../../redux/selectors";
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
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import KeyIcon from "@mui/icons-material/Key";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useDispatch } from "react-redux";
import { setIsAuthAction, setNotificationAction } from "../../redux/slices";
import { IconType } from "../../const/icons";
import { NotificationsMessageType } from "../../const/common";
import { localStorageHelper } from "../../tools/localStorageHelper";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const LoginPage: React.FunctionComponent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const error = useSelector(selectLoginErrorMesage);
  const mockUserData = useSelector(selectMockUserCredentialsData);

  const submitHandler = (values: any) => {
    if (
      values.username !== mockUserData.username ||
      values.password !== mockUserData.password
    ) {
      dispatch(
        setNotificationAction({
          message: `${t("loginUsernamePasswordInvalid")}`,
          iconType: IconType.errorIcon,
          messageType: NotificationsMessageType.error,
        })
      );
      return;
    }
    localStorageHelper.set("isAuth", true);
    dispatch(setIsAuthAction(true));
    navigate("/profile");
    dispatch(
      setNotificationAction({
        message: `${t("loginSignInSuccess")}`,
        iconType: IconType.successIcon,
        messageType: NotificationsMessageType.success,
      })
    );
  };

  const cancelButtonHandler = () => {
    navigate("/");
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
              {t("loginUsernameInputTitle")}
            </InputUsernameTitle>
            <CommonInput
              type={InputType.text}
              placeholder="Enter username.."
              name="username"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              startAdornment={
                <InputAdornment position={INPUT_ADORNMENT_POSITION_START}>
                  <SvgIcon component={AccountCircleIcon} viewBox="0 0 25 25" />
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
              {t("loginPasswordInputTitle")}
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
                  <SvgIcon component={KeyIcon} viewBox="0 0 25 25" />
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
                      <SvgIcon component={VisibilityIcon} viewBox="0 0 25 25" />
                    ) : (
                      <SvgIcon
                        component={VisibilityOffIcon}
                        viewBox="0 0 25 25"
                      />
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
          <LoginButtonsWrapper isdisabledsigninbutton={!formik.isValid}>
            <Button
              color={ButtonColorType.outlined}
              type={ButtonType.button}
              variant={ButtonVariantType.outlined}
              fullWidth
              onClick={cancelButtonHandler}
            >
              {t("loginCancelButton")}
            </Button>
            <Button
              color={ButtonColorType.contained}
              type={ButtonType.submit}
              variant={ButtonVariantType.contained}
              fullWidth
              disabled={!formik.isValid}
              className="sign-in-button"
            >
              {t("loginSignInButton")}
            </Button>
          </LoginButtonsWrapper>
        </form>
      </LoginFormWrapper>
    </LoginPageWrapper>
  );
};
