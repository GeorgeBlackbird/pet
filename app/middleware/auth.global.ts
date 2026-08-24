export default defineNuxtRouteMiddleware((to) => {
  const user = useSupabaseUser()

  const isAuthRoute = to.path.startsWith('/auth')
  const isPublicDev = to.path.startsWith('/dev')

  if (!user.value && !isAuthRoute && !isPublicDev) {
    return navigateTo('/auth/login')
  }

  if (user.value && isAuthRoute) {
    return navigateTo('/')
  }
})
