<script lang="js">
import { defineComponent, computed, ref } from "@vue/runtime-core";
import { useStore } from 'vuex';
import { useToast } from 'vue-toastification'
import SideBarCard from '../SideBarCard/SideBarCard.vue';
// style={{width: `${t.powerstats.combat}%`}}
// style={{width: `${t.powerstats.intelligence}%`}}
// style={{width: `${t.powerstats.power}%`}}
// style={{width: `${t.powerstats.durability}%`}}
// style={{width: `${t.powerstats.speed}%`}}
// style={{width: `${t.powerstats.strength}%`}}

export default defineComponent ({
    name: "CardTeam",
    props: ["heroe","show"],
    components: {
        SideBarCard
    },
    setup(){
        const toast = useToast()

        const store = useStore()

        const show = ref(false)

        const handleDelete = (heroe) => {
            store.dispatch("deleteMyTeam", heroe);
        }

        return {
            handleDelete,
        }
    }
});
</script>

<template>
   <Transition duration="550" name="fade" >

    <div 
        class="card-team" 
        v-bind:style="{ backgroundImage: 'url(' + heroe.image.url + ')' }">
        <div 
            :class="heroe.biography.alignment === 'good' ||heroe.biography.alignment === 'neutral' ||heroe.biography.alignment === '-' ? 'card-team__background-good' : 'card-team__background-bad'">
        </div>
        <div class="card-team__left">
            <div class="card-team__data">
                <h4>Name: {{heroe.name}}</h4>
                <h6>Alter egos: {{heroe.biography["alter-egos"]}}</h6>
                <h6>Full name: {{heroe.biography["full-name"]}}</h6>
                <h6>First appearance: {{heroe.biography["first-appearance"]}}</h6>
                <h6>
                    Alignment: <span :class="heroe.biography.alignment === 'good' ||heroe.biography.alignment === 'neutral' ||heroe.biography.alignment === '-' ? 'card-team__good-color' : 'card-team__bad-color'">{{heroe.biography.alignment}}</span>
                </h6>
            </div>
        </div>
        <div class="card-team__right">
            <SideBarCard :heroe="heroe"/>
        </div>
         <button class="card-team__btn-delete" @click="handleDelete(heroe)">
                        <p>X</p>
        </button>
    </div>
   </Transition>
</template>

<style>

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.card-team {
    width: 800px;
    height: 350px;
    border-radius: 5px;
    display: flex;
    margin: 15px auto;
    background-position: center;
    background-size: cover;
    background-repeat: repeat;
    background-position: 50%;
    backdrop-filter: blur(7px);
    -webkit-backdrop-filter: blur(7px);
}

.card-team__background-good {
  z-index: -999999;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;    
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,.6);;
  border-radius: 5px;
}

.card-team__background-bad {
  z-index: -999999;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;    
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,.6);;
  border-radius: 5px;
}

.card-team__left {
    width: 50%;
}

.card-team__data {
    margin-top: 60px;
    margin-left: 20px;
    text-align: left;
}

.card-team__data h4 {
    color: white;
    -webkit-text-stroke: 1px black;
    text-decoration: none;
    font-size: 30px;
    text-align: left;
    padding: 14px auto 0 auto;
    cursor: pointer;
}

.card-team__data h6 {
    color: white;
    -webkit-text-stroke: 1px black;
    text-decoration: none;
    font-size: 20px;
    text-align: left;
    padding: 14px auto 0 auto;
    cursor: pointer;
}

.card-team__good-color {
    color: green;
}

.card-team__bad-color {
    color: red;
}

.card-team__right {
    width: 50%;
}


.card-team__btn-delete {
    position: absolute;
    width: 40px;
    height: 40px;
    background: #000000;
    padding: auto;
    text-decoration: none !important;
    cursor: pointer;
    border: 1px solid rgb(97, 94, 94);
    border-top-left-radius: 5px;
}

.card-team__btn-delete p {
    text-align: center !important;
    margin: auto !important;
    text-decoration: none !important;
    font-size: 25px;
    color: crimson;
}

@media screen and (max-width: 1200px) {
    
.card-team {
    width: 600px;
    height: 350px;
    border-radius: 5px;
    display: flex;
    margin: 15px auto;
    background-position: center;
    background-size: cover;
    background-repeat: repeat;
    background-position: 50%;
    backdrop-filter: blur(7px);
    -webkit-backdrop-filter: blur(7px);
}
}

@media screen and (max-width: 960px) {
    
.card-team {
    width: 500px;
    height: 350px;
    border-radius: 5px;
    display: flex;
    margin: 15px auto;
    background-position: center;
    background-size: cover;
    background-repeat: repeat;
    background-position: 50%;
    backdrop-filter: blur(7px);
    -webkit-backdrop-filter: blur(7px);
}
}


@media screen and (max-width: 620px) {
    
.card-team {
    width: 400px;
    height: 350px;
    border-radius: 5px;
    display: flex;
    margin: 15px auto;
    background-position: center;
    background-size: cover;
    background-repeat: repeat;
    background-position: 50%;
    backdrop-filter: blur(7px);
    -webkit-backdrop-filter: blur(7px);
}
}

@media screen and (max-width: 620px) {
    
.card-team {
    width: 300px;
    height: auto;
    border-radius: 5px;
    display: flex;
    margin: 15px auto;
    background-position: center;
    background-size: cover;
    background-repeat: repeat;
    background-position: 50%;
    backdrop-filter: blur(7px);
    -webkit-backdrop-filter: blur(7px);
}
}


</style>