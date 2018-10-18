<template>
    <div class="wrapper">
        <!--{{lists}}-->
        <Loading v-show="outin"></Loading>
        <div class="box" ref="wrap">
            <!--左边汽车品牌-->
            <div class="indexlist">
                <div class="listleft" v-for="(item,index) in lists" :key="index" ref="listleft">
                    <p v-html="item.keys" v-show="item.keys" name="one"></p>
                    <h6 @click="showcarlist(item.MasterID)">
                        <img :src="item.CoverPhoto">
                        <span v-html="item.Name"></span>
                    </h6>
                </div>
            </div>
            <!--右边字母-->
            <div class="indexright">
                <ul class="indexrightbox" @touchmove="touchmove">
                    <li v-for="(item,index) in lists" :key="index" v-html="item.keys" v-show="item.keys" @click="gotopcar(index)"></li>
                </ul>
            </div>
        </div>
        <Listcarright :class="isShow?'activeshow':'activehide'" v-bind:gochildren="list2" v-on:gofather="fatherdata"></Listcarright>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import { getBrandList, getrightList } from '../api/index';
import Bscroll from 'better-scroll';
import Listcarright from '../components/listcarright';
import Loading from '../components/loading';
import { lazyLoad } from '../utils/lazyLoad';


export default {
    name: '',
    //  inject:['reload'],
    data() {
        return {
            isShow: false,
            childrendata: [],
            myscroll: '',
            outin: true
        }
    },
    components: {
        Listcarright,
        Loading
    },
    computed: {
        ...mapState({
            lists: state => state.app.carslist,
            list2: state => state.app.rightdata
        })

    },
    //函数调用放在mounted
    mounted() {
        this.getcarslist()
        //this.rightList()
        console.log(this.$refs.wrap)
        this.myscroll = new Bscroll(this.$refs.wrap, {
            scrollY: true,
            scrollX: false,
            click: true,
            useTransform: true,
            probeType: 3
        })
        //虚拟请求接口不作操作展示loading
        this.getloading()
        //调用懒加载
        lazyLoad('.wrapper')
    },
    updated() {
        //  this.reload();
    },
    //函数执行放在methods
    methods: {
        ...mapActions({
            getcarslist: 'app/getcarslist',
            rightList: 'app/rightList'
        }),
        //点击显示右边栏
        showcarlist(id) {
            this.isShow = true;
            //调用 vuex
            this.rightList(id)
            _hmt.push(['_trackEvent', '汽车报价', 'tap','汽车品牌'])

        },
        //获取到子组件传过来的参数
        fatherdata(val) {
            this.isShow = val
        },
        //右边英文点击事件
        gotopcar(index) {
            console.log(index)
            this.myscroll.scrollToElement(this.$refs.listleft[index], 100, true, 0, 0)
        },
        getloading() {
            fetch('http://baojia-test.chelun.com/v2-car-getMasterBrandList.html').then(res => {
                return res.json()
            })
                .then(body => {
                    this.outin = false
                })
        },
        //手指滑动事件
        touchmove(e) {
            let touch = e.targetTouches[0];
            //console.log(touch)
            let y = touch.pageY
            //console.log(y)
            if (y > 85 && y < 90) {
                this.myscroll.scrollToElement(this.$refs.listleft[0], 100, true, 0, 0)
            } else if (y > 90 && y < 95) {
                this.myscroll.scrollToElement(this.$refs.listleft[4], 100, true, 0, 0)

            } else if (y > 120 && y < 125) {
                this.myscroll.scrollToElement(this.$refs.listleft[24], 100, true, 0, 0)

            } else if (y > 150 && y < 160) {
                this.myscroll.scrollToElement(this.$refs.listleft[29], 100, true, 0, 0)

            } else if (y > 170 && y < 190) {
                this.myscroll.scrollToElement(this.$refs.listleft[40], 100, true, 0, 0)

            } else if (y > 190 && y < 220) {
                this.myscroll.scrollToElement(this.$refs.listleft[47], 100, true, 0, 0)

            } else if (y > 220 && y < 230) {
                this.myscroll.scrollToElement(this.$refs.listleft[52], 100, true, 0, 0)

            } else if (y > 240 && y < 250) {
                this.myscroll.scrollToElement(this.$refs.listleft[61], 100, true, 0, 0)

            } else if (y > 260 && y < 280) {
                this.myscroll.scrollToElement(this.$refs.listleft[71], 100, true, 0, 0)

            } else if (y > 320 && y < 330) {
                this.myscroll.scrollToElement(this.$refs.listleft[77], 100, true, 0, 0)

            } else if (y > 340 && y < 350) {
                this.myscroll.scrollToElement(this.$refs.listleft[89], 100, true, 0, 0)

            } else if (y > 360 && y < 370) {
                this.myscroll.scrollToElement(this.$refs.listleft[94], 100, true, 0, 0)

            } else if (y > 380 && y < 390) {
                this.myscroll.scrollToElement(this.$refs.listleft[95], 100, true, 0, 0)

            } else if (y > 400 && y < 410) {
                this.myscroll.scrollToElement(this.$refs.listleft[96], 100, true, 0, 0)

            } else if (y > 420 && y < 430) {
                this.myscroll.scrollToElement(this.$refs.listleft[101], 100, true, 0, 0)

            } else if (y > 445 && y < 455) {
                this.myscroll.scrollToElement(this.$refs.listleft[103], 100, true, 0, 0)

            } else if (y > 460 && y < 490) {
                this.myscroll.scrollToElement(this.$refs.listleft[111], 100, true, 0, 0)

            } else if (y > 490 && y < 510) {
                this.myscroll.scrollToElement(this.$refs.listleft[114], 100, true, 0, 0)

            } else if (y > 520 && y < 530) {
                this.myscroll.scrollToElement(this.$refs.listleft[121], 100, true, 0, 0)

            } else if (y > 550 && y < 560) {
                this.myscroll.scrollToElement(this.$refs.listleft[126], 100, true, 0, 0)

            } else if (y > 570 && y < 580) {
                this.myscroll.scrollToElement(this.$refs.listleft[135], 100, true, 0, 0)

            }
        }
    }

}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
/*@import url('../../static/style/style.css');*/
</style>