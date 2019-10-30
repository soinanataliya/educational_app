const formatDate = (date) => {
  const format = val => (val < 10 ? `0${val}` : val);

  const dd = format(date.getDate());
  const mm = format(date.getMonth() + 1);
  const yyyy = format(date.getFullYear());
  const hh = format(date.getHours());
  const mi = format(date.getMinutes());
  const ss = format(date.getSeconds());

  return `${dd}.${mm}.${yyyy} ${hh}:${mi}:${ss}`;
};

export default formatDate;
