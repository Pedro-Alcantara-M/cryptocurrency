export const formatToUSD = (number: number) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  const formattedNumber = formatter.format(number);
  return `US${formattedNumber.replace("$", "$ ")}`;
};

export const capitalizeFirstLetter = (string: string) =>  {
  string.toLowerCase()
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export const validateEmail = (email?: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email || '');
};
