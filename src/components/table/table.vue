<template>
  <div>
    <el-table :data="tableData" style="width: 100%" border>
      <template v-for="item in tableConfig">
        <!-- 回调，数据需要转换后显示 -->
        <el-table-column
          :prop="item.prop"
          :label="item.label"
          :key="item.prop"
          :width="item.width"
          v-if="item.type === 'function'"
        >
          <template slot-scope="scope">
            <span
              v-html="item.callback && item.callback(scope.row, item.prop)"
            ></span>
          </template>
        </el-table-column>
        <!-- 图片 -->
        <el-table-column
          :prop="item.prop"
          :label="item.label"
          :key="item.prop"
          :width="item.width"
          v-else-if="item.type === 'image'"
        >
          <template slot-scope="scope">
            <img
              :src="'https://forumimg01.jiaoliuqu.com/' + scope.row[item.prop]"
              :width="item.imgWidth || 50"
            />
          </template>
        </el-table-column>
        <!-- 操作 -->
        <el-table-column
          v-else-if="item.type == 'operation'"
          :label="item.label"
          :key="item.prop"
          align="center"
        >
          <template slot-scope="scope">
            <template v-for="(operation,index) in item.buttonGroup">
              <el-link
                v-if="operation.element === 'link'"
                v-show="!operation.callback || (operation.callback && operation.callback(scope.row, item.prop))"
                :key="index"
                :underline="false"
                :type="operation.type"
                @click="operation.handler && operation.handler(scope.row)"
              >
                {{ operation.label }}
              </el-link>
              <!-- 当operation.element==divider且operation.callback为空时或者operation.callback的返回值是true时候显示， -->
                <el-divider 
                v-else-if="operation.element=='divider'&&(!operation.callback || (operation.callback && operation.callback(scope.row, item.prop)))"      
                direction="vertical" 
                :key="index"  
               ></el-divider>
                <slot v-else-if="operation.element === 'slot'" :name="operation.slotName" :data="scope.row" ></slot>
            </template>
          </template>
        </el-table-column>
        <!-- 纯文本 -->
        <el-table-column
          v-else-if="item.type == 'text'"
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
    return {};
  },
  props: {
    tableConfig: {
      type: Array,
      default: () => [],
    },
    tableData: {
      type: Array,
      default: () => [],
    },
  },
  mounted() {},
};
</script>

<style scoped>
</style>