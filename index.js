const selectFrom = document.getElementById('select1');
const selectTo = document.getElementById('select2');
const optionsFrom = document.querySelectorAll('#option1 .option');
const selectValueFrom = document.querySelector('#select1 .select_value');
const selectValueTo = document.querySelector('#select2 .select_value');
const optionFrom = document.getElementById('option1');
const optionsTo = document.querySelectorAll('#option2 .option');
const optionTo = document.getElementById('option2');
const fromValue = document.querySelector('.from input');
const toValue = document.querySelector('.to input');
const themeToggle = document.getElementById('slider');

document.addEventListener('click', function(evt) {
    if (!selectFrom.contains(evt.target)) {
        if (toggleFrom) {
            toggleFrom = !toggleFrom;
            optionFrom.style.display = 'none';
        }
    }
    if (!selectTo.contains(evt.target)) {
        if (toggleTo) {
            toggleTo = !toggleTo;
            optionTo.style.display = 'none';
        }
    }
})

selectFrom.addEventListener('click', openOptionFrom);

let toggleFrom = false;

function openOptionFrom() {

    if (toggleTo) {
        toggleTo = !toggleTo;
        optionTo.style.display = 'none';
    }
    toggleFrom = !toggleFrom;
    if (toggleFrom) {
        optionFrom.style.display = 'block';
    } else {
        optionFrom.style.display = 'none';
    }
    selectOptionFrom();
}

function selectOptionFrom() {
    for (let i = 0; i < optionsFrom.length; i++) {
        const element = optionsFrom[i];
        element.addEventListener('click', function() {
            if (element.innerText == selectValueTo.innerText) {
                // Swap from and to element if both are same on slect
                selectValueTo.innerText = selectValueFrom.innerText;
                selectValueFrom.innerText = element.innerText;
                convertFrom();
            } else {
                selectValueFrom.innerText = element.innerText;
                convertFrom();
            }
        })
    }
}

fromValue.addEventListener('input', convertFrom);

function convertFrom() {

    if (isNaN(fromValue.value)) {
        return toValue.value = '';
    }

    if (selectValueFrom.innerText == 'Pound' && selectValueTo.innerText == 'Kilogram') {
        toValue.value = checkIfContainsDecimalAndTruncate(fromValue.value / 2.205);
    } else if (selectValueFrom.innerText == 'Pound' && selectValueTo.innerText == 'Tonne') {
        toValue.value = checkIfContainsDecimalAndTruncate(fromValue.value / 2205);
    } else if (selectValueFrom.innerText == 'Pound' && selectValueTo.innerText == 'Gram') {
        toValue.value = checkIfContainsDecimalAndTruncate(fromValue.value * 454);
    } else if (selectValueFrom.innerText == 'Pound' && selectValueTo.innerText == 'Ounce') {
        toValue.value = checkIfContainsDecimalAndTruncate(fromValue.value * 16);
    }

    if (selectValueFrom.innerText == 'Kilogram' && selectValueTo.innerText == 'Pound') {
        toValue.value = checkIfContainsDecimalAndTruncate(fromValue.value * 2.205);
    } else if (selectValueFrom.innerText == 'Kilogram' && selectValueTo.innerText == 'Tonne') {
        toValue.value = checkIfContainsDecimalAndTruncate(fromValue.value / 1000);
    } else if (selectValueFrom.innerText == 'Kilogram' && selectValueTo.innerText == 'Gram') {
        toValue.value = checkIfContainsDecimalAndTruncate(fromValue.value * 1000);
    } else if (selectValueFrom.innerText == 'Kilogram' && selectValueTo.innerText == 'Ounce') {
        toValue.value = checkIfContainsDecimalAndTruncate(fromValue.value * 35.274);
    }

    if (selectValueFrom.innerText == 'Tonne' && selectValueTo.innerText == 'Pound') {
        toValue.value = checkIfContainsDecimalAndTruncate(fromValue.value * 2205);
    } else if (selectValueFrom.innerText == 'Tonne' && selectValueTo.innerText == 'Kilogram') {
        toValue.value = checkIfContainsDecimalAndTruncate(fromValue.value * 1000);
    } else if (selectValueFrom.innerText == 'Tonne' && selectValueTo.innerText == 'Gram') {
        toValue.value = checkIfContainsDecimalAndTruncate(fromValue.value * 1e+6);
    } else if (selectValueFrom.innerText == 'Tonne' && selectValueTo.innerText == 'Ounce') {
        toValue.value = checkIfContainsDecimalAndTruncate(fromValue.value * 35274);
    }

    if (selectValueFrom.innerText == 'Gram' && selectValueTo.innerText == 'Pound') {
        toValue.value = checkIfContainsDecimalAndTruncate(fromValue.value * 454);
    } else if (selectValueFrom.innerText == 'Gram' && selectValueTo.innerText == 'Kilogram') {
        toValue.value = checkIfContainsDecimalAndTruncate(fromValue.value / 1000);
    } else if (selectValueFrom.innerText == 'Gram' && selectValueTo.innerText == 'Tonne') {
        toValue.value = checkIfContainsDecimalAndTruncate(fromValue.value / 1e+6);
    } else if (selectValueFrom.innerText == 'Gram' && selectValueTo.innerText == 'Ounce') {
        toValue.value = checkIfContainsDecimalAndTruncate(fromValue.value / 28.35);
    }

    if (selectValueFrom.innerText == 'Ounce' && selectValueTo.innerText == 'Pound') {
        toValue.value = checkIfContainsDecimalAndTruncate(fromValue.value / 16);
    } else if (selectValueFrom.innerText == 'Ounce' && selectValueTo.innerText == 'Kilogram') {
        toValue.value = checkIfContainsDecimalAndTruncate(fromValue.value / 35.274);
    } else if (selectValueFrom.innerText == 'Ounce' && selectValueTo.innerText == 'Tonne') {
        toValue.value = checkIfContainsDecimalAndTruncate(fromValue.value / 35274);
    } else if (selectValueFrom.innerText == 'Ounce' && selectValueTo.innerText == 'Gram') {
        toValue.value = checkIfContainsDecimalAndTruncate(fromValue.value * 28.35);
    }
}

function checkIfContainsDecimalAndTruncate(value) {
    if (String(value).indexOf('.') == -1) {
        return value;
    } else {
        return value.toFixed(6)
    }
}

selectTo.addEventListener('click', openOptionsTo);
let toggleTo = false;

function openOptionsTo() {
    if (toggleFrom) {
        toggleFrom = !toggleFrom;
        optionFrom.style.display = 'none';
    }
    toggleTo = !toggleTo;
    if (toggleTo) {
        optionTo.style.display = 'block';
    } else {
        optionTo.style.display = 'none';
    }
    selectOptionTo();
}

function selectOptionTo() {
    for (let i = 0; i < optionsTo.length; i++) {
        const element = optionsTo[i];
        element.addEventListener('click', function() {
            if (element.innerText == selectValueFrom.innerText) {
                // Swap from and to element if both are same on slect
                selectValueFrom.innerText = selectValueTo.innerText;
                selectValueTo.innerText = element.innerText;
                convertFrom()
            } else {
                selectValueTo.innerText = element.innerText;
                convertFrom()
            }
        })
    }
}

//theme toggler
themeToggle.addEventListener('change', toggelTheme);

function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
}

function toggelTheme() {
    if (localStorage.getItem('theme') == 'theme-dark') {
        setTheme('theme-light')
    } else {
        setTheme('theme-dark')
    }
}

(function() {
    if (localStorage.getItem('theme') === 'theme-dark') {
        setTheme('theme-dark');
        document.getElementById('slider').checked = false;
    } else {
        setTheme('theme-light');
        document.getElementById('slider').checked = true;
    }
})();