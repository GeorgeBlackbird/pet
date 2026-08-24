<script setup lang="ts">
definePageMeta({
  layout: 'auth',
})

const auth = useAuthStore()

const email = ref('')
const password = ref('')
const mode = ref<'login' | 'register'>('login')

async function onSubmit() {
  if (mode.value === 'login') {
    await auth.signIn(email.value, password.value)
  } else {
    await auth.signUp(email.value, password.value)
  }
}
</script>

<template>
  <form class="flex flex-col gap-4" @submit.prevent="onSubmit">
    <h1 class="text-lg font-semibold">
      {{ mode === 'login' ? 'Вход' : 'Регистрация' }}
    </h1>

    <div class="space-y-2">
      <Label for="email">Email</Label>
      <Input id="email" v-model="email" type="email" required autocomplete="email" />
    </div>

    <div class="space-y-2">
      <Label for="password">Пароль</Label>
      <Input
        id="password"
        v-model="password"
        type="password"
        required
        minlength="6"
        autocomplete="current-password"
      />
    </div>

    <Button type="submit" :disabled="auth.loading">
      {{ mode === 'login' ? 'Войти' : 'Создать аккаунт' }}
    </Button>

    <Button
      type="button"
      variant="link"
      class="px-0"
      @click="mode = mode === 'login' ? 'register' : 'login'"
    >
      {{ mode === 'login' ? 'Нет аккаунта? Регистрация' : 'Уже есть аккаунт? Войти' }}
    </Button>
  </form>
</template>
