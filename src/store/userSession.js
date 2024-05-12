import { defineStore } from "pinia";


export const useUserSession = defineStore('userSession', {
    state: () => ({
      isSessionActive: false,
      username: '',
    }),
    getters: {
      getUserSessionState: (state) => state.isSessionActive,
      getUsername: (state) => state.username
    },
    actions: {
      changeSessionState( newState ) {
        this.isSessionActive = newState;
      },
      changeUsername( newState ) {
        this.username = newState;
      },
    },
  })