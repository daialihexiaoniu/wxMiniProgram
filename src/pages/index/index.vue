<template>
  <div class="container">
    <!-- <ul class="tab-container">
      <li class="active">全部</li>
      <li>已完成</li>
      <li>未完成</li>
    </ul> -->
    <div class="add-task">
      <input class="add-task-input" type="text" placeholder="添加todo" v-model="newTask">
      <button class="add-button" @click="addTask()">添加</button>
    </div>
    <ul class="todo-list">
      <li v-for="(task, index) in tasks" :key="index">
        <input type="checkbox" @click="completeTask(task)" :checked="task.complete">
        <span :class="{'complete' : task.complete}">{{task.body}}</span>
        <button @click="deleteTask(task)" class="del-button">删除</button>
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
      newTask: '',
      tasks: [
        {body: '示例1', complete: false},
        {body: '示例2', complete: false}
      ]
    }
  },
  onShow: function () {
    console.log(111)
    var _this = this
    wx.getStorage({
      key: 'task',
      success: function (res) {
        _this.tasks = res.data
      }
    })
  },
  methods: {
    completeTask (task) {
      let index = this.tasks.indexOf(task)
      this.tasks[index].complete = !task.complete
      wx.setStorage({
        key: 'task',
        data: this.tasks
      })
    },
    deleteTask (task) {
      this.tasks.splice(this.tasks.indexOf(task), 1)
      wx.setStorage({
        key: 'task',
        data: this.tasks
      })
    },
    addTask () {
      if (this.newTask === '') {
        return
      }
      this.tasks.push({body: this.newTask, complete: false})
      this.newTask = ''
      wx.setStorage({
        key: 'task',
        data: this.tasks
      })
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
    .complete {
      text-decoration:line-through;
    }
    .del-button {
      float: right;
      position: relative;
      top: -1px;
    }
  }
}
</style>
