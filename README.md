# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

## SEO and AI-search (GEO) setup

- `src/seo.js` is the single source of truth for every route: title, description, type, visible headline, hero image (with size and alt), `datePublished`/`dateModified` and keywords. Every route in `src/App.js` needs an entry.
- `src/components/seo.jsx` turns that into the head tags (canonical, robots, Open Graph, Twitter card) and `src/structuredData.js` builds the JSON-LD graph (WebSite, Person, Organization, ProfilePage / CollectionPage / BlogPosting / WebPage, BreadcrumbList).
- `npm run build` runs `scripts/prerender.mjs`, which renders every route to static HTML and fails the build if a route lacks metadata, a title or description is duplicated, a page has no or several `<h1>`, an image lacks `alt` or is missing, or the JSON-LD does not parse. It also writes `sitemap.xml` (with `lastmod`), `feed.xml` (RSS of the articles) and `llms.txt`.
- Bump a page's `dateModified` when its content changes; it feeds the sitemap and the article byline.
- `public/robots.txt` explicitly allows the major search and AI crawlers; `vercel.json` removes trailing slashes and caches images.
- Unknown URLs are rewritten by `vercel.json` to the prerendered `404.html` (the `NotFound` route: `noindex`, no canonical); the Vercel CRA preset still answers with HTTP 200. Routes are case-sensitive, so `/Projects` is a not-found page too.

Design notes: `docs/superpowers/specs/2026-09-19-seo-geo-optimization-design.md`.
