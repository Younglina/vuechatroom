<template>
  <div class="login">
    <div class="app-header">
      <h1>瘟猪聊天室</h1>
      <p class="header-lead">登录就能聊天哦</p>
      <p>www.Younglina</p>
      <!-- <el-button>更多信息</el-button> -->
    </div>
    <el-container>
      <el-row type="flex" justify="center">
        <el-col :md="12" :lg="8">
          <LoginForm />
        </el-col>
      </el-row>
    </el-container>
  </div>
</template>

<script>
import LoginForm from '@/components/LoginForm.vue';

export default {
  name: 'login',
  components: {
    LoginForm
  }
};
</script>

<style lang="scss" scoped>
.login {
  .app-header {
    padding: 2rem;
    background-color: #17a2b8;
    > h1 {
      font-weight: 300;
      line-height: 1.2;
    }
    .header-lead {
      font-size: 1.25rem;
      font-weight: 300;
    }
  }
  .el-row {
    width: 100%;
  }
  .el-container{
    width: 100%;
    max-width: 80vw;
    margin: 0 auto;
    padding: 0 15px;
  }
}
</style>
