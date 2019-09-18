<template>
  <view class="wrapper-point">
    <view class="point-content">
      <view class="point-summary">
        <view class="summary-count">
          <text>824</text>
        </view>
        <view class="summary-title">当前积分</view>
      </view>
      <view class="point-button">
        <navigator class="point-button-1" hover-class="" url="/pages/user/point-detail">
          <view></view>
          <view>积分明细</view>
        </navigator>
        <navigator class="point-button-2" hover-class="" url="/pages/user/point-rule">
          <view></view>
          <view>积分规则</view>
        </navigator>
      </view>
      <view class="point-title">
        <yoyiTitle title="会员积分兑换专区"></yoyiTitle>
      </view>
    </view>
    <view class="pay-coupon-list">
      <view class="pay-coupon-item" v-for="(value, key) in [1,2,3,4,5,6,7,8]" :key="key">
        <yoyiCoupon
          type="2"
          :shopName="`友谊书城${key}`"
          title="图书8折优惠券"
          amount="3"
          unit="张"
          rule="线上、门店通用"
          point="500"
          @click="jump(value)"></yoyiCoupon>
      </view>
    </view>
  </view>
</template>
<script>
  import yoyiTitle from '@/components/yoyi-title/'
  import yoyiCoupon from '@/components/yoyi-coupon/'

  export default {
    components: {yoyiTitle, yoyiCoupon},
    methods: {
      jump(item) {
        uni.navigateTo({
          url: `/pages/user/point-convert?id=${item}`,
        })
      },
    },
  }
</script>
<style lang="scss">
  page{ background-color:$yoyi-page-bg-color; }

  .wrapper-point{
    .point-content{
      /*width:750px;
      margin:0 auto;
      position:fixed;
      left:0;
      height:520px;
      z-index:2;
      background:#fff;*/
    }
    .point-summary{
      width:100%;
      position:relative;
      height:226px;
      background:$yoyi-bg-color;
      color:#fff;
      display:flex;
      flex-direction:column;
      justify-content:center;
      text-align:center;
      .summary-count{
        font-size:80px;
      }
      .summary-title{
        font-size:24px;
      }
      .summary-detail{
        position:absolute;
        right:-2px;
        bottom:30px;
        border-radius:200px 0px 0px 200px;
        border:1px solid rgba(255, 255, 255, 1);
        width:96px;
        height:34px;
        padding:7px 20px;
        font-size:24px;
        font-weight:400;
        color:rgba(255, 255, 255, 1);
        line-height:34px;
      }
    }
    .point-button{
      padding:30px 0;
      height:60px;
      line-height:60px;
      display:flex;
      font-weight:400;
      color:$yoyi-text-color;
      width:750px;
      background:#f1f5fa;
      text-align:center;
      font-size:28px;
      .point-button-1,
      .point-button-2{
        view:first-child{
          margin:10px 10px 0 0;
          height:40px;
          width:40px;
        }
        view:nth-child(2){
          height:60px;
          line-height:60px;
        }
      }
      .point-button-1{
        width:100%;
        display:flex;
        justify-content:center;
        view:first-child{
          background-repeat: no-repeat;
          // background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAABFCAMAAAAhD3VJAAAAilBMVEUAAAAAT6MAUaUAT6MAUacATqIAZLQATqMATqIAT6MAUqYAT6MAUKQAUaYATqIAbbkATqMAT6MAT6MAT6MAT6QAT6MAT6MAT6MATqMAU6sAV6gAT6MAT6MAT6MATqMAT6MATqMAT6MAT6MAT6QAUKQATqMATqMAT6IATqMAUKQATqIATqIATqUATqIw6ALtAAAALXRSTlMAqzX0JrMIcuz8IrQsGvkD5+PAa0TUx19YEgygr5SFN968eFFM2sukizCXfz72AxJpAAACNklEQVRYw82Xb4+iMBCHR9EKLAUU5L8gu66uuvP9v95dtaThShnkLrl93pXkidOZMfkVzATRp7WLYRbxHgWV+7q6WqPEr4vX1OLLF97nGgVh+oqbhsKx3llXe9JMVZszCkr+7JqtTiT8goJzA5L84HR1ELC7pd/Sa1Fw/Bh3P46P/n4Vg9+x9cyqt0PB2wo02PujIueQD6v5zXmM5zTaCzsKhnbRptrSJCjYx4ZdLDk1f31j3XU3HoKi9tXGql2cuoRuhYJtKisOe+Mh6TZWzOTbkuMh0Hprc4CzNh4SubF3AB9xx+BVYtF0AERc/FHWlYGG12/J6re2HpBZgkcX+rAWbXeK3IhJ9G0mln4zRS5CafddZ0nKAs9WtnIz8s66rVxK1m3lUrJuK5eUdVu5pKzbnnIpWbcdzSVkHm0elPhk9zxG1wkyC3EY50rLLppIaTnYGdyQU7KwvaUkRcRDd7gy6s59lv3/0s+Wa9vqQETfktgVo2WOJjJazn2THNMynBZvkgQR992h2vyzhrl/Iwc24m2uDN/tgs+QFf9HPoV7F8AyBCRC3iKWAJUhIMlhpgY5QawB3LALSDqln+QGmR/uTOxjieZIT7NMVKSfQbqdFOnZqTGkMzrSZ1vEaCyd4YWPXu5iTmfm7MplWzMinYlIr8dtOVAqnclIrwd9exPAKF6LMtJrn245EKifiQK9GBp1Qa0NNKq1VTY2AOo9gebHA/2eECRLIDBu7DaDefC6jBj8SH4B5rGZ6drTFjMAAAAASUVORK5CYII=) 0 0 no-repeat;
          background-image:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAABFCAYAAAAW0YV7AAAABGdBTUEAALGPC/xhBQAACrlJREFUeAHtW3twVcUZ3z3n3iRoQsVCy6uOxfKHQnVaW2vpjCbkNcM0FUhyp2V4mAcVaxUkdhrwUQNVsC1PbcvITQIh1c5NwmOo1NwkBJWpoEyLra1VkEyZCkWBlpBIcu85Z/vbkyz3nHPf95wbKfbMJPv4dr/9frvf7n67+11KRujr7u52va98tIQx8iBhdDKl7IgkyasrC0o7R0gEvRk6Eo01dLQWa0zbALA3W9uDALslWa4B8BNWWjrSaQXc6G+dqhJtHYCWxBaeDlJK1o92s6c9eZ6+2GXtUdMCuPnQvtGXLvY9RjWylBGSYRSRUnoMHfAuIezbxvyhOD0tSaS2sqBsB8qhqvOf5CRLxhjd2tFSMdDb9x7RyI+MYCmhFwGidvQkNn1xcXkJ4gUY1bfN7bMJmsa213e0vt7Q3voNM82ZlGMj3NDVMkNV2GaIdbtRND5SGNEdWaOk2gV3lZ420nzMJ/d2kvvROXXonOuNtFj1jOWSjdsG3NzdNnkgoD4DgeeFNU7JmzKTHqwsLjscRjNkeP/gu5710VXomiXgIxtIhFDSh7+nJt2YvWHW1FmDJloKiZQBN3Z3Z6mBs49AwBWYj9cY24aqnmGUrqguKNvGR8pIixX3tu+cTqi6ESqRby0HPieIRGvAc7eVlkw6JcAN7b4yjZCfA8mNpsYoCUqEbs4cfe2q+XfO6jXRkkjU+31zGKG/APAp1moA3kWYvKy6eK5l/ltLRk4nBXhrZ+utVGObIEiulR0E+T11sYerZnqwAtv/9h3bl3m6p79GI2wFYSTbyBFCq1DzXyP3J9UzPOeNtHjxhAC/0L13bH9wYDXm2GLrHAPQY9hKllcWlP8uXmOp0Ov9eyYyMrgWk3k+OtokLxLnKZWeyCnUtnioR02Ev4mBtQI3B48Hzv0A07AOjV1npPNthi8m2GY2eKZ5AkZaOuJ8m9KIthkdfoeVP9/eJEaWVhZ79ltp1nRUwPX+liJGGBYQszmIEQX2yNuMlbnTaT7C9f62hZBrDRbKCWH8KdmVyUjNwmJPTxhtOCMMsLfb9yUSJOsBKtwcxDbjovJDFYWlh6IxHIl8X7cv+2KAPKoR+jCAZ5rbpIPQvHWfcbM1kczUy4DrD+7JYR8HHiOMLYPaWMzB1LYZsyDOp7Z17bopqCjrAPoeK3eo+Snk1VYVljdzrRR0HbDX35IPoM3IHS8IeujQNmPimYZEQ2dbgapqGwF8Whh7Sg653FJFRV7Z3zmNetvb7mJUfRlL/yhjYae3GSPvdMQvn7c1sgr8x5jaoORsVpZ8KzdtYSdo64xg+TYjy7Skuqh8llN7qqnxNCXy8vKU6kLPcxmyayqV6K+guqFtipGxgwPqEt60CyvebSEZ6GvYZgpGYpsJtelsbFHB3HPg+ADUfJeqqh2CO6brl3nchdF1i0xC2ZlUwR45csT9Vu/JW3KylPc8MzyXLvNMMcK3oG2dLdPdOdn/SMVMlQk9GRpiCMGojtOR87Dvr76Mo+d7XtOCytHePvo2Xz1TxKlX23tk7zU4E7+saOTPAxf6jje1+75oh5+xriOA+0/JX8WI6Ad2hFOwVRxIFTQHe+b8wEvgU8QFhSqOC0i01Ci0nbgjgN05o/6GBd9wuGeTUwFtAJsrQPHFR6bSKyJtN3QEMJ9jLokVw8I5GxIoOdDRwPJDQ0VB6ZshvvZijgDmIlQUev7iomQmRuSjkEiJgY4Ftrq4/LchfvZjjgHmonDQskTykwE9kmC5jI4CThb0SINNC+BEQX8SYNMGOB5oflU0vPXk8rL846sxX6CcnrND3EP/HVfpEOvoc5qo2p+wz+aKsiMFlrfnEo3aCfnd9CVFLcE1i+nExXlq/CRKyUuwIO7l6eHP1NG4qTooETYRt5XLRQERakxSZBc9WJlf+keRZye0DZjfT18KnH0DQkzA1W1qHyN3o+7dkSvjJkshav3+nbdXzZz7VuQyieeaejrxaqGSVPvPJBiA4fdLoSK2Y1ASmSjKV2wzAgPbgBfNnN2D65SDTggTjQfm+L8IyfRHoyeTb1ulcWGg4VEst9fvulmWWdgcNgqjaeo0zOlGkYeO2iRL8m9EOlKoMqZ8fkzmuyVfK/k4Ej3ZPNuAeYPDl+Bxnz68XT5KlJCIGLmTTtrJIc7RY7ZVOjrrK5PyqQPsiEp7230/xXh+H/tpzDnMVPPbr8bo01v9vrpYuoAnHQVXyAfkjHHfq8jLG4hVNhGabcANr+z+gjoQeFRvjBsZSX14NWDE8nJgZoBLRp4xmwXPzUH4opmafMq2SmvuQD8Wn7Q/psFaS+pZNFpX2B5h/j7b0NlSqmpsEYDHVGkIcR3erL4lhMG29A7iJ0Q6SqgSJh2oLCxrj0JPKts2YN7a8Ntw3PdhbEt3YFs6LCREB3mrijzrRdrJMCjjztN0TzvE3bZKOymkk7xG55IedGjouomSf3L+Vy3gIWNILsPc3w9rsEUiGas5YEdUmjO6Er/q4tJXIZfJI+iqHeFoA2AaYTwbQ+2vng8XCt+BcbOFEvahy+UuvTd/zvuS7pwSwjh7q7/lue2dOz8byvrfjeFS4Vl+VofpcpuiKCs5Eqg06xKQQJBhxj0QUJVj3g7fD/kjs6A5EWLfvWDkA4VK2XnNyCdaHBr7gaDB7MWZGoC5czYEOSMIw+EYppFnjwfOHuXuBBZaykn+wC5R2oiJE8TKeVh2u1pTZpZAxawM2cMfxyWJPulyj9VXaX3ONrXv/FyAqj8Dj4W4TYwwj+keWZbgfOaM1zpvA1/SlncCGOMWMYHjlhBONJtgr98ZXpMO4mZxQ04GeSqSO1B4+SszxwSYi8h7v76jZT6ia2H3TgwXm57GQreiqqi06ZMYJf3F4txgPhafD+O5JYfLrl/4R8omhDt/XQhS7thZg24IO8Khp96QiPRQKo1GbjF+LhbSeUyjz0CeycOl71tc7Hk+fs1QibARDpGGYtzdYBCebQDOz6Omb2iEWTMlmbVVRfdwR7C0fI2dbV+Hg8omTPpvmhqg9MXFReXzTHlxEnEBi/rwkZ6pUrIRwHVvGJGvh/Bap7i9mDjl2vVOeK0L3o3dvvFqkKyBIi6yLqa8s/H33arCMp8on0iYMGDOjP9G4WKHhB9baavQ26bfKHA6BHDEa537Sp/q6YcLJIMrpNlXeqgd8g7WkWVVReV+nk7mSwqwYMx/o4BfItRBmPt1Y0UQhkMAT9lr3dvZOhsPUvitU7g3PNj/GzZD3U3ucb/kjmiWZhNKpgRYcN62v3Waouge8qYTCaeDsQqd20Kz2ROJeK3H/L3DkFfd827Z9fiw45kQIenQFmDRWqxRQQMxvda53R5k6iqM6n2RtIWfZ+E7soy7U4j27ISOAOYC6PPuRP9yRtnKKPMOLxN0GXw4ddtdeNvjQfVJVB/DeRg/vh7glPMIroB2GfPtxh0DLATZ8WrbhIFL2lrMtQXWlVUvA691rK8+uDk+DsPmFlHvcpimFV/wdxywYKz/RoHq8zuhn9RhRKHRpCkzS1ph/QWb4OlEmDbAXDg+wg2drQs0jaxFKuobMoR4XZblpSPxsJZWwGJEuJnaG6QrocJwaTCYqZR8gKPbjyvzy14YHmFRJW3hiAAW0jd1+G4IMloN3b0Bi9vh8WNGbXfq3Ve08f/w094D/wWYJnD4cvJrGQAAAABJRU5ErkJggg==');
          background-size:contain;
        }
      }
      .point-button-2{
        width:100%;
        border-left:2px solid $yoyi-text-color;
        display:flex;
        justify-content:center;
        view:first-child{
          background-repeat: no-repeat;
          // background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAAaVBMVEUAAAAATqQAT6MAT6MATqMAUKYATqMAT6MATqMAT6MAT6QAT6MAUKQAU6YAW7UATqMAVKsAT6MAT6MAU6YAVqYAWbMATqMAT6IAT6MATqIATqQAT6IAUKQAUagAT6MAT6IAWqUAUqQATqJYWCUIAAAAInRSTlMAJ/nCbzzI66ObeFBFKwjNFLlfHxcF7t+xsKCScCT0hBE7GCGergAAAepJREFUSMeUklmSgzAMRBVjzG72HVI1uv8hB+SQzQLC+6JKNBLdDTw6DgfVekJ4rRrCWMPPZNIR+IFwZPaT1O0EMojOPZc6uItzLK983PDycSqiqJjG3MMNv9rXxg0alEzgjUQqNDTxnlYKXBHBbM9uwWMoWWkdINEnwJL0SAQ1k49xKnUPzEyNb5m112j9wzpo36i/d5ubQzghNJd/eYUL9whOie64ID8yIittbVnaavL8LbGqYW8uFaIq2cubV1t88spaoqgvsMG/7VJG2lqMhLVaU2JbpJTSH5yKP5Y5b8892NCGFGz61+putY/r5Jwu2plr6hpOR70Uz9ht+VNqV0pkWz9muMRta4pDeVxEGcu0oI9cg84VGmJcSIClLoqanySrKqa2ecCTI+Y7I4/6PODuGxUuVLvfxYF+fTzw9MbPRrK5RcTpunhCxJaOL66LC7JqTSq6Lo7WrP5LL5MUAGEgCI7oPxLy/0eKl740Uoe6iVggyUwvCla/rQ7MXVWGhOEekownwz2eWQyGezGykgz3SkYMGG4xmCefANwyFAFkuAUw0ktwS2+JPsAt+nPnGeCymzI6gGN0YLH7e71/LJbMfdY5a8DcRawQgUZEKRHiZHz0wbUj8wWRWYR1URNkQfHVyJcyVQdfnxdr54pPgOQAAAAASUVORK5CYII=) 0 0 no-repeat;
         background-image:url('data:image/png;base64,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');
         background-size:contain;
        }
      }
    }
    .point-title{
      padding:0 30px;
      width:690px;
      height:100px;
      line-height:100px;
      margin:0 auto;
      font-size:32px;
      font-weight:400;
      color:$yoyi-text-color-basic;
      background:#fff;
    }
    .pay-coupon-list{
      /*padding-top:540px;*/
      padding:20px 0;
      .pay-coupon-item{
        margin-bottom:-10px;
        transform:scale(0.9);
        &:last-child{
          margin-bottom:0;
        }
      }
      .wrapper-coupon .coupon-deadline{
        font-size:28px;
      }
    }
  }
</style>