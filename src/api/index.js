//动态判断域名

const host = !/localhost/.test(window.location.host) ? 'http://baojia-test.chelun.com' : 'https://baojia.chelun.com';

function sendRequest(url, method = "GET", data = {}) {
    let params = {
            method
        }
        //判断如果是一个post的请求就加上参数请求体
    if (method == 'POST') {
        params.body = JSON.stringify(data);
    }
    //判断请求url是否传参 
    if (url.indexOf('?') == -1) {
        url += `?_=${+new Date()}`
    } else {
        url += `&_=${+new Date()}`
    }
    return fetch(host + url, params).then(res => {
        return res.json()
    }).then(body => {
        return body
    })
}

//获取车轮品牌的数据
export let getBrandList = () => {
    return sendRequest('/v2-car-getMasterBrandList.html')
}

//获取右边栏数据
export let getrightList = (id) => {
        return sendRequest(`/v2-car-getMakeListByMasterBrandId.html?MasterID=${id}`)
    }
    //获取询问页数据
export let cardetail = (id) => {
    return sendRequest(`/v2-car-getInfoAndListById.html?SerialID=${id}`)
}

//获取到详情页询问数据
export let cardetail2 = (id, cityid) => {
    return sendRequest(`/v2-dealer-alllist.html?carId=${id}&cityId=${cityid}`)
}

//获取城市数据
export let citylist = () => {
        return sendRequest('/v1-city-alllist.html')
    }
    //处理图片
    //serialId车系id
    //imgId图片id
    //page分页数据码
export let getpic = (serialId, imgId, Page, PageSize) => {
        let search = `SerialID=${serialId}&ImageID=${imgId}&Page=${Page}&PageSize=${PageSize}`
        return sendRequest(`/v2-car-getCategoryImageList.html?${search}`)
    }
    //子城市数据
export let getcity = (id) => {
        return sendRequest(`/v1-city-alllist.html?provinceid=${id}`)
    }
    //颜色数据
export let getcolor = (id) => {
        return sendRequest(`/v2-car-getModelImageYearColor.html?SerialID=${id}`)
    }
    //选择颜色后请求图片
export let getcolorpic = (serialid, colorid) => {
    return sendRequest(`/v2-car-getImageList.html?SerialID=${serialid}&ColorID=${colorid}`)
}