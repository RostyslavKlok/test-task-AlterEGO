import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

const translationsEng = {
  homePageInfo:
    "Star Wars is a popular science-fiction franchise created by George Lucas. It takes place in a fictional galaxy far, far away and follows the adventures of various characters, including Jedi Knights, Sith Lords, droids, and other alien species, as they navigate the ongoing conflict between the light and dark sides of the Force. The franchise includes several movies, television shows, books, and other media, and has become a cultural phenomenon with a passionate fan base around the world.",
  navHomeButton: "Home",
  navNewsButton: "News",
  navProfileButton: "Profile",
  navSignInButton: "Sign in",
  newsPageNoPostsDownloaded: "No posts downloaded yet..",
  newsLoadPostButton: "Load post",
  newsItemDeleteButton: "Delete",
  loginCancelButton: "Cancel",
  loginSignInButton: "Sign in",
  newsDeleteModalCancelButton: "Cancel",
  newsDeleteModalDeleteButton: "Delete",
  profileSignOutButton: "Sign out",
  deleteModalText: "Are you sure you want to delete post with",
  newsItemHeight: "Height",
  newsItemMass: "Mass",
  newsItemHairColor: "Hair color",
  newsItemSkinColor: "Skin color",
  newsItemEyeColor: "Eye color",
  newsItemBirthYear: "Birth year",
  newsItemGender: "Gender",
  loginUsernameInputTitle: "Username",
  loginPasswordInputTitle: "Password",
  newsNotificationErrorFromAPIPostDownloading:
    "Something went wrong while downloading post",
  newsNotificationSuccessFromAPIPostDownloading:
    "Post was downloaded successfully",
  newsPostDeletionStart: "Post with",
  newsPostDeletionEnd: "was successfully deleted",
  loginUsernamePasswordInvalid: "Username or password is invalid!",
  loginSignInSuccess: "You logged in successfully",
  profileLoggedOutSuccess: "You logged out successfully",
  profileMainText: "I want to be one of the heroes of Star Wars.....",
};

const translationsUa = {
  homePageInfo:
    "Зоряні війни - популярна науково-фантастична франшиза, створена Джорджем Лукасом. Дія розгортається у вигаданій далекій галактиці та розповідає про пригоди різних персонажів, у тому числі лицарів-джедаїв, лордів ситхів, дроїдів та інших інопланетних видів, які перебувають у конфлікті між світлою та темною сторонами Сили. Франшиза включає кілька фільмів, телевізійних шоу, книг та інших засобів масової інформації та стала культурним явищем із пристрасною базою шанувальників у всьому світі.",
  navHomeButton: "Домашня",
  navNewsButton: "Новини",
  navProfileButton: "Профіль",
  navSignInButton: "Увійти",
  newsPageNoPostsDownloaded: "Наразі не завантажено жодного поста..",
  newsLoadPostButton: "Завантажити пост",
  newsItemDeleteButton: "Видалити",
  loginCancelButton: "Скасувати",
  loginSignInButton: "Увійти",
  newsDeleteModalCancelButton: "Скасувати",
  newsDeleteModalDeleteButton: "Видалити",
  profileSignOutButton: "Вийти",
  deleteModalText: "Ви впевнені що хочете видалити пост про",
  newsItemHeight: "Ріст",
  newsItemMass: "Вага",
  newsItemHairColor: "Колір волосся",
  newsItemSkinColor: "Колір шкіри",
  newsItemEyeColor: "Колір очей",
  newsItemBirthYear: "Дата народження",
  newsItemGender: "Стать",
  loginUsernameInputTitle: "Логін",
  loginPasswordInputTitle: "Пароль",
  newsNotificationErrorFromAPIPostDownloading:
    "Щось пішло не так під час завантаження поста",
  newsNotificationSuccessFromAPIPostDownloading:
    "Пост був успішно завантажений",
  newsPostDeletionStart: "Пост про",
  newsPostDeletionEnd: "був успішно видалений",
  loginUsernamePasswordInvalid: "Логін або пароль введені неправильно!",
  loginSignInSuccess: "Ви успішно авторизувались",
  profileLoggedOutSuccess: "Ви успішно розлогінились",
  profileMainText: "Я хочу бути одним із героїв саги Зоряних Війн.....",
};

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: translationsEng,
      },
      ua: {
        translation: translationsUa,
      },
    },
  });

export default i18n;
