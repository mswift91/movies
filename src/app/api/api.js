fetch('http://www.omdbapi.com?i=tt3896198&apikey=7eaca78c')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));

  