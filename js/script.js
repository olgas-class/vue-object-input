const { createApp } = Vue;

createApp({
  data() {
    return {
      newProduct: {
        name: "",
        price: null
      },
      products: [
        {
          name: "Smartphone",
          price: 399,
        },
        {
          name: "TV",
          price: 1220,
        },
      ],
    };
  },
  methods: {
    addProduct() {
        // Pusho la copia, non l'oggetto originale
        this.products.push({...this.newProduct});
        this.newProduct.name = "";
        this.newProduct.price = null;
    }
  }
}).mount("#app");
