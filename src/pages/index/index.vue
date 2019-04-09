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
    <div class="add-task">
      <input class="add-task-input" type="text" placeholder="添加todo">
      <button class="add-button" @click="addTask()">添加</button>
    </div>
    <ul class="todo-list">
      <li v-for="(task, index) in tasks" :key="index">
        <span>{{task.body}}</span><button @click="deleteTask()" class="del-button">删除</button>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  data () {
    return {
      motto: 'Hello miniprograme',
      userInfo: {},
      isLogin: false,
      tasks: [
        {body: '示例1', complete: false},
        {body: '示例2', complete: false}
      ]
    }
  },
  methods: {
    getUserInfo () {
      console.log(111)
    },
    deleteTask () {
      console.log('删除')
    },
    addTask () {
      console.log('添加')
    }
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
  .add-task {
    margin: 10px 0;
    width: 100%;
    height: 34px;
    line-height: 34px;
    .add-task-input {
      display: inline-block;
      width: 250px;
      height: 34px;
      line-height: 34px;
      border-bottom: 0.5px solid #eee;
    }
    .add-button {
      float: right;
      width: 60px;
      color: #fff;
      background: #fe3f3f;
    }
  }
  .todo-list {
    margin-top: 10px;
    width: 100%;
    > li {
      padding: 5px 0;
      height: 34px;
      line-height: 34px;
      border-bottom: 0.5px solid #eee;
    }
    .del-button {
      float: right;
      position: relative;
      top: -1px;
    }
  }
}
</style>
