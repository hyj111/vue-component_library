<template>
  <div>
     <el-table :data="tableData" style="width: 100%" border>
      <template v-for="item in tableConfig">
         <el-table-column
          v-if="item.type == 'operation'"
          :label="item.label"
          :key="item.prop"
        >
        <template  slot-scope="scope">
          <el-button 
          v-for="btn in item.buttonGroup"
          :key="btn.id" 
          :type="btn.type"
          @click="btn.handler && btn.handler(scope.row)" 
          size="small">
          {{btn.label}}
          </el-button>
        </template>
        
        </el-table-column>
        
        <el-table-column
          v-else
          :prop="item.prop"
          :label="item.label"
          :key="item.prop"
        ></el-table-column>
      </template>
       
  </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  props: {
    tableConfig:{
      type: Array,
      default: ()=>[]
    },
    tableData:{
      type: Array,
      default: ()=>[]
    }
  },
  mounted() {
    
  }
}
</script>

<style scoped>

</style>