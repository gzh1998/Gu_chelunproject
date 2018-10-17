<template>
    <div class="colorwrap">
        <h6 @click="goback">全部颜色</h6>
        <p>
            <a v-for="(item,index) in year" :key="index" @click="add(item,index)" :class="index==ind?'active':''">{{item}}</a>
        </p>
        <Colorson v-bind:gochildren="zhi"></Colorson>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import Colorson from '../components/colorson';
export default {
    name: '',
    data() {
        return {
            ind: 0,
            zhi: '',
            year: []
        }
    },
    components: {
        Colorson
    },
    computed: {
        ...mapState({
            colorarr: state => state.img.colorarr
        })
    },
    watch: {
        colorarr(old, news) {
            // Object.keys获取对象key
            // console.log(Object.keys(old))
            let key = Object.keys(old)
            this.year = key
            //初始化值默认显示的数据
            this.zhi = this.year[0];
        }
    },
    mounted() {
        this.getcolor(this.$route.query.id)
    },
    methods: {
        ...mapActions({
            getcolor: 'img/colors'
        }),
        add(item, index) {
            this.ind = index;
            this.zhi = item;
        },
        goback(){
            this.$router.back(-1)
        }
    }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
@import url('../../static/style/style.css');
.colorwrap {
    width: 100%;
    height: 100%;
    background: #f4f4f4;
}

.colorwrap h6 {
    width: 100%;
    height: .3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: normal;
    color: #00afff;
    background: #fff;
    margin-top: .1rem;
    font-size: .14rem;
}

.colorwrap>p {
    width: 100%;
    height: .3rem;
    display: flex;
    align-items: center;
    font-weight: normal;
    background: #fff;
    margin-top: .1rem;
    overflow-x: scroll;
    font-size: .16rem;
}

.colorwrap>p a {
    padding-left: .15rem;
    flex-shrink: 0;
}

.colorwrap>p .active {
    color: #00afff;
}
</style>