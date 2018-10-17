<template>
    <div class="listcarright" @touchstart="touchstart" @touchmove="touchmove" @touchend="touchend">
        <!--{{gochildren}}-->
        <div class="boxs" v-for="(item,index) in gochildren" :key="index">
            <p @click="isShow" v-html="item.GroupName"></p>
            <router-link :to="{path:`/xunwen?id=${item.SerialID}`}" class="listson" v-for="(item,index) in item.GroupList" :key="index" @click="aa">
                <img :data-src="item.Picture" alt="" src="../assets/loading.pic.gif">
                <div class="listright">
                    <span v-html="item.AliasName"></span>
                    <a v-html="item.DealerPrice"></a>
                </div>
            </router-link>
        </div>
    </div>
</template>



<script>
import {mapState,mapActions} from 'vuex';
import {lazyLoad} from '../utils/lazyLoad';
export default {
    name: "",
    data() {
        return {
            flag: false,
            startX: 0,
            move_endX: 0,
            move_leng: 0
        }
    },
    props: {
        gochildren: {
            type: Array
        }
    },
    updated() {
        lazyLoad('.listcarright')
        
    },
    mounted() {
        lazyLoad('.listcarright')
    },
    methods: {
        //想父组件传参
        isShow() {
            this.$emit('gofather', this.flag)
        },
        //手指按下事件     
        touchstart(e) {
            //获取到点击信息
            let touch = e.targetTouches[0];
            //点击的坐标
            this.startX = touch.pageX;
            //console.log(this.startX)
            this.move_leng = 0;
            this.move_endX = 0;
        },
        //手指h滑动事件
        touchmove(e) {
            //获取到滑动信息
            let touch = e.targetTouches[0];
            //手势滑动时，手势坐标不断变化，取最后一点的坐标为最终的终点坐标
            this.move_endX = touch.pageX;
            //console.log(this.move_endX)
        },
        //手指抬起事件
        touchend(e) {
            //计算滑动的距离
            this.move_leng = this.move_endX - this.startX;
            //console.log(this.move_leng)
            if (this.move_leng >= 50) {
                this.flag = false
                this.$emit('gofather', this.flag)
            }

        },
        ...mapActions({
             details:'app/xunwencar'
        }),
         aa(id){
           this.details(id)
        },

    }
}

</script>


<style>
.listcarright {
    width: 75%;
    height: 100%;
    border-left: solid .01rem #ccc;
    overflow-y: scroll;
    position: fixed;
    top: 0;
    right: -75%;
    background: #fff;
}

.boxs {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
}

.boxs>p {
    width: 100%;
    height: .2rem;
    background: #f4f4f4;
    text-indent: .15rem;
    line-height: .2rem;
    font-size: .16rem;
   
}

.boxs .listson {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    border-bottom: solid 1px #ddd;
}

.boxs .listson img {
    width: .9rem;
    height: auto;
}

.listson .listright {
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    /*align-items: center;*/
}

.listright span {
    font-size: .17rem;
    padding: .05rem .12rem;
     font-size: .14rem;
}

.listright a {
    color: red;
    padding: .12rem .12rem;
    font-size: .14rem;
}
</style>