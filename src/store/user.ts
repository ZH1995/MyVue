import { defineStore } from "pinia";
export const userStore = defineStore("userStore", {
    actions: {
        changeUserName(value: string) {
            if (value && value.length < 10) {
                this.userName += value
            }
        }
    },
    getters: {
        getUserName():string {
            return this.userName.toUpperCase()
        }
    },
    state() {
        return {
            userName: '---'
        }
    } 
})