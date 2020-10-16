<template>
  <el-form ref="form" :model="formData" label-width="120px">
    <el-form-item
      v-for="item in formConfig"
      :key="item.prop"
      :label="item.label"
      :prop="item.prop"
      :rules="item.rules"
    >
      <!-- input -->
      <el-input
        v-if="item.type === 'input'"
        :placeholder="item.placeholder"
        v-model.trim="formData[item.prop]"
      >
      </el-input>
      <!-- select -->
      <el-select
        filterable
        v-if="item.type === 'select'"
        :placeholder="item.placeholder"
        v-model.trim="formData[item.prop]"
        :disabled="item.disabled"
      >
        <el-option
          v-for="selectItem in item.options"
          :key="selectItem.value"
          :value="selectItem.value"
          :label="selectItem.label"
        ></el-option>
      </el-select>
    </el-form-item>
    <!-- 按钮 -->
    <el-form-item>
      <el-button
        :type="item.type"
        v-for="item in formHandler"
        :key="item.label"
        @click="item.handler && item.handler()"
        >{{ item.label }}</el-button
      >
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    // 表单配置
    formConfig: {
      type: Array,
      default: () => [],
    },
    // 表单按钮配置
    formHandler: {
      type: Array,
      default: () => [],
    },
    formData: {
      type: Object,
      default: () => {},
    },
  },
  methods: {
    initFormData() {
      for (let item of this.formConfig) {
        if (item.required) {
          this.rules(item);
        }
      }
    },
    rules(item) {
      const requiredRules = [
        {
          required: true,
          message: item.requiredMsg || `请输入内容`,
          trigger: "blur",
        },
      ];
      item.rules = requiredRules;
    },
    // 重置表单
    resetForm() {
      this.$refs['form'].resetFields();
    }
  },
  watch: {
    formConfig: {
      handler(newValue) {
        this.initFormData();
      },
      immediate: true,
    },
  },
};
</script>

<style>
</style>