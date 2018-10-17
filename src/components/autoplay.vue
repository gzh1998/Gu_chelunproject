<template>
    <div class="mask">
        <em class="iconfont" @click="close">&#xe6d1;</em>
        <P>{{initindex+1}}/{{datas.length}} 张图片</P>
        <div class="block">
            <div class="swiper-container" ref="swp">
                <div class="swiper-wrapper">
                    <div class="swiper-slide" v-for="(item,index) in datas" :key="index" @touchstart="touchfun(index)">
                        <img :src="item" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import Swiper from 'swiper';
import { mapState, mapActions } from 'vuex';
export default {
    name: '',
    data() {
        return {
            isShow: true,
            initindex: '',
            pageind: 1,
            pagelength: ''
        }
    },
    props: {
        gochildren: {
            type: Number
        }
    },
    //监听每一次props改变 从而改变 swiper的轮播图位置
    watch: {
        gochildren(old, news) {
            this.initindex = old
            var mySwiper = new Swiper(this.$refs.swp, {
                initialSlide: this.initindex,
                //解决滑动不顺畅
                observer: true,
                observeParents: true
            })
        },
        datas(old, news) {
            this.pagelength = old.length;
        }
    },
    computed: {
        ...mapState({
            datas: state => state.img.arr
        })
    },

    mounted() {
        var mySwiper = new Swiper(this.$refs.swp, {
            observer: true,
            observeParents: true
        })
    },
    methods: {
        close() {
            this.isShow = false;
            this.$emit('gofather', this.isShow)
        },
         touchfun(index) {
            //console.log(index+1)
            this.initindex = index + 1;
            console.log(this.pagelength - 4)
            let newzhi = this.pagelength - 4
            //滑动到最后几张的时候加载更多图片
            if (this.initindex > newzhi) {
                 this.pageind++;
                 this.$emit('gofatherpage',this.pageind)
            }   

        }
    }
}

</script>

<style>
@import url("//unpkg.com/element-ui@2.4.8/lib/theme-chalk/index.css");
html {
    font-size: 625%;
}

* {
    margin: 0;
    padding: 0;
}

.mask {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, .9);
    position: fixed;
    top: 0;
    left: 0;
    /*position: relative;*/
}

.mask em {
    display: flex;
    justify-content: center;
    align-items: center;
    width: .3rem;
    height: .3rem;
    background: #fff;
    border-radius: 50%;
    position: absolute;
    top: 32%;
    left: 85%;
}

.mask>p {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1rem;
    height: .25rem;
    background: #3aacff;
    color:#fff;
    position: absolute;
    bottom:20%;
    left: 50%;
    transform: translateX(-50%);
}

.block {
    position: absolute;
    width: 100%;
    height: 1.5rem;
    background: #fff;
    top: 50%;
    left: 50%;
    width: 100%;
    transform: translate(-50%, -50%);
}

.block .swiper-container {
    width: 100%;
    height: 100%;
    display: flex;
}

.block .swiper-container .swiper-wrapper {
    width: 100%;
    height: 100%;
    display: flex;
}

.swiper-wrapper .swiper-slide {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    overflow: hidden;
}

.swiper-slide img {
    width: 100%;
}

.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
}

.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
}

@import url('../../static/style/style.css');
</style>

