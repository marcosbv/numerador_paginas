function numeraPaginas(event) {
   // alert(event.data);
    var numeros = event.data.split("|");

   // alert(numeros);
    if(numeros.length>=2) {
        var inicio = parseInt(numeros[0]);
        var final = parseInt(numeros[1]);
        var frameDoc = document;
        var divs = frameDoc.getElementsByTagName("div");
    
        for(var i=divs.length - 1;i>=0;i--) {
            var parent = divs[i].parentNode;    
            parent.removeChild(divs[i]);
        }

        for(var i=inicio;i<=final;i++) {
            var divElement = frameDoc.createElement("div");
            divElement.className = "linha_header";
            divElement.innerHTML = i + "<img class=\"imagem\" src=\"rubrica1.png\" />" ;
            frameDoc.body.appendChild(divElement);
        }

        window.print()
    }
}

// listeners de eventos:
// mensagem de outra janela
window.addEventListener('message', numeraPaginas, false);