function loadQuote(id) {
  
  const API_URL = 'https://stoicquotesapi.com/v1/api/quotes/random';
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
    const x = JSON.stringify(data);
    const y = JSON.parse(x);
    elem.innerHTML = "\"" + y.body + "\"" + " - " + y.author;
    console.log(data)
  })
  .catch((err) => {
    // Do something for an error here
  })
}
