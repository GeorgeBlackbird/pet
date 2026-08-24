<script setup lang="ts">
import { ChevronDown, Loader2 } from '@lucide/vue'
import { toast } from 'vue-sonner'

const variants = ['default', 'secondary', 'outline', 'ghost', 'destructive', 'link'] as const

const sizes = ['xs', 'sm', 'default', 'lg'] as const
</script>

<template>
  <div class="mx-auto flex max-w-3xl flex-col gap-10 p-2 pb-16">
    <header class="space-y-1">
      <p class="text-muted-foreground text-xs uppercase tracking-wide">Dev only · /dev/ui-kit</p>
      <h1 class="text-2xl font-semibold tracking-tight">UI Kit</h1>
      <p class="text-muted-foreground text-sm">
        Песочница для smoke-проверки shadcn-компонентов. Не часть продукта.
      </p>
    </header>

    <!-- Button -->
    <section class="space-y-4">
      <h2 class="text-lg font-medium">Button · variants</h2>
      <div class="flex flex-wrap items-center gap-3">
        <Button v-for="variant in variants" :key="variant" :variant="variant">
          {{ variant }}
        </Button>
      </div>
    </section>

    <section class="space-y-4">
      <h2 class="text-lg font-medium">Button · sizes</h2>
      <div class="flex flex-wrap items-center gap-3">
        <Button v-for="size in sizes" :key="size" :size="size"> size {{ size }} </Button>
      </div>
    </section>

    <section class="space-y-4">
      <h2 class="text-lg font-medium">Button · states</h2>
      <div class="flex flex-wrap items-center gap-3">
        <Button disabled>Disabled</Button>
        <Button variant="outline" disabled>Disabled outline</Button>
        <Button>
          <Loader2 class="animate-spin" />
          Loading
        </Button>
      </div>
    </section>

    <!-- Dialog -->
    <section class="space-y-4">
      <h2 class="text-lg font-medium">Dialog</h2>
      <p class="text-muted-foreground text-sm">Overlay, Escape, focus trap — клик / Esc.</p>
      <Dialog>
        <DialogTrigger as-child>
          <Button variant="outline">Open dialog</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Подтверждение</DialogTitle>
            <DialogDescription>
              Пример модалки. Закрой крестиком, Esc или кликом по overlay.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <DialogClose as-child>
              <Button variant="outline">Отмена</Button>
            </DialogClose>
            <DialogClose as-child>
              <Button>Ок</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </section>

    <!-- Dropdown -->
    <section class="space-y-4">
      <h2 class="text-lg font-medium">Dropdown Menu</h2>
      <p class="text-muted-foreground text-sm">Заглушка user-menu для Header.</p>
      <DropdownMenu>
        <DropdownMenuTrigger as-child>
          <Button variant="outline">
            Account
            <ChevronDown />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent class="w-48" align="start">
          <DropdownMenuLabel>Мой аккаунт</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Settings</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            variant="destructive"
            @select="
              toast.error('Logout (fake)', {
                description: 'Auth ещё не подключён',
              })
            "
          >
            Log out
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </section>

    <!-- Sonner -->
    <section class="space-y-4">
      <h2 class="text-lg font-medium">Sonner (toast)</h2>
      <p class="text-muted-foreground text-sm">Toaster висит в app.vue (ClientOnly).</p>
      <div class="flex flex-wrap items-center gap-3">
        <Button variant="secondary" @click="toast('Сохранено', { description: 'Обычный toast' })">
          Default
        </Button>
        <Button
          variant="secondary"
          @click="toast.success('Успех', { description: 'Операция выполнена' })"
        >
          Success
        </Button>
        <Button
          variant="secondary"
          @click="toast.error('Ошибка', { description: 'Что-то пошло не так' })"
        >
          Error
        </Button>
        <Button
          variant="secondary"
          @click="toast.warning('Внимание', { description: 'Проверь данные' })"
        >
          Warning
        </Button>
      </div>
    </section>
  </div>
</template>
