export const convertDateAAAAMMDD = (d) => {
  const date = new Date(d);
  var day =
    Number(date.getDate()) >= 10 ? date.getDate() : `0${date.getDate()}`;
  var month = date.getMonth() + 1;
  var year = date.getFullYear();

  return `${year}/${month}/${day}`;
};
