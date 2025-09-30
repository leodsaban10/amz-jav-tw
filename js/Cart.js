class Cart {
    constructor() {
        this.cartItems = []; // this is where we will store the items in the cart
    }


    addItem(product, quantity = 1) {
        // Step 1: Look for existing item with same product id
        const existingItem = this.cartItems.find(item => item.product.id === product.id);
        
        // Step 2: If we found it, add to quantity
        if (existingItem) {
            existingItem.quantity += quantity;
        } 
        // Step 3: If not found, add as new item
        else {
            this.cartItems.push({
                product: product,
                quantity: quantity
            });
        }
    }
    getItemCount() {
        let totalCount = 0;

        //Go through each item in the cart
        for (let item of this.cartItems) {
            totalCount += item.quantity;
        }

        return totalCount;
    }
    calculateTotal() {
        let productTotal = 0;

        for (let item of this.cartItems) {
            item.quantity * item.product.price;
        }
        return productTotal;
    }
}
