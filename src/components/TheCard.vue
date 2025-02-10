<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import NoData from "./NoData.vue";
// import Loading from "./Loading.vue";
import TheDrawer from "./TheDrawer.vue";
import Chart from "./Chart.vue";
// import Date from "./Date.vue";

// import navb from "./navb.vue";

import { HeartIcon, StarIcon } from "@heroicons/vue/24/outline";
// import Form from "./Form.vue";
import ImagesSlider from "./ImagesSlider.vue";
import Vite2 from "../assets/images/vite2.png";
import Pop from "./Pop.vue";
// import ImageModal from "./ImageModal.vue";

const imageSrc = ref(Vite2);
const showModal = ref(false);

onMounted(() => {
  // Automatically open modal when the page is loaded
  showModal.value = true;
});
const props = {
  id: {
    type: [String, Number],
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  rating: {
    type: [Number, String],
    required: true,
  },
  dates: {
    type: String,
    required: false,
  },
  price: {
    type: [Number, String],
    required: true,
  },
};

const router = useRouter();

const navigateToProperty = () => {
  router.push(`/property/${props.id}`);
};

const handleWishlist = () => {
  console.log("Add to wishlist for property ID:", props.id);
  // Add your wishlist functionality here
};

const properties = ref([
  {
    imageUrl:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    ],
    location: "Bali, Indonesia",
    title: "Luxury Villa with Infinity Pool",
    price: 350,
    rating: 4.98,
    dates: "Mar 15-20",
    guests: 4,
    bedrooms: 2,
    beds: 2,
    bathrooms: 2.5,
    host: {
      name: "Sarah",
      isSuperhost: true,
      hostingSince: "3 years hosting",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    },
    reviews: 33,
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1510798831971-661eb04b3739?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    images: [
      "https://images.unsplash.com/photo-1510798831971-661eb04b3739?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1484301548518-d0e0a5db0fc8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    ],
    location: "Aspen, Colorado",
    title: "Cozy Mountain Cabin with Hot Tub",
    price: 425,
    rating: 4.95,
    dates: "Mar 1-6",
    guests: 6,
    bedrooms: 3,
    beds: 4,
    bathrooms: 2,
    host: {
      name: "Michael",
      isSuperhost: true,
      hostingSince: "5 years hosting",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    },
    reviews: 127,
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    images: [
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1613977257592-4871e5fcd7c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1614622367936-5e7b8d0b8882?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1614622367805-09e1e0960845?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    ],
    location: "Santorini, Greece",
    title: "Traditional Cave House with Caldera View",
    price: 550,
    rating: 4.99,
    dates: "Apr 10-15",
    guests: 2,
    bedrooms: 1,
    beds: 1,
    bathrooms: 1,
    host: {
      name: "Elena",
      isSuperhost: true,
      hostingSince: "7 years hosting",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    },
    reviews: 245,
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    images: [
      "https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1523217582562-09d0def993a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    ],
    location: "New York City, USA",
    title: "Luxury Penthouse in Manhattan",
    price: 800,
    rating: 4.92,
    dates: "Mar 20-25",
    guests: 4,
    bedrooms: 2,
    beds: 2,
    bathrooms: 2,
    host: {
      name: "David",
      isSuperhost: true,
      hostingSince: "4 years hosting",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    },
    reviews: 89,
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    images: [
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1470770903676-69b98201ea1c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1470770903676-69b98201ea1c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    ],
    location: "Norwegian Fjords",
    title: "Modern Cabin with Fjord Views",
    price: 375,
    rating: 4.97,
    dates: "Jun 1-6",
    guests: 4,
    bedrooms: 2,
    beds: 3,
    bathrooms: 1,
    host: {
      name: "Anders",
      isSuperhost: true,
      hostingSince: "2 years hosting",
      avatar:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    },
    reviews: 42,
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1523217582562-09d0def993a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    images: [
      "https://images.unsplash.com/photo-1523217582562-09d0def993a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1523217582562-09d0def993a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    ],
    location: "Paris, France",
    title: "Chic Apartment near Eiffel Tower",
    price: 450,
    rating: 4.94,
    dates: "May 15-20",
    guests: 2,
    bedrooms: 1,
    beds: 1,
    bathrooms: 1,
    host: {
      name: "Sophie",
      isSuperhost: true,
      hostingSince: "6 years hosting",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    },
    reviews: 167,
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    images: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1564078516393-cf04bd966897?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1564078516393-cf04bd966897?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    ],
    location: "Maldives",
    title: "Overwater Villa with Private Pool",
    price: 1200,
    rating: 5.0,
    dates: "Apr 1-6",
    guests: 2,
    bedrooms: 1,
    beds: 1,
    bathrooms: 1,
    host: {
      name: "Ibrahim",
      isSuperhost: true,
      hostingSince: "4 years hosting",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    },
    reviews: 78,
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    images: [
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    ],
    location: "Swiss Alps",
    title: "Luxury Chalet with Mountain Views",
    price: 900,
    rating: 4.96,
    dates: "Dec 10-15",
    guests: 8,
    bedrooms: 4,
    beds: 6,
    bathrooms: 3,
    host: {
      name: "Thomas",
      isSuperhost: true,
      hostingSince: "8 years hosting",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    },
    reviews: 203,
  },
]);
console.log(properties);
</script>

<template>
  <!-- <Date class="p-4" /> -->
  <!-- <navb /> -->
  <Pop />
  <ImagesSlider />
  <!-- <Form /> -->
  <div class="container mx-auto px-4">
    <!-- Responsive Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <div
        class="group cursor-pointer"
        @click="navigateToProperty"
        v-for="property in properties"
        :key="property.id"
      >
        <div class="relative aspect-square overflow-hidden rounded-xl">
          <img
            :src="property.imageUrl"
            :alt="property.title"
            class="h-auto w-full max-w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <button
            class="absolute top-3 right-3 p-2 rounded-full hover:bg-gray-100/90"
            @click.stop="handleWishlist"
          >
            <HeartIcon class="h-5 w-5 text-white hover:text-rose-500" />
          </button>
        </div>

        <div class="mt-3">
          <div class="flex justify-between items-start">
            <h3 class="font-medium text-gray-900">{{ property.location }}</h3>
            <div class="flex items-center gap-1">
              <StarIcon class="h-4 w-4 fill-current" />
              <span>{{ property.rating }}</span>
            </div>
          </div>
          <p class="text-gray-500 text-sm">{{ property.dates }}</p>
          <p class="text-gray-500 text-sm truncate">{{ property.title }}</p>
          <p class="mt-2">
            <span class="font-semibold">${{ property.price }}</span>
            <span class="text-gray-500"> night</span>
          </p>
        </div>
      </div>
    </div>
  </div>
  <!-- <ImageModal v-if="showModal" :imageSrc="imageSrc" /> -->
  <NoData />
  <!-- <Loading /> -->
  <!-- <TheDrawer /> -->
  <Chart />
</template>
