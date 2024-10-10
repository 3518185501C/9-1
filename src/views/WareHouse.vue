<template>
  <el-tabs :tab-position="tabPosition" style="height: 100%" class="demo-tabs">
    <el-tab-pane label="工作台">工作台</el-tab-pane>
    <el-tab-pane label="项目">项目</el-tab-pane>
    <el-tab-pane label="AI">AI</el-tab-pane>
    <el-tab-pane label="事项">事项</el-tab-pane>
    <el-tab-pane label="代码">
      <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
        <el-tab-pane label="最近访问" name="first">
          <div style="text-align: center; margin-top: 8vw">
            <img src="../../public/images/4.png" alt="" />
            <div>暂无数据</div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="全部仓库" name="second">
          <div
            style="text-align: center; display: flex; flex-direction: column"
          >
            <div style="margin-bottom: 1vw">欢迎使用代码仓库</div>
            <div style="font-size: 14px">
              代码仓库用于托管基于GIT或SVN管理的代码库,通过Review合并请求来审查代码变更。
            </div>
            <div style="font-size: 14px">
              版本发布可以用来标记，发布代码版本
            </div>
            <div style="display: flex; margin-left: 10vw">
              <div style="margin: 0 3vw">
                <img src="../../public/images/1.svg" alt="" />
                <div style="font-size: 20px">创建代码仓库</div>
                <div style="font-size: 12px; width: 180px">
                  浏览、编辑代码以及查看代码提交记录
                </div>
              </div>
              <div style="margin: 0 3vw">
                <img src="../../public/images/2.svg" alt="" />
                <div style="font-size: 20px">合并请求</div>
                <div style="font-size: 12px; width: 180px">
                  发起合并请求并随请协作者Review变更内容
                </div>
              </div>

              <div style="margin: 0 3vw">
                <img src="../../public/images/3.svg" alt="" />
                <div style="font-size: 20px">代码版本</div>
                <div style="font-size: 12px; width: 180px">
                  发布、标记代码版本
                </div>
              </div>
            </div>
          </div>
          <div
            style="
              width: 8vw;
              height: 4vw;
              font-size: 10px;
              text-align: center;
              background-color: black;
              color: azure;
              line-height: 4vw;
              border-radius: 5px;
              margin-left: 35vw;
              margin-top: 3vw;
            "
          >
            <a href="/test" style="text-decoration: none; color: white"
              >创建代码仓库</a
            >
          </div>
        </el-tab-pane>
        <el-tab-pane label="开源仓库" name="third"
          ><div style="text-align: center; margin-top: 8vw">
            <img src="../../public/images/4.png" alt="" />
            <div>暂无数据</div>
          </div>
        </el-tab-pane>
      </el-tabs>
    </el-tab-pane>
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
