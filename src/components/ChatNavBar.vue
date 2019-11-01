<template>
    <div class="chat-navbar">
      <router-link to="#" tag="span">Vue Chat</router-link>
      <div>
        <span>{{user.name}} | </span>
        <span @click="onLogout">登出</span>
      </div>
    </div>
</template>

<script>
import { mapState,mapMutations, mapActions } from "vuex";

export default {
  name: "ChatNavBar",
    computed: {
    ...mapState([
      'user',
       'reconnect'
    ])
  },
  methods: {
    ...mapActions([
      'logout',
      'login'
    ]),
    ...mapMutations([
      'setReconnect'
    ]),
    onLogout() {
      this.$router.push({ path: '/' });
      this.logout();
    },
    unload() {
      if(this.user.username) { // User hasn't logged out
        this.setReconnect(true);
      }
    }
  },
  mounted() {
    window.addEventListener('beforeunload', this.unload);
    if(this.reconnect) {
      this.login(this.user.username);
    }
  }
};
</script>

<style lang="scss">
.chat-navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  min-height: 6vh;
  background: linear-gradient(to bottom, #323232 0%, #3F3F3F 40%, #1C1C1C 150%), linear-gradient(to top, rgba(255,255,255,0.40) 0%, rgba(0,0,0,0.25) 200%);
 background-blend-mode: multiply;
 color: #FFFFFF;
}
</style>