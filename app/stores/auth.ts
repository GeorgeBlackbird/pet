import { defineStore } from 'pinia'
import type { JwtPayload } from '@supabase/supabase-js'
import { toast } from 'vue-sonner'

export const useAuthStore = defineStore('auth', () => {
  const supabase = useSupabaseClient()
  const supabaseUser = useSupabaseUser()

  const user = computed<JwtPayload | null>(() => supabaseUser.value)
  const isAuthenticated = computed(() => !!user.value)
  const displayName = computed(() => {
    const email = user.value?.email
    return typeof email === 'string' ? (email.split('@')[0] ?? 'User') : 'User'
  })
  const email = computed(() => {
    const value = user.value?.email
    return typeof value === 'string' ? value : ''
  })
  const userId = computed(() => user.value?.sub ?? null)

  const loading = ref(false)

  async function signIn(email: string, password: string) {
    loading.value = true
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })
      if (error) {
        toast.error('Не удалось войти', { description: error.message })
        return false
      }
      toast.success('С возвращением')
      await navigateTo('/')
      return true
    } finally {
      loading.value = false
    }
  }

  async function signUp(email: string, password: string) {
    loading.value = true
    try {
      const { error } = await supabase.auth.signUp({ email, password })
      if (error) {
        toast.error('Регистрация не удалась', { description: error.message })
        return false
      }
      toast.success('Аккаунт создан')
      await navigateTo('/')
      return true
    } finally {
      loading.value = false
    }
  }

  async function signOut() {
    loading.value = true
    try {
      const { error } = await supabase.auth.signOut()
      if (error) {
        toast.error('Ошибка выхода', { description: error.message })
        return
      }
      await navigateTo('/auth/login')
    } finally {
      loading.value = false
    }
  }

  return {
    user,
    userId,
    isAuthenticated,
    displayName,
    email,
    loading,
    signIn,
    signUp,
    signOut,
  }
})
