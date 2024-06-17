const app = {
    data (){
        return {
            title: 'Curso de Vue 3',
            name: 'Carlos',
            lastName: 'Ferreira',            
            products: [
                {
                    title: "Imagem 1",
                    description: "Imagem legal",
                    image: "./assets/menino.jpg",
                    stars: "5",
                },
                {
                    title: "Imagem 2",
                    description: "Imagem legal (2)",
                    image: "./assets/mae_filha.jpg",
                    stars: "0",
                },
            ],
            cart: [],
        }
    },
    methods: {
        
        addCart (product) {
            this.cart.push(product)
        },

        inCart (product) {
            return this.cart.indexOf(product) != -1
        },

        removeCart (product) {
            this.cart = this.cart.filter((prod,index) => {
                return prod != product;
            })
        }
    },
    computed: {
        fullName () {
            return this.name + ' ' + this.lastName
        }
    }
}
Vue.createApp(app).mount("#app");
