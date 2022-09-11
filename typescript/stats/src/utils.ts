export const dateStringToDate = (dateString: string): Date => {
  const dateValues = dateString.split("/").map((val: string) => parseInt(val));

  return new Date(dateValues[2], dateValues[1] - 1, dateValues[0]);
};
