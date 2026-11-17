# BanBan publication review — 17 November 2026

Status: the owner approved the complete privacy/support content and publication on feji.fi on 17 November 2026, including the controller, processing-grounds and support-retention wording. Deployment and public URL verification are pending at this commit. Pushing to `main` automatically deploys feji.fi.

Proposed public URLs:

- https://feji.fi/banban/privacy
- https://feji.fi/banban/support

The published-content sources are `app/banban-privacy.ts` and `app/banban-support.tsx`. A readable snapshot is generated in `outputs/banban-content-review.md` for this review. If publication happens on a different date, update the policy date first.

## Owner-supplied decisions

- Reuse the existing feji.fi website and deployment. No new Pages website, domain, paid service or backend changes.
- Use Feji Studios and hello@feji.fi. The existing website identifies Miki Piispanen as the developer; the proposed policy calls him the independent developer behind Feji Studios, based in Finland. It does not describe Norverum as an incorporated company.
- Audience: university students and drinking parties. The policy describes university students and adults at social gatherings, including parties, and says it is not directed at children. No numerical minimum age or Apple rating has been invented.
- Use the owner's cautious Cloudflare disclosure: technical connection/request information can include network identifiers, request metadata and diagnostic information; logs may be kept for a limited period depending on deployed configuration; diagnostics may be reviewed during troubleshooting. The page does not promise logging is disabled.

## Publication review decisions

1. **Support email retention.** Proposed practice: use correspondence to respond/investigate and retain it only as long as necessary to handle the request and meet legal obligations. There is no verified mailbox retention period. Confirm the practice matches how hello@feji.fi is managed.
2. **Processing grounds and controller wording.** The proposed policy names Miki Piispanen / Feji Studios and describes providing the requested online service and legitimate interests in security, availability and support. Review that description and the rights wording. No registered-company status, postal address or unverified legal entity is supplied.
3. **Operational log retention.** The owner supplied general disclosure wording, but no particular deployed logging mode or numeric retention period was verified. The policy deliberately leaves this conditional. Confirm this is the intended final disclosure; specify a period if operationally established.
4. **Age questionnaire.** The intended adult audience is now known; the actual App Store rating is still to be established with Apple's questionnaire. Align the rating and any future age restrictions before external distribution.

The owner approved the complete privacy and support content, including the support-retention practice and processing-grounds wording. Exact operational log retention and the numerical App Store age rating remain unverified, as described above. Uploading or submitting to TestFlight still requires final approval after the candidate is built and checked.

## Source audit and corrections from the original draft

The starting draft was `/Users/mikipiispanen/Developer/BanBan/Docs/Legal/BanBanPrivacyPolicy.md`. Its original file was preserved. The app and backend were audited without changing gameplay, questions or infrastructure.

- **Mystery Reveal:** no named individual ballot display; predictions stay private in the view, but totals and recap scores can allow deductions. No absolute anonymity claim. `Server/src/snapshot.ts`, `Server/src/game.ts`, `Server/README.md`.
- **Open Reveal:** named ballots and predictions/points when enabled; individual mappings clear on advancing/ending a game. Aggregated results and scores remain through the game/recap. `Server/src/game.ts`.
- **Deletion:** active room records are removed when closing, followed by an approximately 15-minute tombstone. Six-hour room cap, thirty-minute idle window, five-minute host absence, three-minute guest absence. Cleanup can be delayed by infrastructure failure. `Server/src/config.ts`, `Server/src/room.ts`.
- **Recovery history:** all four Durable Object classes use SQLite storage. Cloudflare documents point-in-time recovery over the past 30 days, so deletion from live game storage is not a promise of immediate irreversible erasure. [Cloudflare SQLite storage documentation](https://developers.cloudflare.com/durable-objects/api/sqlite-storage-api/).
- **Network identifiers:** raw IPs are not stored by BanBan application code; hashed addresses/prefixes support rate limits and admission. Admission records associate network hashes with room identifiers. Request counters normally clear within ten minutes; room leases can remain up to six hours plus ten minutes; related network rows clear only after no leases remain and allowance refills, on roughly four-hour cleanup checks. Continuing activity/delayed cleanup can extend retention. The original universal four-hour cap was removed. `Server/src/rateLimiter.ts`, `Server/src/admission.ts`.
- **Retries:** recent command replies prevent duplicate effects; the create-request index expires after fifteen minutes. `Server/src/entryIndex.ts`, `Server/src/room.ts`.
- **Credentials:** non-synchronizing, device-only Keychain storage. Expired records are discarded when checked; there is no promised background erase while the app is closed. Some failed reconnects retain the record, and uninstall is not a guaranteed Keychain wipe. `BanBan/Online/RoomCredentials.swift`, `RoomClient.swift`.
- **Version checks:** the app version is received but not persisted; compatibility uses protocol version. `Server/src/protocol.ts`.
- **Local preferences:** sound, haptics and last online nickname. One Phone game data is local. No advertising/analytics SDKs or third-party app packages found.
- **Support and TestFlight:** correspondence and Apple-provided tester/feedback data are explicitly separate from automatic room expiration.

Provider references used for review: [Cloudflare privacy policy](https://www.cloudflare.com/privacypolicy/), [Cloudflare customer DPA](https://www.cloudflare.com/cloudflare-customer-dpa/), [Apple TestFlight privacy information](https://www.apple.com/legal/privacy/data/en/test-flight/).

## Website integration and deployment

- Reuse the dynamic `app/[product]/[document]/page.tsx` route, the existing legal template, support layout, native anchors, header/footer, skip link, focus styles, responsive typography and colours.
- Add BanBan Privacy and Support to the footer and sitemap. Do not add a product or terms page. BanBan back links go to `/`, and the shared template offers a terms link only if that document exists.
- Existing Styrka, Orka and Varva document content and product routes are unchanged.
- All four requested existing live example URLs returned HTTP 200. Their headings, metadata, legal/support classes, skip links, language and email links match source. Browser visual inspection was unavailable because the CUA native pipe was missing.
- Current local and remote `main` were `894f45d9e81f5a7a143c29964689d1ac3c3cb2dd` before these edits. Remote: `https://github.com/mikipiispanen/feji-studios.git`.
- `.github/workflows/deploy.yml`: push to `main` → Node 22.13.0 → `npm ci` → RSC security check → production build → Wrangler deploy with the existing Cloudflare secrets.
- `vite.config.ts` already declares feji.fi and www.feji.fi. `.openai/hosting.json`, domain middleware, credentials and infrastructure are unchanged.
- After approval, inspect the exact diff, commit only this website change, push through that workflow, wait for success, and fetch both public URLs to check status, title and intended content. Do not claim publication based only on a successful push or workflow result.

## iOS work after public verification

The BanBan worktree already contained changes before this task. They were preserved. No app link or signing configuration has been changed during preparation.

1. Set privacy/support URLs in the existing Debug, Staging and Release link settings, update the existing link tests, and verify Settings → Help & Privacy.
2. Preserve Debug-local, exact Staging URL and Release-offline protections.
3. Run the full iOS suite and build-validation suite. Validate the bundled privacy manifest; its current User ID / linked-data classifications need review against Apple's definitions, not just the absence of accounts.
4. Create Staging version 1.1 with an unused build number. Local evidence recommends 3; remote App Store Connect must be checked before treating it as unused.
5. Inspect packaged staging URL, privacy/support URLs and manifest, version/build, signing and distribution settings. Use normal TestFlight & App Store distribution; the existing internal-only export plist is unsuitable for external testing.
6. Prepare/review App Store Connect privacy and beta fields. Owner contact name/phone, age questionnaire, export compliance and privacy classifications remain to be finalized. See BanBan's `Docs/Legal/FejiTestFlightReview.md` handoff.
7. Stop for final candidate approval before upload or submission.

Preflight only: all 31 existing build-validation cases passed; the current privacy manifest and Info.plist passed `plutil`. The full iOS suite and new archive remain deferred until the pages are public. The superseded 1.1 (2) archive lacks the new links/manifest and must not be used for this candidate.

## Completed website verification

- `node scripts/check-rsc-security.mjs`: passed the React / React DOM / RSC and bundled-plugin baseline checks.
- `node node_modules/typescript/lib/tsc.js --noEmit --incremental false`: passed.
- `npm run build`: passed. The existing framework emitted JSON-import, middleware-convention, sourcemap and chunking warnings; no build failure. No unrelated framework migration was attempted.
- Production-preview smoke check: all 14 existing/new routes passed; unique titles, descriptions, canonical URLs, one H1, JSON-LD, local anchors, internal navigation/footer destinations, email links, direct reloads, expected 404s, legacy redirects, sitemap, robots and social image passed.
- `git diff --check`: passed. Existing product/legal wording and global CSS are unchanged.
- The original `node_modules` contains macOS cloud-offloaded files and stalled checks. Validation therefore used an isolated copy at `/private/tmp/banban-feji-validation.NCwigy` with a fresh `npm ci` from the unchanged lockfile. A SHA-256 comparison confirmed matching authored changes, configuration and lockfile. The original installed dependencies were not replaced.
- Readable content review: `outputs/banban-content-review.md`, extracted from the actual locally rendered privacy and support pages. HTML snapshots are beside it. These output files are ignored by Git.
- Browser/mobile visual inspection remains unperformed because CUA could not open a browser. Source inspection confirms reuse of the existing mobile breakpoint, wrapping footer, semantic structure, focus styling and colours; foreground/body-text contrast remains unchanged.

Git at the preapproval handoff: website changes were uncommitted (six modified tracked files, three new files). No commit, push or deployment had been performed. BanBan's prior dirty worktree was preserved; preparation added only the new `Docs/Legal/FejiTestFlightReview.md` handoff document there. No iOS configuration changes or new archive had been made.
