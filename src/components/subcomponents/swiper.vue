<template>
    <div>
        <mt-swipe :auto="4000">
            <!-- 在组件中 使用 v-for  一定要使用key -->
            <mt-swipe-item v-for="item in lunbotuList" :key="item.id">
                <img :src="item.img" alt="" :class="{full:isfull}">
            </mt-swipe-item>
          
        </mt-swipe>
    </div>
</template>

<script>
export default {
    props:["lunbotuList","isfull"]
}
</script>


<style lang="scss" scoped>
    .mint-swipe{
       
    height: 200px;

    .mint-swipe-item{
         text-align: center;

       img{
          
           height: 100%;
         }
        }

    }

    .mui-grid-view.mui-grid-9{
        background-color:white;
        border: none;

        img{
            width: 60px;
            height: 60px;
        }
    }
.full{
    width: 100%;
}
</style>