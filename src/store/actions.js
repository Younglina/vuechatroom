import chatkit from '../chatkit';

function handleError(commit, error) {
  let message = '';
  if (error.statusCode === 404) {
    message = '用户不存在';
  } else {
    message = error.message;
  }
  commit('setError', message);
}

export default {
  async login({ commit, state }, userId) {
    try {
      commit('setError', '');
      commit('setLoading', true);
      const currentUser = await chatkit.connectUser(userId);
      commit('setUser', {
        username: currentUser.id,
        name: currentUser.name
      });
      const rooms = currentUser.rooms.map(room => ({
        id: room.id,
        name: room.name
      }));
      commit('setRooms', rooms);

      const activeRoom = state.activeRoom || rooms[0];
      
      commit('setActiveRoom', {
        id: activeRoom.id,
        name: activeRoom.name
      });
      await chatkit.subscribeToRoom(activeRoom.id);
      commit('setReconnect', false);

      return true;
    } catch (error) {
      handleError(commit, error);
    } finally {
      commit('setLoading', false);
    }
  },
  async changeRoom({ commit }, roomId) {
    try {
      const { id, name } = await chatkit.subscribeToRoom(roomId);
      commit('setActiveRoom', { id, name });
    } catch (error) {
      handleError(commit, error);
    }
  },
  async sendMessage({ commit }, message) {
    try {
      commit('setError', '');
      commit('setSending', true);
      const messageId = await chatkit.sendMessage(message);
      return messageId;
    } catch (error) {
      handleError(commit, error);
    } finally {
      commit('setSending', false);
    }
  },
  async logout({ commit }) {
    commit('reset');
    chatkit.disconnectUser();
    window.localStorage.clear();
  }
}
;
