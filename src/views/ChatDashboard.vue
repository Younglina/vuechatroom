<template>
  <div class="chat-dashboard">
    <ChatNavBar />
    <el-container :class="{ running: loading }">
      <div class="ld ld-ring ld-spin"></div>
      <el-row style="width:100%">
        <el-col :span="8" class="chat-col">
          <UserList />
          <RoomList />
        </el-col>

        <el-col :span="16" class="chat-col">
          <el-row>
            <el-col id="chat-content">
              <MessageList />
            </el-col>
          </el-row>
          <el-row>
            <el-col>
              <MessageForm />
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </el-container>
  </div>
</template>

<script>
import ChatNavBar from '@/components/ChatNavBar.vue';
import RoomList from '@/components/RoomList.vue';
import MessageList from '@/components/MessageList.vue';
import MessageForm from '@/components/MessageForm.vue';
import UserList from '@/components/UserList.vue';
import { mapState } from 'vuex';

export default {
  name: 'Chat',
  components: {
    ChatNavBar,
    RoomList,
    UserList,
    MessageList,
    MessageForm
  },
  computed: {
    ...mapState(['loading'])
  }
};
</script>

<style lang="scss" scoped>
.chat-dashboard {
  height: 90vh;
  overflow: hidden;
  .el-container{
    height: 90vh;
    overflow: hidden;
  }
  .chat-col {
    padding: 10px;
  }
}
</style>
