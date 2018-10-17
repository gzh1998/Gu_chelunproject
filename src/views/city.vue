<template>
    <div class="wrappers">
        <P>自定位</P>
        <p id="lis">北京</p>
        <div class="citybox">
            <p>省市</p>
            <li v-for="(item,index) in datas" :key="index" @click="cityfun(item.CityID)">
                <a>{{item.CityName}}</a>
                <b class="iconfont icon-right"></b>
            </li>
            <citylist v-bind:gochildren="twocity" v-on:gofather="childrens" :class="isShow?'active':'cityright'"></citylist>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import Citylist from '../components/citylist';
export default {
    name: '',
    data() {
        return {
            isShow:false
        }
    },
    components: {
        Citylist
    },
    computed: {
        ...mapState({
            datas: state => state.app.city,
            twocity: state => state.app.twocity
        })
    },
    mounted() {
        this.citydata()
    },
    methods: {
        ...mapActions({
            citydata: 'app/citydata',
            twocityfun: 'app/twocityfun'
        }),
        //点击传参
        cityfun(id) {
            this.twocityfun(id)
            this.isShow = true;
         
        },
        childrens(aa){
            this.isShow = aa;
            
        }
    }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: .14rem;
    list-style: none;
}

html,
body,
.wrappers {
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    #lis {
        width: 100%;
        height: .4rem;
        display: flex;
        justify-content: space-between;

        background: #fff;
        line-height: .4rem;
        border-bottom: solid .01rem #ccc;
    }
}

.wrappers {
    display: flex;
    width: 100%;
    flex-direction: column;
    overflow-y: scroll;
    height: 100%;
    p {
        width: 100%;
        height: .25rem;
        background: #f4f4f4;
        text-indent: .2rem;
        line-height: .25rem;
    }
    li {
        width: 100%;
        height: .4rem;
        display: flex;
        justify-content: space-between;
        padding: 0 .2rem;
        background: #fff;
        line-height: .4rem;
        border-bottom: solid .01rem #ccc;
        b {
            color: #ccc;
        }
    }
}

.citybox {
    flex: 1;
}

html {
    font-size: 625%;
}

a {
    text-decoration: none;
    color: #000;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

ul li,
ol li {
    list-style: none;
}
</style>