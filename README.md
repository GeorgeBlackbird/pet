# Supabase learning experiment

A small Nuxt project I made to get familiar with Supabase integration. It was for my own learning, and I do not plan to continue it.

## What I tried

The authentication store uses Supabase's email/password sign-in, registration and sign-out methods. Route middleware redirects signed-out visitors to `/auth/login`.

The rest is an unfinished dashboard shell: draggable placeholder widgets, a layout saved in browser `localStorage`, and a development UI-kit page at `/dev/ui-kit`. The widgets do not display real analytics or database records. There is no Supabase database schema or migration setup included.

The UI uses Pinia, Tailwind CSS, shadcn-vue/Reka UI components and `vuedraggable` alongside Nuxt and the Supabase module.

## Run locally

```sh
git clone https://github.com/GeorgeBlackbird/pet.git
cd pet
npm ci
```

Copy [`.env.example`](.env.example) to a local `.env` file and fill in the Supabase connection settings for your own project. The installed module expects `NUXT_PUBLIC_SUPABASE_URL` and `NUXT_PUBLIC_SUPABASE_KEY` (the public client key). Authentication requires a configured Supabase project with email/password sign-in enabled. Account confirmation follows that project's auth settings.

```sh
npm run dev
```

Open the local address printed by Nuxt. The dashboard requires authentication; the `/dev/ui-kit` route is excluded from that redirect in the middleware.

To build and preview:

```sh
npm run build
npm run preview
```

## Source

| Path                                                               | Purpose                                          |
| ------------------------------------------------------------------ | ------------------------------------------------ |
| [`app/stores/auth.ts`](app/stores/auth.ts)                         | Supabase authentication calls and loading state  |
| [`app/middleware/auth.global.ts`](app/middleware/auth.global.ts)   | Route redirects based on the current user        |
| [`app/pages/auth/login.vue`](app/pages/auth/login.vue)             | Shared login and registration form               |
| [`app/stores/dashboard-layout.ts`](app/stores/dashboard-layout.ts) | Placeholder widgets and local layout persistence |
| [`app/components/dashboard`](app/components/dashboard)             | Draggable grid and widget shells                 |
| [`app/pages/dev/ui-kit.vue`](app/pages/dev/ui-kit.vue)             | Development component examples                   |

## Checks and status

The repository defines `npm run check` for ESLint, formatting, Stylelint and Nuxt typechecking. The repository-wide formatting check currently reports existing formatting differences. There is no automated test suite.

This is an unfinished educational experiment, not an application I intend to maintain or develop further.
