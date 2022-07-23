
let dataBase = [];
let dataBaseLenght = '';

function getDataBase(){
    
    for (let i = 1; i<15 ; i++){
        ajax('core/catalog.php', 'POST', updateCatalog,{ "id": i } );

        function updateCatalog(result){
            if (result != ('0null') ){
                result = JSON.parse(result);
                dataBase.push(result);
            }

        }

        console.log(dataBase);
        
    }
    
    
}

let getDataBaseCatalog = JSON.parse(localStorage.getItem('database'));


function putDataBaseCatalog() {
    
    if (dataBase!=null){
        localStorage.setItem('database', JSON.stringify(dataBase));
    }
}


getDataBase();



if (getDataBaseCatalog == null){
    setInterval(putDataBaseCatalog, 100);
} else if(getDataBaseCatalog.length == 0){
    setInterval(putDataBaseCatalog, 100);
} else {
    console.log('Всё норм');
}

function updateDataBaseStorage(){
    if (getDataBaseCatalog.length!=dataBase.length){
        localStorage.setItem('database', JSON.stringify(dataBase));
        console.log('Данные обновленны!!')
    }  else {
        console.log('Обновление не требуется!!')
    }
}

setTimeout(updateDataBaseStorage, 5000);