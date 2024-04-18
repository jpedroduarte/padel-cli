export const MATCH_TIME_IN_MINUTES = 90;
const TIME_FORMAT_24_HOUR_REGEX = /\b([0-9]|[01][0-9]|2[0-3])\b:\b([0-9]|[012345][0-9])\b/g;

export const validateTimeFormat = (value) => TIME_FORMAT_24_HOUR_REGEX.test(value);
