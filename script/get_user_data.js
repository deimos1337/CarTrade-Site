let userEmail = getCookie('email');

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

ajax('core/get_user_data.php', 'POST', getUserData, { "email": userEmail });

let old_pass = '';

function getUserData(result) {
    result = JSON.parse(result);
    
    document.querySelector('#signup-name').value = result.name;
    document.querySelector('#signup-birthday').value = result.birthday;

    old_pass = result.password
}



document.querySelector('#signup-submit').onclick = function (event) {
    event.preventDefault();
    let updateData = {
        "email": userEmail,
        "name": document.querySelector('#signup-name').value,
        "old_pass": document.querySelector('#signup-old-pass').value,
        "old_pass_hash":(old_pass),
        "new_pass": document.querySelector('#signup-new-pass').value,
        "birthday": document.querySelector('#signup-birthday').value,
    };
    ajax('core/update_user_data.php', 'POST', updateUserData, updateData);

}

function updateUserData(result) {
    if (result == 1) {
        alert('Данные успешно обновлены!');
    } else if (result == 3){
        alert('Пароли не совпадают!');
    }
    else {
        alert('Ошибка обновления!');
    }
} 

