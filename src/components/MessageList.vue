<template>
  <div class="message-list">
    <span>消息</span>
    <div id="chat-messages" class="message-group" v-chat-scroll="{smooth: true}">
      <div class="message" v-for="(message, index) in messages" :key="index">
        <div class="clearfix">
          <!-- <h4 class="message-title">{{ message.name }}</h4> -->
          <small class="text-muted float-left">{{ message.username }}：</small>
        </div>
        <p class="message-text">{{ message.text }}</p>
        <div class="clearfix">
          <small class="text-muted float-right">{{ message.date }}</small>
        </div>
      </div>
      <div class="user-typing">
        <small class="text-muted" v-if="userTyping">@{{ userTyping }} is typing....</small>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "message-list",
  computed: {
    ...mapState(["messages", "userTyping"])
  }
};
</script>

<style lang="scss">
.message-list {
  margin-bottom: 15px;
  padding-right: 15px;
}

.message-group {
  height: 60vh !important;
  overflow-y: scroll;
}
.message {
  border: 1px solid lightblue;
  border-radius: 4px;
  padding: 10px;
  margin-bottom: 15px;
}
.message-title {
  font-size: 1rem;
  display: inline;
}
.message-text {
  margin-bottom: 0;
}
.user-typing {
  height: 1rem;
}
</style>