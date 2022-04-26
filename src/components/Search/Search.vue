<template>
      <div className="title-head">
            <h1>SUPER HERO APP</h1>
        

        <Form @submit.prevent className="container">
            <div className="row height d-flex justify-content-center align-items-center">
                <div className="col-md-8">
                    <div className="search">
                        <i className="fa fa-search"></i>
                        <Field
                            type="text"
                            class="form-control"
                            placeholder="Search a character"
                            id="name"
                            name="name"
                            @change="handleChangeSearch" v-slot="handleChangeSearch"
                        />
                        <button className="button" type="submit" @click="search()">Search</button>
                    </div>
                </div>
            </div>
        </Form>
        <div v-if="carousel?.length === 0" :style="{width: '90%', margin: 'auto'}">
            <p >
                Please read before searching:
                you can choose only three good characters and three bad characters
            </p>
        </div>
        <div v-else>
            <span >
                <p>Result: {{carousel?.length}} character(s)</p>
            </span>
        </div>
        </div>
</template>

<script>
import ResultVue from "../Result/Result.vue"
import { useStore } from "vuex";
import { defineComponent, computed, ref } from "@vue/runtime-core";
import { Field, Form } from "vee-validate";
export default {
    name: 'Search',
    components: {
      ResultVue,
      Field,
      Form
    },

     setup() {
      
      const store = useStore()

      const handleChangeSearch = (e) => store.commit('setKeyword', e.target.value);
      const carousel = computed(() => store.state.carouselCard);
      const error = computed(() => store.state.error);
      const search = () => {
          store.dispatch('getHeroes')
      }

    return {
      carousel,
      search,
      error,
      handleChangeSearch
    }
  },
}
</script>

<style>
.height {
  height: 20vh;
}

.search {
  position: relative;
  box-shadow: 0 0 40px rgba(51, 51, 51, .1)
}

.search .form-control {
  height: 60px;
  text-indent: 25px;
  border: 0;
  outline: none;

}



.search input:focus {
  box-shadow: none;
}

.search .fa-search {
  position: absolute;
  top: 20px;
  left: 16px
}

.search .button {
  position: absolute;
  top: 5px;
  right: 5px;
  height: 50px;
  width: 110px;
  background: #FFDE22 !important;
  outline: none;
  border: none;
}

.title-head {
  text-align: center;
  margin-top: 40px;
}

</style>