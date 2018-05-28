<template>
  <div>
    <div id="editor"></div>
  </div>
</template>
<script>
export default {
  name: 'Ueditor',
  data () {
    return {
      editor: null,
      config: {
        initialFrameHeight: 500,
        initialFrameWidth: '100%'
      }
    }
  },
  props: {
    value: ''
  },
  mounted () {
    this.editor = window.UE.getEditor('editor', this.config)
    this.editor.addListener('ready', () => {
      this.editor.setContent(this.value)
    })
  },
  methods: {
    getUEContent () {
      return this.editor.getContent()
    }
  },
  destroyed () {
    this.editor.destroy()
  }
}
</script>

<style rel="stylesheet/css">
  .el-form-item__content{
    line-height: 20px;
  }
</style>
