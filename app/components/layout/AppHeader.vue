<script setup lang="ts">
import { ChevronDown, LogOut, Settings, User } from '@lucide/vue'
import { toast } from 'vue-sonner'

function onLogoutStub() {
  toast.message('Logout', {
    description: 'Заглушка',
  })
}
</script>

<template>
  <div class="flex h-full items-center justify-between gap-4 px-4">
    <div class="text-muted-foreground min-w-0 truncate text-sm">Workspace</div>

    <DropdownMenu>
      <DropdownMenuTrigger as-child>
        <Button variant="ghost" size="sm" class="gap-2">
          <span
            class="bg-muted text-muted-foreground flex size-7 items-center justify-center rounded-full text-xs font-medium"
          >
            G
          </span>
          <span class="hidden sm:inline">Георгий</span>
          <ChevronDown class="text-muted-foreground size-4" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent class="w-52" align="end">
        <DropdownMenuLabel>
          <div class="flex flex-col gap-0.5">
            <span>Георгий</span>
            <span class="text-muted-foreground text-xs font-normal"> demo@workspace.local </span>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem disabled>
          <User />
          Profile
        </DropdownMenuItem>
        <DropdownMenuItem disabled>
          <Settings />
          Settings
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem variant="destructive" @select="onLogoutStub">
          <LogOut />
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  </div>
</template>
