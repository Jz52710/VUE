<template>
  <div class="zvdj-box">
    <div class="zvdj-top">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/index' }">主页</el-breadcrumb-item>
        <el-breadcrumb-item><a href="">资产登记</a></el-breadcrumb-item>
      </el-breadcrumb>
    </div>

    <div class="zvdj-bottom">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="配置管理" name="second">资产登记12312312999</el-tab-pane>
      </el-tabs>
    </div>

  </div>
</template>

<script>
export default {
    name: 'Zcdj',
    props: {
    // msg: String
    },
    data() {
        return {
          activeName: 'second'
        };
    },
    methods: {
        handleClick(tab, event) {
          console.log(tab, event);
        }
    }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.zvdj-box{
    width: 100%;
    height: 100%;
}
.zvdj-top{
  display: block;
  height: 50px;
}
.el-breadcrumb{
  line-height: 50px;
}
.zvdj-bottom{
    width: auto;
    height: auto;
    padding: 20px;
    box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
    background-color: #ffffff;
    border: 1px solid #ebeef5;
    color: #303133;
    transition: .3s;
  overflow: hidden;
}
</style>
