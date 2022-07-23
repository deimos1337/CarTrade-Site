class Admin {
    
    render() {
        let htmlAdmin = `
            <div class="admin-container__top">
                <div class="admin-container__change ${adminPanelClass}">
                    <div class="form-top">
                        <div class="form-top__container">
                            <span>Ваши данные</span>
                        </div>
                        
                        <div class="form-top__container">
                            <img class="form-top__icon" src="images/data.png" alt="">
                        </div>
                    </div>
                    <form >
                        <div class="form-element">
                            <div>Имя</div><input class="form-element__input" type="text" name="name" id="signup-name">
                        </div>
                        <div class="form-element">
                            <div>Дата рождения</div><input class="form-element__input" type="date" name="birthday" id="signup-birthday">
                        </div>
                        <div class="form-element">
                            <div>Старый Пароль</div><input class="form-element__input" type="password" name="pass" id="signup-old-pass" placeholder="Введите старый пароль">
                        </div>
                        <div class="form-element">
                            <div>Новый Пароль</div><input class="form-element__input" type="password" name="pass" id="signup-new-pass" placeholder="Введите новый пароль">
                        </div>
                        <div class="form-element">
                            <input  class="form-element__btn" type="submit" value="Изменить" id="signup-submit">
                        </div>
                    </form>
                    ${adminPanelDelete}    
                </div>
                ${adminPanel}
            </div>
            <div class="admin-container__bottom">
                
            </div>
        `;

        const html = `<div class="admin-container">${htmlAdmin}</div>`;

        ROOT_ADMIN.innerHTML = html;
    }
};



if (mail != 0 ){
    if (mail == 'admin@gmail.com'){
        type = 2;
    } else {
        type = 1;
    }
}

let adminPanel = ``;
let adminPanelDelete = ``;
let adminPanelClass = ``;

if (type == 2 ){
    adminPanel = `
            <div class="admin-container__panel">
                <div class="form-top">
                    <div class="form-top__container">
                        <span>Админ Панель</span>
                    </div>
                </div>
                <form >
                    <div class="form-element">
                        <div>Марка</div><input class="form-element__input" type="text" name="mark" id="add-mark" value="BMW">
                    </div>
                    <div class="form-element">
                        <div>Модель</div><input class="form-element__input" type="text" name="model" id="add-model" value="X5">
                    </div>
                    <div class="form-element">
                        <div>Год</div><input class="form-element__input" type="text" name="year" id="add-year" value="2013">
                    </div>
                    <div class="form-element">
                        <div>Пробег</div><input class="form-element__input" type="text" name="run" id="add-run" value="60700">
                    </div>
                    <div class="form-element">
                        <div>Стартовая цена</div><input class="form-element__input" type="text" name="price" id="add-price" value="1390000">
                    </div>
                    <div class="form-element">
                        <div>Vin номер</div><input class="form-element__input" type="text" name="vin" id="add-vin" value="5XYP64HC8MG178435">
                    </div>
                    <div class="form-element">
                        <div>Ссылка на фото</div><input class="form-element__input" type="text" name="price" id="add-img" value="https://i.ibb.co/r77ZsKT/BMW-X4.jpg">
                    </div>
                    <div class="form-element">
                        <input  class="form-element__btn" type="submit" value="Добавить" id="add-submit">
                    </div>                
            </div>
            
    `
    adminPanelDelete = `
        <div class="admin-container__delete"> 
            <form>
                    <div class="form-element">
                    <div>ID элемента</div><input class="form-element__input" type="pass" name="delete-id" id="delete-id" >
                </div>
                <div class="form-element">
                    <input  class="form-element__btn" type="submit" value="Удалить" id="delete-submit" value="9">
                </div>
                <div class="form-element">
                    <input  class="form-element__btn" type="submit" value="Ресет" id="reset">
                </div>
            </form>
        </div>
    `
} if (type == 1) {
    adminPanel = ``
    adminPanelClass = `admin-container__change_new`
} 




const adminPage = new Admin();

adminPage.render();