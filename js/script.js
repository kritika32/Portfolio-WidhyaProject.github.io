console.log("Hello World");

let theme = localStorage.getItem('theme');
if (theme == null) {
    setTheme('light');
} else {
    setTheme(theme);
}
let themedot = document.getElementsByClassName('theme-dot');

for (var i = 0; i < themedot.length; i++) {
    themedot[i].addEventListener('click', function() {
        var mode = this.dataset.mode;
        console.log('Option Clicked: ', mode);
        setTheme(mode);
    })
}

function setTheme(mode) {
    if (mode == 'light') {
        document.getElementById('theme-style').href = '../css-files/style.css';
    }
    if (mode == 'blue') {
        document.getElementById('theme-style').href = '../css-files/blue.css';
    }
    if (mode == 'green') {
        document.getElementById('theme-style').href = '../css-files/green.css';
    }
    if (mode == 'purple') {
        document.getElementById('theme-style').href = '../css-files/purple.css';
    }

    localStorage.setItem('theme', mode);
}