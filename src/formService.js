import moment from "moment";

export const getMatchDayChoices = () => {
  const now = moment();
  return [...Array(12).keys()].map((dayOffset) => {
    const date = moment(now).startOf("day").add(dayOffset, "days");
    const dayRepresentation = date.calendar(null, {
      sameDay: "[Today]: dddd (DD/MM)",
      nextDay: "[Tomorrow]: dddd (DD/MM)",
      nextWeek: "dddd (DD/MM)",
      sameElse: "dddd (DD/MM)",
    });
    return {
      name: dayRepresentation,
      value: date,
    };
  });
};
