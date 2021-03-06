<template>
  <div>
    <van-cell-group>
      <van-field
        v-model="data.name"
        placeholder="名称/姓名"
        label="名称"
        :error-message="errorMsg.name"
      />
      <van-field
        v-model="data.mobile"
        type="tel"
        placeholder="请输入手机号码"
        label="手机"
        :error-message="errorMsg.mobile"
        icon="clear"
        @click-icon="data.mobile = ''"
        @blur="mobileBlur('mobile')"
      />
      <van-field
        v-model="data.code"
        center
        label="短信验证码"
        placeholder="请输入验证码"
        icon="clear"
        :error-message="errorMsg.code"
        @click-icon="data.code = ''"
      >
        <van-button
          slot="button"
          size="small"
          :disabled="countdown > 0"
          type="primary"
          @click="sendMobileCode"
        >{{ countdown ? countdown + 's' : '发送' }}</van-button>
      </van-field>
    </van-cell-group>
    <div class="pad-all mar-top">
      <van-button block type="primary" @click="submit">立即注册</van-button>
      <van-button block class="mar-top" @click="reset">重置</van-button>
    </div>
  </div>
</template>
<script>
import { Field, CellGroup, Cell, Button, Toast } from 'vant'
import validator from '@/utils/validatorForm.js'

export default {
  name: 'Demo',
  components: {
    [Field.name]: Field,
    [Button.name]: Button,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup
  },
  data() {
    return {
      countdown: 0,
      data: {
        name: '',
        mobile: '',
        code: ''
      },
      errorMsg: {
        name: '',
        mobile: '',
        code: ''
      },
      rules: {
        name: [{ required: true, message: '请输入名称' }],
        mobile: [
          {
            validator: (rule, value, callback) => {
              if (!value) {
                callback('请输入手机号码')
              } else if (/^[1][0-9]{10}$/.test(value)) {
                callback()
              } else {
                callback('请输入正确的手机号码')
              }
            }
          }
        ],
        code: [{ required: true, message: '请输入验证码' }]
      }
    }
  },
  created() {
    this.validator = validator(this.rules, this.data)
  },
  methods: {
    sendMobileCode() {
      this.validate(errors => {
        if (!errors) {
          Toast('发送成功')
          this.countdown = 60
          this.countdownSubtract()
        }
      }, 'mobile')
    },
    countdownSubtract() {
      if (this.countdown > 0) {
        setTimeout(() => {
          this.countdown -= 1
          this.countdownSubtract()
        }, 1000)
      }
    },
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
      this.validate((errors, fields) => {})
    },
    reset() {
      this.data = {
        name: '',
        code: '',
        mobile: ''
      }
      this.validator.setData(this.data)
      this.resetField()
    },
    mobileBlur(val) {
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
