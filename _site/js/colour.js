
var divs = document.querySelectorAll('.post-content');

for(var i = 0; i < divs.length; i++) {
    var rgb = [];

    for(var i = 0; i < 3; i++)
        rgb.push(Math.floor(Math.random() * 255));

    divs[i].style.backgroundColor = 'rgb('+ rgb.join(',') +')';
}