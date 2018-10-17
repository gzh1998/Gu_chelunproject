<template>
    <div class="mask">
        <div class="loading">
          <img src="../assets/loading.pic.gif" alt="">
        </div>
    </div>
</template>

<script>

</script>

<style>
.mask{
    width: 100%;
    height: 100%;
   position: fixed;
    top: 0;
    left: 0;
    background: rgba(0,0,0,.7);
    z-index: 999;
}
.mask .loading{
    width: 1rem;
    height: 1rem;
    background: #000;
    border-radius: .1rem;
    margin: 50%;
    transform: translateX(-50%);
    display: flex;
    justify-content: center;
    align-items: center;
    color:#fff;
}
.loading img{
    width: 95%;
    height: auto;
}

</style>
