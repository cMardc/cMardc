dark_mode = true;

const body = document.getElementById('body_tag');
const switch_button = document.getElementById('color_switch');
const navigation_bar = document.getElementById('navbar_upside');
const search_button = document.getElementById('search_btn');
const search_bar = document.getElementById('search_bar');
const dropdown = document.getElementById('dropdown-nav');


function change_background_color() {
    const body = document.getElementById('body_tag');
    const switch_button = document.getElementById('color_switch');
    const navigation_bar = document.getElementById('navbar_upside');
    const search_button = document.getElementById('search_btn');
    const search_bar = document.getElementById('search_bar');
    const terminal = document.getElementById('terminal_div');
    const terminal_screen = document.getElementById('terminal_screen');
    code_pieces = document.getElementsByClassName('code');
    authors = document.getElementsByClassName('author');

    if(dark_mode) {
        body.style.backgroundColor = '#BBBBBB';
        switch_button.innerHTML = 'Dark <i class="fa-solid fa-circle-half-stroke" style="color: #242e32;"></i> ';
        switch_button.className = 'btn btn-outline-dark';
        navigation_bar.style.backgroundColor = '#AAAAAA';
        navigation_bar.className = 'navbar navbar-expand-lg navbar-light';
        search_button.className = 'btn btn-outline-dark my-2 my-sm-0';
        search_bar.style.backgroundColor = '#CCCCCC';
        terminal.style.backgroundColor = '#dddddd'
        terminal.style.color = '#212e14';
        terminal.style.borderColor = '#222222';
        terminal_screen.style.borderColor = '#111111';

        for (let index = 0; index < code_pieces.length; index++) {
            const element = code_pieces[index];
            element.style.backgroundColor = '#b1c4c7';
            element.style.color = '#1e2938';
            
            element.addEventListener('mouseenter', () => {
                element.style.backgroundColor = '#738c85'; 
                element.style.color = '#0d1f26';
            });
            
            element.addEventListener('mouseleave', () => {
                element.style.backgroundColor = '#b1c4c7'; 
                element.style.color = '#1e2938';
            });
        }

        for (let index = 0; index < authors.length; index++) {
            const element = authors[index];
            element.style.backgroundColor = '#dddddd';
            element.style.color = '#333333';
        }

    }
    else {
        body.style.backgroundColor = '#343A44';
        switch_button.innerHTML = 'Light <i class="fa-solid fa-circle-half-stroke" style="color: #d7d7d7;"></i> ';
        navigation_bar.style.backgroundColor = '#1f1f1f';
        navigation_bar.className = 'navbar navbar-expand-lg navbar-dark';
        switch_button.className = 'btn btn-outline-light';
        search_button.className = 'btn btn-outline-light my-2 my-sm-0';
        search_bar.style.backgroundColor = '#222222';
        terminal.style.backgroundColor = '#222222'
        terminal.style.color = '#1a5832';
        terminal.style.borderColor = '#6b5f4a';
        terminal_screen.style.borderColor = '#412804';


        for (let index = 0; index < code_pieces.length; index++) {
            const element = code_pieces[index];
            element.style.backgroundColor = '#1e2938';
            element.style.color = 'rgb(245, 245, 245)';
            
            element.addEventListener('mouseenter', () => {
                element.style.backgroundColor = '#374859'; 
                element.style.color = '#d9e284';
            });
            
            element.addEventListener('mouseleave', () => {
                element.style.backgroundColor = '#1e2938'; 
                element.style.color = 'rgb(245, 245, 245)';
            });
        }

        for (let index = 0; index < authors.length; index++) {
            const element = authors[index];
            element.style.backgroundColor = '#222222';
            element.style.color = '#EEEEEE';
        }
        
    }

    dark_mode = !dark_mode;
}

function show_fun_fact() {
    const fun_fact_div = document.getElementById('fun_fact');
    const button_text = document.getElementById('text_for_button');

    if (fun_fact_div.style.opacity === '1') {
        fun_fact_div.style.opacity = '0';
        button_text.innerHTML = 'View a fun fact 😎';
    } else {
        fun_fact_div.style.opacity = '1';
        button_text.innerHTML = 'Hide the fun fact?! 🤨';
    }
}

function search(id_of_text) {
    const text_box = document.getElementById(id_of_text);
    window.location.href = "/html/search.html?search=" + text_box.value;
}