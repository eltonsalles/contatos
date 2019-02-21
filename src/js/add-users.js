document.addEventListener("DOMContentLoaded", function() {
  let buttonAddUser = document.querySelector('.add-user');
  buttonAddUser.addEventListener('click', function () {
    this.classList.add('invisible');
    getUsers();
  });
});
