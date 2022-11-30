const imagenes= document.querySelectorAll('.IMAGENES NUEVAS')
const imagenesLight= document.querySelector('.IMAGENES NUEVAS')
const contenedorLight= document.querySelector('.IMAGENES NUEVAS')
const menuInicial1 =document.querySelector('menu')

imagenes.forEach(imagen =>{
    imagen.addEventListener('click', ()=>{

        aparecerImagen(imagen.getAttribute('src'))
    })
})

contenedorLight.addEventListener('click', (e)=>{
    if(e.target !== imagenesLight){
        contenedorLight.classList.toggle('show')
        imagenesLight.classList.toggle('showImage')
        menuInicial1.style.opacity= '1'
    }
})

const aparecerImagen= (imagen)=>{
    imagenesLight.src= imagen
    contenedorLight.classList.toggle('show')
    imagenesLight.classList.toggle('showImage')
    menuInicial1.style.opacity = '0'
}