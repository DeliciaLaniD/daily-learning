<template>
  <div>
     <el-table
        :data="page_datas"
        border
        style="width: 100%"
        ref="multipleTable"
      tooltip-effect="dark"
      @selection-change="handleSelectionChange"
      @row-click="handleclick"
      :row-style="rowClass"
      row-key="id">
        <el-table-column type="selection" width="55" align="center"></el-table-column>
        <!-- <el-table-column prop="id" label="ID" width="80"></el-table-column> -->
        <el-table-column type="index" label="序号" width="60" align="center"></el-table-column>
        <el-table-column prop="name" label="创建人"></el-table-column>
        <el-table-column prop="tel" label="落箱电话" width="110" align="center"></el-table-column>
        <el-table-column prop="number" label="预约号" width="110"></el-table-column>
        <el-table-column prop="test" label="预约号条码" width="110"></el-table-column>
        <el-table-column prop="address" label="起始地"></el-table-column>
    </el-table>
  </div>
</template>

<script>
import child from './child.vue'
export default {
  components: {
    child
  },
  data () {
    return {
      page_datas: [
        {
          id: 1,
          name: 'test',
          tel: 123,
          number: 123,
          test: '234234',
          address: 'beijing'
        },
        {
          id: 2,
          name: 'test',
          tel: 123,
          number: 123,
          test: '234234',
          address: 'beijing'
        },
        {
          id: 3,
          name: 'test',
          tel: 123,
          number: 123,
          test: '234234',
          address: 'beijing'
        },{
          id: 4,
          name: 'test',
          tel: 123,
          number: 123,
          test: '234234',
          address: 'beijing'
        }
      ],
      currentRow: null,
      selectRow: [],
      multipleSelection:[]
    }
  },
  watch: {
    multipleSelection(data) {  //存储选中的row
      this.selectRow = [];
      if (data.length > 0) {
        data.forEach((item, index) => {
          this.selectRow.push(item.id);
        });
      }
    }
  },
  methods: {
    handleCurrentChange(val) {
      console.log('%c 🍕 val: ', 'font-size:20px;background-color: #2EAFB0;color:#fff;', val);
      this.currentRow = val;
    },
    rowClass({ row, rowIndex }) {
      if (this.selectRow.includes(row.id)) {
        return { "background-color": "rgba(185, 221, 249, 0.75)" };
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
      console.log(val, "多选");
    },
    handleclick(data) {
      console.log('%c 🍰 data: ', 'font-size:20px;background-color: #F5CE50;color:#fff;', data);

    }
  }
}
</script>

<style>
  .el-table{
   width: 1163px; 
   margin: 0 auto;
  }
  .el-table--enable-row-hover .el-table__body tr:hover>td.el-table__cell {
    background-color: rgba(185, 221, 249, 0.75);
  }
</style>

