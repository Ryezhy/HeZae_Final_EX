import {ref, computed, type Ref} from 'vue'
import { defineStore } from 'pinia'

interface User {
    account: string;
    password: string;
}

export const useLoginStore = defineStore('login', () => {
    const user = ref<User>({
        account: '',
        password: ''
    })
    const isLogin  = ref(false)
    const getAccount = computed(() => user.value.account)
    const getPassword = computed(() => user.value.password)
    const setUser = (newUser: User) => {
        user.value = { ...newUser }
    }
    const setIsLogin = (newIsLogin: boolean) => {
        isLogin.value = newIsLogin
    }
    const setAccount = (account: string) => {
        user.value.account = account
    }
    const setPassword = (password: string) => {
        user.value.password = password
    }
    const getIsLogin = computed(() => isLogin.value)
    const login = async (user:Ref<User>) => {
        if(user.value.account === 'Hezae' && user.value.password === '@Hss841755'){
            setIsLogin(true)
            setUser(user.value)
            console.log('登录成功')
            return true
        }
        else {
            setIsLogin(false)
            console.log(user)
            console.log('登录失败')
            return false
        }
    }
    const logout = async () => {
        setIsLogin(false)
        setUser({
            account: '',
            password: ''
        })
        console.log('退出登录')
    }
    return {
        user,
        getAccount,
        getPassword,
        getIsLogin,
        setUser,
        setAccount,
        setPassword,
        setIsLogin,
        login,
        logout
    }
})