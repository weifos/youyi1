<template>
  <view class="wrapper-user-point-rule">
    <view class="point-content">
      <view class="point-content-title">关于积分</view>
      <view class="point-content-p">友谊书城会员积分限在友谊书城购物、积分活动等获得，积分仅可在友谊书城使用。如有账户暂停使用，则取消该用户账号内积分及相关权益，不得转让。</view>
    </view>
    <view class="point-content">
      <view class="point-content-title">积分作用</view>
      <view class="point-content-p">积分增加可升级会员卡，享受不同层级会员卡权益</view>
      <view class="point-content-p">更多积分福利敬请期待</view>
    </view>
    <view class="point-content">
      <view class="point-content-title">积分有效期</view>
      <view class="point-content-p">积分有效期1年，积分获得日起，开始按照一年的周期计算积分有效期，若一年周期已满该积分未使用，则该积分将过期失效。</view>
      <view class="point-content-p">例如：2019年7月31日消费产生的积分将于2020年7月31日过期失效。</view>
      <view class="point-content-p">用户在是使用积分时，按照积分获得的时间的先后顺序进行消耗。</view>
    </view>
  </view>
</template>
<script>
  export default {}
</script>
<style lang="scss">
  .wrapper-user-point-rule{
    .point-content{
      margin-top:20px;
      padding:25px 50px;
      .point-content-title{
        height:44px;
        font-size:32px;
        font-weight:600;
        color:$yoyi-text-color-basic;
        line-height:44px;
      }
      .point-content-p{
        margin:15px 0;
        font-size:26px;
        font-weight:400;
        color:rgba(79, 79, 79, 1);
        line-height:36px;
      }
    }
  }
</style>