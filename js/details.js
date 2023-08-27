
function repeated() {
    const background = document.getElementById('body_tag');
    details = document.getElementsByClassName('details');
    console.log(background.style.backgroundColor); 

    if(background.style.backgroundColor === 'rgb(52, 58, 68)') {
        for (let index = 0; index < details.length; index++) {
            const element = details[index];
            element.style.color = 'white';
        }
    }
    else {
        for (let index = 0; index < details.length; index++) {
            const element = details[index];
            element.style.color = 'black';
        }
    }
}


document.getElementById('color_switch').addEventListener('click', repeated);