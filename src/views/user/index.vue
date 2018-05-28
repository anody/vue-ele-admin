<template>
  <div class="table-container">
    <el-row class="opBtns">
      <el-tooltip content="新增">
        <el-button icon="el-icon-plus" circle type="danger" @click="handleSave()" />
      </el-tooltip>
      <el-tooltip content="批量删除">
        <el-button size="small" id="opBtns_delete" icon="el-icon-delete" type="warning" @click="handleDelete()" :disabled="hasSelection">批量删除</el-button>
      </el-tooltip>
    </el-row>

    <el-form :model="search" ref="search">
      <el-row :gutter="20">
        <el-col :span="8">
          <el-form-item label-width="50px" label="性别:">
            <el-select class="searchItem" v-model="search.sex" placeholder="请选择">
              <el-option v-for="item in sexs" :key="item.value" :label="item.name" :value="item.value" clearable />
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label-width="50px" label="姓名:">
            <el-input class="searchItem" placeholder="姓名" v-model="search.name" clearable />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label-width="50px" label="日期:">
            <el-date-picker class="searchItem" v-model="search.birth" type="datetime" format="yyyy-MM-dd HH:mm:ss" placeholder="选择日期时间" />
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>

    <el-row>
      <el-table :data="tableData" border style="width: 100%" @selection-change="handleSelectionChange">
        <el-table-column align="center" type="selection" width="55" />
        <el-table-column align="center" prop="name" label="姓名" width="120" />
        <el-table-column align="center" prop="sex" label="性别" width="120" sortable
                         :filters="[{ text: '男', value: '男' }, { text: '女', value: '女' }]"
                         :filter-method="filterSex" />
        <el-table-column align="center" prop="address" label="地址" show-overflow-tooltip />
        <el-table-column align="center" prop="birth" label="生日" width="180" sortable
                         :filters="[{text: '2016-05-01', value: '2016-05-01'}, {text: '2016-05-02', value: '2016-05-02'}, {text: '2016-05-03', value: '2016-05-03'}, {text: '2016-05-04', value: '2016-05-04'}]"
                         :filter-method="filterHandler" />
        <el-table-column align="center" label="操作">
          <template slot-scope="scope">
            <el-tooltip content="查看">
              <el-button  icon="el-icon-view" circle type="success" @click="handleView(scope.$index, scope.row)" />
            </el-tooltip>
            <el-tooltip content="修改">
              <el-button icon="el-icon-edit" circle type="primary" @click="handleSave(scope.$index, scope.row)" />
            </el-tooltip>
            <el-tooltip content="删除">
              <el-button icon="el-icon-delete" circle type="danger" @click="handleDelete(scope.$index, scope.row)" />
            </el-tooltip>
          </template>
        </el-table-column>
      </el-table>
    </el-row>

    <el-row>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="pageNum"
        :page-sizes="[10, 20, 30, 40]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400">
      </el-pagination>
    </el-row>

    <user-save :saveTit="saveTit" :dialogVisible="dialogVisible" @getVisible="closeDialog"></user-save>

  </div>
</template>

<script>
import MDinput from '@/components/MDinput'
import Sticky from '@/components/Sticky' // 粘性header组件
import userSave from './save.vue'

export default {
  name: 'userIndex',
  components: { MDinput, Sticky, userSave },
  data () {
    return {
      loading: false,
      sexs: [
        {name: '男', value: 1},
        {name: '女', value: 2}
      ],
      search: {
        sex: '',
        name: '',
        birth: ''
      },
      tableData: [{
        birth: '2016-05-03',
        name: 'Ladyson',
        sex: '男',
        address: '广东省广州市天河区天河客运站X出口200米'
      }, {
        birth: '2016-05-02',
        name: 'Ladyson',
        sex: '男',
        address: '广东省广州市天河区天河客运站X出口200米'
      }, {
        birth: '2016-05-04',
        name: 'Ladyson',
        sex: '女',
        address: '广东省广州市天河区天河客运站X出口200米'
      }, {
        birth: '2016-05-01',
        name: 'Ladyson',
        sex: '男',
        address: '广东省广州市天河区天河客运站X出口200米'
      }, {
        birth: '2016-05-08',
        name: 'Ladyson',
        sex: '男',
        address: '广东省广州市天河区天河客运站X出口200米'
      }, {
        birth: '2016-05-06',
        name: 'Ladyson',
        sex: '男',
        address: '广东省广州市天河区天河客运站X出口200米'
      }, {
        birth: '2016-05-07',
        name: 'Ladyson',
        sex: '女',
        address: '广东省广州市天河区天河客运站X出口200米'
      }, {
        birth: '2016-05-07',
        name: 'Ladyson',
        sex: '女',
        address: '广东省广州市天河区天河客运站X出口200米'
      }, {
        birth: '2016-05-07',
        name: 'Ladyson',
        sex: '女',
        address: '广东省广州市天河区天河客运站X出口200米'
      }, {
        birth: '2016-05-07',
        name: 'Ladyson',
        sex: '女',
        address: '广东省广州市天河区天河客运站X出口200米'
      }, {
        birth: '2016-05-07',
        name: 'Ladyson',
        sex: '女',
        address: '广东省广州市天河区天河客运站X出口200米'
      }, {
        birth: '2016-05-07',
        name: 'Ladyson',
        sex: '女',
        address: '广东省广州市天河区天河客运站X出口200米'
      }, {
        birth: '2016-05-07',
        name: 'Ladyson',
        sex: '女',
        address: '广东省广州市天河区天河客运站X出口200米'
      }, {
        birth: '2016-05-07',
        name: 'Ladyson',
        sex: '女',
        address: '广东省广州市天河区天河客运站X出口200米'
      }, {
        birth: '2016-05-07',
        name: 'Ladyson',
        sex: '女',
        address: '广东省广州市天河区天河客运站X出口200米'
      }],
      pageNum: 1,
      hasSelection: true,
      saveTit: '',
      dialogVisible: false
    }
  },
  methods: {
    filterHandler (value, row, column) {
      const property = column['property']
      return row[property] === value
    },
    filterSex (value, row) {
      return row.sex === value
    },
    handleSelectionChange (val) {
      if (val.length > 0) {
        this.hasSelection = false
      } else {
        this.hasSelection = true
      }
    },
    handleCurrentChange () {
      console.log('翻页')
    },
    handleSizeChange () {
      console.log('改变一页的显示数量')
    },
    handleSave (index, row) {
      if (index) {
        this.saveTit = '编辑'
      } else {
        this.saveTit = '新增'
      }
      this.dialogVisible = true
    },
    closeDialog (bool) {
      this.dialogVisible = bool
    },
    handleView () {

    },
    handleDelete (index, row) {
      console.log(index, row)
      this.$confirm('确认删除该数据？')
        .then(_ => {
          this.$message({
            message: '删除成功',
            type: 'success'
          })
        })
        .catch(_ => {
        })
    }
  }
}
</script>

<style lang="less" scoped>
  .table-container {
    .opBtns{
      margin-bottom: 20px;
    }
    .searchItem{
      width: 100%;
    }
  }
</style>
