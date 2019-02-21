document.addEventListener("DOMContentLoaded", function() {
  let input = document.querySelector('#search');
  input.addEventListener('input', function () {
    let cards = document.querySelectorAll('.card');
    let buttonAddUser = document.querySelector('.add-user');

    if (this.value.length > 0) {
      buttonAddUser.classList.add('invisible');
      cards.forEach(card => {
        let name = card.querySelector('.card-details__text--name span').textContent;
        let pattern = new RegExp(this.value, 'i');

        if (!pattern.test(name)) {
          card.classList.add('invisible');
        } else {
          card.classList.remove('invisible');
        }
      });
    } else {
      cards.forEach(card => card.classList.remove('invisible'));
      buttonAddUser.classList.remove('invisible');
    }
  });
});
