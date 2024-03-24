alert('tap anywhere for see colors')
let body = document.querySelector('body');
body.addEventListener('click', (e) => { 
    const imgs = [
        'c1.png',
        'c2.png',
        'c3.png',
        'c4.png',
        'c5.png',
        'c6.png'
    ];
    let pic = imgs[Math.floor(Math.random() * imgs.length)];
    let x = e.pageX - e.target.offsetLeft;
    let y = e.pageY - e.target.offsetTop;
    let span = document.createElement('span');  
    span.style.background = `url(${pic})`;  
    span.style.backgroundSize = "contain";  
    span.style.backgroundPosition = "center";  
    span.style.backgroundRepeat= "no-repeat";  
    body.appendChild(span);
    span.style.left = x + 'px';
    span.style.top = y + 'px';

    setTimeout(() => {
        span.remove();
    }, 4000);
});
