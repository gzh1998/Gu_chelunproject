<template>
    <div class="imgwrap" @scroll="scrollfun">
        <Loading v-show="isShow"></Loading>
        <div class='colorbox'>
            <span class="iconfont" @click="gocolor">
                颜色 &#xe654;
            </span>
            <span class="iconfont" @click="gochekuan">
                车款 &#xe654;
            </span>
        </div>
        <!--{{colorimglist}}-->
        <div class="hz" ref='wp'>
            <div class="imgbox" v-for="(item,index) in (colorimglist||imglist)" :key="index" @click="imgfun(item,index)">
                <img :data-src="item" alt="" src="../assets/loading2.pic.gif">
            </div>
        </div>
        <Autoplay v-show="flag" v-bind:gochildren="this.ind" v-on:gofather="childrens" v-on:gofatherpage="pagechildren"></Autoplay>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import { lazyLoad } from '../utils/lazyLoad';
import Autoplay from '../components/autoplay';
import Loading from '../components/loading';
export default {
    name: '',
    data() {
        return {
            imgId: 6,
            Page: 1,
            pageSize: 30,
            flag: false,
            isShow: true,
            ind: 0,
            dataimg: ''
        }
    },
    components: {
        Autoplay,
        Loading
    },
    computed: {
        ...mapState({
            imglist: state => state.img.arr,
            colorimglist: state => state.img.colorimgarr
            
        })
    },
    watch: {
        colorimglist: (old, news) => {
            this.dataimg = old
            console.log(this.dataimg)
        }
    },
    updated() {
        lazyLoad('.imgwrap')
    },
    mounted() {
        this.getimgs({ payload: this.$route.query.id, imgid: this.imgId, page: this.Page, pagesize: this.pageSize })
        lazyLoad('.imgwrap')
        setTimeout(() => {
            this.isShow = false;
        }, 2000)
      
    },
    methods: {
        ...mapActions({
            getimgs: 'img/getimgs'
        }),
        //监听scroll滚动事件
        scrollfun(e) {
            let heights = this.$refs.wp.getBoundingClientRect().height;
            // console.log(heights)
            // console.log(this.$refs.wp.clientHeight)
            // console.log(e.target.scrollTop)
            //滑动到底部加载
            if (e.target.scrollTop > ((heights - window.innerHeight) - 20)) {
                this.Page++;
                this.getimgs({ payload: this.$route.query.id, imgid: this.imgId, page: this.Page, pagesize: this.pageSize })
                console.log(this.Page)
                lazyLoad('.imgwrap')
            }
        },
        //点击图片显示可轮播组件
        imgfun(item, index) {
            this.ind = index;
            this.flag = true;
        },
        childrens(autoplayclose) {
            this.flag = autoplayclose
        },
        pagechildren(newpage) {
            this.Page = newpage
            console.log(this.Page)
            this.getimgs({ payload: this.$route.query.id, imgid: this.imgId, page: this.Page, pagesize: this.pageSize })
        },
        //选择颜色
        gocolor() {
            this.$router.push({ path: `/color?id=${this.$route.query.id}` })

        },
        gochekuan() {
            this.$router.push({ path: `/chekuan?id=${this.$route.query.id}` })
        }

    }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
* {
    margin: 0;
    padding: 0;
}

.imgwrap {
    width: 100%;
    height: 100%;
    overflow-y: scroll;
}

.imgwrap .colorbox {
    width: 100%;
    display: flex;
    height: .4rem;
    align-items: center;
}

.colorbox span {
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: .14rem;
}

.hz {
    width: 100%;
    display: flex;
    overflow-y: hidden;
    justify-content: space-around;
    flex-wrap: wrap;
}

.hz .imgbox {
    width: 33%;
    margin-top: .05rem;
    display: flex;
    align-items: center;
    justify-content: center;
}

.imgbox img {
    width: 90%;
}

@import url('../../static/style/style.css');
</style>