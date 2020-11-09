<template>
  <div>
    <!-- <Table :tableConfig="tableConfig" :tableData="tableData">
      <template v-slot:delete="slotData">
        <el-popconfirm title="确定删除该数据吗？" @onConfirm="del(slotData)">
          <el-link slot="reference" type="danger" :underline="false">删除</el-link>
        </el-popconfirm>
      </template>
    </Table> -->
    <el-dialog title="提示" :visible.sync="dialogVisible"> </el-dialog>
    <Form :formConfig="formConfig" :formData="formData" :formHandler="formHandler" ref="vuForm">
      <template slot="logo">
        
      </template>
    </Form>
  </div>
</template>

<script>
import Table from "@/components/table/table";
import Form from "@/components/form/form";
export default {
  components: {
    Table,
    Form,
  },
  data() {
        let validateUuid = (rule, value, callback) => {
      const reg = /^[0-9a-zA-Z]*$/
      if (!value) {
        callback(new Error('uuid不能为空'))
      } else if (!reg.test(value)) {
        callback(new Error('uuid不能含有中文和符号'))
      } else {
        callback()
      }
    }
    return {
      // 配置表格
      tableConfig: [
        {
          label: "ID",
          prop: "id",
          type: "text",
        },
        {
          label: "cloned",
          prop: "cloned",
          type: "text",
        },
        {
          label: "平台",
          prop: "platformId",
        },
        {
          label: "渠道",
          prop: "channel",
          type: "text",
        },
        {
          label: "版本",
          prop: "appVersion",
          type: "text",
        },
        {
          label: "环境",
          prop: "env",
          type: "text",
        },
        {
          label: "当前配置版本",
          prop: "appcode",
          type: "text",
        },
        {
          label: "创建时间",
          prop: "createTime",
          type: "text",
        },
        {
          label: "更新时间",
          prop: "updateTime",
          type: "text",
        },
        {
          type: "operation",
          label: "操作",
          buttonGroup: [
            { 
              element: "link",
              type: "primary",
              label: "通过",
              handler: (data) => {
                console.log(data);
              },
              callback:function(data){
                if(data.env=="测试"){
                  return false
                }else {
                  return true
                }
              }
            },
            {
              element: 'divider',
              callback:function(data){
                if(data.env=="测试"){
                  return false
                }else {
                  return true
                }
              }
            },
            { 
              element: "link",
              type: "primary",
              label: "拒绝",
              handler: (data) => {
                console.log(data);
              },
              callback:function(data){
                if(data.env=="测试"){
                  return false
                }else {
                  return true
                }
              }
            },
            {
              element: 'divider',
              callback:function(data){
                if(data.env=="测试"){
                   console.log(data.env);
                  return false
                }else {
                  return true
                }
              }
            },
            {
              element: "slot",
              slotName: "delete",
            },
          ],
        },
      ],
      // 表格数据
      tableData: [
        {
          appVersion: "980",
          appcode: "1",
          channel: "360zhushou",
          cloned: "0",
          createTime: "2019-09-16 14:53:44",
          env: "全环境",
          id: "175",
          latestConfigVersion: 119,
          platformId: "安卓",
          updateTime: "2020-10-15 14:54:52",
        },
        {
          appVersion: "982",
          appcode: "2",
          channel: "360zhushou",
          cloned: "0",
          createTime: "2019-09-16 14:53:44",
          env: "测试",
          id: "175",
          latestConfigVersion: 119,
          platformId: "安卓",
          updateTime: "2020-10-15 14:54:52",
        },
        {
          appVersion: "980",
          appcode: "1",
          channel: "360zhushou",
          cloned: "0",
          createTime: "2019-09-16 14:53:44",
          env: "全环境",
          id: "175",
          latestConfigVersion: 119,
          platformId: "安卓",
          updateTime: "2020-10-15 14:54:52",
        },
      ],
      dialogVisible: false,
      // form 表单配置
      formConfig: [
        {
          type: "input",
          label:"uuid",
          prop:"uuid",
          validator: [{ validator: validateUuid, trigger: 'blur' }],
          placeholder:"uuid",
        },
        {
          type: "textarea",
          label:"理由",
          prop:"resaon",
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
        {
          type:"slot",
          label:"图标",
          slotName:"logo"
        },
        {
          type:"datetime",
          label:"时间",
          prop:"time1"  
        },
        {
          type:"datetime",
          label:"时间",
          prop:"time2" ,
          format:"yyyy-MM-dd"
        },
      ],
      // form表单按钮的配置
      formHandler: [
         {
              type: "danger",
              label: "编辑",
              handler:(data) =>{console.log(data);}
            },
             {
              type: "success",
              label: "提交",
              handler:()=>this.onSubmit()
            },
            {
              type: "text",
              label: "111",
              handler:(data) =>{this.dialogVisible = true}
            },
      ],
      // form表单数据
      formData: {},
    };
  },
  methods: {
    del(data){
      console.log(data);
    },
    onSubmit() {
      this.$refs.vuForm.$refs.form.validate((valid) => {
        if (valid) {
          alert("submit!!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
  },
};
</script>

<style>
</style>
