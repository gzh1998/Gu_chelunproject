<template>
    <div class="colorson">
        <ul>
            <li v-for="(item,index) in colorarr[gochildren]" :key="index" @click="colorfun(item.ColorId)">
                <div class="ysbox" :style="{background:item.Value}"></div>
                <a>{{item.Name}}</a>
            </li>
        </ul>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
export default {
    name: '',
    data() {
        return {
            carclolor:''
        }
    },
    computed: {
        ...mapState({
            colorarr: state => state.img.colorarr,
            
        })
    },
    props: {
        gochildren: {
            type: null
        }
    },
    mounted() {
        this.getcolor(this.$route.query.id)
    },
    methods: {
        ...mapActions({
            getcolor: 'img/colors',
            getcolorimgs:'img/getcolorimg'
        }),
        colorfun(colorid){
            this.carclolor = colorid
            this.getcolorimgs({ser:this.$route.query.id,carcolor:this.carclolor})
            this.$router.back(-1)
        }
    }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
@import url('../../static/style/style.css');
.colorson {
    width: 100%;
}

.colorson ul {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0 .12rem;
    box-sizing: border-box;
}

.colorson ul li {
    width: 47%;
    height: .26rem;
    display: flex;
    align-items: center;
    border: solid .01rem #3aacff;
    margin-top: .13rem;
    font-size: .14rem;
}

.colorson ul .ysbox {
    width: .15rem;
    height: .15rem;
    display: inline-block;
    margin: 0 .12rem;
}



;
</style>