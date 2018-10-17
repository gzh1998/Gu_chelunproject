<template>
    <div class="xunwencom">
        <div class="list" v-for="(item,index) in childrens" :key="index">
            <P>{{item.exhaust_str}}/{{item.max_power_str}}{{item.inhale_type}}</P>
            <div class="xunwenbox">
                <p>{{item.market_attribute.year}} {{item.car_name}}</p>
                <a>{{item.horse_power}}马力{{item.gear_num}}档</a>
                <span>
                    <a>指导价{{item.market_attribute.dealer_price_max}}</a>
                    <a>{{item.market_attribute.dealer_price_min}}起</a>
                </span>
                <button @click="aa">询问底价</button>
                <!--{{childrens}}-->
            </div>

        </div>
    </div>
</template>


<script>
import { mapState, mapActions } from 'vuex';
export default {
    name: "",
    data() {
        return {
            zhia: ''
        }
    },
    props: {
        childrens: {
            type: null
        },
        sid: {
            type: null
        }
    },
    computed: {
        ...mapState({

        })
    },
    watch: {
       
    },
    methods: {
        aa() {
          let loca = localStorage.getItem('sid');
            this.$router.push({ path:`/imgcar?id=${loca}`})
        }
    },
    mounted() {

    }
}

</script>


<style lang="scss">
.xunwencom {
    width: 100%;
    height: 100%;
    .list {
        background: #fff;
        width: 100%;
        >p {
            width: 100%;
            height: .3rem;
            background: #f4f4f4;
            text-indent: .2rem;
            line-height: .3rem;
            color: #999;
            font-size: .14rem;
        }
        .xunwenbox {
            >p {
                width: 100%;
                text-indent: .2rem;
                height: .3rem;
                line-height: .34rem;
                font-size: .17rem;
            }
            >a {
                color: #999;
                width: 100%;
                text-indent: .2rem;
                height: .3rem;
                display: block;
                line-height: .3rem;
                font-size: .14rem;
            }
            span {
                width: 100%;
                height: .3rem;
                display: flex;
                padding: 0 7% 0 0;
                justify-content: flex-end;
                font-size: .14rem;
                a:nth-child(2) {
                    color: red;
                    margin-left: .1rem;
                    font-size: .14rem;
                    margin-right: .2rem;
                }
            }
            button {
                border: none;
                border-top: 1px solid #eee;
                width: 110%;
                height: .4rem;
                font-size: .18rem;
                color: #00afff;
                background: #fff;
                font-weight: 500;
                margin-left: -.3rem;
            }
        }
    }
}
</style>

