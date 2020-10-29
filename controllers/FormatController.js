export const TitleFormat = (title) => {
    return title.replace(/\w\S*/g, text => text.charAt(0).toUpperCase() + text.substr(1).toLowerCase());
};

export const FirstLetterUppercase = (text) => {
    return text.replace(text.charAt(0), text.charAt(0).toUpperCase());
};