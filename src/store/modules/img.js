import { getpic, getcolor, getcolorpic } from '../../api/index';
let state = {
    arr: [],
    colorarr: [],
    colorimgarr: ''
}

let zhi = []
let mutations = {
    //图片数据
    updatapic(state, payload) {
        payload.forEach((item, index) => {
                zhi.push(item)
            })
            //zhi.push(payload)
        state.arr = zhi;
    },
    //颜色数据
    colordata(state, payload) {
        state.colorarr = payload
    },
    //选择颜色后的图片的数据
    colorimg(state, payload) {
        // console.log(payload)
        state.colorimgarr = payload;
        //console.log(state.arr)
    }
}


let actions = {
    //请求图片
    getimgs({ commit }, payload) {
        getpic(payload.payload, payload.imgid, payload.page, payload.pagesize).then(res => {
            //console.log(res.data);
            let zhi = []
            res.data.List.map((item, index) => {
                let newurl = item.Url.replace("{0}", payload.imgid)
                zhi.push(newurl)
            })
            commit('updatapic', zhi);
        })
    },
    //请求颜色
    colors({ commit }, id) {
        getcolor(id).then(res => {
            commit('colordata', res.data)
        })
    },
    //选择颜色再次请求图片
    getcolorimg({ commit }, serialid) {
        console.log(serialid.ser)
        console.log(serialid.carcolor)
        getcolorpic(serialid.ser, serialid.carcolor).then(res => {
            let newzhi = []
                // console.log(res.data)
            res.data.map((item, index) => {
                item.List.map((key, ind) => {
                    // console.log(key)
                    let newurl = key.Url.replace("{0}", key.HighSize)
                    newzhi.push(newurl)
                })

            })

            commit('colorimg', newzhi)
        })
    }
}

export default {
    namespaced: true,
    state,
    actions,
    mutations
}