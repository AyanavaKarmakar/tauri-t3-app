![tauri-t3-app](https://socialify.git.ci/AyanavaKarmakar/tauri-t3-app/image?description=0&descriptionEditable=Clean%20and%20simple%20starter%20repo%20using%20the%20T3%20Stack%20in%20Tauri!&font=Inter&language=1&logo=https%3A%2F%2Fseeklogo.com%2Fimages%2FT%2Ftauri-logo-39352BD5A1-seeklogo.com.png&name=1&pattern=Overlapping%20Hexagons&theme=Auto)

![image](https://user-images.githubusercontent.com/89210438/206268075-7b3415f3-3e8f-470c-9d54-814e6253929c.png)

<div align="center">

A clean and simple starter repo using the [T3 Stack](https://create.t3.gg/) in [Tauri](https://tauri.app/)!

</div>

## Getting Started

Before we continue, make sure you have completed the [prerequisites](https://tauri.app/v1/guides/getting-started/prerequisites) to have a working development environment.

## Objective

Integrating an existing T3 project in Tauri is pretty easy. The problem arises when we scaffold a new app using `create tauri-app`. Instead of trying to stitch together the T3 Stack tech from scratch, one can simply use this template.

## Commands

### Install Deps

```sh
npm i
```

### Run Tauri Dev 

```sh
npm run tauri dev
```

### Build App

```sh
npm run tauri build
```

Don't like `npm`? Feel free to use `yarn`, `pnpm`, or `cargo`. Nothing will break! 

Note: Deploy your Next.js app before building your Tauri App. Remember to override the default build command so that the Vercel deploy doesn't fail.

![override-vercel-build](https://user-images.githubusercontent.com/89210438/206443565-26bf22cb-8a26-42f4-a4a7-16d8450ea737.png)

### Caveats

Tauri needs Next.js to run in SSG mode for it's native functionalities. If you don't need native stuff and simply want a web app in native, just redirect to the deployed Next.js app in your Tauri app. If you want a taste of both SSG & SSR, switch between the deployed Next.app window & native window whenever and wherever needed. Whatever you do, your Tauri app will always be less chunky than your Electron.js app.

![Electron-vs-Tauri](https://user-images.githubusercontent.com/89210438/206445776-6f08bd20-83f9-4602-98a9-3ac983cd9baa.png)

<div align="center">

Credits: [Fireship](https://youtu.be/-X8evddpu7M)

</div>

## Learn More

1. [`create-t3-app` — Documentation](https://create.t3.gg/)
2. [`create-tauri-app` — Documentation](https://tauri.app/)

## Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/AyanavaKarmakar/tauri-t3-app/issues).

## Show your support

Give a ⭐️ if this project helped you!

---
