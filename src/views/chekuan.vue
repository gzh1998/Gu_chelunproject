<template>
    <div class="wrapperchekuan">
        <h6 @click="goback">全部颜色</h6>
        <div class="tabbox">
            <a v-for="(key,index) in nian" :key="index" @click="active(key,index)" :class="activeindex==index?'active':''">{{key}}</a>
        </div>
        <xunwenlist :childrens="tablist"></xunwenlist>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import Xunwenlist from '../components/xunwentablist';

export default {
    name: '',
    data() {
        return {
            activeindex: 0
        }
    },
    components: {
        Xunwenlist
    },
    computed: {
        ...mapState({
            details: state => state.app.detail,
            tablist: state => state.app.tablist,
            nian: state => state.app.nian
        })
    },
    mounted() {
        this.xunwencar(this.$route.query.id)
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
        goback() {
            this.$router.back(-1)
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
.wrapperchekuan {
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    background: #f4f4f4;
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
    }
    .active {
        color: #00afff;
    }
}
.wrapperchekuan h6 {
    width: 100%;
    height: .4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: normal;
    color: #00afff;
    background: #fff;
    margin-top: .1rem;
      font-size: .16rem;
}
</style>