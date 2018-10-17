<template>
    <div class="mask">
        <div class="alert">
            <p>请输入您的真实姓名</p>
            <a @click="ok">好</a>
        </div>
    </div>
</template>


<script>
export default {
    name: "",
    data() {
        return {
            isflag: false
        }
    },
    methods: {
        ok() {
            this.$emit("gofather", this.isflag)
        }
    }
}
</script>



<style>
.mask {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, .3);
    z-index: 999;
}

.mask .alert {
    width: 80%;
    height: 1rem;
    background: #fff;
    border-radius: .1rem;
    margin: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}

.alert p {
    height: 30%;
    margin-top: 6%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: solid .01rem #ccc;
    font-size: .15rem;
}

.alert a {
    height: 35%;
    width: 50%;
    color: #007aff;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: .17rem;
    font-weight: 900;
}
</style>
