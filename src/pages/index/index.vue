<template>
  <div class="container">
    <ul class="tab-container">
      <li :class="{active : status==2}" @click="changeStatus(2)">未完成</li>
      <li :class="{active : status==1}" @click="changeStatus(1)">已完成</li>
      <li :class="{active : status==0}" @click="changeStatus(0)">全部</li>
    </ul>
    <div class="add-task">
      <input class="add-task-input" type="text" placeholder="添加todo" v-model="newTask">
      <button class="add-button" @click="addTask()">添加</button>
    </div>
    <ul class="todo-list" v-if="status === 0">
      <li v-for="(task, index) in tasks" :key="index">
        <div class="todo-text-wrap">
          <input type="checkbox" @click="completeTask(task)" :checked="task.complete">
          <span :class="{'complete' : task.complete}">{{task.body}}</span>
          <button @click="deleteTask(task)" class="del-button">删除</button>
        </div>
      </li>
    </ul>
    <ul class="todo-list" v-if="status === 1">
      <li v-for="(task, index) in tasks" :key="index">
        <div class="todo-text-wrap" v-if="task.complete">
          <input type="checkbox" @click="completeTask(task)" :checked="task.complete">
          <span :class="{'complete' : task.complete}">{{task.body}}</span>
          <button @click="deleteTask(task)" class="del-button">删除</button>
        </div>
      </li>
    </ul>
    <ul class="todo-list" v-if="status === 2">
      <li v-for="(task, index) in tasks" :key="index">
        <div class="todo-text-wrap" v-if="!task.complete">
          <input type="checkbox" @click="completeTask(task)" :checked="task.complete">
          <span :class="{'complete' : task.complete}">{{task.body}}</span>
          <button @click="deleteTask(task)" class="del-button">删除</button>
        </div>
      </li>
    </ul>
    <mptoast />
  </div>
</template>

<script>
import mptoast from 'mptoast'
export default {
  data () {
    return {
      motto: 'Hello miniprograme',
      userInfo: {},
      isLogin: false,
      newTask: '',
      status: 2,
      tasks: [
        {body: '示例1', complete: false},
        {body: '示例2', complete: false}
      ]
    }
  },
  components: {
    mptoast
  },
  onShow: function () {
    var _this = this
    wx.getStorage({
      key: 'task',
      success: function (res) {
        _this.tasks = res.data
      }
    })
  },
  methods: {
    changeStatus (status) {
      this.status = status
    },
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
      if (this.newTask.replace(/^\s+|\s+$/g, '') === '') {
        this.$mptoast('请输入todo内容')
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
      color: #fe3f3f;
      border-bottom: 1px solid #fe3f3f;
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
    .todo-text-wrap {
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
