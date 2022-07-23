class Products {

    constructor() {
        this.classNameActive = 'products-element__btn_active';
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
        
        console.log(DATABASE_CATALOG);

        DATABASE_CATALOG.forEach(({id, mark, model, year, run, img, price, vin}) => {
            
            let activeClass = '';
            let activeText = '';

            if (productsStore.indexOf(id) === -1){
                activeText = this.labelAdd;            
            } else {
                activeClass = ' '+this.classNameActive;
                activeText = this.labelRemove;
            }


            htmlCatalog += `
                <li class="products-element">
                    <span class="products-element__fullname">
                        <span class="products-element__mark">${mark}</span> 
                        <span class="products-element__model">${model}</span>
                        <span class="products-element__year">${year}</span>
                    </span>   
                    <img class="products-element__img" src="${img}" />
                    <span class="products-element__fullprice">
                        <span class="products-element__price">
                            Актуальная цена: ${price.toLocaleString()}Р
                        </span>
                        <span class="products-element__run">Пробег: ${run} Км</span>
                    </span>
                    <span class="products-element__fullprice">
                        <span class="products-element__price">
                            Vin номер: ${vin}
                        </span>
                    </span>  
                    <button class="products-element__btn${activeClass}" onclick="productsPage.handleSetLocationStorage(this, '${id}');">
                        ${activeText}
                    </button>
                </li>
            `;
            
        })
        
        

        const html = `
        <ul class="products-container">
            ${htmlCatalog}
        </ul>
        `;

        ROOT_PRODUCTS.innerHTML = html;
    } 
}

const productsPage = new Products();
function catalogRender(){
    productsPage.render();
}
setTimeout(catalogRender, 100);
