document.addEventListener("DOMContentLoaded", function(){
  fetch('https://randomuser.me/api?results=10&nat=BR')
    .then(response => response.json())
    .then(data => {
      let containerUsers = document.querySelector('.container');
      let cards = '';

      data.results.forEach(user => cards += card(user));
      containerUsers.innerHTML = cards;
    })
    .catch(error => {
      console.log(error);
      throw new Error('Não foi possível carregar a lista de contatos.');
    })
});

let card = (user) => {
  return `
  <article class="card">
    <figure class="card-img">
      <img class="card-img__user" src="${user.picture.large}" alt="Foto do contato">
    </figure>
    <section class="card-details">
      <p class="card-details__text card-details__text--detach">${user.name.title} ${user.name.first} ${user.name.last}</p>
      <p class="card-details__text"><i class="card-details__icon far fa-envelope"></i> ${user.email}</p>
      <p class="card-details__text"><i class="card-details__icon fas fa-mobile"></i> ${user.cell}</p>
      <p class="card-details__text"><i class="card-details__icon fas fa-phone"></i> ${user.phone}</p>
    </section>
  </article>
`
};
