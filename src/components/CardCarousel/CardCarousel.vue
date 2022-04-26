<script>
import { defineComponent, computed } from "@vue/runtime-core";
import { useStore } from "vuex";

export default{
  name: "CardCarousel",
  props: ["result"],

  setup() {
    const store = useStore();

    const AddHeroe = (result) => {
        const item = JSON.parse(JSON.stringify(result));
        store.dispatch("addMyTeam", item);
    };

    return {
        AddHeroe
    }
  },
};
</script>

<template>
  <div className="Card" key="{data.id}">
    <div class="card-left">
      <img v-bind:src="result.image.url" alt="hero" />
    </div>
    <div class="card-right" :class="result.biography.alignment === 'good' || result.biography.alignment === '-' || result.biography.alignment === 'neutral' ? 'green' : 'red'">
      <div class="title">
        <p>{{ result.name }}</p>
      </div>
      <div class="card-right-details">
        <div class="btn-container">
          <button
            class="btn btn-after btn-animated"
            @click="AddHeroe(result)"
          >
            Add Team
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style>

.green {
  background: rgba(0, 136, 0, 0.618);
}

.red {
  background: rgba(255, 0, 0, 0.652);
}

.Card {
  margin: 25px auto;
  width: 500px;
  height: 250px;
  background: transparent;
  bottom: 0;
  border-radius: 10px;
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  box-shadow: 0px 20px 30px 3px rgba(0, 0, 0, 0.55);
}

.card-left {
  width: 60%;
  height: 250px;
  float: left;
  background: transparent;
}

.card-left img {
  width: 100%;
  height: 100%;
  border-radius: 10px 0 0 10px;
  position: relative;
  object-fit: cover;
}

.card-right {
  width: 40%;
  float: left;
  height: 100%;
  border-radius: 0 10px 10px 0;
  -webkit-border-radius: 0 10px 10px 0;
  -moz-border-radius: 0 10px 10px 0;
}

.title {
  display: flex;
}

.title p {
  color: white;
  font-weight: 300;
  text-align: center;
  font-size: 28px !important;
  margin: 10px auto;
  letter-spacing: 1px;
  -webkit-text-stroke: 1px black;
}

@keyframes animateButton {
  0% {
    opacity: 0;
    transform: translateY(60px);
  }
  100% {
    opacity: 1;
    transform: translate(0);
  }
}

.btn-container {
  display: flex;
  margin: auto;
}

.btn {
  margin: 65px auto 0 auto;
  position: relative;
  display: block;
  outline: none;
  border: none;
  cursor: pointer;
  background-color: #525364;
  font-size: 20px;
  font-weight: 500;
  color: white;
  border-radius: 10px;
  text-transform: uppercase;
  letter-spacing: 2px;
  padding: 15px 40px;
  box-shadow: 0 6px #130f40;
  transition: all 0.1s;
}
.btn:hover {
  transform: translateY(3px);
  box-shadow: 0 4px #130f40;
}
.btn:active {
  transform: translateY(6px);
  box-shadow: none;
}
.btn:active::after {
  transform: scaleX(1.4) scaleY(1.6);
  opacity: 0;
}
.btn-after {
  background-color: #30336b;
}
.btn-after::after {
  background-color: #30336b;
}
.btn::after {
  content: "";
  position: absolute;
  display: inline-block;
  height: 100%;
  width: 100%;
  border-radius: 10px;
  top: 0;
  left: 0;
  z-index: -1;
  transition: all 0.4s;
}
.btn-animated {
  animation: animateButton 0.5s ease-out 0.15s;
  animation-fill-mode: backwards;
}

@media screen and (max-width: 529px) {
  .Card {
    width: 310px;
    height: 225px;
  }

  .card-left {
    width: 60%;
    height: 225px;
    float: left;
    background: transparent;
  }

  .card-left img {
    width: 100%;
    height: 100%;
    border-radius: 10px 0 0 10px;
    position: relative;
    object-fit: cover;
  }
}

</style>
