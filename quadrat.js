function quadrat() {
    var eingabe  = document.getElementById('eingabe');
    var ergebnis = eingabe.value * eingabe.value;
    alert("Das Quadrat von " + eingabe.value + " * " + eingabe.value + " = " + ergebnis);
    eingabe.value = 0;
   }
  
  var los = document.getElementById('los');
  los.addEventListener ('click', quadrat, true);

  function viereck() {
    var eingabe1  = document.getElementById('eingabe1');
    var eingabe2 = document.getElementById('eingabe2');
    var ergebnisvier = eingabe1.value * eingabe2.value;
    alert("Das Viereck von " + eingabe1.value + " * " + eingabe2.value + " = " + ergebnisvier);
    eingabe1.value = 0;
    eingabe2.value = 0;
   }
  
  var losvier = document.getElementById('losvier');
  losvier.addEventListener ('click', viereck, true);