let list = [];

document.addEventListener("DOMContentLoaded", function(){
  fetch('https://randomuser.me/api?results=10&nat=BR')
    .then(response => response.json())
    .then(data => {
      list = data.results;
      console.log('###', list);
    })
    .catch(error => {
      console.log(error);
      throw new Error('Não foi possível carregar a lista de contatos.');
    })
});
