<template>
  <div class="tableList-container">
    <el-form class="form-container" label-position="left" :model="postForm" :rules="postRules" ref="postForm">
      <el-row>
        <el-col :span="24">
          <el-form-item prop="title">
            <MDinput name="name" v-model="postForm.title" required :maxlength="100">
              标题
            </MDinput>
            <span v-show="postForm.title.length>=26" class='title-prompt'>app可能会显示不全</span>
          </el-form-item>

          <div class="postInfo-container">
            <el-row :gutter="20">
              <el-col :span="8">
                <el-form-item label="栏目：" label-width="55px" prop="column">
                  <el-select v-model="postForm.column" placeholder="请选择栏目" class="formItem">
                    <el-option v-for="item in columns" :key="item.value" :label="item.name" :value="item.value" clearable />
                  </el-select>
                </el-form-item>
              </el-col>

              <el-col :span="8">
                <el-tooltip class="item" effect="dark" content="输入作者" placement="top">
                  <el-form-item label-width="55px" label="作者:" prop="author">
                    <el-input placeholder="输入作者" style='min-width:150px;' v-model="postForm.author" class="formItem" />
                  </el-form-item>
                </el-tooltip>
              </el-col>

              <el-col :span="8">
                <el-form-item label-width="55px" label="时间:" prop="publicDate">
                  <el-date-picker v-model="postForm.publicDate" type="datetime" format="yyyy-MM-dd HH:mm:ss" placeholder="选择发布日期" class="formItem" />
                </el-form-item>
              </el-col>
            </el-row>
          </div>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="24">
          <el-form-item prop="shortCon" style="margin-bottom: 40px;" label-width="45px" label="摘要:">
            <el-input type="textarea" class="article-textarea" :rows="1" autosize placeholder="请输入内容" v-model="postForm.shortCon">
            </el-input>
            <span class="word-counter" v-show="contentShortLength">{{contentShortLength}}字</span>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="24">
          <el-form-item prop="content">
            <Ueditor></Ueditor>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script>
import Tinymce from '@/components/Tinymce'
import MDinput from '@/components/MDinput'
import Sticky from '@/components/Sticky' // 粘性header组件
import Ueditor from '@/components/Ueditor'

export default {
  name: 'articleDetail',
  components: {Tinymce, MDinput, Sticky, Ueditor},
  props: {
    isEdit: {
      type: Boolean,
      default: false
    }
  },
  data () {
    const validateRequire = (rule, value, callback) => {
      if (value === '') {
        this.$message({
          message: rule.field + '为必传项',
          type: 'error'
        })
        // callback(null)
      } else {
        callback()
      }
    }
    return {
      postForm: {
        title: '',
        column: '',
        author: '',
        publicDate: '',
        shortCon: '',
        content: ''
      },
      fetchSuccess: true,
      loading: false,
      postRules: {
        title: [{ validator: validateRequire }],
        column: [{ validator: validateRequire }],
        author: [{ validator: validateRequire }],
        publicDate: [{ validator: validateRequire }],
        shortCon: [{ validator: validateRequire }],
        content: [{ validator: validateRequire }]
      },
      columns: [
        {name: '国际新闻', value: 1},
        {name: '国内新闻', value: 2}
      ]
    }
  },
  computed: {
    contentShortLength () {
      return this.postForm.shortCon.length
    }
  },
  created () {
    if (this.isEdit) {
      this.fetchData()
    } else {
      this.postForm = {
        title: '',
        column: '',
        shortCon: '',
        content: ''
      }
    }
  },
  methods: {
    submitForm () {
      this.postForm.display_time = parseInt(this.display_time / 1000)
      console.log(this.postForm)
      this.$refs.postForm.validate(valid => {
        if (valid) {
          this.loading = true
          this.$notify({
            title: '成功',
            message: '发布文章成功',
            type: 'success',
            duration: 2000
          })
          this.postForm.status = 'published'
          this.loading = false
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    draftForm () {
      if (this.postForm.content.length === 0 || this.postForm.title.length === 0) {
        this.$message({
          message: '请填写必要的标题和内容',
          type: 'warning'
        })
        return
      }
      this.$message({
        message: '保存成功',
        type: 'success',
        showClose: true,
        duration: 1000
      })
      this.postForm.status = 'draft'
    },
    getRemoteUserList (query) {
    }
  }
}
</script>

<style lang="less" scoped>
  /*@import "src/styles/mixin.scss";*/
  .title-prompt{
    position: absolute;
    right: 0px;
    font-size: 12px;
    top:10px;
    color:#ff4949;
  }
  .word-counter {
    width: 40px;
    position: absolute;
    right: -10px;
    top: 0px;
  }
  .formItem {
    width:100%;
  }
</style>
