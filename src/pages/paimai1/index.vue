<template>
  <div class="container">
    <div class="food-title">今日美食推荐</div>
    <ul class="food-list">
      <li v-for="(list, index) in lists" :key="index" class="food-item" @click="getDetail(index)">
        <img :src="list.image" :alt="list.name" class="food-image">
        <div class="food-text">
          <div class="food-name">{{list.name}}</div>
          <div class="food-description">{{list.description}}</div>
          <div class="food-step">需要X步， 大约x分钟</div>
          <div class="food-deal">方法：（炒、煮、炸）/ 咸、甜</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        motto: 'Hello miniprograme',
        lists: []
      }
    },
    onShow: function () {
      this.getList()
    },
    methods: {
      getList () {
        var _this = this
        wx.request({
          url: 'https://www.easy-mock.com/mock/5cb6885db543fe5b60ec288b/example/getList', // 仅为示例，并非真实的接口地址
          success (res) {
            _this.lists = res.data.data.projects
          }
        })
      },
      getDetail (index) {
        wx.navigateTo({
          url: '../details/main?id=' + index
        })
      }
    }
  }
</script>

<style lang="scss">
.food-title {
  margin-bottom: 10px;
}
.food-list {
  width: 100%;
  .food-item {
    display: flex;
    margin-bottom: 5px;
    border: 1px solid #cecece;
    border-radius: 3px;
  }
  .food-image {
    width: 100px;
    height: 100px;
    flex: 100px 0 0;
  }
  .food-text {
    margin-left: 5px;
    color: #666;
  }
  .food-name {
    color: #333;
    font-weight: 700;
    font-size: 16px;
    margin-bottom: 5px;
  }
  .food-description {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    height: 40px;
  }
  .food-step, .food-deal {
    font-size: 12px;
  }
}
</style>
