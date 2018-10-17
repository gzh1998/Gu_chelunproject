<template>
    <div class="xunwen">
        <Loading v-show="flag"></Loading>
        <aletmask v-show="isShow" v-on:gofather="isalert"></aletmask>
        <router-link :to="{path:`/imgcar?id=${details.SerialID}`}" class="imgbox">
            <img :src="details.CoverPhoto" alt="">
            <span>
                <a v-text="details.pic_group_count"></a>张照片</span>
        </router-link>
        <div class="section">
            <div class="sectionleft">
                <a v-text="details.market_attribute&&details.market_attribute.dealer_price"></a>
                <p>指导价
                    <a v-text="details.market_attribute&&details.market_attribute.official_refer_price"></a>
                </p>
            </div>
            <router-link class="button" :to="{path:`/detailcar?id=${details.list&&details.list[0].car_id}`}">询问低价</router-link>
        </div>
        <div class="tabbox">
            <a v-for="(key,index) in nian" :key="index" @click="active(key,index)" :class="activeindex==index?'active':''">{{key}}</a>
        </div>
        <xunwenlist :childrens="tablist" :sid="details.SerialID"></xunwenlist>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import Xunwenlist from '../components/xunwentablist';
import aletmask from '../components/alert';
import Loading from '../components/loading';

export default {
    name: '',
    data() {
        return {
            activeindex: 0,
            isShow: false,
            flag: true
        }
    },
    components: {
        Xunwenlist,
        aletmask,
        Loading


    },
    computed: {
        ...mapState({
            details: state => state.app.detail,
            tablist: state => state.app.tablist,
            nian: state => state.app.nian
        })
    },
    watch: {
        details: (old, news) => {
            // console.log(news)
            localStorage.setItem('sid', old.SerialID)
        }
    },
    mounted() {
        this.xunwencar(this.$route.query.id)
        setTimeout(() => {
            this.flag = false
        }, 1000)
    
    },
    methods: {
        ...mapActions({
            xunwencar: 'app/xunwencar',
            tab: 'app/tab'
        }),
        //点击tab
        active(key, index) {
            this.activeindex = index;
            this.tab(key)
            //console.log(key)
        },
        //跳转路由
        gotodijia() {
            this.isShow = true;

        },

        isalert(a) {
            this.isShow = a;
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
}

html,
body,
.wrapper {
    width: 100%;
    height: 100%;
    overflow-x: hidden;
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

#app {
    width: 100%;
    height: 100%;
}

.xunwen {
    width: 100%;
    height: 100%;
    overflow-y: scroll;
    background: #f4f4f4;
}

.imgbox {
    width: 100%;
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    img {
        width: 100%;
        height: auto;
    }
    span {
        padding: .05rem;
        border-radius: .1rem;
        background: rgba(0, 0, 0, 0.5);
        position: absolute;
        bottom: 10%;
        right: 7%;
        color: #fff;
        font-size: .14rem;
        a {
            color: #fff;
            font-size: .14rem;
            background: rgba(0, 0, 0, 0);
        }
    }
}

.section {
    background: #fff;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 .14rem;
    .button {
        border-radius: .05rem;
        height: .4rem;
        width: 40%;
        border: none;
        box-sizing: border-box;
        background: #00afff;
        color: #fff;
        font-size: .2rem;
        text-align: center;
        line-height: .4rem;
        margin-right: .2rem;
    }
    .sectionleft {
        width: 50%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        >a {
            color: red;
            padding: .1rem 0;
            font-size: .2rem;
            font-size: .14rem;
        }
        p {
            color: #ccc;
            padding: 0 0 .2rem 0;
            font-size: .15rem;
            font-size: .14rem;
            a {
                color: silver;
            }
        }
    }
}

.tabbox {
    margin-top: .15rem;
    width: 100%;
    height: .4rem;
    background: #fff;
    display: flex;
    align-items: center;
    >a {
        width: 20%;
        height: .3rem;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: .14rem;
    }
    .active {
        color: #00afff;
    }
}
</style>