<script>
import { defineComponent, computed } from '@vue/runtime-core'
import { ref } from 'vue'

export default defineComponent({
  name: "SideBarCard",
  props: ["heroe"],
  setup() {

    
    const collapsed = ref(true)
    const toggleSidebar = () => (collapsed.value = !collapsed.value)

    const SIDEBAR_WIDTH = 250
    const SIDEBAR_WIDTH_COLLAPSED = 55
    const sidebarWidth = computed(
      () => `${collapsed.value ? SIDEBAR_WIDTH_COLLAPSED : SIDEBAR_WIDTH}px`
    )

    return { collapsed, toggleSidebar, sidebarWidth }
  }
})
</script>

<template>
    <div class="sidebar" :style="{ width: sidebarWidth }">
    <div>
      <div v-if="collapsed">
        
        <img src="../../assets/logo-stats.svg" alt="" class="sidebar-img">  
      </div>
      <div class="sidebar__stats" v-else>
        <div class="sidebar__skill">
                            <h6>Combat </h6>
                            <div class="sidebar__progressbar" :style="{width: `${heroe.powerstats.combat}%`}">
                                <p>{{heroe.powerstats.combat === "null" ? heroe.powerstats.combat = 0 : heroe.powerstats.combat}}</p>
                            </div>
                        </div>
                        <div class="sidebar__skill">
                            <h6> Intelligence </h6>
                            <div class="sidebar__progressbar" :style="{width: `${heroe.powerstats.intelligence}%`}">
                                <p>{{heroe.powerstats.intelligence === "null" ? heroe.powerstats.intelligence = 0 : heroe.powerstats.intelligence}}</p>
                            </div>
                        </div>
                        <div class="sidebar__skill">
                            <h6> Power </h6>
                            <div class="sidebar__progressbar" :style="{width: `${heroe.powerstats.power}%`}">
                                <p>{{heroe.powerstats.power === "null" ? heroe.powerstats.power = 0 : heroe.powerstats.power}}</p>
                            </div>
                        </div>
                        <div class="sidebar__skill">
                            <h6>Durability </h6>
                            <div class="sidebar__progressbar" :style="{width: `${heroe.powerstats.durability}%`}">
                                <p>{{heroe.powerstats.durability === "null" ? heroe.powerstats.durability = 0 : heroe.powerstats.durability}}</p>
                            </div>
                        </div>
                        <div class="sidebar__skill">
                            <h6> Speed </h6>
                            <div class="sidebar__progressbar" :style="{width: `${heroe.powerstats.speed}%`}">
                                <p>{{heroe.powerstats.speed === "null" ? heroe.powerstats.speed = 0 : heroe.powerstats.speed}}</p>
                            </div>
                        </div>
                        <div class="sidebar__skill" :style="{width: `${heroe.powerstats.strength}%`}">
                            <h6>Strength </h6>
                            <div class="sidebar__progressbar" >
                                <p>{{heroe.powerstats.strength === "null" ? heroe.powerstats.strength = 0 : heroe.powerstats.strength}}</p>
                            </div>
                        </div>
      </div>
    </div>

    <span
      class="collapse-icon"
      :class="{ 'rotate-180': collapsed }"
      @click="toggleSidebar"
    >
      <i class="fas fa-angle-double-left" />
    </span>
  </div>
</template>

<style>
:root {
  --sidebar-bg-color: #2f855a;
  --sidebar-item-hover: #38a169;
  --sidebar-item-active: #276749;
}
</style>

<style scoped>
.sidebar {
  color: white;
background: rgba(0, 0, 0, 0.2);
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(5px);
-webkit-backdrop-filter: blur(5px);
border: 1px solid rgba(0, 0, 0, 0.3);
  float: right;
  position: fixed;
  z-index: 1;
  top: 0;
  right: 0;
  bottom: 0;
  padding: 0.5em;
  transition: 0.3s ease;
  display: flex;
  flex-direction: column;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
}
.sidebar h1 {
  height: 2.5em;
}

.sidebar__stats {
  /* From https://css.glass */
background: rgba(0, 0, 0, 0.2);
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(5px);
-webkit-backdrop-filter: blur(5px);
  width: 100%;
  height: 340px;
  overflow-y: scroll;
}

.sidebar__skill {
  margin-top: 20px;
  margin-right: 10px;
  margin-left: 10px;
}

.sidebar__progressbar {
  height: 100%;
  background: crimson;
  text-align: right;
}

.sidebar__progressbar p {
  color: white;
  font-size: 18px;
  padding-top: 5px;
  padding-right: 5px;
}

.sidebar-img {
  width: 40px;
  height: 40px;
}
.collapse-icon {
  position: absolute;
  bottom: 0;
  padding: 0.75em;
  color: rgba(255, 255, 255, 0.7);
  transition: 0.2s linear;
  transform: rotate(180deg);
  transition: 0.2s linear;
  cursor: pointer;
}
.rotate-180 {
  transform: rotate(0deg);
  transition: 0.2s linear;
  cursor: pointer;
}
</style>