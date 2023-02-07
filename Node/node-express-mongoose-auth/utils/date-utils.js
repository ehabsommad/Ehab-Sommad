module.exports = class DateUtils {
  static addDays(days) {
    return Date.now() + 3600 * 1000 * 24 * days;
  }

  static minutes(minutes) {
    return Date.now() + minutes * 60 * 1000;
  }
};
