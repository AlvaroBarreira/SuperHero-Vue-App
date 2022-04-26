<script >
import { defineComponent, computed, watchEffect } from 'vue'
import { Carousel, Pagination, Navigation, Slide  } from 'vue3-carousel';
import CardCarouselVue from '../CardCarousel/CardCarousel.vue';
import 'vue3-carousel/dist/carousel.css';
import { useStore } from 'vuex';

export default defineComponent({
  name: 'CarouselHeroes',
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
    CardCarouselVue,
  },
  
  setup(){
    const store = useStore();
    const results = computed(() => store.state.carouselCard);
    const loading = computed(() => store.state.loading)
    console.log(loading)
    return {
      results,
      loading
    }
  },
});

</script>

<template>

  <Carousel :autoplay="7000" :wrap-around="true" v-if="results.length > 0">
    <Slide v-for="slide in results" :key="slide">
      <div v-if="loading" class="carousel__item">
          <span>Loading...</span>
      </div>
      <div v-else class="carousel__item">
        <CardCarouselVue :result="slide" />
      </div>
    </Slide>

    <template #addons>
      <Navigation />
    </template>
  </Carousel>
</template>

<style scoped>

.carousel {
  width: 80%;
  margin: auto;
  height: 400px;
}

.carousel .carousel__next {
      background: #FFDE22;
    color: black !important;
}

.carousel .carousel__prev {
      background: #FFDE22;
    color: black !important;
}

.carousel .carousel__viewport .carousel__track .carousel__slide {
  height: 400px;
}
.carousel__slide > .carousel__item {
  transform: scale(1);
  opacity: 0.5;
  transition: 0.5s;
}
.carousel__slide--visible > .carousel__item {
  opacity: 1;
  transform: rotateY(0);  
}
.carousel__slide--next > .carousel__item {
  transform: scale(0.9) translate(-10px);
}
.carousel__slide--next {
}
.carousel__slide--prev > .carousel__item {
  transform: scale(0.9) translate(10px);
}
.carousel__slide--active > .carousel__item {
  transform: scale(1.1);
}


</style>