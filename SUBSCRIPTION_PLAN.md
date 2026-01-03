# Blog Subscription Feature - Implementation Plan

## Overview
Add a lightweight email subscription system that notifies subscribers when new blog posts are published. The system will send emails at a set time each day if there are new posts.

## Current Architecture Analysis
- **Framework**: Next.js 15 (App Router)
- **Blog System**: Markdown files in `/posts` directory, processed with gray-matter
- **Deployment**: Vercel (inferred from README)
- **Current Dependencies**: Minimal - no database, no email service

## Proposed Lightweight Solution

### Architecture Decisions

#### 1. **Email Service: Resend**
- **Why**: Lightweight, Next.js-native, generous free tier (100 emails/day, 3,000/month)
- **Alternative**: SendGrid (more complex), AWS SES (requires AWS setup)
- **Cost**: Free for small blogs

#### 2. **Database: Vercel Postgres (Free Tier)**
- **Why**: Native Vercel integration, generous free tier, serverless, no management needed
- **Alternative Options**:
  - Vercel KV (Redis) - simpler but less query flexibility
  - JSON file in repo - ultra-light but not scalable and manual commits needed
  - Supabase - free tier but adds complexity
- **Cost**: Free tier includes 256 MB storage, 60 compute hours/month

#### 3. **Scheduling: Vercel Cron Jobs**
- **Why**: Built into Vercel, no external service needed
- **Alternative**: GitHub Actions (requires different setup)
- **Cost**: Free

#### 4. **Post Detection: File-based with metadata**
- Store last-checked timestamp in database
- Compare post dates against last-sent timestamp
- No webhook needed - simple daily check

### Database Schema (Minimal)

```sql
-- Subscribers table
CREATE TABLE subscribers (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  verified BOOLEAN DEFAULT FALSE,
  verification_token VARCHAR(255),
  created_at TIMESTAMP DEFAULT NOW(),
  unsubscribe_token VARCHAR(255) UNIQUE NOT NULL
);

-- Email log (for tracking and avoiding duplicates)
CREATE TABLE email_log (
  id SERIAL PRIMARY KEY,
  post_slug VARCHAR(255) NOT NULL,
  sent_at TIMESTAMP DEFAULT NOW(),
  subscriber_count INTEGER
);
```

### API Routes Required

1. **`/api/subscribe`** (POST)
   - Accept email address
   - Generate verification token
   - Send verification email
   - Store in database (verified=false)

2. **`/api/verify`** (GET)
   - Accept verification token
   - Mark subscriber as verified
   - Redirect to success page

3. **`/api/unsubscribe`** (GET)
   - Accept unsubscribe token
   - Remove subscriber from database
   - Show confirmation page

4. **`/api/cron/send-notifications`** (POST)
   - Runs daily at set time (e.g., 9 AM UTC)
   - Check for new posts since last send
   - Get verified subscribers
   - Send email for each new post
   - Log sent emails

### UI Components

1. **Subscribe Form** (on blog page)
   - Simple email input
   - Subscribe button
   - Success/error message display

2. **Verification Page** (optional - can use alert on blog page)
   - Shows success message after email verification

3. **Unsubscribe Page**
   - Shows confirmation after unsubscribe

### Email Templates

1. **Verification Email**
   - Simple text with verification link
   - No HTML complexity

2. **New Post Notification**
   - Post title
   - Excerpt
   - Read more link
   - Unsubscribe link in footer
   - Plain text + minimal HTML

### Implementation Steps

#### Phase 1: Infrastructure Setup
1. Install dependencies: `@vercel/postgres`, `resend`
2. Set up Vercel Postgres database
3. Create database tables
4. Configure Resend API key in environment variables

#### Phase 2: Subscription Flow
5. Create `/api/subscribe` endpoint
6. Create `/api/verify` endpoint
7. Create `/api/unsubscribe` endpoint
8. Add subscribe form UI to blog page (`/blog`)
9. Create email templates for verification

#### Phase 3: Notification System
10. Create `/api/cron/send-notifications` endpoint
11. Implement logic to detect new posts
12. Create email template for new post notifications
13. Configure Vercel cron job (vercel.json)

#### Phase 4: Testing & Polish
14. Test subscription flow
15. Test email delivery
16. Test cron job manually
17. Add error handling and logging
18. Deploy and monitor

### Environment Variables Needed

```env
# Resend
RESEND_API_KEY=re_xxxxx

# Vercel Postgres (auto-configured by Vercel)
POSTGRES_URL=xxxxx
POSTGRES_PRISMA_URL=xxxxx
POSTGRES_URL_NON_POOLING=xxxxx
POSTGRES_USER=xxxxx
POSTGRES_HOST=xxxxx
POSTGRES_PASSWORD=xxxxx
POSTGRES_DATABASE=xxxxx

# Application
NEXT_PUBLIC_BASE_URL=https://yourdomain.com
EMAIL_FROM=blog@yourdomain.com
CRON_SECRET=random_secret_string_for_cron_security
```

### Security Considerations

1. **Rate Limiting**: Implement simple rate limiting on subscribe endpoint
2. **Email Validation**: Basic email format validation
3. **CRON Protection**: Protect cron endpoint with secret token
4. **Unsubscribe Tokens**: Use crypto.randomBytes for secure tokens
5. **SQL Injection**: Use parameterized queries (Vercel Postgres SDK handles this)

### Cron Configuration (vercel.json)

```json
{
  "crons": [{
    "path": "/api/cron/send-notifications",
    "schedule": "0 9 * * *"
  }]
}
```

This runs daily at 9 AM UTC. Adjustable based on preference.

### What Makes This "Lightweight"?

1. **No ORM**: Direct SQL with Vercel Postgres SDK (minimal abstraction)
2. **Minimal Dependencies**: Only 2 new packages (`resend`, `@vercel/postgres`)
3. **No Auth System**: Token-based verification/unsubscribe only
4. **Serverless**: No server to manage
5. **Free Tier**: All services have generous free tiers
6. **No Admin Panel**: Keep it simple - direct database access if needed
7. **Simple Email Templates**: Plain text primary, minimal HTML
8. **File-Based Post Detection**: No build hooks or webhooks needed

### Alternative Ultra-Lightweight Approach

If you want even lighter (but less scalable):
- **No Database**: Store subscribers in a JSON file committed to git
- **No Verification**: Trust email addresses (higher spam risk)
- **Manual Sends**: No cron, manually trigger notifications via API call
- **Fewer Dependencies**: Just Resend for email

This would work for <100 subscribers but not recommended for growth.

### Estimated Costs
- **Development Time**: 4-6 hours
- **Monthly Cost**: $0 (within free tiers for small blogs)
- **Maintenance**: Minimal (serverless, no infrastructure)

### Future Enhancements (Optional)
- Weekly digest option (instead of per-post)
- Subscriber preferences (tags to follow)
- Admin dashboard to view subscribers
- Analytics (open rates, click rates)
- RSS feed integration

## Decision Points for Discussion

1. **Email Frequency**: Daily check vs. immediate on publish (would require build hook)
2. **Verification Required**: Yes (recommended) vs. No (simpler but spam-prone)
3. **Database Choice**: Vercel Postgres (recommended) vs. Vercel KV vs. JSON file
4. **Email Time**: What time should emails go out? (suggest 9 AM in your timezone)
5. **Email Content**: Just notify vs. full post in email
6. **From Address**: Need a domain email or use Resend's default?

## Recommended Next Steps

1. Confirm architectural choices above
2. Set up Vercel Postgres database
3. Set up Resend account and verify domain
4. Begin implementation starting with Phase 1
