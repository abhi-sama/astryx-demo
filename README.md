# Astryx component demo

A live gallery of every component in the [Astryx](https://www.npmjs.com/package/@astryxdesign/core) design system (core 0.7.13), with the exact code that renders each one.

- **74 component demos**, grouped into Chat, Actions, Forms, Overlays, Navigation, Layout, Content and Feedback.
- **Device previews:** switch between Desktop (1440 × 900), iPad (1180 × 820, landscape or portrait) and Phone (390 × 844), or show all three side by side. Each preview is a real viewport of that size, so responsive behaviour is what you would see on the device.
- **Themes:** neutral, butter and matcha, in light and dark mode.
- Every demo card includes its source with a copy button.

## Run it

```sh
npm install
npm run dev
```

Then open the URL Vite prints (for example http://localhost:5173).

## Add a demo

Create `src/demos/<Name>Demo.tsx` with a default-exported component. It is picked up automatically; add its name to a group and a one-line blurb in `src/App.tsx` to place it.

## License

MIT for the code in this repository. Astryx itself is published under its own license on npm.
