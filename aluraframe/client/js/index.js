var campos = [
  document.querySelector("#data"), // querySelector é uma API do DOM que permite buscar um elemento HTML do DOM usando um seletor CSS
  document.querySelector("#quantidade"),
  document.querySelector("#valor")
];

console.log(campos);


var tbody = document.querySelector('table tbody');

document.querySelector(".form").addEventListener("submit", function (event) {
  // alert('oi');
  event.preventDefault();

  var tr = document.createElement('tr');

  campos.forEach(function (campo) {
    var td = document.createElement('td');
    console.log(campo.value);
    td.textContent = campo.value;
    tr.appendChild(td);
  });

  var tdVolume = document.createElement('td');
  tdVolume.textContent = campos[1].value * campos[2].value;

  tr.appendChild(tdVolume);
  tbody.appendChild(tr);

  campos[0].value = '';
  campos[1].value = 1;
  campos[2].value = 0;

  campos[0].focus(); 
  
});
