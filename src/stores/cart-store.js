import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", {
  state: () => ({
    cartItems: [
      // Example cart items
      { id: 1, name: "Product A", price: 10, quantity: 2 },
      { id: 2, name: "Product B", price: 20, quantity: 1 },
    ],
  }),
  getters: {
    // Total items in the cart
    totalItems: (state) => {
      return state.cartItems.reduce((total, item) => total + item.quantity, 0);
    },

    // Total price of the cart
    totalPrice: (state) => {
      return state.cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0,
      );
    },

    // Find a specific item by ID
    getItemById: (state) => {
      return (id) => state.cartItems.find((item) => item.id === id);
    },

    // Check if the cart is empty
    isEmpty: (state) => state.cartItems.length === 0,
  },
  actions: {
    // Add an item to the cart
    addToCart(product) {
      const existingItem = this.getItemById(product.id);
      if (existingItem) {
        existingItem.quantity += product.quantity;
      } else {
        this.cartItems.push(product);
      }
    },

    // Remove an item from the cart
    removeFromCart(productId) {
      this.cartItems = this.cartItems.filter((item) => item.id !== productId);
    },

    // Clear the entire cart
    clearCart() {
      this.cartItems = [];
    },
    },
  
});
