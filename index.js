//Ваш код будет здесь
window.addEventListener('load', function wListener() {
  var input1 = document.createElement('input');
  var input2 = document.createElement('input');
  var button = document.createElement('button');
  var div = document.createElement('div');
  var div2 = document.createElement('div');
  var div3 = document.createElement('div');

  button.innerHTML = 'Порахувати';

  div.innerHTML = 'Не число';
  div.className = 'error-message';

  div2.innerHTML = 'Не число';
  div2.className = 'error-message';

  div3.id = 'error-message';

  function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  }

  var body = document.querySelector('body');
  input1 = body.appendChild(input1);
  input2 = body.appendChild(input2);
  button = body.appendChild(button);

  button.addEventListener('click', function bntClick () {
    if (body.contains(div)) {
      body.removeChild(div);
    }
    if (body.contains(div2)) {
      body.removeChild(div2);
    }
    if (body.contains(div3)) {
      body.removeChild(div3);
    }
    if (!isNumeric(input1.value)) {
      body.insertBefore(div, input2);
    }
    if (!isNumeric(input2.value)) {
      body.insertBefore(div2, button);
    }
    if (isNumeric(input1.value) && isNumeric(input2.value)) {
      var sum = +input1.value + +input2.value;
      div3.innerHTML = 'Результат ' + sum;
      body.appendChild(div3);
    }
  })
});
