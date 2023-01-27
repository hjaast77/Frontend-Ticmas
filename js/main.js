//modifica los estilos para que el CV ocupe una hoja a4
function scaleCV(){
    document.body.classList.add("scale-cv")
}

/* // vuelve a poner en default los estilos. se lo invoca con
 con un timeout de 5sec luego de generar el pdf  */
function removeScaleCV(){
    document.body.classList.remove("scale-cv")
}
//se establece el elemento que contiene el contenido a imprimir
let areaCV = document.getElementById("cv-container");

let opt = {
    margin:       0,
    filename:     'mi-CV.pdf',
    image:        { type: 'jpeg', quality: 0.98 },
    html2canvas:  { scale: 2 },
    jsPDF:        { format: 'a4', orientation: 'portrait' }
  };

function generarCV(){
    html2pdf(areaCV, opt)
}

let botonCv = document.getElementById("boton-dwnld");
botonCv.addEventListener('click', () =>{
  scaleCV()
  generarCV()
  setTimeout(removeScaleCV, 5000)
})