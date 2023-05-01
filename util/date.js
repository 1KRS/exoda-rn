export const getFormattedDate = (date) => {
  console.log('Date', date)
  return date.toLocaleDateString();
};

export const getDateMinusDays = (date, days) => {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() - days);
};
