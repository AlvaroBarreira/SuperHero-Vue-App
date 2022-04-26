<template>
    <SideBar />
    <Search />
    <CarouselHeroes />
    <SquadSection />
    <FooterVue />
</template>

<script lang="js" >
import SideBar from "../components/SideBar/SideBar.vue";
import Search from "../components/Search/Search.vue";
import FooterVue from "../components/Footer/Footer.vue";
import SquadSection from "../components/SquadSection/SquadSection.vue";
import CarouselHeroes from "../components/Carousel/CarouselHeroes.vue";

export default {
    name: 'Home',
    components: {
    SideBar,
    Search,
    FooterVue,
    SquadSection,
    CarouselHeroes
}
}

</script>