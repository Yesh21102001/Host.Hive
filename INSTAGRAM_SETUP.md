# Gallery Page - Instagram API Setup Guide

## Overview
The Gallery page automatically syncs with your Instagram posts. When you post on Instagram, it appears here automatically. When you delete a post, it disappears from the gallery.

## Prerequisites
1. **Instagram Business Account** (not personal)
2. **Facebook App** with Instagram Graph API access
3. Your Instagram Business Account must be connected to the Facebook App

## Setup Steps

### Step 1: Create a Facebook App
1. Go to https://developers.facebook.com/
2. Click "Create App" → Select "Business"
3. Fill in app details:
   - App Name: "Host.Hive Gallery"
   - App Purpose: "Manage business"
4. Click "Create App"

### Step 2: Add Instagram Graph API
1. In your app dashboard, click "Add Product"
2. Search for "Instagram Graph API"
3. Click "Set Up"
4. Choose "Instagram Business"

### Step 3: Get Access Token
1. In the left menu, go to "Roles" → "Accounts"
2. Click your Instagram Business Account
3. Go to Settings → Basic
4. Find "Access Token" section
5. Generate a long-lived access token (valid for 60 days)
6. Copy this token

### Step 4: Get Business Account ID
1. In Graph API Explorer:
   - URL: https://developers.facebook.com/tools/explorer/
2. Select your app from dropdown
3. Run this query:
   ```
   me?fields=instagram_business_account
   ```
4. Copy the ID from the response

### Step 5: Configure Environment Variables
1. Open `frontend/.env` file (create if doesn't exist)
2. Add these lines:
   ```
   REACT_APP_INSTAGRAM_ACCESS_TOKEN=your_access_token_here
   REACT_APP_INSTAGRAM_BUSINESS_ACCOUNT_ID=your_business_account_id_here
   ```
3. Restart the development server

### Step 6: Enable Webhooks (for real-time updates)
1. In app settings, go to "Webhooks"
2. Click "Add Webhook Subscription"
3. Select "instagram" (for media, comments, etc.)
4. Set your webhook URL (requires backend server)
5. Verify token

## How It Works

### Automatic Sync
- Gallery fetches your Instagram posts when the page loads
- Posts appear with image, caption, and link to Instagram
- Clicking on a post opens it on Instagram

### Real-Time Updates (Optional)
- Set up webhooks for instant updates
- Requires a backend server to handle webhook events
- Without webhooks, refresh the page to see new posts

## Features

✅ Auto-sync posts from Instagram
✅ Show post captions
✅ Direct link to Instagram
✅ Responsive grid layout
✅ Error handling with helpful messages
✅ Loading states

## Troubleshooting

**"Instagram API credentials not configured"**
- Check your .env file
- Ensure both variables are set correctly
- Restart the dev server after changing .env

**No posts appearing**
- Verify your access token is valid
- Check that your Instagram account is a Business Account
- Ensure the account is linked to your Facebook App

**Old posts still showing**
- Gallery caches data. Clear browser cache or do a hard refresh (Ctrl+Shift+R)

## Need Help?
For more info: https://developers.facebook.com/docs/instagram-api
