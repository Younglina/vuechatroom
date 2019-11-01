<template>
  <div class="message-form ld-over">
    <p v-if="hasError">{{error}}</p>
    <el-input
      v-model="message"
      @input="isTyping"
      placeholder="输入消息"
      autocomplete="off"
      required
      size="small"
    >
      <el-button
        slot="append"
        icon="el-icon-s-promotion"
        type="primary"
        @click.prevent="onSubmit"
        size="small"
      ></el-button>
    </el-input>
  </div>
</template>

<script>
import { mapActions, mapState, mapGetters } from "vuex";
import { isTyping } from "../chatkit.js";

export default {
  name: "message-form",
  data() {
    return {
      message: ""
    };
  },
  computed: {
    ...mapState(["user", "sending", "error", "activeRoom"]),
    ...mapGetters(["hasError"])
  },
  methods: {
    ...mapActions(["sendMessage"]),
    async onSubmit() {
      const result = await this.sendMessage(this.message);
      if (result) {
        this.message = "";
      }
    },
    async isTyping() {
      await isTyping(this.activeRoom.id);
    }
  }
};
</script>