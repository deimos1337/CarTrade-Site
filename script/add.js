document.querySelector('#add-submit').onclick = function (event) {
    event.preventDefault();
    let updateDataBaseData = {
        "mark" :document.querySelector('#add-mark').value,
        "model" :document.querySelector('#add-model').value,
        "year" :document.querySelector('#add-year').value,
        "run" :document.querySelector('#add-run').value,
        "price" :document.querySelector('#add-price').value,
        "vin" :document.querySelector('#add-vin').value,
        "img" :document.querySelector('#add-img').value,
    };

    ajax('core/add.php', 'POST', updateDataBase, updateDataBaseData);

}

function updateDataBase(result) {
    if (result == 1) {
        alert('Данные успешно добавлены!');
    }
    else {
        alert('Ошибка добавления');
    }
} 
