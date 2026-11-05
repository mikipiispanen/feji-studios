# Before Orka launches

Orka is free to download and use, with all colour kits, calendar connections and Find time together included. The owner confirmed this launch model on 14 October 2026. The owner confirmed that Feji Studios collects no data through Orka and Quick Add processes entirely on device; the privacy page now reflects those facts. Confirm before release:
- Legal operator and support contact (currently the studio’s existing public support address).
- Data stored on device, in iCloud, or on other servers; calendar permissions and exact scope.
- Recheck that all Quick Add processing remains on device, as confirmed by the owner.
- Analytics/crash reporting and other SDKs.
- Retention and deletion procedures, intended age group, and the features included at release.
- Final user rights, license, limitations, jurisdiction, effective dates.

Styrka’s existing legal documents were transcribed from https://fejistudios.vercel.app/privacy and /terms on September 9, 2026. Their substantive wording and original effective dates were preserved, including the privacy policy’s March 26, 2025 date. Confirm that date and that existing statements still match the released app before public launch. /privacy and /terms permanently redirect to their Styrka counterparts. Website hosting practices are separate from app disclosures.

Orka is awaiting App Store approval, confirmed by the owner during the SEO review. The homepage now says Coming soon and its CTA opens the product walkthrough. Add Orka’s real App Store URL to the homepage and app page after approval. Styrka uses the live Apple listing. Support address was verified in the existing studio legal pages.

Styrka milestones (users in 100+ countries; ranked #1 Top Paid Health & Fitness in multiple countries) were supplied by the owner on September 9, 2026. They are presented as historical reach/ranking claims, not live chart positions. No dates or country names were invented.

# Before Varva launches

Varva's product page, privacy policy, terms and support page were written on 3 November 2026 from an audit of the Varva source (branch `p2b-release-hardening`, uncommitted working tree): no network code, no account or server, no third-party SDKs, CloudKit off, local notifications only, and a weekly summary shared with the widget through an App Group. Confirm before release:
- Recheck every statement against the build actually submitted, especially if sync, a timer, Apple Health, crash reporting or any SDK is added.
- The one-time paid model (terms, product page). The source has no StoreKit code; the price itself is not stated anywhere on the site.
- The "Your rights" section and Finnish governing law clause, and that Feji Studios is the right name for the legal operator (it must match the seller shown in App Store Connect and any EU trader details).
- Health and safety wording in the terms ("Practise safely", "Not medical advice").
- Replace "Coming soon to the App Store" with Varva's App Store URL after approval (`storeUrls` in `app/[product]/page.tsx`).
- Add feature screenshots to the Varva page once App Store screenshots exist; the page currently uses text highlights only.
- The website icon `public/images/varva-icon.webp` is a 256 px copy of the app icon in the Varva repository.
