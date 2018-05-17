<template>
  <div class="cartcontrol">
      <transition name="move">
        <div class="cart-decrease icon-remove_circle_outline" v-show="food.count>0" @click.stop.prevent="decCart">
          <transition name="inner">
            <span class="inner iconfont icon-jian"></span>
          </transition>
        </div>
      </transition>
      <div class="cart-count" v-show="food.count>0">{{food.count}}</div>
      <div class="cart-add icon-add_circle" @click.stop.prevent="addCart"></div>
    </div>
</template>

<script>
import Vue from 'vue'
export default {
  name: 'cartcontrol',
  props: {
    food: {
      type: Object
    }
  },
  methods: {
    addCart (event) {
      if (!event._constructed) {
        return
      }
      if (!this.food.count) {
        Vue.set(this.food, 'count', 1)
      } else {
        this.food.count++
      }
      this.$emit('cart-add', event.target)
    },
    decCart() {
      if (!event._constructed) {
        return
      }
      if (this.food.count) {
        this.food.count--
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">
.cartcontrol
    font-size :0
  .cart-decrease
    .inner
      display: inline-block
      line-height: 24px
      font-size: 24px
      vertical-align: top
      color: rgb(0, 160, 220, 0.2)
    .inner-enter-active,.inner-leave-active
      transition: all 0.4s linear
      transform: rotate(0)
    .inner-enter,.inner-leave-active
      opacity: 0
      transform : rotate(180deg)
  .move-enter,.move-leave-active
    opacity :0
    transform :translate3d(36px, 0, 0)
  .move-enter-active,.move-leave-active
    transition :all 0.4s linear
  .cart-decrease,.cart-add
    display: inline-block
    padding :6px
    font-size :24px
    line-height :24px
    color :rgb(0,160,220)
  .cart-count
    display: inline-block
    font-size :10px
    line-height :24px
    width :12px
    vertical-align :top
    padding-top :6px
    text-align :center
    color: rgb(147,153,159)
  .cart-add
    display: inline-block
</style>
