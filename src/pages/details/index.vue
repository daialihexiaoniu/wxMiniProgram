<template>
  <div class="container">
    <div class="detail-name">{{details.name}}</div>
    <div class="detail-description">{{details.description}}</div>
    <img :src="details.image" :alt="details.name" class="detail-image">
    <ul class="step-wrapper">
      <li v-for="(step, index) in details.steps" :key="index">
        <div class="step-index">{{index + 1}}</div>
        <div class="step-text">{{step.step}}</div>
        <img :src="step.image" class="step-image">
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        motto: 'Hello miniprograme',
        details: {}
      }
    },
    onLoad: function (options) {
      let id = options.id
      let _this = this
      wx.request({
        url: 'https://www.easy-mock.com/mock/5cb6885db543fe5b60ec288b/example/getdetail:id=' + id,
        success (res) {
          _this.details = res.data.data
        }
      })
    }
  }
</script>

<style lang="scss">
.detail-name {
  margin-bottom: 5px;
  font-size: 16px;
  font-weight: 700;
}
.detail-description {
  margin-bottom: 5px;
  color: #666;
  text-indent: 28px;
}
.detail-image {
  margin-bottom: 5px;
  width: 200px;
  height: 200px;
}
.step-wrapper > li {
  margin: 5px 0;
  padding: 5px;
  border: 1px solid #cecece;
  text-align: center;
  .step-index {
    margin: 0 auto;
    width: 40px;
    height: 40px;
    line-height: 40px;
    font-size: 20px;
    text-align: center;
    color: #1ba784;
    border: 2px solid #1ba784;
    border-radius: 50%;
  }
  .step-text {
    margin: 5px 0;
  }
}
</style>
