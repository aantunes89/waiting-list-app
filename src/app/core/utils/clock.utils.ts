export const updateClockAndReturnDate = (currentDate: Date): Date => {
  const date = new Date();
  date.setTime(currentDate.getTime() + 1000);
  return date;
};
