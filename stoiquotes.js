function loadQuote(id) {
  
  const API_URL = 'https://api.themotivate365.com/stoic-quote';
  const elem = document.getElementById('id');
  
  fetch(API_URL, {
    method: "GET",
    headers: {
      "Content-type": "application/json;charset=UTF-8"
      'Accept': 'application/json',
    }
  })
  .then((response) => {
    return response.json()
  })
  .then((data) => {
    // Work with JSON data here
    elem.innerHTML = data[0].quote;
    console.log(data)
  })
  .catch((err) => {
    // Do something for an error here
  })
}
