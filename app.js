const btns = document.querySelectorAll('button');

btns.forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    const card = btn.parentElement.parentElement.parentElement;
    const reponse = card.querySelector('.reponse');
    const btnMoins = card.querySelector('.btn-minus');
    const btnPlus = card.querySelector('.btn-plus');

    if (e.currentTarget.classList.contains('btn-plus')) {
      reponse.classList.add('show');
      btnMoins.classList.add('show');
      btnPlus.classList.add('not-show');
    } else {
      reponse.classList.toggle('show');
      btnMoins.classList.toggle('show');
      btnPlus.classList.toggle('not-show');
    }
  });
});
