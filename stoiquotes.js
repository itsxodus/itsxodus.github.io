function loadQuote(id) {
  
  const API_URL = 'https://uselessfacts.jsph.pl/random.json?language=en';
  const elem = document.getElementById(id);
  
  fetch(API_URL, {
    method: "GET",
    headers: {
      "Content-type": "application/json;charset=UTF-8",
      'Accept': 'application/json',
    }
  })
  .then((response) => {
    return response.json()
  })
  .then((data) => {
    // Work with JSON data here
    elem.innerHTML = JSON.stringify(data);
    console.log(data)
  })
  .catch((err) => {
    // Do something for an error here
  })
}
