<template>
  <div>
    <!-- <Table :tableConfig="tableConfig" :tableData="tableData" /> -->
    <el-dialog
    title="提示"
    :visible.sync="dialogVisible"
    >
    </el-dialog>
    <Form :formConfig="formConfig" :formData="formData" :formHandler="formHandler"/>
  </div>
</template>

<script>
import Table from "@/components/table/table";
import Form from "@/components/form/form"
export default {
  components: {
    Table,
    Form
  },
  data() {
    return {
      // 配置表格
      tableConfig: [
         {
          label: 'ID',
          prop: 'id'
        },
        {
          label: 'cloned',
          prop: 'cloned'
        },
        {
          label: '平台',
          prop: 'platformId'
        },
        {
          label: '渠道',
          prop: 'channel'
        },
        {
          label: '版本',
          prop: 'appVersion'
        },
        {
          label: '环境',
          prop: 'env'
        },
        {
          label: '当前配置版本',
          prop: 'appcode'
        },
        {
          label: '创建时间',
          prop: 'createTime'
        },
        {
          label: '更新时间',
          prop: 'updateTime'
        },
        {
          type: "operation",
          label: "操作",
          buttonGroup: [
            {
              type: "danger",
              label: "编辑",
              handler:(data) =>{console.log(data);}
            },
             {
              type: "danger",
              label: "编辑",
              handler:(data) =>{this.dialogVisible = true}
            },
            {
              type: "text",
              label: "111",
              handler:(data) =>{this.dialogVisible = true}
            },
          ],
        },
      ],
      // 表格数据
      // tableData: [
      //   {
      //     appVersion: "980",
      //     appcode: "1",
      //     channel: "360zhushou",
      //     cloned: "0",
      //     createTime: "2019-09-16 14:53:44",
      //     env: "全环境",
      //     id: "175",
      //     latestConfigVersion: 119,
      //     platformId: "安卓",
      //     updateTime: "2020-10-15 14:54:52",
      //   },
      // ],
      dialogVisible:false,
      // form 表单配置
      formConfig: [
        {
          type: "input",
          label:"停车",
          prop:"name1",
          placeholder:"停车场名称",
        },
        {
          type: "input",
          label:"停车",
          prop:"name2",
          placeholder:"停车场名称",
          requiredMsg:"请输入停车场名称",
          required:true
        },
        {
          type: "input",
          label:"停车",
          prop:"name3",
          placeholder:"停车场名称",
          required:true
        },
        {
          type: "select",
          label: "类型",
          prop: "type",
          required:true,
           options: [
            {
              value: '1',
              label: '1'
            },
            {
              value: '8',
              label: '8'
            },
            {
              value: '12',
              label: '12'
            }
          ]
        },
      ],
      // form表单按钮的配置
      formHandler: [],
      // form表单数据
      formData:[],
    };
  },
};
</script>

<style>
</style>
