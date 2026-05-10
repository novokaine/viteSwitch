# Frontend Deployment Guide

## Recommended model

For this Vite frontend, the simplest Ubuntu deployment flow is:

1. GitHub Actions connects to your server over SSH.
2. The repo is updated on the server.
3. `docker compose up -d --build --remove-orphans` runs on the server.
4. The frontend container starts or is recreated with the newest code.
5. The container serves the built frontend on port `3000`.

This means:
- GitHub pushes deployment commands to the server.
- The server owns the running container lifecycle.
- The container has one responsibility: serve the built app.

## Branch strategy

- `main` -> production deployment
- manual deploy is also available through `workflow_dispatch`
- if you want automatic staging too, add the `staging` branch back into the workflow trigger

## Server layout

Recommended checkout directory:

```text
/srv/photo-delivery/frontend
```

Create it once on the server:

```bash
sudo mkdir -p /srv/photo-delivery/frontend
sudo chown -R <deploy-user>:<deploy-user> /srv/photo-delivery/frontend
```

## GitHub environment secrets

Create GitHub Environments such as:
- `Production`
- `Staging`

Add these secrets to each environment:

- `SSH_HOST`
- `SSH_PORT`
- `SSH_USER`
- `SSH_PRIVATE_KEY`
- `TARGET_DIR`

Example:
- `TARGET_DIR=/srv/photo-delivery/frontend`

## SSH setup

Generate a deploy key locally:

```bash
ssh-keygen -t ed25519 -C "github-actions-photo-delivery-frontend"
```

Add the public key to the server user's `~/.ssh/authorized_keys`.

## Docker compose

Files added in the repo:
- `Dockerfile`
- `docker-compose.yml`
- `.dockerignore`

How it works:
- Docker builds the Vite app in a Node stage
- a lightweight Node container serves `dist/`
- the container always listens on `3000`
- the host port is controlled by `APP_PORT`

## Server env files

Create these files inside `TARGET_DIR` on the server:
- `.env.production.local`
- `.env.staging.local`

Example `.env.production.local`:

```env
VITE_API_URL=https://ojoc.home.ro/api
APP_PORT=3000
APP_CONTAINER_NAME=photo-delivery-frontend-production
```

Example `.env.staging.local`:

```env
VITE_API_URL=https://stage.ojoc.home.ro/api
APP_PORT=3001
APP_CONTAINER_NAME=photo-delivery-frontend-staging
```

## First deployment checklist

1. Install Docker Engine and Docker Compose plugin on Ubuntu.
2. Create `/srv/photo-delivery/frontend`.
3. Create a non-root deploy user or reuse an existing one.
4. Add the SSH public key to `authorized_keys`.
5. Put `.env.production.local` and `.env.staging.local` in `TARGET_DIR`.
6. Make sure the chosen host ports are open.
7. Add GitHub environment secrets.
8. Merge to `main` or run the workflow manually.

## How the CD pipeline now behaves

Workflow file:
- `.github/workflows/cd.yml`

Behavior:
- connect over SSH
- update repo on the server
- require `.env.<mode>.local` to exist
- run `docker compose --env-file .env.<mode>.local up -d --build --remove-orphans`
- prune dangling images

## Notes on domains and API

Production can bind directly to host port `3000`.
Staging can bind to another host port such as `3001`.

Frontend API URL is baked at build time, so make sure each server env file points at the correct backend URL.
