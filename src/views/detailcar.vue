<template>
    <div class="wrapper">
        <aletmask v-show="isShow" v-on:gofather="flagalert"></aletmask>
        <h5>☆ 可向多个商家咨询最低价，商家及时回复 ☆</h5>
        <div class="detailbox">
            <img :src="datas.details&&datas.details.serial.Picture" alt="">
            <p>
                <a>{{datas.details&&datas.details.serial.AliasName}}</a>
                <a class="iconfont icon-right"></a>
                <a>{{datas.details&&datas.details.market_attribute.year}}款{{datas.details&&datas.details.car_name}}</a>
            </p>
        </div>
        <h6>个人信息</h6>
        <div class="inputfrom">
            <p>
                <label for="name">姓名</label>
                <input type="text" placeholder="输入你的真实中文姓名" maxlength="4" id="name" @change="textval">
            </p>
            <p>
                <label fro="phone">手机</label>
                <input type="text" placeholder="输入你的真实手机号码" maxlength="11" id="phone" @change="phonesval">
            </p>
            <p>
                <label>城市</label>
                <router-link to="/city" style="margin-right:.3rem;">{{this.defaultcity}}
                    <a class="iconfont icon-right"></a>
                </router-link>
            </p>
            <a class="button" @click="go">询问低价</a>
        </div>
        <h6>选择报价经销商</h6>
        <div class="checkedlist" v-for="(item,index) in datas.list" :key="index">
            <li>
                <input type="checkbox" :id="index" :checked="index<3?true:false">
                <label :for="index"></label>
                <p>
                    <b>{{item.dealerShortName}}</b>
                    <a>{{item.address}}</a>
                </p>
                <h6>
                    <b>{{item.vendorPrice}}万</b>
                    <a>售{{item.saleRange}}</a>
                </h6>
            </li>
        </div>

    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import aletmask from '../components/alert';

export default {
    name: '',
    data() {
        return {
            isShow: false,
            nameval: '',
            phoneval: '',
            defaultcheck: true,
            defaultcity:'北京'
        }
    },
    components: {
        aletmask

    },
    computed: {
        ...mapState({
            datas: state => state.app.cardetail
        })
    },
    mounted() {
        // console.log(this.$route.query.id)
        //判断路由是否有传过来id 如果没有就不替换 本地存储的汽车id
        if (!this.$route.query.id) {
            console.log('不做替换')
        } else {
            localStorage.setItem('key', this.$route.query.id)
        }
        this.cardetail({ carzhi: this.$route.query.id, cityzhi: 201 })

        let newcity = localStorage.getItem('citynams');
        if(!newcity){
            this.defaultcity = '北京'
        }else{
            this.defaultcity = newcity;
        }
    },
    methods: {
        ...mapActions({
            cardetail: 'app/cardetail'
        }),
        flagalert(flag) {
            this.isShow = flag;
        },
        //询问按钮
        go() {
            console.log(this.nameval)
            console.log(this.phoneval)
            if (this.nameval == '' && this.phoneval == '') {
                this.isShow = true;
            } else {
                this.$router.push({ path: "/city" })
            }
        },
        textval(e) {
            this.nameval = e.target.value;
        },
        phonesval(e) {
            this.phoneval = e.target.value;
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
    background: #fff;
}

html {
    font-size: 625%;
}

a {
    text-decoration: none;
    color: #000;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

#app {
    width: 100%;
    height: 100%;
    background: #fff;
}

.wrapper {
    width: 100%;
    overflow-y: scroll;
    background: #fff;
    h5 {
        width: 100%;
        padding: .1rem 0;
        text-align: center;
        background: #79cd92;
        color: #fff;
        font-weight: normal;
        font-size: .14rem;
    }
    .detailbox {
        width: 100%;
        display: flex;
        justify-content: space-between;
        padding: .4rem 5%;
        align-items: center;
        margin-top: .1rem;
        img {
            width: 35%;
        }
        p {
            width: 60%;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            a {
                padding: 0 .1rem;
                font-size: .16rem;
            }
            a:nth-child(2) {
                display: flex;
                justify-content: flex-end;
                padding-right: .1rem;
            }
        }
    }
    >h6 {
        padding: 0 .2rem;
        height: .25rem;
        line-height: .25rem;
        font-size: .14rem;
        color: #666;
        background: #eee;
        font-weight: normal;
    }
    .inputfrom {
        width: 100%;
        p {
            width: 100%;
            padding: .15rem;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0.15rem;
            border-bottom: solid .01rem #ccc;
            label {
                font-size: .16rem;
                font-weight: normal;
            }
            a{font-size: .14rem;}
            input {
                border: none;
                outline: none;
            }
        }
        .button {
            border-radius: .05rem;
            display: block;
            height: .4rem;
            margin: .1rem 0;
            width: 40%;
            margin-left: 50%;
            transform: translateX(-50%);
            border: none;
            box-sizing: border-box;
            background: #00afff;
            color: #fff;
            font-size: .2rem;
            text-align: center;
            line-height: .4rem;
        }
    }
    .checkedlist {
        width: 100%;
        li {
            width: 100%;
            display: flex;
            justify-content: space-between;
            padding: 0 .15rem;
            align-items: center;
            border-bottom: solid .01rem #ccc;
            line-height: .25rem;
            input {
                display: none;
            }
            label {
                width: .25rem;
                height: .25rem;
                border: solid .03rem #ccc;
                display: block;
                position: relative;
                border-radius: .02rem;
                float: left;
                border-radius: 50%;
            }
            input:checked+label:before {
                content: "\2714";
                color: #fff;
                position: absolute;
                font-size: .14rem;
                top: -.02rem;
                left: 30%;
            }
            input:checked+label {
                background: #3aacff;
            }
            p {
                width: 60%;
                display: flex;
                flex-direction: column;
                justify-content: space-between; // overflow: hidden;
                // white-space: nowrap;
                // text-overflow:ellipsis;
                b {
                    font-weight: normal;
                    padding: .05rem;
                }
                a {
                    color: #a2a2a2;
                }
            }
            >h6 {
                width: 20%;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                font-weight: normal;
                b {
                    font-weight: normal;
                    color: red;
                }
            }
        }
    }
}

@import url('../../static/style/style.css');
</style>