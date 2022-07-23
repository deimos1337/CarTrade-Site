class Shopping {
    handlerClear() {
        ROOT_SHOPPING.innerHTML = '';
    }

    render() {
        const productsStore = localStorageUtil.getProducts();
        let htmlCatalog = '';

        DATABASE_CATALOG.forEach(({ id, mark, model, year}) => {
            let name = mark+' '+model+' '+year;
            if (productsStore.indexOf(id) !== -1) {
                htmlCatalog += `
                    <div class="shopping-element__name"> ${name}</div>                                
                `

            }
        });

        const html = `
            <div class="shopping-container">
                <div class="shopping__close" onclick="shoppingPage.handlerClear();"></div>
                <div class="shopping__table">
                    ${htmlCatalog}
                </div>
                <div class="shopping-element__link">
                    <a href="favorite.html" class="link">Перейти в избранное</a>
                </div>
            </div>
        `;

        ROOT_SHOPPING.innerHTML = html;
    }
};

const shoppingPage = new Shopping();