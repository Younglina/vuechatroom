<template>
  <div class="login-form">
    <h5 class="text-center">找瘟猪管理员注册</h5>
    <hr />
      <p v-if="hasError">{{error}}</p>
    <el-form>
      <el-form-item label="姓名">
        <el-input v-model="userId" autocomplete="off" :disabled="loading" placeholder="请输入"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          @click.prevent="onSubmit"
          v-bind:class="{ running: loading }"
          :disabled="isValid"
        >登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";

export default {
  name: "login-form",
  data() {
    return {
      userId: ""
    };
  },
  computed: {
    isValid: function() {
      const result = this.userId.length < 3;
      return result ? result : this.loading;
    },
    ...mapState(["loading", "error"]),
    ...mapGetters(["hasError"])
  },
  methods: {
    ...mapActions(["login"]),
    async onSubmit(){
      const result = await this.login(this.userId);
      if(result) {
        this.$router.push('chat');
      }
    }
  }
};
</script>