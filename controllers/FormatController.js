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
  //Grab postal code and make upper case
  let postalCode = address
    .substring(address.length - 11, address.length)
    .toUpperCase();
  postalCode.toUpperCase();

  //remove postal code from address
  address = address.substring(0, address.length - 11);

  //make all characters upper case
  address = address.replace(
    /\w\S*/g,
    (text) => text.charAt(0).toUpperCase() + text.substr(1).toLowerCase()
  );

  //add postal code to address
  address = address.concat(postalCode);

  return address;
};

export const descriptionFormat = (description) => {
  if (description.length <= 199) {
  } else {
    description = description.substring(0, 185).concat("...");
  }

  return description;
};

export const foodFormat = (item) => {
  if (item.length <= 89) {
  } else {
    item = item.substring(0, 85).concat("...");
  }

  return item;
};
