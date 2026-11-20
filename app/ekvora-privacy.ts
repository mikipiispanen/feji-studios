import type { LegalDocument } from './legal-content';

const contact = { text: 'hello@feji.fi', url: 'mailto:hello@feji.fi' };

export const ekvoraPrivacy: LegalDocument = {
  title: 'Privacy Policy',
  heading: 'Ekvora Privacy Policy',
  dateLabel: 'Last updated',
  date: '20 November 2026',
  intro:
    'Ekvora is an iPhone app for mental arithmetic training. This policy explains how the app handles training history, iCloud sync, reminders and advertising.',
  sections: [
    {
      title: 'Who is responsible',
      text: 'Ekvora is made by Miki Piispanen, the independent developer behind Feji Studios, based in Finland. For privacy questions or requests, email hello@feji.fi.',
      inlineLinks: [contact],
    },
    {
      title: 'Training history on your device',
      text: 'Ekvora saves dates, daily challenge and practice results, and answer events such as correctness and response time on your device. The app uses them to calculate progress, streaks and Mental Rating and to adjust question difficulty. The Home Screen widget reads a small summary stored on your device. If you choose to share a result, Ekvora creates an image on your device and you select where it goes using the iOS share sheet.',
    },
    {
      title: 'Private iCloud sync',
      text: 'When Ekvora’s iCloud sync is available for your Apple Account, the app uses your private iCloud database to sync finalized training history between your devices. Ekvora works offline and has no separate account. Feji Studios does not have access to your private iCloud database. Apple processes iCloud data under the Apple Privacy Policy.',
      inlineLinks: [{ text: 'Apple Privacy Policy', url: 'https://www.apple.com/legal/privacy/' }],
    },
    {
      title: 'Daily reminders',
      text: 'Reminders are optional. If you turn them on and grant permission, Ekvora stores your preference and reminder time on your device, and iOS schedules the notifications locally. Turn reminders off in Ekvora or change notification permission in iOS Settings.',
    },
    {
      title: 'Advertising and privacy choices',
      text: 'Live advertising is currently disabled. In versions that enable advertising, a Google AdMob interstitial may appear when you leave the results of a completed official daily challenge. Ekvora does not send training history, answers, scores or Mental Rating to Google for advertising. Google’s advertising and consent tools may process IP-derived approximate location, device or app identifiers, ad interactions, other app interactions, diagnostics and your privacy choices for ad delivery, reporting, fraud prevention, SDK operation and related analytics. Processing and recipients depend on the version, region, ad configuration and privacy choices. Where available, open Settings → Ads → Ad Privacy Choices to review or withdraw consent or make an applicable opt-out. Learn more in Google’s partner-app data notice and the Google Privacy Policy.',
      inlineLinks: [
        { text: 'Google’s partner-app data notice', url: 'https://policies.google.com/technologies/partner-sites' },
        { text: 'Google Privacy Policy', url: 'https://policies.google.com/privacy' },
      ],
    },
    {
      title: 'Retention and support',
      text: 'Ekvora keeps local training history so you can see your progress. Deleting the app removes its local app data from that device. Private iCloud copies can remain and may sync again after reinstalling. Review your iCloud storage and available options for removing app data in your Apple Account settings. If you email Feji Studios, we use your email address and the information you provide to answer your request. We keep correspondence as long as needed to handle the request and meet applicable obligations. Google describes its retention and international processing in the Google Privacy Policy.',
      inlineLinks: [{ text: 'Google Privacy Policy', url: 'https://policies.google.com/privacy' }],
    },
    {
      title: 'Your rights and contact',
      text: 'Where applicable, you can ask to access, correct, delete, restrict or receive a copy of personal information, object to its processing or withdraw consent. Contact hello@feji.fi to make a request. You can also contact your local data protection authority. In Finland, this is the Office of the Data Protection Ombudsman. Updates to this policy will appear on this page.',
      inlineLinks: [
        contact,
        { text: 'Office of the Data Protection Ombudsman', url: 'https://tietosuoja.fi/en' },
      ],
    },
  ],
};
