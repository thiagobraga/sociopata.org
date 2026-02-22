# AI Instructions for sociopata.org

## Project Overview
sociopata.org is a React (CRA) static site deployed on Netlify.

## Local Dev (Docker)

### Common commands
- Build: `docker compose build`
- Start (detached): `docker compose up -d`
- Start (rebuild): `docker compose up --build -d`
- Stop (fast): `docker compose down --timeout 0`
- Logs: `docker compose logs -f --tail=200`

### Notes
- The Docker image is a multi-stage build (Node build -> Nginx runtime)
- App is served on: http://localhost:8080

## General instructions
- Keep answers short.
- When asked to restart the project: `docker compose down --timeout 0` then `docker compose up --build -d`.
