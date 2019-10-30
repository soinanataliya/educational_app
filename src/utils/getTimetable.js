
const getTimetable = async () => {
  const url = 'https://5daca7380af117001417072a.mockapi.io/api/v1/lessons';
  return fetch(url)
    .then(res => res.json());
};

export default getTimetable;
