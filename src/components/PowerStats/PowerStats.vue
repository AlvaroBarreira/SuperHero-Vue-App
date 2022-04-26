<script lang="js">
import { defineComponent, computed } from "@vue/runtime-core";
import { useStore } from "vuex";
// style={{ width: team.length === 0 ? "0" : `${combat * 100 / 600}%` }}
// style={{ width: team.length === 0 ? "0" : `${intelligence * 100 / 600}%` }}
// style={{ width: team.length === 0 ? "0" : `${power * 100 / 600}%` }}
// style={{ width: team.length === 0 ? "0" : `${durability * 100 / 600}%` }}
// style={{ width: team.length === 0 ? "0" : `${speed * 100 / 600}%` }}
// style={{ width: team.length === 0 ? "0" : `${strength * 100 / 600}%` }}
export default {
    name: 'PowerStats',
    setup() {   
        const store = useStore();

        const heroes = computed(() =>JSON.parse(JSON.stringify(store.state.myTeam)))

        const stats = computed(() => JSON.parse(JSON.stringify(store.state.generalStats)))
        console.log(stats)
        return {
            stats,
            heroes
        } 
    }
}
</script>

<template>
     <div class="powerstats">

            <div class="powerstats-title">
                <h1>
                    your team statistics
                </h1>
            </div>

            
            <div class="stat-container">
                <h6>Combat </h6>
                <div v-if="heroes.length > 0" class="bar" :style="{width:`${stats.combat * 100 / 600}%`}">
                    <p>{{stats.combat}} Pts</p>
                </div>
                <div v-else class="bar" :style="{width: '1px'}">
                    <p>0%</p>
                </div>
            </div>
           
            <div class="stat-container">
                <h6>Intelligence </h6>
                <div v-if="heroes.length > 0" class="bar" :style="{width:`${stats.intelligence * 100 / 600}%`}">
                    <p>{{stats.intelligence}} Pts</p>
                </div>
                <div v-else class="bar" :style="{width: '1px'}">
                    <p>0%</p>
                </div>
            </div>
            <div class="stat-container">
                <h6>Power </h6>
                <div v-if="heroes.length > 0" class="bar" :style="{width:`${stats.power * 100 / 600}%`}">
                    <p>{{stats.power}} Pts</p>
                </div>
                <div v-else class="bar" :style="{width: '1px'}">
                    <p>0%</p>
                </div>
            </div>
           <div class="stat-container">
                <h6>Durability </h6>
                <div v-if="heroes.length > 0" class="bar" :style="{width:`${stats.durability * 100 / 600}%`}">
                    <p>{{stats.durability}} Pts</p>
                </div>
                <div v-else class="bar" :style="{width: '1px'}">
                    <p>0%</p>
                </div>
            </div>
            <div class="stat-container">
                <h6>Speed </h6>
                <div v-if="heroes.length > 0" class="bar" :style="{width:`${stats.speed * 100 / 600}%`}">
                    <p>{{stats.speed}} Pts</p>
                </div>
                <div v-else class="bar" :style="{width: '1px'}">
                    <p>0%</p>
                </div>
            </div>
            <div class="stat-container">
                <h6>Strength </h6>
                <div v-if="heroes.length > 0" class="bar" :style="{width:`${stats.strength * 100 / 600}%`}">
                    <p>{{stats.strength}} Pts</p>
                </div>
                <div v-else class="bar" :style="{width: '1px'}">
                    <p>0%</p>
                </div>
            </div>
        </div>
</template>

<style>

.powerstats {

    height: 100%;
    background: #212529;
}

.carrousel .carousel-indicators {
    margin-bottom: 0 !important;
}

.powerstats {
    padding-top: 45px;
    padding-right: 5px;
    padding-left: 5px;
    padding-bottom: 15px;
}

.stat-container {
    margin: 15px auto;
    width: auto;
    height: 50px;
}

.powerstats-title {
    display: flex;
    
}

.powerstats-title h1 {
    color: white;
    text-align: center;
    letter-spacing: 2px;
    margin: auto;
}


.stat-container h6 {
    font-weight: 400;
    font-size: 18px;
    letter-spacing: 0.05em;
    margin: 25px 0 0 0;
    color: white;
}


.bar {
    height: 5px;
    background: crimson;
    text-align: right;
    margin-top: 10px;
}

.bar p {
    color: white;
    font-size: 14px;
    padding-top: 5px;
    letter-spacing: 0px;
    
}

@media screen and (max-width: 1000px) {

    .powerstats {
        padding-bottom: 15px;
    }

}

</style>