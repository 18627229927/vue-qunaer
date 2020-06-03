<template>
    <div class="wrapper">
        <swiper :options="swiperOptions">
            <swiper-slide>
                <img class="swiper-img" src="https://aecpm.alicdn.com/simba/img/TB183NQapLM8KJjSZFBSutJHVXa.jpg" alt="">
            </swiper-slide>
            <swiper-slide>
                <img class="swiper-img" src="https://aecpm.alicdn.com/simba/img/TB1XotJXQfb_uJkSnhJSuvdDVXa.jpg" alt="">
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
export default {
    name: "HomeSwiper",
    data() {
        return {
            swiperOptions: {
                pagination: {
                    el: ".swiper-pagination",
                    loop: true
                }
            }
        };
    }
};
</script>

<style lang="stylus" scoped>
.wrapper >>> .swiper-pagination-bullet-active {
    background: #fff;
}

.wrapper {
    overflow: hidden;
    width: 100%;
    height: 0;
    padding-bottom: 31.25%;
    background: #eee;

    .swiper-img {
        width: 100%;
    }
}
</style>