const paragrafos=document.querySelector('.paragrafos');
const ps=document.querySelectorAll('p');
const estilosBody=getComputedStyle(document.body);
const backgroundColorBody= estilosBody.backgroundColor;
for (p of ps) {
    p.style.backgroundColor=backgroundColorBody;
    p.style.color='#FFFFFF';
}