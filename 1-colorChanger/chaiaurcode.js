const buttons = document.querySelectorAll('.button');
// console.log(buttons);
const body = document.body;

buttons.forEach(function (button) {
  // console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target.id);
    if (e.target.id) {
      body.style.backgroundColor = e.target.id;
    }
  });
});
