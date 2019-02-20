document.addEventListener("DOMContentLoaded", function() {
  let input = document.querySelector('#search');
  input.addEventListener('input', function () {
    let cards = document.querySelectorAll('.card');

    if (this.value.length > 0) {
      cards.forEach(card => {
        let name = card.querySelector('.card-details__text--detach span').textContent;
        let pattern = new RegExp(this.value, 'i');

        if (!pattern.test(name)) {
          card.classList.add('invisible');
        } else {
          card.classList.remove('invisible');
        }
      });
    } else {
      cards.forEach(card => card.classList.remove('invisible'));
    }
  });
});
