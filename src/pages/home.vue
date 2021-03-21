<template>
  <div>
    
      <van-nav-bar title="home" />
      
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item>1</van-swipe-item>
        <van-swipe-item>2</van-swipe-item>
        <van-swipe-item>3</van-swipe-item>
        <van-swipe-item>4</van-swipe-item>
      </van-swipe>

      <van-tabs v-model="active">
        <van-tab title="热门推荐">
          <div id="title1">
              <van-card v-for="item in 10" :key="item" price="2.00" desc="描述信息" title="商品标题"
            thumb="https://img01.yzcdn.cn/vant/ipad.jpeg"
          >
            <template #footer>
              <van-button size="small">
                <van-icon name="cart-o" color="#1989fa" size="25" />
              </van-button>
            </template>
          </van-card>
          </div>
        </van-tab>
        <van-tab title="发现新品">
          <div id="title1">
              <van-card v-for="item in 10" :key="item" price="2.00" desc="描述信息" title="商品标题"
            thumb="https://img01.yzcdn.cn/vant/ipad.jpeg"
          >
            <template #footer>
              <van-button size="small">
                <van-icon name="cart-o" color="#1989fa" size="25" />
              </van-button>
            </template>
          </van-card>
          </div>
        </van-tab>
        <van-tab title="所有商品">
          <div id="title1">
              <van-card v-for="item in 10" :key="item" price="2.00" desc="描述信息" title="商品标题"
            thumb="https://img01.yzcdn.cn/vant/ipad.jpeg"
          >
            <template #footer>
              <van-button size="small">
                <van-icon name="cart-o" color="#1989fa" size="25" />
              </van-button>
            </template>
          </van-card>
          </div>
        </van-tab>
      </van-tabs>
      

  </div>
</template>

<script>
export default {
   data() {
    return {
      active: 0,
    };
  },
}
</script>

<style scoped>
  .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
  }
  #title1{
    margin-bottom: 60px;
  }
</style>