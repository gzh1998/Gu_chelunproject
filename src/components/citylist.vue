<template>
    <div class="cityright" @click="flagfun">
        <ul>
            <li v-for="(item,index) in gochildren" :key="index" @click="gofun(item.CityName,item.CityID)">
                {{item.CityName}}
                <!--{{item.CityID}}-->
            </li>
        </ul>
    </div>
</template>




<script>
import { mapState, mapActions } from 'vuex';

export default {
    name: "",
    data() {
        return {
            flag:true
        }
    },
    props: {
        gochildren: {
            type: null
        }
    },
    mounted() {

    },
    methods: {
        ...mapActions({
            cardetail:'app/cardetail'
        }),
        flagfun(){
            this.flag = false;
                 this.$emit('gofather', this.isShow)
        },
        gofun(Cityname,CityID){
               this.$router.push({path:'/detailcar'})
              let carsids =  localStorage.getItem('key') 
              localStorage.setItem('citynams',Cityname)
              console.log(carsids)
               this.cardetail({carzhi:carsids,cityzhi:CityID})

        }
    },
 
}

</script>

<style>
.cityright {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    right: -100%;
    z-index: 99;
    background: rgba(0, 0, 0, 0.5);
    
}
.active{
    right: 0;
    transition: right 1s ease;
}

.cityright ul {
    width: 75%;
    height: 100%;
    border-left: solid .01rem #ccc;
    overflow-y: scroll;
    background: #fff;
    position: absolute;
    right: 0;
    top: 0;
    font-size: .14rem;
}
</style>

