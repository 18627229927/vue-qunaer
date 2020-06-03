<template>
    <div>
        <home-header></home-header>
        <home-swiper></home-swiper>
    </div>
</template>

<script>
import HomeHeader from '../home/components/header'
import HomeSwiper from '../home/components/swiper'
export default {
    name: 'home',
    components: {
        HomeHeader,
        HomeSwiper
    },
    data() {
        return{}
    },
    created() {},
    methods: {}
}
</script>

<style lang="less" scoped>

</style>