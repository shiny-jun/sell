<template>
  <div class="ratingselect">
    <div class="rating-type border-1px">
      <span @click="select(2,$event)" class="block positive" :class="{'active': selectType===2}">{{desc.all}}<span class="count">{{ratings.length}}</span></span>
      <span @click="select(0,$event)" class="block positive" :class="{'active': selectType===0}">{{desc.positive}}<span class="count">{{positives.length}}</span></span>
      <span @click="select(1,$event)" class="block negative" :class="{'active': selectType===1}">{{desc.negative}}<span class="count">{{negatives.length}}</span></span>
    </div>
    <div class="switch" :class="{'on':onlyContent}" @click="toggleContent">
      <span class="icon-check_circle"></span>
      <span class="text">只看内容的评价</span>
    </div>
  </div>
</template>

<script>
const POSITIVE = 0// 好评
const NEGATIVE = 1// 差评
const ALL = 2// 全部
export default {
  name: 'ratingselect',
  props: {
    ratings: {
      type: Array,
      default() {
        return []
      }
    },
    selectType: {
      type: Number,
      default: ALL
    },
    onlyContent: {
      type: Boolean,
      default: false
    },
    desc: {
      type: Object,
      default() {
        return {
          all: '全部',
          positive: '推荐',
          negative: '吐槽'
        }
      }
    }
  },
  computed: {
    positives() {
      return this.ratings.filter((rating) => {
        return rating.rateType === POSITIVE
      })
    },
    negatives() {
      return this.ratings.filter((rating) => {
        return rating.rateType === NEGATIVE
      })
    }
  },
  methods: {
    select(type, event) {
      if (!event._constructed) {
        return
      }
      this.$emit('select-type-change', type)
    },
    toggleContent() {
      if (!event._constructed) {
        return
      }
      let myOnlyContent = !this.onlyContent
      this.$emit('only-content-change', myOnlyContent)
    }
  }
  // watch: {
  //   selectType(val) {
  //     this.myResult = val// ②监听外部对props属性result的变更，并同步到组件内的data属性myResult中
  //   },
  //   myResult(val) {
  //     this.$emit('select-type-change', val)// ③组件内对myResult变更后向外部发送事件通知
  //   },
  //   onlyContent(val) {
  //     this.myOnlyContent = val
  //   },
  //   myOnlyContent(val) {
  //     this.$emit('only-content-change', val)
  //   }
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus">
@import "../../common/stylus/mixin.styl";

.ratingselect
  .rating-type
    padding :18px 0
    margin : 0 18px
    border-1px(rgba(7, 17, 27, 0.1))
    .block
      display :inline-block
      padding :8px 12px
      margin-right :8px
      border-radius :1px
      font-size :12px
      color : rgb(77, 85, 93)
      line-height :16px
      &.active
        color:#fff
      .count
        margin-left :2px
        font-size :8px
      &.positive
        background :rgba(0, 160, 220, 0.2)
        &.active
          background :rgb(0, 160, 220)
      &.negative
        background :rgba(77, 85, 93, 0.2)
        &.active
          background :rgb(77, 85, 93)
  .switch
    padding :12px 18px
    line-height :24px
    border-bottom :1px solid rgba(7, 17, 27, 0.1)
    color :rgb(147, 153, 159)
    font-size :0
    &.on
      color :#00c850
    .icon-check_circle
      display :inline-block
      vertical-align :top
      margin-right :4px
      font-size :24px
    .text
      font-size :12px
      display :inline-block
      vertical-align :top
</style>
