var app = new Vue({
    el: '#app',
    data: {
        color: "red",
        product: 'Socks',
        image: 'Socks.jpg',
        inventory: 8,
        //inStock: false,
        details: ["80% cotton", "20% polyester", "Gender-neutral"],
        variants: [
            {
                variantId: 2234,
                variantColor: "green",
                variantImage: "Socks.jpg"
            },
            {
                variantId: 2235,
                variantColor: "blue",
                variantImage: "BlueSocks.jpg"
            }
        ],
        cart: 0
    },
    methods: {
        addToCart: function () {
            this.cart += 1
        },

        updateProduct(variantIamge) {
            this.image = variantIamge
        }
    }
})