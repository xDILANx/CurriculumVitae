//CARRUSEL
/*const slider = document.querySelector('#slider'); //obtengo el contenedor principal(slider)
const sliderSection = document.querySelectorAll('.sliderSection'); //obtengo todos los sliderSection
const sliderSectionLast = sliderSection[sliderSection.length - 1]; //obtengo el ultimo sliderSection

slider.insertAdjacentElement("afterbegin", sliderSectionLast); //coloca el ultimo sliderSection de primero dentro contnedor

function next() {
    const sliderSectionFirst = document.querySelectorAll('.sliderSection')[0]; //obtengo el primer sliderSection
    slider.style.marginLeft = "-200%";
    slider.insertAdjacentElement("beforeend", sliderSectionFirst);
    slider.style.marginLeft = "-100%";
}

function back() {
    const sliderSection = document.querySelectorAll('.sliderSection'); //obtengo todos los sliderSection
    const sliderSectionLast = sliderSection[sliderSection.length - 1]; //obtengo el ultimo sliderSection
    slider.style.marginLeft = "0";
    slider.insertAdjacentElement('afterbegin', sliderSectionLast);
    slider.style.marginLeft = "-100%";
}*/

function showContact() {
    const form = document.querySelector('.form');
    form.classList.toggle('hide')
}


    const xhttp = new XMLHttpRequest()
    const url = 'projects.html'
    const projects = document.querySelector('.projects')
    projects.addEventListener('click', e => {
        xhttp.onreadystatechange = function(){
            if(this.readyState == 4 && this.status == 200){
                console.log(this.responseText)
                document.getElementById('sectionRight').innerHTML = this.responseText
            }
        }
        xhttp.open('GET', url, true)
        xhttp.send()
        e.preventDefault()
    })
  






          

     
       

     