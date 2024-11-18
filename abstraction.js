class BatterArray {

    #items;

    constructor() {
        this.#items = [];
    }


    getItems() {
        return [...this.#items];
    }



    addItems(item) {

        this.#items.push(item);
    }


    removeItems(itemToDelete) {
        this.#items = this.#items.filter((filter) => item !== itemToDelete);
    }



    modifyItem(itemToChange, newValue) {
        const index = this.#items.indexOf(itemToChange);


        if (index !== -1) {
            this.#items[index] = newValue;
        }
    }




}