let selectFrom = document.getElementById('select1');
let selectTo = document.getElementById('select2');
let optionsFrom = document.querySelectorAll('#option1 .option');
let selectValueFrom = document.querySelector('#select1 .select_value');
let selectValueTo = document.querySelector('#select2 .select_value');
let optionFrom = document.getElementById('option1');
let optionsTo = document.querySelectorAll('#option2 .option');
let optionTo = document.getElementById('option2');
let fromValue = document.querySelector('.from input');
let toValue = document.querySelector('.to input');
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
        element.addEventListener('click', function(evt) {
            selectValueFrom.innerText = element.innerText;
            convertFrom();
        })
    }
}

fromValue.addEventListener('input', convertFrom);

function convertFrom() {

    if (isNaN(fromValue.value)) {
        return toValue.value = '';
    }

    if (selectValueFrom.innerText == 'Pound' && selectValueTo.innerText == 'Kilogram') {
        toValue.value = (fromValue.value / 2.205);
    } else if (selectValueFrom.innerText == 'Pound' && selectValueTo.innerText == 'Tonne') {
        toValue.value = (fromValue.value / 2205);
    } else if (selectValueFrom.innerText == 'Pound' && selectValueTo.innerText == 'Gram') {
        toValue.value = (fromValue.value * 454);
    } else if (selectValueFrom.innerText == 'Pound' && selectValueTo.innerText == 'Ounce') {
        toValue.value = (fromValue.value * 16);
    }

    if (selectValueFrom.innerText == 'Kilogram' && selectValueTo.innerText == 'Pound') {
        toValue.value = (fromValue.value * 2.205);
    } else if (selectValueFrom.innerText == 'Kilogram' && selectValueTo.innerText == 'Tonne') {
        toValue.value = (fromValue.value / 1000);
    } else if (selectValueFrom.innerText == 'Kilogram' && selectValueTo.innerText == 'Gram') {
        toValue.value = (fromValue.value * 1000);
    } else if (selectValueFrom.innerText == 'Kilogram' && selectValueTo.innerText == 'Ounce') {
        toValue.value = (fromValue.value * 35.274);
    }

    if (selectValueFrom.innerText == 'Tonne' && selectValueTo.innerText == 'Pound') {
        toValue.value = (fromValue.value * 2205);
    } else if (selectValueFrom.innerText == 'Tonne' && selectValueTo.innerText == 'Kilogram') {
        toValue.value = (fromValue.value * 1000);
    } else if (selectValueFrom.innerText == 'Tonne' && selectValueTo.innerText == 'Gram') {
        toValue.value = (fromValue.value * 1e+6);
    } else if (selectValueFrom.innerText == 'Tonne' && selectValueTo.innerText == 'Ounce') {
        toValue.value = (fromValue.value * 35274);
    }

    if (selectValueFrom.innerText == 'Gram' && selectValueTo.innerText == 'Pound') {
        toValue.value = (fromValue.value * 454);
    } else if (selectValueFrom.innerText == 'Gram' && selectValueTo.innerText == 'Kilogram') {
        toValue.value = (fromValue.value / 1000);
    } else if (selectValueFrom.innerText == 'Gram' && selectValueTo.innerText == 'Tonne') {
        toValue.value = (fromValue.value / 1e+6);
    } else if (selectValueFrom.innerText == 'Gram' && selectValueTo.innerText == 'Ounce') {
        toValue.value = (fromValue.value / 28.35);
    }

    if (selectValueFrom.innerText == 'Ounce' && selectValueTo.innerText == 'Pound') {
        toValue.value = (fromValue.value / 16);
    } else if (selectValueFrom.innerText == 'Ounce' && selectValueTo.innerText == 'Kilogram') {
        toValue.value = (fromValue.value / 35.274);
    } else if (selectValueFrom.innerText == 'Ounce' && selectValueTo.innerText == 'Tonne') {
        toValue.value = (fromValue.value / 35274);
    } else if (selectValueFrom.innerText == 'Ounce' && selectValueTo.innerText == 'Gram') {
        toValue.value = (fromValue.value * 28.35);
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