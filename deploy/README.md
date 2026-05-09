# Frontend Deployment Guide

## Recommended model

For this Vite frontend, the cleanest Ubuntu deployment flow is:

1. GitHub Actions connects to your server over SSH.
2. The repo is updated on the server.
3. `docker compose up -d --build --remove-orphans` runs on the server.
4. The frontend container starts or is recreated with the newest code.
5. Host Nginx proxies the public domain to the container port.

This means:
- GitHub pushes deployment commands to the server.
- The server owns the running container lifecycle.
- The frontend deploy style matches your backend much more closely.

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
- `deploy/nginx/container.default.conf`

How it works:
- Docker builds the Vite app in a Node stage
- Nginx inside the container serves `dist/`
- Host Nginx proxies the public domain to the container port

## Server env files

Create these files inside `TARGET_DIR` on the server:
- `.env.production.local`
- `.env.staging.local`

Example `.env.production.local`:

```env
VITE_API_URL=https://ojoc.home.ro/api
APP_PORT=8080
APP_CONTAINER_NAME=photo-delivery-frontend-production
```

Example `.env.staging.local`:

```env
VITE_API_URL=https://stage.ojoc.home.ro/api
APP_PORT=8081
APP_CONTAINER_NAME=photo-delivery-frontend-staging
```

## Host Nginx

Example host configs are in:
- `deploy/nginx/photo-delivery.production.conf.example`
- `deploy/nginx/photo-delivery.staging.conf.example`

These proxy traffic to the Docker containers:
- production -> `127.0.0.1:8080`
- staging -> `127.0.0.1:8081`

## First deployment checklist

1. Install Docker Engine and Docker Compose plugin on Ubuntu.
2. Create `/srv/photo-delivery/frontend`.
3. Create a non-root deploy user or reuse an existing one.
4. Add the SSH public key to `authorized_keys`.
5. Put `.env.production.local` and `.env.staging.local` in `TARGET_DIR`.
6. Configure host Nginx using the example files.
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

Production:
- `ojoc.home.ro`

Staging:
- `stage.ojoc.home.ro`

Frontend API URL is baked at build time, so make sure each server env file points at the correct backend URL.
