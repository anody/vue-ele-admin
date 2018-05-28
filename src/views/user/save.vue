<template>
  <el-dialog :title="saveTit" :visible.sync="dialogVisible" width="60%" :before-close="handleClose">
    <el-form :rules="userRules" label-position="right" ref="userForm" :model="userForm" label-width="70px" class="postForm">
      <el-form-item label="姓名：" label-width="100px" prop="username">
        <el-input v-model="userForm.username" auto-complete="off" class="formItem" />
      </el-form-item>
      <el-form-item label="性别：" label-width="100px" prop="sex">
        <el-select v-model="userForm.sex" placeholder="请选择性别" class="formItem">
          <el-option v-for="item in sexs" :key="item.value" :label="item.name" :value="item.value" clearable />
        </el-select>
      </el-form-item>
      <el-form-item label="健康情况：" label-width="100px" prop="health">
        <el-switch v-model="userForm.health" active-text="健康" inactive-text="不健康" />
      </el-form-item>
      <el-form-item label="生日：" label-width="100px" prop="birth">
        <el-date-picker v-model="userForm.birth" type="datetime" format="yyyy-MM-dd HH:mm:ss" placeholder="选择日期时间" class="formItem" />
      </el-form-item>
      <el-form-item label="省份：" label-width="100px" prop="province">
        <el-cascader v-model="userForm.province" :options="provinces" class="formItem" />
      </el-form-item>
      <el-form-item label="详细地址：" label-width="100px" prop="address">
        <el-input v-model="userForm.address" auto-complete="off" type="textarea" :rows="8" class="formItem" />
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="handleClose()">取 消</el-button>
      <el-button type="primary" @click="handleSubmit()">确 定</el-button>
    </div>
  </el-dialog>

</template>

<script>
export default {
  name: 'userSave',
  props: ['saveTit', 'dialogVisible'],
  data () {
    const validateUsername = (rule, value, callback) => {
      if (value.length < 5 && !value) {
        callback(new Error('姓名格式不符合'))
      } else {
        callback()
      }
    }
    const validateAddress = (rule, value, callback) => {
      if (value.length < 1 && !value) {
        callback(new Error('地址格式不符合'))
      } else {
        callback()
      }
    }
    const validateBirth = (rule, value, callback) => {
      if (value.length < 1 && !value) {
        callback(new Error('生日格式不符合'))
      } else {
        callback()
      }
    }
    const validateProvince = (rule, value, callback) => {
      if (value.length < 1 && !value) {
        callback(new Error('省份格式不符合'))
      } else {
        callback()
      }
    }
    const validateSex = (rule, value, callback) => {
      if (!value) {
        callback(new Error('性别格式不符合'))
      } else {
        callback()
      }
    }
    return {
      userForm: {
        username: '',
        sex: '',
        birth: '',
        health: true,
        province: '',
        address: ''
      },
      sexs: [
        {name: '男', value: 1},
        {name: '女', value: 2}
      ],
      userRules: {
        username: [{required: true, message: '必须输入用户名', trigger: 'change', validator: validateUsername}],
        sex: [{required: true, message: '必须选择性别', trigger: 'change', validator: validateSex}],
        birth: [{type: 'date', required: true, message: '必须输入日期', trigger: 'change', validator: validateBirth}],
        province: [{required: true, message: '必须选择省份', trigger: 'change', validator: validateProvince}],
        health: [{required: true, message: '必须选择健康情况'}],
        address: [{required: true, message: '必须输入地址', trigger: 'change', validator: validateAddress}]
      },
      provinces: [
        {
          label: '北京市',
          value: 'beijingshi',
          children: [
            {
              label: '北京市',
              value: 'beijingshi',
              children: [
                {label: '东城区', value: 'dongchengqu'},
                {label: '西城区', value: 'xichengqu'},
                {label: '崇文区', value: 'chongwenqu'},
                {label: '宣武区', value: 'xuanwuqu'},
                {label: '丰台区', value: 'fengtaiqu'}
              ]
            }
          ]
        },
        {
          label: '广东省',
          value: 'guangdongsheng',
          children: [
            {
              label: '广州市',
              value: 'guangzhoushi',
              children: [
                {label: '越秀区', value: 'yuexiuqu'},
                {label: '荔湾区', value: 'liwanqu'},
                {label: '海珠区', value: 'haizhuqu'},
                {label: '天河区', value: 'tianhequ'},
                {label: '白云区', value: 'baiyunqu'}
              ]
            },
            {
              label: '深圳市',
              value: 'shenzhenshi',
              children: [
                {label: '福田区', value: 'luotianqu'},
                {label: '罗湖区', value: 'luofuqu'}
              ]
            }
          ]
        }
      ]
    }
  },
  methods: {
    handleClose () {
      this.$emit('getVisible', false)
    },
    handleSubmit () {
      this.$refs.userForm.validate((valid) => {
        if (valid) {
          this.$message({
            message: '保存成功!',
            type: 'success'
          })
          this.handleClose()
          this.$refs.userForm.resetFields() // 表单重置
        } else {
          return false
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
  .postForm{
    width: 80%;
    margin-left:50px;
    .title-prompt{
      font-size:12px;
      top:10px;
      color:#ff4949;
    }
    .formItem{
      width:100%;
    }
  }
</style>
