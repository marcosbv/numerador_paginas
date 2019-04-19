function init() {
    document.getElementById("txtNumInicial").focus();
}

function btnClick(evt) {
    var id=evt.target.id;
    if(id=="btn") {
        clickBtn();
    }

    if(id=="btn2") {
        document.getElementById("txtNumInicial").value = document.getElementById("spnNumFinal").innerHTML;
        clickBtn();
    }
   
}

function clickBtn() {
    var inicio = document.getElementById("txtNumInicial").value;
    var numPaginas = document.getElementById("txtNumFinal").value;
    var final = parseInt(inicio) + parseInt(numPaginas) - 1;
    var parent = window.parent;
    var iframeWindow = parent.frames[1];

    iframeWindow.postMessage(inicio + "|" + final, '*');
    document.getElementById("spnNumFinal").innerHTML=final + 1;
    document.getElementById("btn2").disabled=false;
    document.getElementById("btn2").focus();
}

document.addEventListener("keyup", function(event) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
      // Trigger the button element with a click
      var evtId = event.target.id;
      if(evtId=="txtNumFinal" || evtId=="txtNumInicial") {
          document.getElementById("btn").click();
      }
      else {
          var btn = document.getElementById("btn2");
          if(!btn.disabled) {
            btn.click();
          }
      }
    }
  }); 

// listeners de eventos:
// clique do botao
document.addEventListener("click", btnClick);
