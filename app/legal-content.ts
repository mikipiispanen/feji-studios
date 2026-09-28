export type LegalDocument = {
  title: string;
  // Visible page heading when it should differ from `title`.
  heading?: string;
  date?: string;
  dateLabel?: string;
  intro?: string;
  draft?: boolean;
  sections: {
    title: string;
    text: string;
    link?: { label: string; url: string };
    // Phrases within `text` rendered as links, leaving the wording unchanged.
    inlineLinks?: { text: string; url: string }[];
  }[];
};
export const privacy: LegalDocument = {
  title: 'Privacy Policy',
  date: 'March 26, 2025',
  intro:
    'This app was built with one principle: your data is yours. No ads, no subscriptions, no tracking. Just a simple tool that works for you.',
  sections: [
    {
      title: 'What I Collect',
      text: 'I do not collect, store, or transmit any personal information. I have no servers that receive your data, no analytics pipelines, and no third-party SDKs that track your behavior. All workout data you enter — exercises, sets, reps, weights, and any notes — exists only on your device.',
    },
    {
      title: 'iCloud Sync',
      text: "If you choose to enable iCloud, your workout data may be synced across your own Apple devices using Apple's iCloud infrastructure. This is entirely optional and controlled by your iCloud settings on your device. When iCloud sync is used, your data travels between your devices through Apple's encrypted servers. I never have access to it. Apple's iCloud data handling is governed by Apple's Privacy Policy.",
      link: {
        label: 'Apple’s Privacy Policy',
        url: 'https://www.apple.com/legal/privacy/',
      },
    },
    {
      title: 'Third-Party Services',
      text: 'This app contains no third-party advertising, analytics, or tracking services. I do not use tools like Firebase, Google Analytics, Facebook SDK, or similar services. There are no in-app purchases and no subscription services to manage.',
    },
    {
      title: 'Cookies & Tracking',
      text: 'As a native iOS application, this app does not use cookies. I do not track your activity across apps or websites, and I do not use device fingerprinting or advertising identifiers.',
    },
    {
      title: 'Children’s Privacy',
      text: 'This app does not knowingly collect any information from anyone, including children under the age of 13. Since no personal data is collected at all, the app presents no specific risk to minors.',
    },
    {
      title: 'Changes to This Policy',
      text: 'If this policy changes in the future, the updated version will be published here with a new effective date. Any meaningful changes — such as adding optional data features — will be clearly communicated within the app before taking effect.',
    },
    {
      title: 'Questions?',
      text: 'If you have any questions about this privacy policy, feel free to contact me.',
      link: {
        label: 'hello@feji.fi',
        url: 'mailto:hello@feji.fi',
      },
    },
  ],
};
export const terms: LegalDocument = {
  title: 'Terms and Conditions',
  date: 'March 27, 2026',
  intro:
    'Styrka is a simple tool built to do one thing well. These terms are written to be clear and fair—not to hide anything or limit your rights unnecessarily.',
  sections: [
    {
      title: 'Acceptance of Terms',
      text: 'By downloading or using Styrka, you agree to be bound by these Terms of Service. If you do not agree, please do not use the app. These terms apply to all users of Styrka, regardless of how the app was obtained through the Apple App Store.',
    },
    {
      title: 'What Styrka Is',
      text: 'Styrka is a native iOS application for tracking gym workouts. It allows you to log exercises, sets, reps, and weights. All data is stored locally on your device. The app is designed to work fully offline. No account, no sign-up, and no internet connection is required to use its core features.',
    },
    {
      title: 'One-Time Payment',
      text: "Styrka is sold as a one-time purchase at a fixed price through the Apple App Store. There are no subscriptions, no in-app purchases, and no recurring fees of any kind. Your purchase grants you a personal, non-transferable license to use the app on any Apple devices associated with your Apple ID, in accordance with Apple's standard App Store terms.",
    },
    {
      title: 'Ownership of Your Data',
      text: 'All workout data you enter into Styrka belongs entirely to you. I do not collect, access, or store any of it. It lives on your device and, if you choose to enable it, in your personal iCloud storage. I have no ability to recover data lost due to device failure, accidental deletion, or other circumstances. I recommend enabling iCloud sync as your own backup.',
    },
    {
      title: 'Ownership',
      text: 'Styrka, including its name, design, code, and all related assets, is the property of Feji Studios. All rights are reserved. You may not copy, modify, distribute, sell, or sublicense any part of the app or its content without prior written permission from Feji Studios.',
    },
    {
      title: 'What You May Not Do',
      text: 'You agree not to reverse engineer, decompile, or attempt to extract the source code of Styrka. You may not use the app for any unlawful purpose or in a way that could harm Feji Studios or other users.',
    },
    {
      title: 'No Warranties',
      text: 'Styrka is provided "as is" without warranties of any kind, either express or implied. I do not guarantee that the app will be error-free, uninterrupted, or suitable for any particular purpose. Feji Studios is not liable for any injuries, health issues, or physical harm that may result from following workout data logged in the app. Always exercise within your own limits.',
    },
    {
      title: 'Limitation of Liability',
      text: 'To the maximum extent permitted by law, Feji Studios shall not be liable for any indirect, incidental, or consequential damages arising from your use of Styrka, including data loss.',
    },
    {
      title: 'Changes to These Terms',
      text: 'I may update these terms from time to time. The updated version will be published here with a new effective date. Continued use of the app after changes are posted constitutes acceptance of the revised terms.',
    },
    {
      title: 'Jurisdiction',
      text: 'These terms are governed by the laws of Finland. Any disputes arising from these terms or your use of Styrka shall be subject to the exclusive jurisdiction of the courts of Finland.',
    },
    {
      title: 'Questions?',
      text: 'If you have any questions about these terms, feel free to contact me.',
      link: {
        label: 'hello@feji.fi',
        url: 'mailto:hello@feji.fi',
      },
    },
  ],
};
// Orka's legal text is also built into the app. Keep both copies word for word identical.
const orkaContactLink = { text: 'hello@feji.fi', url: 'mailto:hello@feji.fi' };
export const orkaPrivacy: LegalDocument = {
  title: 'Privacy Policy',
  heading: 'Orka Privacy Policy',
  dateLabel: 'Last updated',
  date: '26 September 2026',
  sections: [
    {
      title: 'Data collection',
      text: 'Feji Studios does not collect personal data through Orka. Orka has no Feji Studios account or server, and contains no advertising, analytics, or tracking. Feji Studios does not receive the tasks, deadlines, events, exams, courses, or other planner content you enter into the app, and does not sell or share your information.',
    },
    {
      title: 'Your planner',
      text: 'Your planner content is stored on your device and used only to provide the planning features you choose to use. Feji Studios does not collect this content or maintain a copy that can be accessed or recovered for you.',
    },
    {
      title: 'iCloud sync',
      text: 'If you are signed in to iCloud, your items and courses sync between your devices through your private iCloud database using Apple’s CloudKit. This data is stored in your iCloud account, not with Feji Studios, and Feji Studios cannot access it. Apple’s privacy policy applies to iCloud. You can turn off iCloud for Orka in your device’s iCloud settings. App preferences, calendar choices, and friends’ calendar connections stay on the device where you set them.',
    },
    {
      title: 'Apple Calendar',
      text: 'If you allow calendar access, Orka reads events from the calendars you select so they can appear beside your plan and in widgets. Orka never creates, changes, or deletes events in your calendars, and events are read on your device only. You can change calendar access at any time in Settings › Privacy & Security › Calendars.',
    },
    {
      title: 'Calendar links',
      text: 'When you add a calendar by link, Orka hands the link to Apple Calendar, which subscribes to it and keeps it up to date. The link is not sent to Feji Studios. The calendar’s provider, such as your school, receives requests from Apple Calendar as it would for any subscription.',
    },
    {
      title: 'Google Calendar',
      text: 'If you connect Google, Orka requests read-only access to your calendar list and events. Your device communicates directly with Google. Selected events are cached locally for the planner and widgets; Google sign-in credentials are stored in the device Keychain. Feji Studios does not receive these calendar events on a server. Disconnect Google in Connected calendars to clear this integration’s local event cache and sign-in state. You can also revoke access in your Google Account.',
    },
    {
      title: 'Google user data',
      text: 'Orka uses data from Google only to show your selected calendars and events inside the app and its widgets. It is not used for advertising, not sold, not transferred to others, not read by people, and not used to train AI models. Orka’s use and transfer of information received from Google APIs adheres to the Google API Services User Data Policy, including the Limited Use requirements.',
      inlineLinks: [
        {
          text: 'Google API Services User Data Policy',
          url: 'https://developers.google.com/terms/api-services-user-data-policy',
        },
      ],
    },
    {
      title: 'Friends’ calendars',
      text: 'Find time together uses calendars other people have already shared with you through Apple Calendar or Google. Orka reads these calendars on your device only to show busy times and gaps, and never changes them. Event titles are hidden unless you choose to show them for a friend. The names you give friends are stored only on this device. Nothing is sent to your friends, and they do not need Orka.',
    },
    {
      title: 'Reminders',
      text: 'Reminders you set are scheduled by iOS on your device and show the item’s title. Orka asks for notification permission only when you choose to use reminders, and does not send notifications from a server.',
    },
    {
      title: 'Quick Add & sharing',
      text: 'Quick Add processes your text entirely on your device. Your Quick Add text is not sent to Feji Studios or an external AI service for processing. Text and links you share to Orka from other apps are saved as items on your device in the same way.',
    },
    {
      title: 'Optional purchases',
      text: 'Orka is free, with an optional one-time Premium purchase that unlocks more colour kits, more connected calendars, and Find time together. Apple handles payment; Orka only checks with Apple whether Premium has been purchased on your Apple Account. Feji Studios does not receive your payment details. Apple’s handling of account and payment information is governed by its own privacy policy.',
    },
    {
      title: 'Deleting your data',
      text: 'Items and courses you delete in Orka are removed from this device and, with iCloud sync, from your other devices. Deleting the app removes the data stored on that device. Disconnecting Google clears Google data cached by Orka.',
    },
    {
      title: 'Contacting Feji Studios',
      text: 'If you choose to email for support, Feji Studios receives the email address and information you include so that a response can be provided. This is separate from data collection through the app. Please do not include private planner content unless it is necessary for your question.',
    },
    {
      title: 'Scope of this policy',
      text: 'This policy describes the Orka app. Services you use separately, including the Apple App Store, iCloud, and Google, are governed by their own privacy policies.',
    },
    {
      title: 'Changes to this policy',
      text: "Any changes to this policy will be published on this page. The policy will be updated if Orka's data handling changes. Last updated 26 September 2026.",
    },
    {
      title: 'Contact',
      text: 'If you have a question about Orka and your privacy, contact Feji Studios at hello@feji.fi.',
      inlineLinks: [orkaContactLink],
    },
  ],
};
export const orkaTerms: LegalDocument = {
  title: 'Terms & Conditions',
  heading: 'Orka Terms & Conditions',
  sections: [
    {
      title: 'Using Orka',
      text: 'These terms describe your use of Orka. Orka helps you organise tasks, deadlines, events, and exams. Please read these terms and the privacy policy before using the app.',
    },
    {
      title: 'Free app & optional purchases',
      text: 'Orka is free to download and use. An optional one-time Premium purchase unlocks more colour kits, more connected calendars, and Find time together. It is not a subscription. The features included, price, and payment terms for each purchase are shown before you confirm it. You can use the free app without purchasing these extras.',
    },
    {
      title: 'Payment terms',
      text: 'For purchases billed through the Apple App Store, Apple handles payment under its applicable terms. Review the purchase screen for whether a product is a one-time purchase or a recurring subscription, and any duration or renewal terms.',
    },
    {
      title: 'Refunds',
      text: 'For purchases billed by Apple, refund requests can be submitted through Apple. Eligibility depends on the purchase and applicable rules. Nothing in these terms limits your mandatory consumer rights.',
    },
    {
      title: 'Your information',
      text: 'Your planner content remains yours. Feji Studios does not collect personal data through Orka. Quick Add processes text entirely on your device, without sending it to Feji Studios or an external AI service. See the privacy policy for details.',
      inlineLinks: [{ text: 'privacy policy', url: '/orka/privacy' }],
    },
    {
      title: 'License & ownership',
      text: "Orka's code, design, and original artwork belong to their respective owners. Your use of the app is subject to the license supplied with it through the App Store. Apple's Standard End User License Agreement applies where no custom license is provided. Your own planner content is not transferred to Feji Studios.",
      inlineLinks: [
        {
          text: "Apple's Standard End User License Agreement",
          url: 'https://www.apple.com/legal/internet-services/itunes/dev/stdeula/',
        },
      ],
    },
    {
      title: 'Responsible use',
      text: "Use Orka lawfully and respect the rights of other people and calendar content providers. Do not attempt to bypass purchase protections or interfere with the app's operation. These restrictions do not prevent activities expressly permitted by applicable law.",
    },
    {
      title: 'Planning & availability',
      text: 'You are responsible for checking important dates and the accuracy of your entries. Calendar information may depend on the source you choose. Feji Studios cannot promise that every calendar source will remain available or that the app will always be error-free. Keep your own copy of important information; Feji Studios does not hold a copy of your planner data that can be recovered for you. Your statutory rights remain unaffected.',
    },
    {
      title: 'Updates to these terms',
      text: 'Updates to these terms will be published on this page. Changes to paid features or purchase conditions remain subject to the terms presented when you purchase and to applicable consumer law.',
    },
    {
      title: 'Contact',
      text: 'For questions about Orka or these terms, contact Feji Studios at hello@feji.fi.',
      inlineLinks: [orkaContactLink],
    },
  ],
};
export function getDocument(product: string, document: string) {
  if (product === 'styrka')
    return document === 'privacy'
      ? privacy
      : document === 'terms'
        ? terms
        : null;
  if (product === 'orka')
    return document === 'privacy'
      ? orkaPrivacy
      : document === 'terms'
        ? orkaTerms
        : null;
  return null;
}
