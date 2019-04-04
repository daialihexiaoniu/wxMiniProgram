<template>
  <!-- <div @click="clickHandle">

    <div class="userinfo" @click="bindViewTap">
      <img class="userinfo-avatar" v-if="userInfo.avatarUrl" :src="userInfo.avatarUrl" background-size="cover" />
      <img class="userinfo-avatar" src="/static/images/user.png" background-size="cover" />

      <div class="userinfo-nickname">
        <card :text="userInfo.nickName"></card>
      </div>
    </div>

    <div class="usermotto">
      <div class="user-motto">
        <card :text="motto"></card>
      </div>
    </div>

    <a href="/pages/todo/main" class="counter">todo</a>

    <form class="form-container">
      <input type="text" class="form-control" :value="motto" placeholder="v-model" />
      <input type="text" class="form-control" v-model="motto" placeholder="v-model" />
      <input type="text" class="form-control" v-model.lazy="motto" placeholder="v-model.lazy" />
    </form>

    <a href="/pages/counter/main" class="counter">去往Vuex示例页面</a>

    <div class="all">
        <div class="left">
        </div>
        <div class="right">
        </div>
    </div>
  </div> -->
  <div class="container">
    <ul class="tab-container">
      <li class="active">全部</li>
      <li>已完成</li>
      <li>未完成</li>
    </ul>
    <ul class="todo-list">
      <li>
        <input type="checkbox">1111 <button class="del-button">删除</button>
      </li>
      <li>
        <input type="checkbox">2222 <button class="del-button">删除</button>
      </li>
    </ul>
    <!-- <mptoast /> -->
  </div>
</template>

<script>
import mptoast from 'mptoast'

export default {
  data () {
    return {
      motto: 'Hello miniprograme',
      userInfo: {},
      isLogin: false
    }
  },
  components: {
    mptoast
  },
  methods: {
    getUserInfo () {
      console.log(111)
    }
    // showToast () {
    //   console.log(111111111)
    //   this.$mptoast('我是提示信息')
    // }
  },

  created () {
  }
}
</script>

<style lang="scss">
.container {
  padding: 20px;
  font-size: 14px;

  button {
    font-size: 14px;
    line-height: 1;
    padding: 10px 15px;
    vertical-align: bottom;
  }

  .tab-container {
    font-size: 0;
    > li {
      display: inline-block;
      font-size: 16px;
      padding: 10px 15px;
       border-bottom: 1px solid transparent;
    }
    > .active {
      color: red;
      border-bottom: 1px solid red;
    }
  }
  .todo-list {
    margin-top: 10px;
    width: 100%;
    > li {
      margin-top: 10px;
    }
    .del-button {
      display: inline-block;
    }
  }
}
</style>
