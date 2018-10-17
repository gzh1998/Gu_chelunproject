import { getBrandList, getrightList, cardetail, cardetail2, citylist, getcity } from '../../api/index';

const state = {
    carslist: '',
    rightdata: [],
    detail: [],
    tablist: [],
    nian: [],
    newdata: [],
    mergeCar: null,
    sortCar: null,
    filter: null,
    cardetail: [],
    city: [],
    twocity: [],
    cityids: 201

}

const mutations = {
    updata(state, payload) {
        let arr = []
        let ind = ''
        let kong = []
        let suzu = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
        for (var i = 0; i < suzu.length; i++) {
            ind = suzu[i];
            payload.forEach((item, index) => {
                let zhi = item.Spelling.slice(0, 1)
                if (zhi == ind) {
                    if (kong.indexOf(zhi) == -1) {
                        kong.push(zhi)
                        item.keys = zhi;
                        arr.push(item)
                    } else {
                        item.keys = '';
                        arr.push(item)
                    }
                }
            })
        }
        //console.log(kong)
        state.carslist = payload
    },

    tabdata(state, payload) {
        //console.log(state.detail.list);
        state.mergeCar(state.sortCar(state.filter(payload, state.detail.list)))
    },
    //右边列表汽车
    carlistright(state, payload) {
        state.rightdata = payload;
        // console.log(payload)
    },
    //询问详情页数据操作
    xunwendata(state, payload) {
        state.mergeCar = function(list) {
                let keys = [];
                let arr = {};
                list.forEach((item, index) => {
                    let key = item.exhaust_str + '/' + item.max_power_str + '' + item.inhale_type;
                    if (keys.indexOf(key) != -1) {
                        arr[key].push(item)
                    } else {
                        keys.push(key);
                        arr[key] = [item];
                    }

                })
                return arr;
            }
            //排序车辆
        state.sortCar = function(list) {
                //点击切换的数据
                state.tablist = list;
                return list.sort((a, b) => {
                    //根据排量排序
                    if (a.exhaust != b.exhaust) {
                        return a.exhaust - b.exhaust;
                    } else {
                        //根据发动机功率排序
                        if (a.max_power_str != b.max_power_str) {
                            return a.max_power_str - b.max_power_str
                        } else {
                            //根据吸气排序
                            if (a.inhale_type > b.inhale_type) {
                                a.inhale_type - b.inhale_type
                            } else {
                                //根据年份排序
                                return a.market_attribute.year > b.market_attribute.year
                            }
                        }
                    }
                })
            }
            //过滤年份
        state.filter = function(year, list) {
            state.tablist = list;
            //console.log(state.tablist);
            if (year == "全部") {
                return list.filter(item => item);

            } else {
                return list.filter(item => item.market_attribute.year == year);
            }
        }

        state.detail = payload;
        state.filter(payload, state.detail.list),
            //全部数据
            state.sortCar(payload.list),
            state.mergeCar(payload.list),
            foryear(payload.list)
            //年份
        function foryear(list) {
            let nian = [];
            let all = '全部';
            nian.push(all)
            list.forEach((item, index) => {
                    if (nian.indexOf(item.market_attribute.year) == -1) {
                        nian.push(item.market_attribute.year)
                    }
                })
                // console.log(nian);
            state.nian = nian;
        }
    },
    cityids(state, payload) {
        // console.log(payload)
        state.cityids = payload;
    },
    //详情页
    cardetail(state, payload) {
        state.cardetail = payload;
    },
    //city
    updatacity(state, payload) {
        state.city = payload;
    },
    //二级城市
    twocitydata(state, payload) {
        state.twocity = payload;
    }
}

const actions = {
    getcarslist({ commit }) {
        //首页list数据
        getBrandList().then(res => {
            commit('updata', res.data)
        })
    },
    rightList({ commit }, id) {
        //右侧划出的侧边数据
        getrightList(id).then(res => {
            commit('carlistright', res.data)
                //console.log(res.data)
        })
    },
    //询问
    xunwencar({ commit }, id) {
        //跳转详情页数据
        cardetail(id).then(res => {
            commit('xunwendata', res.data)
        })
    },
    //点击切换
    tab({ commit }, item) {
        commit("tabdata", item)
    },
    //询问低价详情页数据
    cardetail({ commit }, payload) {
        // console.log(payload.carzhi)
        // console.log(payload.cityzhi)
        cardetail2(payload.carzhi, payload.cityzhi).then(res => {
            commit('cardetail', res.data)
            commit('cityids', payload.carzhi)
        })
    },
    //city列表
    citydata({ commit }) {
        citylist().then(res => {
            // console.log(res.data)
            commit('updatacity', res.data)
        })
    },
    //city二级
    twocityfun({ commit }, id) {
        getcity(id).then(res => {
            // console.log(res.data)
            commit('twocitydata', res.data)
        })
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions

}