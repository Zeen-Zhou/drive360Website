# Drive360 website

A responsive single-page website using the supplied Coolors blue palette. Plain HTML, CSS, and JavaScript; no build or installation needed. The dashboard tabs are an illustrative interactive demo, not a connection to the app backend.

## Preview

From the repository root, run `python3 -m http.server 4173 --directory website/dist` and visit http://localhost:4173.

## GitHub Pages

1. Push these files to the repository's `main` branch.
2. In GitHub, open **Settings → Pages → Build and deployment → Source** and choose **GitHub Actions**.
3. Run **Deploy Drive360 website** from the Actions tab, or push a website change to `main`.

The workflow publishes only `website/dist`. The expected project URL is https://zeen-zhou.github.io/drive360Website/ (available after a successful deployment). Relative asset links support project-path hosting. Google Fonts is optional; system fonts remain available offline.
