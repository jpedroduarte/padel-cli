export const DATE_FORMAT = "YYYYMMDDTHHmmssZ";

export const getCalendarEventURL = (beginDate, endDate) => {
  const beginDateFormatted = beginDate.format(DATE_FORMAT);
  const endDateFormatted = endDate.format(DATE_FORMAT);
  return "http://www.google.com/calendar/event?action=TEMPLATE"
    .concat("&text=", "%F0%9F%8E%BEVW%20Padel")
    .concat("&location=", "Clube%20padel%20encosta%20do%20sol")
    .concat("&dates=", `${beginDateFormatted}%2F${endDateFormatted}`);
};
