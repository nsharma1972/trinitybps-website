# Trinity Bridge PS — Website Project Documentation

**Last updated:** April 2026  
**Live site:** https://www.trinitybps.com  
**GitHub:** https://github.com/nsharma1972/trinitybps-website  
**Stack:** Next.js 14 (App Router) · TypeScript · Tailwind CSS · Resend · Docker · CapRover

---

## Architecture Overview

```
Browser → Cloudflare (DNS + proxy) → Oracle Cloud VM (66.179.138.130)
                                       └── nginx (CapRover)
                                             └── Docker Swarm
                                                   └── srv-captain--trinitybps-website:3000
```

### Key architectural decisions

| Decision | Choice | Reason |
|----------|--------|--------|
| Next.js output mode | `standalone` | Required for API routes + Docker; `export` mode breaks server-side features |
| Email delivery | Resend SDK | Transactional email from noreply@trinitybps.com; Resend initialized *inside* POST handler (not at module level) to avoid Next.js build-time failures |
| Hosting | CapRover on Oracle Cloud (always-free tier) | Zero ongoing hosting cost |
| CI/CD | GitHub Actions → GHCR → CapRover | Tag-triggered deploys (v*); image at ghcr.io/nsharma1972/trinitybps-website |
| HTTPS | Cloudflare proxy (orange cloud) + certbot for trinitybps.com | Cloudflare handles www; certbot issued cert manually for apex domain |
| Tailwind dynamic classes | Static class strings in data objects | Dynamic class generation (e.g. `text-${color}`) is purged in production build |

---

## Site Map

| Route | Description | Brand color |
|-------|-------------|-------------|
| `/` | Homepage — hero, products, why us, social proof, CTA | — |
| `/services` | Brand identity hub — core competencies, all services, differentiators, past performance, gov contracting | — |
| `/ai-university` | AI workforce reskilling product | brand-blue |
| `/tdi-intel` | Data intelligence product | brand-green |
| `/ai-consulting` | AI adoption consulting product | brand-orange |
| `/digital-enablement` | Digital compliance & quality service (14 items) | brand-cyan |
| `/cybersecurity` | 10-point cybersecurity program for medical practices | brand-blue |
| `/life-science-assessment` | 17 assessment types (digital + risk/compliance) | brand-green |
| `/about` | Company overview, values, team callout | — |
| `/team` | Narendra Sharma bio + advisory board | — |
| `/contact` | Contact form (Resend) + email + location | — |
| `/api/contact` | POST handler — sends email via Resend | — |
| `/api/health` | GET returns `{"ok":true}` — used by deployment health check | — |
| `/sitemap.xml` | Auto-generated sitemap | — |
| `/robots.txt` | Allow all crawlers | — |

---

## Infrastructure

### Oracle Cloud VM — App Server
- **IP:** 66.179.138.130
- **Subdomain:** captain.app.trinitybps.com
- **CapRover password:** stored in GitHub Secret `CAPROVER_PASSWORD`
- **App name:** `trinitybps-website`
- **Docker service:** `srv-captain--trinitybps-website`
- **Container port:** 3000
- **nginx config:** `/captain/generated/nginx/conf.d/trinitybps.com.conf` (manually maintained for HTTPS)

### Cloudflare DNS
- `trinitybps.com` → A → 66.179.138.130 (orange cloud / proxied)
- `www.trinitybps.com` → A → 66.179.138.130 (orange cloud / proxied)
- `captain.app.trinitybps.com` → A → 66.179.138.130 (gray cloud / DNS-only)

### SSL Certificates
- `trinitybps.com` — issued via certbot container on the VM, webroot `/captain-webroot/trinitybps.com`
- `www.trinitybps.com` — handled by Cloudflare proxy
- Cert location on VM: `/letencrypt/etc/live/trinitybps.com/`
- Renewal: manual for now (certbot container). Should automate.

### IONOS Hosting (old WordPress)
- Old site data is still on IONOS — WordPress DB and files intact
- DNS has been migrated away; IONOS server no longer publicly reachable
- **Do not delete IONOS account** until old content is fully archived

---

## Deployment

### How to deploy
```bash
git tag v1.x.x
git push origin v1.x.x
```
GitHub Actions picks up the `v*` tag, builds the Docker image, pushes to GHCR, and deploys to CapRover.

### GitHub Secrets required
| Secret | Description |
|--------|-------------|
| `CAPROVER_URL` | https://captain.app.trinitybps.com |
| `CAPROVER_PASSWORD` | CapRover admin password for app VM |
| `GHCR_PULL_TOKEN` | GitHub classic PAT with `read:packages` scope (fine-grained tokens do NOT work for packages) |
| `RESEND_API_KEY` | Resend API key (re_...) |
| `CONTACT_TO_EMAIL` | hello@trinitybps.com |

### Current version
`v1.0.8` — deployed April 2026

---

## Local Development

```bash
npm install
cp .env.deploy.example .env.local   # fill in RESEND_API_KEY
npm run dev                          # http://localhost:3000
npm run build                        # production build check
```

---

## Brand Colors (Tailwind)

Defined in `tailwind.config.ts`:

| Token | Hex | Usage |
|-------|-----|-------|
| `brand-blue` | #2E70B8 | AI University, Cybersecurity, primary actions |
| `brand-green` | #2E8B57 | TDI Intel, Life Science Assessment |
| `brand-orange` | #E07B39 | AI Consulting |
| `brand-cyan` | #0E9CA8 | Digital Enablement, About accents |
| `brand-dark` | #1E2D40 | Headings, body text |
| `brand-muted` | #64748B | Secondary text |
| `brand-light` | #F8FAFC | Section backgrounds |

---

## Content Sources

| Content | Source |
|---------|--------|
| Homepage, product pages | Built from scratch |
| Leadership / Team bio | Old WordPress site (captured before DNS migration) |
| Service pages (Digital Enablement, Cybersecurity, Life Science Assessment, AI Marketing) | Wayback Machine snapshots (Jan 2026 / Nov 2025) |
| Capability Statement content (competencies, differentiators, past performance, gov data) | PDF: `Documents/Business/Trinity/Goverment Contract/Capability Statement Trinity Bridge Dec10.pdf` |
| Company data (UEI, CAGE Code, WOSB) | Capability Statement PDF |

---

## Company Information

| Field | Value |
|-------|-------|
| Legal name | Trinity Bridge Professional Services, LLC |
| Contact email | hello@trinitybps.com |
| Location | Nashua, New Hampshire |
| UEI | UX6KC1L6ZMT3 |
| CAGE Code | 9YNH5 |
| Certifications | WOSB (Women-Owned Small Business) |
| LinkedIn | https://www.linkedin.com/company/trinitybps |

> Phone and street address intentionally omitted from public site (privacy). Available in capability statement PDF.
