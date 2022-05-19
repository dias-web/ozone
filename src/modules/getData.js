const getData = () => {
  return fetch(
    "https://ozone-c58e7-default-rtdb.firebaseio.com/goods.json"
  ).then((response) => {
    return response.json();
  });
};

export default getData;
