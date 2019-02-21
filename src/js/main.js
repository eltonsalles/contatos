document.addEventListener("DOMContentLoaded", () => getUsers());

let getUsers = () => {
  let spinner = document.querySelector('.spinner');
  spinner.classList.remove('invisible');

  fetch('https://randomuser.me/api?results=12&nat=BR')
    .then(response => response.json())
    .then(data => {
      let containerUsers = document.querySelector('.container');
      let cards = containerUsers.innerHTML;

      data.results.forEach(user => cards += card(user));
      containerUsers.innerHTML = cards;

      spinner.classList.add('invisible');
      document.querySelector('.add-user').classList.remove('invisible');
    })
    .catch(error => {
      console.log(error);
      throw new Error('Não foi possível carregar a lista de contatos.');
    });
};

let card = (user) => {
  return `
  <article class="card">
    <figure class="card-img">
      <img class="card-img__user" src="${user.picture.large}" alt="Foto do contato">
    </figure>
    <section class="card-details">
      <p class="card-details__text card-details__text--name">${user.name.title} <span>${user.name.first} ${user.name.last}</span></p>
      <p class="card-details__text"><i class="card-details__icon far fa-envelope"></i> ${user.email}</p>
      <p class="card-details__text">
        <span class="card-details__icon--mobile"><i class="card-details__icon fas fa-mobile"></i> ${user.cell}</span>
         <i class="card-details__icon fas fa-phone"></i> ${user.phone}
      </p>
    </section>
  </article>
`
};
