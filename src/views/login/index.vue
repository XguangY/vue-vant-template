<template>
  <div class="login">
    <div class="img">
      <a href="https://github.com/XguangY" target="_blank" rel="noopener noreferrer">
        <van-image
          width="4rem"
          height="4rem"
          round
          fit="cover"
          src="https://user-gold-cdn.xitu.io/2019/12/11/16ef5878b6b6d411?w=460&h=460&f=jpeg&s=30763"
        />
      </a>
    </div>
    <van-cell-group>
      <van-field
        v-model="data.name"
        placeholder="请输入用户名"
        :error-message="errorMsg.name"
        @blur="nameBlur('name')"
      />
      <van-field
        v-model="data.password"
        type="password"
        placeholder="请输入密码"
        :error-message="errorMsg.password"
        @blur="passwordBlur('password')"
      />
    </van-cell-group>
    <div class="sub">
      <van-button block type="primary" @click="submit">登 陆</van-button>
      <van-button block class="mar-top" @click="reset">重 置</van-button>
    </div>
    <van-cell title="用户名" icon="user-o" value="admin" />
    <van-cell title="密码" icon="setting-o" value="123456" />
  </div>
</template>
<script>
import {
  Image,
  Field,
  CellGroup,
  Cell,
  Button,
  PasswordInput,
  NumberKeyboard
} from 'vant'
import validator from '@/utils/validator.js'

export default {
  name: 'Demo',
  components: {
    [Image.name]: Image,
    [Field.name]: Field,
    [Button.name]: Button,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [PasswordInput.name]: PasswordInput,
    [NumberKeyboard.name]: NumberKeyboard
  },
  data() {
    return {
      countdown: 0,
      data: {
        name: '',
        password: ''
      },
      errorMsg: {
        name: '',
        password: ''
      },
      showKeyboard: false,
      redirect: undefined,
      rules: {
        name: [{ required: true, message: '请输入用户名' }],
        password: [
          {
            validator: (rule, value, callback) => {
              if (!value) {
                callback('请输入密码')
              } else if (/^[0-9]{6}$/.test(value)) {
                callback()
              } else {
                callback('请输入正确的密码')
              }
            }
          }
        ]
      }
    }
  },
  watch: {
    $route: {
      handler: function(route) {
        this.redirect = route.query && route.query.redirect
      },
      immediate: true
    }
  },
  created() {
    this.validator = validator(this.rules, this.data)
  },
  methods: {
    /**
     * 清除验证提示
     * @param attrs
     */
    resetField(attrs) {
      attrs = !attrs
        ? Object.keys(this.errorMsg)
        : Array.isArray(attrs)
          ? attrs
          : [attrs]
      attrs.forEach(attr => {
        this.errorMsg[attr] = ''
      })
    },
    /**
     * 验证方法
     * @param callback
     * @param data
     */
    validate(callback, data) {
      this.validator.validate((errors, fields) => {
        this.resetField()
        if (errors) {
          fields.forEach(item => {
            this.errorMsg[item.field] = item.message
          })
        }
        callback && callback(errors, fields)
      }, data)
    },
    submit() {
      this.validate((errors, fields) => {
        if (!errors && this.data.name === 'admin' && Number(this.data.password) === 123456) {
          // 请求接口
          this.$router.push({ path: this.redirect || '/home' })
        }
      })
    },
    reset() {
      this.data = {
        name: '',
        password: ''
      }
      this.validator.setData(this.data)
      this.resetField()
    },
    nameBlur(val) {
      this.validate(errors => {}, val)
    },
    passwordBlur(val) {
      this.validate(errors => {
        // if (!errors) {
        //   Toast('输入正确') // 后期注释
        // } else {
        //   Toast(errors) // 错误逻辑
        // }
      }, val)
    }
  }
}
</script>

<style  lang="scss" scoped>
.login {
  height: 100vh;
  background-color: rgb(247, 248, 250);
  .img {
    padding: 20px 0;
    display: flex;
    justify-content: center;
  }
  .sub {
    padding: 10px 20px;
    > button:last-child {
      margin-top: 10px;
    }
  }
}
.login /deep/ .van-field__body {
  padding: 0 20px;
  font-size: 16px;
  height: 50px;
  line-height: 40px;
  border-radius: 25px;
  text-align: center;
  background-color: #ccc;
}
.login /deep/ .van-field__error-message,
.login /deep/ .van-field__control {
  text-align: center;
}
</style>
