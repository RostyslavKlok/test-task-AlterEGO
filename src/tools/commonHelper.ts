// take specific keys from object
export const newsPostItemHelper = (obj: any) => {
  const {
    name,
    height,
    mass,
    hair_color,
    skin_color,
    eye_color,
    birth_year,
    gender,
  } = obj;
  return {
    name,
    height,
    mass,
    hair_color,
    skin_color,
    eye_color,
    birth_year,
    gender,
  };
};

export const generateUniqueId = () => {
  let chars = "0123456789abcdefghijklmnopqrstuvwxyz";
  let id = "";

  for (let i = 0; i < 15; i++) {
    let randomIndex = Math.floor(Math.random() * chars.length);
    id += chars[randomIndex];
    if (i === 4 || i === 9) {
      id += "-";
    }
  }

  return id;
};
