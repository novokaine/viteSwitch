# Frontend Deployment Guide

## Recommended model

For this Vite frontend, the simplest and cleanest deployment flow is:

1. GitHub Actions builds the frontend bundle.
2. GitHub Actions connects to your server over SSH.
3. The built `dist/` folder is uploaded into a new release directory.
4. A `current` symlink is switched to the latest release.
5. Nginx serves the static files from `current`.

This means:
- GitHub pushes to the server.
- The server does not need to pull from GitHub.
- You do not need to clone the repo on the server just to serve the frontend.

## Branch strategy

- `main` -> production deployment
- `staging` -> staging deployment
- Manual deploy is also available through `workflow_dispatch`

## Server layout

Recommended directories:

```text
/var/www/photo-delivery/
  production/
    current -> /var/www/photo-delivery/production/releases/<release-id>
    releases/
  staging/
    current -> /var/www/photo-delivery/staging/releases/<release-id>
    releases/
```

Create them once on the server:

```bash
sudo mkdir -p /var/www/photo-delivery/production/releases
sudo mkdir -p /var/www/photo-delivery/staging/releases
sudo chown -R <deploy-user>:<deploy-user> /var/www/photo-delivery
```

## GitHub environments and secrets

Create two GitHub Environments in the repo:
- `production`
- `staging`

Add these secrets to each environment:

- `SSH_HOST`
- `SSH_PORT`
- `SSH_USER`
- `SSH_PRIVATE_KEY`
- `SSH_KNOWN_HOSTS`
- `DEPLOY_PATH`
- `VITE_API_URL`

Examples:

Production:
- `DEPLOY_PATH=/var/www/photo-delivery/production`
- `VITE_API_URL=https://ojoc.home.ro/api`

Staging:
- `DEPLOY_PATH=/var/www/photo-delivery/staging`
- `VITE_API_URL=https://stage.ojoc.home.ro/api`

## SSH setup

Generate a deploy key locally:

```bash
ssh-keygen -t ed25519 -C "github-actions-photo-delivery"
```

Add the public key to the server user's `~/.ssh/authorized_keys`.

Get known hosts for GitHub Actions:

```bash
ssh-keyscan -p <port> <host>
```

Store the private key in `SSH_PRIVATE_KEY` and the keyscan output in `SSH_KNOWN_HOSTS`.

## Nginx

Example configs are in:
- `deploy/nginx/photo-delivery.production.conf.example`
- `deploy/nginx/photo-delivery.staging.conf.example`

Install and enable them on the server.

Important for React Router:
- `try_files $uri $uri/ /index.html;`

Important for API calls:
- proxy `/api/` to your backend service

## Vite env files

Vite variables are baked into the frontend at build time.
That means:
- `.env.local` is for your machine only
- staging/prod values should come from GitHub Actions environment secrets
- example files in the repo are documentation only

Files included in the repo:
- `.env.example`
- `.env.staging.example`
- `.env.production.example`

## Domain recommendation

Production:
- `ojoc.home.ro`

Staging:
- `stage.ojoc.home.ro`

If you want real staging isolation, staging should point to a staging backend too.
If you reuse production backend for staging, the frontend is isolated but the data is not.

## First deployment checklist

1. Create staging and production directories on the server.
2. Create a deploy user or choose an existing non-root SSH user.
3. Add the SSH public key to `authorized_keys`.
4. Configure Nginx server blocks.
5. Create GitHub environments and secrets.
6. Push a branch named `staging` to test staging deploy.
7. Merge to `main` to trigger production deploy.

## How merge-to-main deployment works

The workflow file is:
- `.github/workflows/deploy-frontend.yml`

Behavior:
- Push to `main` -> build + production deploy
- Push to `staging` -> build + staging deploy
- Manual deploy from GitHub Actions UI -> choose target

## Notes on backend and cookies

If your backend uses refresh cookies:
- serve frontend and backend under compatible domains
- make sure cookie flags are correct for your setup
- if frontend calls `/api`, nginx can keep the app on one public domain while proxying internally

That is usually the easiest production setup.
