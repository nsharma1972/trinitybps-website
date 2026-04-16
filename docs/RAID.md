# RAID Log — Trinity Bridge PS Website

**Project:** trinitybps.com  
**Last updated:** April 2026

---

## Risks

| ID | Risk | Likelihood | Impact | Mitigation |
|----|------|------------|--------|------------|
| R-01 | SSL cert for trinitybps.com expires — site goes down | Medium | High | Cert renewal is manual via certbot on the VM. Should set up a cron job or auto-renewal inside the captain-certbot container. |
| R-02 | Oracle Cloud free tier policy changes — VM terminated | Low | High | All code is in GitHub. Re-deploy to any VPS in ~30 min. Consider keeping a docker-compose fallback. |
| R-03 | CapRover becomes unmaintained / broken upgrade | Low | Medium | CapRover is open source. Worst case: deploy container directly via Docker Swarm without CapRover UI. |
| R-04 | Resend API key revoked or plan limit hit | Low | Medium | Contact form silently fails. Monitor Resend dashboard. Have backup key ready. |
| R-05 | GHCR_PULL_TOKEN (classic PAT) expires | Medium | High | Classic PATs can expire. Rotation not automated. Check expiry date in GitHub Settings → Tokens. |
| R-06 | Cloudflare free plan limits hit | Very Low | Low | Site is low traffic. Would need significant scale before hitting limits. |
| R-07 | IONOS account lapses — old WordPress data lost permanently | Medium | Low | Old content already recovered via Wayback Machine and saved to Word doc on Desktop. Consider exporting WordPress DB as a one-time backup. |

---

## Assumptions

| ID | Assumption | Owner | Validate By |
|----|------------|-------|-------------|
| A-01 | Resend domain verification (trinitybps.com) remains active | Narendra | Check Resend dashboard periodically |
| A-02 | Cloudflare orange-cloud proxying handles HTTPS for www — no additional cert needed | Infrastructure | Test www.trinitybps.com after any DNS change |
| A-03 | GHCR classic PAT has `read:packages` scope — fine-grained tokens do NOT work for packages | Infrastructure | Confirmed during initial setup |
| A-04 | CapRover `forceSsl` remains disabled globally — Cloudflare handles SSL termination | Infrastructure | Do not re-enable without setting up proper cert on CapRover |
| A-05 | hello@trinitybps.com is the correct inbound email — monitored by Narendra | Narendra | Confirmed |
| A-06 | WOSB certification is active and current | Narendra | Verify with SBA annually |
| A-07 | Old IONOS WordPress site content is no longer needed live — DNS fully migrated | Narendra | Confirmed April 2026 |

---

## Issues

| ID | Issue | Status | Resolution |
|----|-------|--------|------------|
| I-01 | Git author shows `mac.lan` hostname in commits | Open | Run `git config --global user.email` and `git config --global user.name` to set correctly |
| I-02 | SSL cert renewal for trinitybps.com is manual | Open | Set up auto-renewal cron on VM. Command: `docker exec captain-certbot certbot renew` |
| I-03 | AI-Powered Digital Marketing page not yet added to new site | Open | Content recovered in Word doc. Page can be created when ready. |
| I-04 | Blog Hub page not migrated | Open | No Wayback Machine snapshot found. Content may be lost unless recovered from IONOS DB. |
| I-05 | Team page not linked in navbar (replaced by Services) | Accepted | Team is reachable via About page callout and Footer. Acceptable trade-off given navbar space. |
| I-06 | Minority-owned certification not yet obtained | Open | Remove from all site content (done). Re-add when certification is complete. |
| I-07 | nginx config for trinitybps.com is manually maintained on the VM | Open | Config at `/captain/generated/nginx/conf.d/trinitybps.com.conf`. Any CapRover app redeploy could overwrite it. Back up this file. |

---

## Dependencies

| ID | Dependency | Type | Owner | Notes |
|----|------------|------|-------|-------|
| D-01 | Resend | External service | Narendra | Transactional email. API key in GitHub Secrets. Domain verified. |
| D-02 | Oracle Cloud VM (66.179.138.130) | Infrastructure | Narendra | Always-free tier ARM VM. CapRover installed. SSH access required for manual ops. |
| D-03 | GitHub Actions + GHCR | CI/CD | Narendra | Deploys on `v*` tags. Image stored at ghcr.io/nsharma1972/trinitybps-website. |
| D-04 | Cloudflare | DNS + CDN | Narendra | Manages DNS for trinitybps.com. Orange cloud = proxied. Do not turn off proxy for www. |
| D-05 | IONOS Hosting | Legacy | Narendra | Old WordPress still stored there. Do not delete account until DB backup is confirmed. |
| D-06 | Node.js 20 (Docker base image) | Build | Auto | Pinned in Dockerfile. Upgrade to Node 22 LTS when stable. |
| D-07 | Resend domain (trinitybps.com) | Email | Narendra | DNS TXT records must remain in Cloudflare for email delivery to work. Do not remove Resend DNS records. |
| D-08 | GHCR classic PAT | CI/CD | Narendra | Stored as `GHCR_PULL_TOKEN` in GitHub Secrets. Must be a classic token (not fine-grained). Check expiry. |

---

## Decision Log

| Date | Decision | Rationale |
|------|----------|-----------|
| Apr 2026 | Switch from `output: export` to `output: standalone` | Static export breaks API routes; standalone required for contact form + health check |
| Apr 2026 | Initialize Resend inside POST handler, not at module level | Next.js executes module-level code at build time; missing API key caused build failure |
| Apr 2026 | Use Cloudflare proxy for HTTPS instead of CapRover SSL | CapRover's custom domain SSL endpoint returns 404 on this version; Cloudflare handles it cleanly |
| Apr 2026 | Issue certbot cert manually for apex domain (trinitybps.com) | Cloudflare proxy covers www; apex needed a real cert for direct HTTPS access |
| Apr 2026 | Use static Tailwind class strings in data objects | Dynamic class names (e.g. `text-${color}`) are purged by Tailwind in production builds |
| Apr 2026 | Remove street address and phone from public site | Privacy — contact form + email sufficient for inbound; sensitive info kept in capability statement PDF only |
| Apr 2026 | Remove NAICS codes from public site | Sensitive contracting data; available in capability statement for those who need it |
| Apr 2026 | Remove minority-owned references | Certification not yet obtained; will re-add when complete |
| Apr 2026 | Services as primary nav item | Replaces Team in nav; Services is the brand identity hub. Team accessible via About page and footer |
| Apr 2026 | Recover old WordPress content via Wayback Machine | DNS migrated before full content backup; 4 of 5 service pages recovered successfully |
