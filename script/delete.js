document.querySelector('#delete-submit').onclick = function (event) {
    event.preventDefault();
    let deleteId = document.querySelector('#delete-id').value;
    console.log(deleteId);

    ajax('core/delete.php', 'POST', deleteDataBase, {'deleteId' : deleteId});

    function deleteDataBase(result) {
        if (result == 1) {
            alert('Данные успешно удалены!');
        }
        else {
            alert('Ошибка удаления');
        }
    }
}

document.querySelector('#reset').onclick = function (event) {
    event.preventDefault();

    setInterval(putDataBaseCatalog, 100);
}
