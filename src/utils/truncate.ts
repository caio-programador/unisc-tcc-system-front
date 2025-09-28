export const truncate = (text: string, maxLength = 50) => {
    if (text.length <= maxLength) {
      return text;
    }
    return text.substring(0, maxLength - 3) + "...";
  };