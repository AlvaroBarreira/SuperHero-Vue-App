<script>
import SideBarLink from './SideBarLink.vue'
import { collapsed, toggleSidebar, sidebarWidth } from './state'
export default {
  props: {},
  components: { SideBarLink },
  setup() {
    const handleClose = () => localStorage.removeItem('isLogged')
    return { collapsed, toggleSidebar, sidebarWidth, handleClose }
  }
}
</script>

<template>
  <div class="sidebar" :style="{ width: sidebarWidth }">
    <h1>
      <span v-if="collapsed">
        
      </span>
      <span v-else>
        <img src="../../assets/logo.png" alt="" class="sidebar-img">  
      </span>
    </h1>
    
    <SideBarLink to="/" icon="fas fa-arrow-left" @click="handleClose">Logout</SideBarLink>

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
  background-color: var(--sidebar-bg-color);
  float: left;
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
  bottom: 0;
  padding: 0.5em;
  transition: 0.3s ease;
  display: flex;
  flex-direction: column;
}
.sidebar h1 {
  height: 2.5em;
}

.sidebar-img {
  width: 80px;
  height: 80px;
}
.collapse-icon {
  position: absolute;
  bottom: 0;
  padding: 0.75em;
  color: rgba(255, 255, 255, 0.7);
  transition: 0.2s linear;
  background-color: var(--sidebar-bg-color);
}
.rotate-180 {
  transform: rotate(180deg);
  transition: 0.2s linear;
  background-color: var(--sidebar-bg-color);
}
</style>