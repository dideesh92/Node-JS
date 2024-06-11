//async function declaration

var myHeaders = new Headers();
myHeaders.append("x-rapidapi-key", "3ebd5f7e5d600aa94e0d6b371c14b5f4");
myHeaders.append("x-rapidapi-host", "v3.football.api-sports.io");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("https://v3.football.api-sports.io/leagues", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));