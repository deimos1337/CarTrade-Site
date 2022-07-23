class Favorite {
    
    constructor() {
        this.classNameActive = 'favorite-element__btn_active';
        this.labelAdd = 'Добавить в избранное';
        this.labelRemove = 'Удалить из избранного';
    }

    handleSetLocationStorage(element, id) {
        const { pushProduct, products } = localStorageUtil.putProducts(id);

        if (pushProduct) {
            element.classList.add(this.classNameActive);
            element.innerHTML = this.labelRemove
        } else {
            element.classList.remove(this.classNameActive);
            element.innerHTML = this.labelAdd;
        }

        headerPage.render(products.length);

    }

    render() {
        const productsStore = localStorageUtil.getProducts();
        
        let htmlCatalog = '';

        DATABASE_CATALOG.forEach(({ id, mark, model, year, price, img, run, vin }) => {
            let name = mark+' '+model;

            let activeClass = '';
            let activeText = '';

            if (productsStore.indexOf(id) === -1){
                activeText = this.labelAdd;            
            } else {
                activeClass = ' '+this.classNameActive;
                activeText = this.labelRemove;
            }

            if (productsStore.indexOf(id) !== -1) {
                htmlCatalog += `
                    <li class="favorite-element">
                        <span class="favorite-element__img_container"><img class="favorite-element__img" src="${img}" /></span>
                        <span class="favorite-element__block">
                            <span class="favorite-element__name"> ${name}</span>
                            <table class="favorite-element__table">
                                <tr>
                                    <td>Актуальная цена</td><td>${price}</td>
                                </tr>
                                <tr>
                                    <td>Год выпуска</td><td>${year}</td>
                                </tr>
                                <tr>
                                    <td>Пробег</td><td>${run}</td>
                                </tr>
                                <tr>
                                    <td>Vin номер</td><td>${vin}</td>
                                </tr>
                                
                            </table>
                            <button class="favorite-element__btn${activeClass}"  onclick="favoritePage.handleSetLocationStorage(this, '${id}');">${activeText}</button>
                            <a href="contacts.html"><button class="favorite-element__btn" >Связаться с нами</button></a>                         
                        </span>
                    </li>                            
                `
            } 
        });

        const html = `
            
            <ul class="favorite-container">
                <div class="favorite__table">
                    ${htmlCatalog}
                </div>  
            </ul>
        `;

        ROOT_FAVORITE.innerHTML = html;
    }
}


console.log()

const favoritePage = new Favorite();
favoritePage.render();
    