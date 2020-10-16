<template>
  <div>
     <el-table
     :data="tableData"
     :style="tableConfig.style | 'width: 300px'"
     :border="tableConfig.border | false"
     :stripe="tableConfig.stripe | false"
     :height="tableConfig.height | '600px'"
     :max-height="tableConfig.maxHeight | '600px'"
     :size="tableConfig.size | '10px'"
     :fit="tableConfig.fit | false"
     :show-header="tableConfig.showHeader ^ true"
     :highlight-current-row="tableConfig.highlightCurrentRow ^ true"
     :current-row-key="tableConfig.currentRowKey | null"
     :row-class-name="tableConfig.rowClassName | null"
     :row-style="tableConfig.rowStyle | null"
     :cell-class-name="tableConfig.cellClassName | null"
     :cell-style="tableConfig.cellStyle | null"
     :header-row-class-name="tableConfig.headerRowClassName | null"
     :header-row-style="tableConfig.headerRowStyle | null"
     :header-cell-class-name="tableConfig.headerCellClassName | null"
     :header-cell-style="tableConfig.headerCellStyle | null"
     :row-key="tableConfig.rowKey | null"
     :empty-text="tableConfig.emptyText | '暂无数据'"
     :default-expand-all="tableConfig.default-expand-all & true"
     :expand-row-keys="tableConfig.expand-row-keys | null"
     :default-sort="tableConfig.defaultSort | null"
     :tooltip-effect="tableConfig.tooltip-effect | 'dark'"
     :show-summary="tableConfig.show-summary & true"
     :sum-text="tableConfig.sum-text | '合计'"
     :summary-method="tableConfig.summaryMethod | null"
     :span-method="tableConfig.spanMethod | null"
     :select-on-indeterminate="tableConfig.selectOnIndeterminate ^ true"
     :indent="tableConfig.indent | 16"
     :lazy="tableConfig.lazy | null"
     :load="tableConfig.load | null"
     :tree-props="tableConfig.treeProps | null"
     >
      <template v-for="item in tableColumnConfig">
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
    tableConfig: {
      type: Array,
      default: () => {}
    },
    tableColumnConfig: {
      type: Array,
      default: ()=>[]
    },
    tableData: {
      type: Array,
      default: ()=>[]
    }
  }
}
</script>

<style scoped>

</style>