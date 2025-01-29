// Theme switching Functionality
// Get elements involved
const themeSwitch = document.querySelector('.themeSwitch');
const switchBall = document.querySelector('.switchBall');

// switching logic
const switchRect = themeSwitch.getBoundingClientRect(); // get position details of the themeswitch
themeSwitch.addEventListener('click', (event) => {
    const clickX = event.clientX - switchRect.left; // get click distance relative to themeSwitch
    const root = document.querySelector('html');
    const main = document.querySelector('main');
    const input = document.querySelector('.input');
    const inputText = Array.from(document.querySelectorAll('.input-text'));
    const keys = Array.from(input.querySelectorAll('input[type = button]'));
    const hotKey = document.querySelector('.hotKey');
    root.classList.remove('theme1', 'theme2', 'theme3'); // remove existing theme
    main.classList.remove('text-[var(--text-light)]', 'text-[var(--text-mid)]', 'text-[var(--text-dark)]'); // remove key colours
    input.classList.remove('text-[var(--text-light)]', 'text-[var(--text-mid)]', 'text-[var(--text-dark)]');
    switchBall.classList.remove('translate-x-[0%]', 'translate-x-[-50%]', 'left-[5%]', 'right-[5%]', 'left-[50%]'); // remove all existing positioning

    function oddKeys2 () {
        inputText.forEach(text => {
            text.classList.remove('text-[var(--text-light)]');
            text.classList.add('text-[var(--text-mid)]');
        })
        hotKey.classList.remove('text-[var(--text-light)]');
        hotKey.classList.add('text-[var(--text-dark)]');    
    }

    function oddKeys1 () {
        inputText.forEach(text => {
            text.classList.remove('text-[var(--text-light)]', 'text-[var(--text-mid)]', 'text-[var(--text-dark)]'); // remove key colours
            text.classList.add('text-[var(--text-light)]');
        })
        hotKey.classList.remove('text-[var(--text-light)]', 'text-[var(--text-mid)]', 'text-[var(--text-dark)]'); // remove key colours
        hotKey.classList.add('text-[var(--text-light)]');    
    }
    


    if (clickX <= switchRect.width / 3) {
        themeIndex = 0; //update theme index
        switchBall.classList.add('left-[5%]', 'translate-x-[0%]'); //add new positioning
        root.classList.add('theme1'); // add new theme
        main.classList.add('text-[var(--text-light)]'); // add new key colour
        input.classList.add('text-[var(--text-dark)]');
        oddKeys1();
    }

    else if (clickX >= switchRect.width / 3 && clickX < switchRect.width * (2/3)) {
        themeIndex = 1;
        switchBall.classList.add('left-[50%]', 'translate-x-[-50%]');
        root.classList.add('theme2');
        main.classList.add('text-[var(--text-dark)]');
        input.classList.add('text-[var(--text-dark)]');
        oddKeys1();
    }

    else if (clickX > switchRect.width * (2/3)) {
        themeIndex = 2;
        switchBall.classList.add('right-[5%]' ,'translate-x-[0%]');
        root.classList.add('theme3');
        main.classList.add('text-[var(--text-light)]');
        input.classList.add('text-[var(--text-light)]');
        oddKeys2();
        keys.forEach(key => {
            key.addEventListener('active', () => {
                keys.forEach(key => {key.style.backgroundColor = "var(--key-bg-3)"})
                key.classList.remove('active:brightness-75', 'hover:brightness-90')
                key.style.backgroundColor = "var(--key-bg-1)";
            })
        })
    }
})