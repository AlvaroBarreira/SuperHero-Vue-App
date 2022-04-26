<script lang="js">
import { defineComponent, computed, ref } from "@vue/runtime-core";
import { useStore } from "vuex";
import Logo2 from '../../assets/background.jpg';
import shield from '../../assets/shield.png'
import PowerStats from '../PowerStats/PowerStats.vue';
import CardTeam from '../CardTeam/CardTeam.vue';

export default defineComponent({
    name: "SquadSection",
    components: { PowerStats,  CardTeam },
    
    setup() {

      const store = useStore();
      const heroes = computed(() =>JSON.parse(JSON.stringify(store.state.myTeam)))
      return {
          image: { backgroundImage: `url(${Logo2})` },
          heroes,
      };
    }
});
</script>

<template>
  <div :class="heroes.length > 0 ? 'squad__container' : 'squad-no-heroes__container'">
  
  
        <p class="length">{{heroes.length}}/6</p>
        <div v-if="heroes.length > 0" :style="image" class="squad__cards-container">
         
          <CardTeam v-for="card in heroes" :key="card" :heroe="card"/>

        </div>
        <div v-else :style="image" class="squad__no-cards-container">
          <div class="squad__text-container">
            <p class="squad__text">
                Your squad is empty, please add heroes, the maximum amount is 6 characters
            </p>
        </div>
        </div>
  

      <div class="squad__stats-container">
        <PowerStats /> 
      </div>
   
  </div>
</template>

<style>

.length {
   -webkit-text-stroke: 1px black;
    color: white;
    font-size: 20px;
    position: absolute;
    z-index: 1;
}

.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.25s ease-out;
}

.slide-up-enter-from {
  opacity: 0;
  transform: translateY(30px);
}

.slide-up-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}

.squad__container {
    margin-bottom: 25px;
    margin-top: 20px;
    max-width: 1540px;
    width: 100%;
    height: 600px;
    padding-right: var(--bs-gutter-x,.75rem);
    padding-left: var(--bs-gutter-x,.75rem);
    margin-right: auto;
    margin-left: auto;
    display: flex;
   
}

.squad-no-heroes__container {
    margin-bottom: 25px;
    margin-top: 20px;
    max-width: 1540px;
    width: 100%;
    height: 600px;
    padding-right: var(--bs-gutter-x,.75rem);
    padding-left: var(--bs-gutter-x,.75rem);
    margin-right: auto;
    margin-left: auto;
    display: flex;
}

.squad__stats-container {
    width: 25%;
    height: 100%;
    padding-bottom: 0px;
}

.squad__cards-container {
  background-position: center;
  background-size: cover;
  background-repeat: repeat;
  background-position: 50%;
  backdrop-filter: blur(7px);
  -webkit-backdrop-filter: blur(7px);
  width: 75%;
  height: auto;
  display: grid;
  align-items: center;
  grid-template-columns: repeat(1 , 1fr);
  padding: 25px;
   overflow-y: scroll;
}

.squad__no-cards-container {
  background-position: center;
  background-size: cover;
  background-repeat: repeat;
  background-position: 50%;
  backdrop-filter: blur(7px);
  -webkit-backdrop-filter: blur(7px);
  width: 75%;
  height: auto;
  display: grid;
  align-items: center;
  grid-template-columns: repeat(1, 1fr);
  padding: 25px;
}
.squad__text-container {
    margin: auto;
    text-align: center;
}

.squad__text {
    font-size: 45px;
    color: white;
    -webkit-text-stroke: 2px black;
}


@media screen and (max-width: 1400px) {

   .squad__container {
      width: 90%;
    }

    .squad-no-heroes__container {
      width: 90%;
    }

}

@media screen and (max-width: 1200px) {

   .squad__container {
      width: 90%;
    }

    .squad-no-heroes__container {
      width: 90%;
    }

}

@media screen and (max-width: 1000px) {

    .squad__container {
      display: block;
      height: auto;
    }

    .squad-no-heroes__container {
      display: block;
      height: auto;
    }
    
    .squad__cards-container {
      width: 100%;
    }

    .squad__no-cards-container {
      width: 100%;
    }

    .squad__stats-container {
      width: 100%;
      height: auto;
      padding-bottom: 15px;
    }

    .squad__text-container {
        margin: 45px auto;
        text-align: center;
    }

    .squad__text {
        font-size: 45px;
    }
}


@media screen and (max-width: 720px) {
    .squad__text-container {
        margin: 45px auto;
        text-align: center;
    }

    .squad__text {
        font-size: 45px;
    }
}


@media screen and (max-width: 540px) {
    .squad__text {
        font-size: 45px;
    }
}

</style>
