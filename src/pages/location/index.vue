<template>
  <div class="container">
    1111111111
    {{res}}
  </div>
</template>

<script>
  export default {
    data () {
      return {
        res: ''
      }
    },
    onShow: function () {
      this.getLocation()
    },
    methods: {
      getLocation () {
        wx.authorize({scope: 'scope.userLocationBackground'})
        wx.startLocationUpdateBackground({
          success (res) {
            wx.onLocationChange((res) => {
              wx.request({
                url: 'http://apib2btest.hongyantu.com/b2bapi/?action=Qiandao.Create',
                data: {
                  company: '红眼兔',
                  contact: '陆鑫黎',
                  tel: '13861136690',
                  token: '08801909df069129cb77c9ce67bad9c8a6e8bcd67011f5aefa18881e98511fbf',
                  longitude: res.longitude,
                  latitude: res.latitude
                },
                success (res) {
                  console.log(res)
                }
              })
            })
          },
          fail (res) {
            console.log('222', res)
          }
        })
      }
    }
  }
</script>

<style lang="scss">
</style>
