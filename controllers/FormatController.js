export const TitleFormat = (title) => {
  return title.replace(
    /\w\S*/g,
    (text) => text.charAt(0).toUpperCase() + text.substr(1).toLowerCase()
  );
};

export const FirstLetterUppercase = (text) => {
  return text.replace(text.charAt(0), text.charAt(0).toUpperCase());
};

export const EachWordUppercase = (text) => {
  const words = text.split(" ");
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substr(1);
  }
  return words.join(" ");
};

export const formatPhoneNumber = (phoneNumberString) => {
  var cleaned = ("" + phoneNumberString).replace(/\D/g, "");
  var match = cleaned.match(/^(1|)?(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    var intlCode = match[1] ? "+1 " : "";
    return [intlCode, "(", match[2], ") ", match[3], "-", match[4]].join("");
  }
  return null;
};

export const addressFormat = (address) => {
  if (address.length <= 38) {
  } else {
    address = address.substring(0, 34).concat("...");
  }

  return address.replace(
    /\w\S*/g,
    (text) => text.charAt(0).toUpperCase() + text.substr(1).toLowerCase()
  );
};
