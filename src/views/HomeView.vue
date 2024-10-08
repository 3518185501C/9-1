<template>
  <el-tabs :tab-position="tabPosition" style="height: 100%" class="demo-tabs">
    <el-tab-pane label="工作台">工作台</el-tab-pane>
    <el-tab-pane label="项目">项目</el-tab-pane>
    <el-tab-pane label="AI">AI</el-tab-pane>
    <el-tab-pane label="事项">事项</el-tab-pane>
    <el-tab-pane label="代码"> </el-tab-pane>
    <el-tab-pane label="制品">制品</el-tab-pane>
    <el-tab-pane label="洞察">洞察</el-tab-pane>
    <el-tab-pane label="知识">知识</el-tab-pane>
    <el-tab-pane label="自动化">自动化</el-tab-pane>
  </el-tabs>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import type { TabsInstance } from "element-plus";
import type { TabsPaneContext } from "element-plus";

const tabPosition = ref<TabsInstance["tabPosition"]>("left");

const activeName = ref("first");
const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event);
};
const tz = () => {
  window.location.href = "/ware";
};
</script>

<style>
.demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
.demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}

.el-tabs--right .el-tabs__content,
.el-tabs--left .el-tabs__content {
  height: 100%;
}
</style>
