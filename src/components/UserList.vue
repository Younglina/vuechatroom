<template>
  <div class="user-list">
    <span>用户</span>
    <el-card>
      <el-row  v-for="item in users" :key="item.username" type="flex" align="middle" justify="space-between">
            <span class="user-name" :style="{color:statusColor(item.presence)}">{{item.name}}</span>
        </el-row>
    </el-card>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'user-list',
  computed: {
    ...mapState([
      'loading',
      'users'
    ])
  },
  methods: {
    statusColor(status) {
      return status === 'online' ? '#67C23A' : '#909399'
    }
  }
}
</script>

<style lang="scss" scpoed>
.el-card{
  background-color: rgba(255, 255, 255, 0.5) !important;
}
.el-card__body{
  padding:20px 10px !important;
}
  .user-name{
    display: inline-block;
    width: 100px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
</style>