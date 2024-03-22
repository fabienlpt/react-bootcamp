# Tamagui + Solito + Next + Expo Monorepo

```sh
npm create tamagui
```

## 🔦 About

This monorepo is a starter for an Expo + Next.js + Tamagui + Solito app.

Many thanks to [@FernandoTheRojo](https://twitter.com/fernandotherojo) for the Solito starter monorepo which this was forked from. Check out his [talk about using expo + next together at Next.js Conf 2021](https://www.youtube.com/watch?v=0lnbdRweJtA).

## 📦 Included packages

- [Tamagui](https://tamagui.dev) 🪄
- [solito](https://solito.dev) for cross-platform navigation
- Expo SDK
- Next.js
- Expo Router

## 🗂 Folder layout

The main apps are:

- `expo` (native)
- `next` (web)

- `packages` shared packages across apps
  - `ui` includes your custom UI kit that will be optimized by Tamagui
  - `app` you'll be importing most files from `app/`
    - `features` (don't use a `screens` folder. organize by feature.)
    - `provider` (all the providers that wrap the app, and some no-ops for Web.)

You can add other folders inside of `packages/` if you know what you're doing and have a good reason to.

## 🏁 Start the app

- Install dependencies: `yarn`

- Next.js local dev: `yarn web`

- Expo local dev: `yarn native`

### Avancée bootcamp

Étant donné que j'ai réalisé le bootcamp sur Tamagui et non React Native avec Expo, les données seront faussés, car je n'ai pas pu réaliser certaines étapes et d'autres ont été réalisé d'une manière différente.

- [x] 1.1
- [x] 1.2
- [x] 1.3
- [x] 1.4
- [x] 1.5
- [x] 2.1
- [x] 2.2
- [ ] 2.3
- [x] 3.1
- [x] 3.2
- [x] 3.3
- [ ] 3.4
- [ ] 3.5
- [ ] 4.1
- [x] 4.2
- [ ] 4.3
- [x] 4.4
- [ ] 5.1
- [ ] 5.2
- [ ] 5.3
- [x] 5.4
