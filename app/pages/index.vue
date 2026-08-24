<template>
  <div>
    <h1 class="text-xl font-semibold">Dashboard</h1>
    <p>Контент попадает в main area default layout.</p>
  </div>
</template>

<script setup lang="ts">
const user = useSupabaseUser()
const client = useSupabaseClient()
console.log(user.value, !!client)
</script>
