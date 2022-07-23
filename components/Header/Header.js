class Header {
    handlerOpenShoppingPage() {
        shoppingPage.render();
    }



    render() {
        const html = `
            <div class="top">
                <div class="logo-conteiner">
                    <div class="logo">
                        <a class="link" href="index.html">CARTRADE</a>
                    </div>
                </div>
                <div class="top_bar">
                    <div class="top_bar_menu">
                        <div class="top_bar_menu_container">
                            <a class="link link_section" href="catalog.html">
                                <div class="top_bar_section">Ассортимент</div>
                            </a>
                            <a class="link link_section" href="contacts.html">
                                <div class="top_bar_section">Наши контакты</div>
                            </a>
                            <a class="link link_section" href="where.html">
                                <div class="top_bar_section">О нас</div>
                            </a>
                            <a class="link link_section" href="comments.html">
                                <div class="top_bar_section">Отзывы</div>
                            </a>
                        </div>
                    </div>
                    <div class="user_section">
                        <div class="user_section_container">
                            ${topBar}
                        </div>
                    </div>
                </div>
            </div>
        `;

        ROOT_HEADER.innerHTML = html;
    }
};

let mail = getCookie('email');
let type = 0;

if (mail != 0 ){
    if (mail == 'admin@gmail.com'){
        type = 2;
        console.log('admin');
    } else {
        type = 1;
        console.log('user');
    }
} else {
    console.log('none');
}




let topBar = `
    
    <a class="link link_section" href="login.html">
        <div class="top_bar_section">Войти</div>
    </a>
    <a class="link link_section" href="signup.html">
        <div class="top_bar_section">Зарегестрироваться</div>
    </a>
    
`

if (type >= 1 ){
    topBar = `
    <a class="link link_section">
        <div class="top_bar_section" onclick="headerPage.handlerOpenShoppingPage();">Избранное</div>
    </a> 
    <a class="link link_section" href="cabinet.html">
        <div class="top_bar_section">Личный кабинет</div>
    </a>  
    <button id="logout" type="button" class="logout_link"><span>Выйти</span></button>
    `
} if (type = 0) {
    topBar = `
        <a class="link link_section" href="login.html">
            <div class="top_bar_section">Войти</div>
        </a>
        <a class="link link_section" href="signup.html">
            <div class="top_bar_section">Зарегестрироваться</div>
        </a>
    `
}





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


const headerPage = new Header();

const productsStore = localStorageUtil.getProducts();

headerPage.render(productsStore.length);