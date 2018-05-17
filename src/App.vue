<template>
  <div id="app">
    <v-header :seller="seller">
    </v-header>
    <div class="tab border-1px">
      <div class="tab-item">
        <router-link to="/goods">商品</router-link>
        </div>
      <div class="tab-item">
        <router-link to="/ratings">评论</router-link>
        </div>
      <div class="tab-item">
        <router-link to="/seller">商家</router-link>
        </div>
    </div>
    <div class="content">
      <keep-alive>
        <router-view :seller="seller"></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import {urlParse} from './common/js/util'
import header from './components/header/header'
const ERR_OK = 0
export default {
  data () {
    return {
      seller: {
        id: (() => {
          /* 从地址栏中的url中通过urlParam函数解析，得到id */
          let queryParam = urlParse()
          console.log(queryParam)
          return queryParam.id
        })()
      }
    }
  },
  name: 'App',
  components: { 'v-header': header },
  created () {
    this.$http.get('/api/seller?id=' + this.seller.id).then((response) => {
      response = response.body
      if (response.errno === ERR_OK) {
        // this.seller = response.data
        this.seller = Object.assign({}, this.seller, response.data)
        console.log(this.seller.id)
      }
    }, (res) => {
      alert(res.status)
    })
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import "./common/stylus/mixin.styl"
#app
  // font-family: 'Avenir', Helvetica, Arial, sans-serif
  // -webkit-font-smoothing: antialiased
  // -moz-osx-font-smoothing: grayscale
  // color: #2c3e50
  // margin-top: 60px
 .tab
    display: flex
    width: 100%
    height: 40px
    line-height: 40px
    border-1px(rgba(7, 17, 27, 0.1))
    .tab-item
      text-align: center
      flex: 1
      & > a
        display: block
        font-size: 14px
        color: rgb(77, 85, 93)
        &.router-link-exact-active
          color: rgb(240, 20, 20)
</style>
