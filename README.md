# DOUI VOYAGE

Arabic-first landing page for DOUI VOYAGE, a local travel agency in Aïn Defla. Built as static HTML/CSS/JS with no build step.

## Run locally

```bash
python3 -m http.server 8000 --bind 0.0.0.0
```

Open `http://localhost:8000`.

## Before production

The contact form is frontend-only until connected to a real inbox or serverless form endpoint. Set `FORM_ENDPOINT` in `script.js` to the endpoint that accepts a JSON POST containing `name`, `phone`, `destination`, and `message`. Test delivery and configure spam protection before launch. Phone and Google Maps links are active. Business facts and design requirements are documented in [PRD.md](PRD.md).
