<template>
  <div>
    <span>房间</span>
    <el-card  v-if="activeRoom">
        <div v-for="item in rooms" :key="item.name" @click="onChange(item.id)">
          {{item.name}}
        </div>
    </el-card>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
  export default {
    computed:{
      ...mapState([
        'rooms', 'activeRoom'
      ])
    },
    methods: {
      ...mapActions(['changeRoom']),
      onChange(id){
        this.changeRoom(id)
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>