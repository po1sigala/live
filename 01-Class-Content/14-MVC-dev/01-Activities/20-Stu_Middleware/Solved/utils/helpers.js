module.exports = {
  format_date: date => {
    return `${new Date(date).getMonth() + 2}/${new Date(date).getDate()}/${new Date(
      date
    ).getFullYear()}`;
  },
};
