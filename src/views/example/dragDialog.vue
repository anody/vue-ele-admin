<template>
  <div class="components-container">
    <el-button type="primary" @click="dialogTableVisible = true">OPEN</el-button>
    <el-dialog v-el-drag-dialog title="Ladyson Address" :visible.sync="dialogTableVisible">
      <el-table border :data="dataList" height="200">
        <el-table-column property="date" label="Date" width="150"></el-table-column>
        <el-table-column property="name" label="Name" width="200"></el-table-column>
        <el-table-column property="address" label="Address"></el-table-column>
      </el-table>
    </el-dialog>
  </div>
</template>

<script>
import elDragDialog from '@/directive/el-dragDialog' // base on element-ui

export default {
  name: 'dragDialog-demo',
  directives: { elDragDialog },
  data () {
    return {
      dialogTableVisible: false,
      dataList: [{
        date: '2018-05-02',
        name: 'Ladyson',
        address: '广东省广州市天河区天河客运站X出口200米'
      }, {
        date: '2018-05-04',
        name: 'Ladyson',
        address: '广东省广州市天河区天河客运站X出口200米'
      }, {
        date: '2018-05-01',
        name: 'Ladyson',
        address: '广东省广州市天河区天河客运站X出口200米'
      }, {
        date: '2018-05-03',
        name: 'Ladyson',
        address: '广东省广州市天河区天河客运站X出口200米'
      }, {
        date: '2018-05-03',
        name: 'Ladyson',
        address: '广东省广州市天河区天河客运站X出口200米'
      }, {
        date: '2018-05-03',
        name: 'Ladyson',
        address: '广东省广州市天河区天河客运站X出口200米'
      }, {
        date: '2018-05-03',
        name: 'Ladyson',
        address: '广东省广州市天河区天河客运站X出口200米'
      }, {
        date: '2018-05-03',
        name: 'Ladyson',
        address: '广东省广州市天河区天河客运站X出口200米'
      }, {
        date: '2018-05-03',
        name: 'Ladyson',
        address: '广东省广州市天河区天河客运站X出口200米'
      }]
    }
  }
}
</script>
