class LocalStorageUtilCatalog {
    constructor() {
        this.keyName = 'catalog';
    }

    getCatalog() {
        const catalogLocalStorage = localStorage.getItem(this.keyName);
        if (catalogLocalStorage !== null) {
            return JSON.parse(catalogLocalStorage);
        }
        return [];
    }

    putCatalog() {
        let catalog = CATALOG;

        localStorage.setItem(this.keyName, JSON.stringify(catalog));

    }
    
}


let LOCAL_CATALOG = JSON.parse(localStorage.getItem('catalog'));
let DATABASE_CATALOG = JSON.parse(localStorage.getItem('database'));

const localStorageUtilCatalog = new LocalStorageUtilCatalog();
LocalStorageCatalog = LocalStorageUtilCatalog.getCatalog