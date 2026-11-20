import { banbanPrivacy } from './banban-privacy';
import { ekvoraPrivacy } from './ekvora-privacy';

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
  date: '30 October 2026',
  sections: [
    {
      title: 'Data collection',
      text: "Feji Studios does not collect your planner content through Orka. Orka has no Feji Studios account or server, and contains no advertising or tracking SDKs. Optional support diagnostics and Apple crash reports are described below. Feji Studios does not receive the tasks, deadlines, events, exams, courses, or other planner content you enter into the app, and does not sell or share your information.",
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
      title: "Google Calendar data we access",
      text: "Connecting Google Calendar is optional. Orka requests calendar.calendarlist.readonly to read calendar identifiers, names, colours and access information so you can choose calendars. It requests calendar.events.readonly to read events from the calendars you select, including event identifiers, titles, start and end times, all-day status, locations, descriptions, links, recurrence information and whether events mark time as busy. Google Sign-In also provides an account identifier and email address to identify the connected account and label its calendars. Orka does not request permission to create, change or delete Google calendars or events.",
    },
    {
      title: "How we use Google user data",
      text: "Orka uses the calendar list to let you select which calendars appear in your planner. It uses event titles, dates and times to display classes and appointments beside your tasks in calendar views and Home Screen widgets; locations, descriptions and links provide event details; recurrence information identifies recurring classes; and busy times help Find time together calculate gaps in calendars already shared with you. If you choose to include busy times in a Plan with AI request, Orka adds only the start and end times of busy events to the request text, without titles or other event details; you then copy or share that text yourself. The connected account identifier prevents mixing data from different Google accounts, and its email address labels the source of events. This processing happens on your device to provide the features you choose. Feji Studios does not receive your Google calendar data on a server, sell it, disclose it to advertisers or data brokers, or use it for advertising. Feji Studios personnel do not read your Google calendar data. Google user data is not used to develop, improve or train AI or machine-learning models. Orka’s use and transfer of information received from Google APIs adheres to the Google API Services User Data Policy, including the Limited Use requirements.",
      inlineLinks: [{ text: 'Google API Services User Data Policy', url: 'https://developers.google.com/terms/api-services-user-data-policy' }],
    },
    {
      title: "Protecting Google user data",
      text: "Orka communicates directly with Google over HTTPS, using TLS encryption to protect Google user data and OAuth tokens in transit. Google sign-in credentials are managed by the Google Sign-In SDK using the device Keychain. Calendar API access tokens are sent in the Authorization header, not in URL query parameters, and Orka rejects API redirects to prevent forwarding them to another destination. Its Calendar API session disables persistent HTTP response, cookie and credential caches. Cached calendar events contain no OAuth credentials and are held in the app’s iOS sandbox and its App Group for Orka’s own app extensions. iOS controls access to these containers. Orka checks the connected account before accepting refreshed tokens and API results, and cancels pending requests and clears cached integration data when you disconnect or change accounts. Orka requests read-only permissions and fetches events only from the calendars you select. Feji Studios operates no server that receives or stores this Google calendar data.",
    },
    {
      title: "Google data storage and deletion",
      text: "Selected Google events are cached on your device, including a snapshot shared with Orka’s widgets, so your schedule can be displayed without a new network request every time. Cached data can remain between launches and is replaced as the selected schedule refreshes. The integration’s Google event cache is not synced to iCloud or stored on a Feji Studios server. Disconnect Google in Connected calendars to clear the integration’s local event snapshot, in-memory results and local sign-in state. Changing the connected Google account also clears the previous account’s cache. You can separately revoke Orka’s authorization in your Google Account; disconnecting in Orka does not delete your calendars or events at Google.",
    },
    {
      title: 'Friends’ calendars',
      text: 'Find time together uses calendars other people have already shared with you through Apple Calendar or Google. Orka reads these calendars on your device only to show busy times and gaps, and never changes them. Event titles are hidden unless you choose to show them for a friend. The names you give friends are stored only on this device. Nothing is sent to your friends, and they do not need Orka.',
    },
    {
      title: 'Reminders',
      text: "Reminders are scheduled locally by iOS and show the item’s title and planned date or time. During onboarding, Orka explains reminders and planning nudges; Apple’s permission request appears only if you accept or enable notifications in Settings. You can control reminder categories, timing and sounds in Settings. Optional planning nudges help with inbox items, exam preparation, postponed tasks, overdue reviews, weekly planning and returning after a break. You can turn off each type. Notifications are scheduled on your device, not a server.",
    },
    {
      title: "Widgets & Live Activities",
      text: "If you add an Orka widget or start a focus session, planner or calendar titles and timing information may appear on your Home Screen, Lock Screen or Dynamic Island. iOS displays this information on your device; Orka does not send it to a Feji Studios server. You control widgets, notification previews and Live Activities through Orka and your device settings.",
    },
    {
      title: 'Quick Add & sharing',
      text: 'Quick Add processes your text entirely on your device. Your Quick Add text is not sent to Feji Studios or an external AI service for processing. Text and links you share to Orka from other apps are saved as items on your device in the same way.',
    },
    {
      title: 'Plan with AI',
      text: "Plan with AI is optional, and Orka never connects to an AI service itself. When you use it, Orka writes a planning request on your device from the choices you make: the titles, types, due dates and courses of the work you select, your study hours and any wishes you type. Notes are included only if you turn them on. Busy times from your calendars can be included as start and end times only, without event titles, locations or other details. Friends’ calendars are never included. Orka does not send the request anywhere: you decide whether to copy it or share it as a file, and which AI service or other app receives it. That service’s own terms and privacy policy apply to what you share with it, including whether it keeps or learns from your conversations, and Feji Studios does not receive it. When you paste or open a plan, Orka reads it on your device, shows the study sessions it found and adds only the ones you tick. It never changes or deletes your existing items. Your Plan with AI choices are saved only on this device.",
    },
    {
      title: "Opening links & Maps",
      text: "Orka does not open event links or send event locations to another service automatically. If you choose Open in Maps, Orka asks Apple Maps to search for the displayed location. If you open an event link, calendar sharing guide, support page or other external link, the destination service receives the information needed to handle your request and applies its own privacy policy.",
    },
    {
      title: 'Deleting your data',
      text: "Items and courses you delete in Orka are removed from this device and, when iCloud sync is active, from your other devices through iCloud. Deleting the app removes its local data from that device, but does not by itself delete planner data already synced to your private iCloud database. You can manage Orka’s iCloud data through your Apple Account and iCloud settings. Disconnecting Google clears Google data cached by Orka.",
    },
    {
      title: "Diagnostics and crash reports",
      text: "Orka keeps bounded failure counts in memory for the current app session. These contain no planner content, account identifiers or raw errors and are cleared when the process ends or you clear them in Send feedback. You can preview and optionally include a summary with app and OS versions and storage mode in feedback you send. Orka does not upload these diagnostics automatically or use a third-party crash SDK. Apple separately provides crash reports under its own policies: App Store reports depend on analytics sharing settings; TestFlight automatically shares crash reports with the developer.",
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
      text: "Any changes to this policy will be published on this page. The policy will be updated if Orka's data handling changes. Last updated 30 October 2026.",
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
      title: 'Free app',
      text: 'Orka is free to download and use. All colour kits, connected calendars, and Find time together are included.',
    },
    {
      title: 'Your information',
      text: "Your planner content remains yours. Feji Studios does not collect your planner content through Orka. Optional support diagnostics and Apple crash reports are described in the privacy policy. Quick Add processes text entirely on your device, without sending it to Feji Studios or an external AI service. See the privacy policy for details.",
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
      text: "Use Orka lawfully and respect the rights of other people and calendar content providers. Do not interfere with the app's operation. These restrictions do not prevent activities expressly permitted by applicable law.",
    },
    {
      title: 'Planning & availability',
      text: 'You are responsible for checking important dates and the accuracy of your entries. Calendar information may depend on the source you choose. Feji Studios cannot promise that every calendar source will remain available or that the app will always be error-free. Keep your own copy of important information; Feji Studios does not hold a copy of your planner data that can be recovered for you. Your statutory rights remain unaffected.',
    },
    {
      title: 'Updates to these terms',
      text: 'Updates to these terms will be published on this page.',
    },
    {
      title: 'Contact',
      text: 'For questions about Orka or these terms, contact Feji Studios at hello@feji.fi.',
      inlineLinks: [orkaContactLink],
    },
  ],
};
// Varva's statements describe the app as audited on 3 November 2026: no network code, no account,
// no third-party SDKs, CloudKit off, local notifications and an App Group widget snapshot only.
// Recheck them against the build that is submitted, and update both pages if data handling changes.
const varvaContactLink = { text: 'hello@feji.fi', url: 'mailto:hello@feji.fi' };
export const varvaPrivacy: LegalDocument = {
  title: 'Privacy Policy',
  heading: 'Varva Privacy Policy',
  dateLabel: 'Last updated',
  date: '3 November 2026',
  intro:
    'Varva is a private record of your Heat, Cold and Contrast practice. This policy explains what the app stores, where it stays, and the few cases where information leaves Varva because you choose to move it.',
  sections: [
    {
      title: 'Data collection',
      text: 'Feji Studios does not collect any data through Varva. Varva has no account, no Feji Studios server and no network connection of its own, and it contains no advertising, analytics, tracking or crash-reporting SDKs. Your sessions stay on your iPhone. Feji Studios never receives them, and does not sell or share your information.',
    },
    {
      title: 'Your practice record',
      text: 'Varva stores what you log in its own storage on your iPhone: each session’s practice (Heat, Cold or Contrast), duration, optional temperature, Heat rounds, Contrast phases, finish time and time zone, and any reflection you write. It also stores your weekly practice and its history, planned breaks, saved routines, an unfinished entry so it can be recovered, and preferences such as your temperature unit and reminder schedule. This information is used only to show Today, the Journal, Insights, widgets and reminders. Feji Studios does not hold a copy that can be accessed or recovered for you.',
    },
    {
      title: 'No sync or Apple Health',
      text: 'Varva does not sync between devices and does not use iCloud sync, CloudKit or Apple Health. It does not request access to your location, contacts, photos, camera, microphone or calendars.',
    },
    {
      title: 'iPhone backups',
      text: 'Varva does not exclude its data from your iPhone’s own backup. If you back up your iPhone to iCloud or a computer, that backup may include Varva’s data. Whether a backup exists and what it restores is controlled by iOS, your settings and Apple’s privacy policy, not by Feji Studios.',
      inlineLinks: [{ text: 'Apple’s privacy policy', url: 'https://www.apple.com/legal/privacy/' }],
    },
    {
      title: 'Backups and CSV exports',
      text: 'In Settings › Backups & export you can save a complete backup, a file containing your sessions, reflections, Contrast phases, goal history and saved routines, or export your sessions as a CSV file. Varva creates these files only when you ask, and you choose where they go, such as the Files app, iCloud Drive or another app. Once exported, a file is outside Varva and is handled by the place you saved it under its own privacy policy. Backups contain your reflections, so keep them somewhere you trust. Feji Studios never receives them.',
    },
    {
      title: 'Restoring a backup',
      text: 'When you restore, Varva reads the file you choose on your iPhone and checks it before anything is replaced. Before replacing your current history, Varva saves a safety copy of the existing record in its own storage on your iPhone, which you can export again from Settings › Backups & export. Safety copies stay on the device until you delete Varva. Reminder settings are not part of a backup.',
    },
    {
      title: 'Reminders',
      text: 'Practice reminders are optional and off until you turn them on. Apple’s permission request appears only when you choose to enable reminders, after your first logged session or in Settings › Practice reminders. Reminders are scheduled locally by iOS for the days and time you choose, up to eight weeks ahead, and contain a general invitation to practise rather than details of your sessions. Notifications are scheduled on your device, not on a server. You can change the schedule or turn reminders off in Varva, and manage notification permission in iOS Settings.',
    },
    {
      title: 'Widgets',
      text: 'If you add a Varva widget, it shows this week’s Discipline, the sessions completed against your weekly target and a short note about what remains. To do this, Varva shares a small weekly summary with its widget through storage on your iPhone reserved for Varva and its widget. The summary contains no reflections or session details. Lock Screen widgets can be seen by anyone who can see your Lock Screen. You can remove a widget at any time.',
    },
    {
      title: 'Diagnostics and crash reports',
      text: 'When something goes wrong, such as a save that fails, Varva writes a brief technical message to your iPhone’s system log. These messages name the kind of error only; details that could include session content are marked private so that iOS redacts them. Varva does not upload these messages or use a third-party crash SDK. Apple separately provides crash reports under its own policies: App Store reports depend on your analytics sharing settings; TestFlight automatically shares crash reports with the developer.',
    },
    {
      title: 'Purchases',
      text: 'Varva is sold through the App Store. Apple processes your purchase, and Feji Studios does not receive your payment details or Apple Account information.',
    },
    {
      title: 'Deleting your data',
      text: 'You can edit or delete individual sessions from the Journal, and delete saved routines or an unfinished entry in Settings › Saved routines & preferences. Deleting Varva removes all of its data from your iPhone, including safety copies. It does not delete backup or CSV files you exported, or iPhone backups made by iOS; manage those where they are stored.',
    },
    {
      title: 'Children',
      text: 'Varva is not directed at children. Because Feji Studios collects no data through Varva, it does not knowingly collect information from anyone, including children.',
    },
    {
      title: 'Contacting Feji Studios',
      text: 'If you choose to email for support, Feji Studios receives the email address and information you include so that a response can be provided. This is separate from data collection through the app. Please do not send reflections or backup files unless your question needs them.',
    },
    {
      title: 'Your rights',
      text: 'Feji Studios is based in Finland. Varva’s data stays on your iPhone, where you can view, change and delete it yourself. For support correspondence, you can ask for a copy, correction or deletion by writing to hello@feji.fi. If you live in the EU or EEA, you can also lodge a complaint with your local data protection authority; in Finland, that is the Data Protection Ombudsman.',
      inlineLinks: [varvaContactLink, { text: 'Data Protection Ombudsman', url: 'https://tietosuoja.fi/en' }],
    },
    {
      title: 'Scope of this policy',
      text: 'This policy describes the Varva app. Services you use separately, including the Apple App Store, iCloud, iOS and any app or service where you save an exported file, are governed by their own privacy policies.',
    },
    {
      title: 'Changes to this policy',
      text: "Any changes to this policy will be published on this page. The policy will be updated if Varva's data handling changes. Last updated 3 November 2026.",
    },
    {
      title: 'Contact',
      text: 'If you have a question about Varva and your privacy, contact Feji Studios at hello@feji.fi.',
      inlineLinks: [varvaContactLink],
    },
  ],
};
export const varvaTerms: LegalDocument = {
  title: 'Terms & Conditions',
  heading: 'Varva Terms & Conditions',
  dateLabel: 'Last updated',
  date: '3 November 2026',
  sections: [
    {
      title: 'Using Varva',
      text: 'These terms describe your use of Varva, an iPhone app for logging Heat, Cold and Contrast sessions against a weekly practice you choose. Please read them together with the privacy policy.',
      inlineLinks: [{ text: 'privacy policy', url: '/varva/privacy' }],
    },
    {
      title: 'Not medical advice',
      text: 'Varva is a personal record. It is not a medical device and does not provide medical, health or safety advice. Discipline shows how closely you kept the weekly practice you chose, and Exposure summarises the time you recorded. Neither measures health, fitness, recovery or benefit, and Varva does not recommend durations, temperatures or how often to practise.',
    },
    {
      title: 'Practise safely',
      text: 'Sauna, cold water and contrast exposure place real demands on the body and are not suitable for everyone. Speak with a doctor before starting or changing a practice, especially if you have a heart or circulatory condition, are pregnant or take medication. Do not practise after drinking alcohol or alone in open cold water, and stop if you feel unwell. Varva is not a timer or safety device, and a goal, reminder or week’s progress is never a reason to stay in the heat or cold.',
    },
    {
      title: 'One-time purchase',
      text: 'Varva is a one-time purchase on the App Store, with no subscription, in-app purchases or advertising. Apple handles payment, Family Sharing and refunds under its own terms.',
    },
    {
      title: 'Your information',
      text: 'Your practice record remains yours. Feji Studios does not collect it through Varva; it stays on your iPhone. See the privacy policy for details.',
      inlineLinks: [{ text: 'privacy policy', url: '/varva/privacy' }],
    },
    {
      title: 'Keeping your record',
      text: 'Varva does not sync between devices, and Feji Studios holds no copy of your record that can be recovered for you. Deleting the app, or losing your iPhone without a backup, can mean losing your history. Save a complete backup from Settings › Backups & export from time to time and keep it somewhere you trust.',
    },
    {
      title: 'License & ownership',
      text: "Varva's code, design, and original artwork belong to their respective owners. Your use of the app is subject to the license supplied with it through the App Store. Apple's Standard End User License Agreement applies where no custom license is provided. Your own practice record is not transferred to Feji Studios.",
      inlineLinks: [
        {
          text: "Apple's Standard End User License Agreement",
          url: 'https://www.apple.com/legal/internet-services/itunes/dev/stdeula/',
        },
      ],
    },
    {
      title: 'Responsible use',
      text: "Use Varva lawfully and do not interfere with the app's operation. These restrictions do not prevent activities expressly permitted by applicable law.",
    },
    {
      title: 'Availability',
      text: 'Feji Studios works to keep Varva reliable, but cannot promise that the app will always be error-free or available on every device and iOS version. Your statutory rights remain unaffected.',
    },
    {
      title: 'Governing law',
      text: 'These terms are governed by the laws of Finland. If you are a consumer, you also keep the protection of the mandatory laws of the country where you live.',
    },
    {
      title: 'Updates to these terms',
      text: 'Updates to these terms will be published on this page with a new date.',
    },
    {
      title: 'Contact',
      text: 'For questions about Varva or these terms, contact Feji Studios at hello@feji.fi.',
      inlineLinks: [varvaContactLink],
    },
  ],
};
export function getDocument(product: string, document: string) {
  if (product === 'ekvora')
    return document === 'privacy' ? ekvoraPrivacy : null;
  if (product === 'banban')
    return document === 'privacy' ? banbanPrivacy : null;
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
  if (product === 'varva')
    return document === 'privacy'
      ? varvaPrivacy
      : document === 'terms'
        ? varvaTerms
        : null;
  return null;
}
