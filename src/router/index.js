import Vue from 'vue'
import Router from 'vue-router'
// import Index from '../views/index'
// import Detailcar from '../views/detailcar'
// import Cars from '../views/cars'
// import Xunwen from '../views/xunwen'
// import Dinwei from '../views/dinwei'
// import Imgcar from '../views/imgcar'

//路由的按需加载
const Index = () =>
    import ('@/views/Index.vue');
const Detailcar = () =>
    import ('@/views/Detailcar.vue');
const City = () =>
    import ('@/views/city.vue');
const Xunwen = () =>
    import ('@/views/xunwen.vue');
const Color = () =>
    import ('@/views/color.vue');
const Chekuan = () =>
    import ('@/views/chekuan.vue');
const Imgcar = () =>
    import ('@/views/imgcar.vue');




Vue.use(Router)

const route = new Router({
    routes: [{
        path: '/index',
        name: 'index',
        component: Index
    }, {
        path: '/detailcar',
        name: 'detailcar',
        component: Detailcar
    }, {
        path: '/city',
        name: 'city',
        component: City
    }, {
        path: '/xunwen',
        name: 'xunwen',
        component: Xunwen
    }, {
        path: '/color',
        name: 'color',
        component: Color
    }, {
        path: '/imgcar',
        name: 'imgcar',
        component: Imgcar
    }, {
        path: '/chekuan',
        name: 'chekuan',
        component: Chekuan
    }, {
        path: "*",
        redirect: "/index"
    }]
})



export default route;