# Deploying to Hostinger (Static Export)

## Prerequisites
- Node.js installed on your computer
- Hostinger account with access to File Manager or FTP

---

## Step 1 — Build the Site

Open a terminal inside the `ftc-next` folder and run:

```bash
npm run build
```

Wait for it to finish. You should see:
```
✓ Generating static pages (16/16)
```

This creates an `out/` folder inside `ftc-next/`.

---

## Step 2 — Upload to Hostinger

### Option A: File Manager (no extra software needed)

1. Log in to [hpanel.hostinger.com](https://hpanel.hostinger.com)
2. Go to **Hosting** → click **Manage** on your plan
3. Click **File Manager**
4. Open the `public_html/` folder
5. Delete any existing files inside `public_html/` (like the default index.html)
6. Click **Upload** → select all files and folders inside your local `out/` folder
7. Wait for upload to finish

### Option B: FTP (FileZilla)

1. In Hostinger, go to **Hosting** → **FTP Accounts** → get your FTP credentials
2. Open FileZilla and connect using those credentials
3. On the right panel, navigate to `public_html/`
4. On the left panel, navigate to your local `ftc-next/out/` folder
5. Select all files inside `out/` and drag them to `public_html/`
6. Wait for transfer to finish

---

## Step 3 — Upload Local Images

Your site uses local images stored in `ftc-next/public/images/`. These must also be uploaded.

1. Inside `public_html/`, create a folder called `images`
2. Upload all files from `ftc-next/public/images/` into that `images/` folder

---

## Step 4 — Visit Your Site

Open your domain in a browser. The site should be live.

---

## Updating the Site (After Adding New Posts)

Every time you add or edit posts in `posts.ts`:

1. Run `npm run build` again
2. Re-upload the contents of `out/` to `public_html/`

> Tip: You only need to re-upload changed files if using FTP — FileZilla can overwrite existing files automatically.
