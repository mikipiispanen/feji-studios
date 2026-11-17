import type { LegalDocument } from './legal-content';

const contact = { text: 'hello@feji.fi', url: 'mailto:hello@feji.fi' };

// Prepared from Docs/Legal/BanBanPrivacyPolicy.md and the app/server source.
// Publication requires the owner review recorded in BANBAN_CONTENT_REVIEW.md.
export const banbanPrivacy: LegalDocument = {
  title: 'Privacy Policy',
  heading: 'BanBan Privacy Policy',
  dateLabel: 'Last updated',
  date: '17 November 2026',
  intro:
    'BanBan has no accounts, advertising or tracking. One Phone games stay on the phone. Online parties use temporary game records on a Cloudflare-hosted server so everyone in the party can play together. This policy explains what those records contain, who can see them and how they are removed.',
  sections: [
    {
      title: 'Who is responsible',
      text: 'BanBan is made by Miki Piispanen, the independent developer behind Feji Studios, based in Finland. For privacy questions or requests about your information, contact hello@feji.fi. This policy covers the BanBan iOS app and its online game service, including the staging service used for the TestFlight beta.',
      inlineLinks: [contact],
    },
    {
      title: 'No account needed',
      text: 'You do not sign up or log in to BanBan. The app does not ask for your email address, phone number, contacts, photos or location. For an online party you choose a nickname, which everyone in that party can see. Use a nickname that does not identify you if you prefer, and avoid including private information.',
    },
    {
      title: 'Information on your phone',
      text: 'Sound and haptics preferences, and your last online nickname, are saved in the app’s local settings. Names, answers and scores in One Phone mode stay on that phone for the game and are not sent to the online game service. Deleting the app removes its local settings; device backups are managed separately by iOS.',
    },
    {
      title: 'Rejoining your party',
      text: 'To restore your seat after a connection loss or app restart, BanBan saves a room PIN, random room and player identifiers, a secret reconnection token, your host status, the room’s expiry time and your nickname in the device’s Keychain. This record does not sync through iCloud Keychain or migrate to another device. The app removes it when you leave or it learns that the party has ended, and discards expired credentials when it next checks them. It can remain while the app is closed or after an unsuccessful reconnection. Keychain records can also survive app deletion; deleting the app is not a guaranteed way to erase this record. Credentials are used only with the server configured for that copy of BanBan. Keep your reconnection token private.',
    },
    {
      title: 'Creating and joining online parties',
      text: 'When you create or join a party, the server receives your chosen nickname and issues a six-digit room PIN, random room and player identifiers, and reconnection credentials. While the party exists, it stores player seats and host status, connection and participation times, game settings, the questions already used, votes, predictions and scores. It stores reconnection tokens as one-way hashes rather than the original secrets. The app also sends its version and protocol version when connecting; protocol compatibility is checked, and the app version is not saved in the game records. Nicknames are checked against an offensive-word list, and the host can remove players. Share the PIN only with people you want in the party.',
    },
    {
      title: 'Open Reveal',
      text: 'In Open Reveal rounds, players in the party can see who chose each side, together with players’ predictions and points when those features are enabled. The server keeps the current round’s individual answers until the next round begins or the game ends, then removes those mappings from the active game records. Aggregate round results, running scores and correct-prediction totals remain for the game and recap until the party returns to the lobby or closes.',
    },
    {
      title: 'Mystery Reveal',
      text: 'Mystery Reveal shows group totals without directly displaying individual ballots with names. Your individual prediction is not displayed to the other players. The server still receives and counts each vote and prediction while voting is open, then removes the individual answer mappings from the active game records when voting closes. Running points and correct-prediction totals remain and can appear in the recap. Mystery Reveal does not guarantee anonymity: totals, scores, a small group or what people say can allow someone to deduce a vote or prediction. Cloudflare recovery storage is described below.',
    },
    {
      title: 'Room expiration and active records',
      text: 'A room is scheduled to close when the host closes it, after 30 minutes without activity, when the host has been away for more than 5 minutes, or 6 hours after creation, whichever comes first. A guest who leaves or stays disconnected for more than 3 minutes loses their seat. A player who leaves the lobby is removed from its player records; during a game, departed players can remain for the recap until the party returns to the lobby or closes. Closing a room removes its active nicknames, ballots, scores and player records. A small closure record containing the room identifier, closure time and reason, and one-way membership proofs is retained for about 15 minutes so the PIN is not immediately reused and connected players can be told the room ended. Cleanup can be delayed by service failures. Expired or closed rooms and their progress cannot be guaranteed to be recoverable.',
    },
    {
      title: 'Retries and recovery storage',
      text: 'The service temporarily keeps recent command replies so a retry is not applied twice. A record under a hashed random request key helps recover a create-party response if it is lost and is scheduled to expire after 15 minutes. Removing data from active game records is different from erasing every infrastructure copy: BanBan uses SQLite-backed Cloudflare Durable Objects, whose point-in-time recovery can restore earlier database contents from the past 30 days. Information removed from the live game, including individual answers and closed-room records, may therefore remain in Cloudflare’s recovery history during that window.',
      link: {
        label: 'Cloudflare storage and recovery documentation',
        url: 'https://developers.cloudflare.com/durable-objects/api/sqlite-storage-api/',
      },
    },
    {
      title: 'Network information and abuse prevention',
      text: 'Cloudflare receives your IP address and request information when you connect. BanBan’s application code does not save raw IP addresses. It hashes an address or network prefix to limit requests and the number of active rooms from one network. These are pseudonymous identifiers, not a promise of anonymity, and room-admission records associate a network hash with room identifiers. Request-limit counters normally clear within about 10 minutes after the last accepted request. Room-admission leases are released when rooms close or expire after up to 6 hours plus 10 minutes. The related network records are removed only after no leases remain and their allowance has refilled, during periodic cleanup checks about every 4 hours. Repeated activity and delayed cleanup can extend retention. These records support capacity limits and abuse prevention, not advertising or cross-app tracking.',
    },
    {
      title: 'Cloudflare usage statistics',
      text: 'Cloudflare also keeps service usage statistics separately from the active game database and its recovery history. These statistics can be viewed for up to 90 days and include the names of server objects, their activity times and data centres. Room object names contain the room PIN, and rate-limit object names contain hashed network identifiers. Those identifiers can therefore remain in these statistics after a room closes or its request counters are removed. They are not anonymous, but these statistics do not contain players’ nicknames, ballots, predictions, scores or reconnection tokens. This infrastructure monitoring is separate from in-app behavioural analytics.',
    },
    {
      title: 'Service diagnostics',
      text: 'BanBan uses Cloudflare to operate and secure online multiplayer. Cloudflare processes technical connection and request information, which may include network identifiers, request metadata and diagnostic information. Depending on the deployed logging configuration, technical logs may be retained for a limited period. Diagnostic information may also be reviewed during troubleshooting. The server’s own unexpected-error messages contain an event name and error type rather than game content. Diagnostic request streams can include raw IP addresses, request URLs containing a room PIN, approximate location derived from the IP address, network-provider information, and app or operating-system details. This approximate network location is separate from requesting location permission on your phone. If troubleshooting output is saved, those copies are separate from expiring game records. These infrastructure diagnostics are separate from in-app advertising or behavioural analytics. Do not include reconnection tokens or other players’ private information in a problem report.',
    },
    {
      title: 'Cloudflare and Apple',
      text: 'Cloudflare hosts the online game service using Workers and Durable Objects and processes game and network information to provide it. Cloudflare operates internationally, so processing may take place outside your country, including outside the EU or EEA. Its privacy policy and data processing addendum describe its data handling and international-transfer safeguards. Apple distributes BanBan. If you use TestFlight, Apple may share tester information, feedback, screenshots and crash reports with the developer under its TestFlight terms and privacy policy. Apple’s services and your email provider have their own privacy practices.',
      inlineLinks: [
        { text: 'privacy policy', url: 'https://www.cloudflare.com/privacypolicy/' },
        { text: 'data processing addendum', url: 'https://www.cloudflare.com/cloudflare-customer-dpa/' },
        { text: 'TestFlight terms and privacy policy', url: 'https://www.apple.com/legal/privacy/data/en/test-flight/' },
      ],
    },
    {
      title: 'Advertising and analytics',
      text: 'The current BanBan app has no advertising, advertising identifier access, third-party SDKs, in-app analytics or cross-app tracking. Feji Studios does not sell your information or disclose it to advertisers or data brokers. The data sharing needed to run an online party, hosting by Cloudflare, and support or TestFlight correspondence are described separately in this policy. The policy will be updated if the app’s data handling changes.',
    },
    {
      title: 'Support emails',
      text: 'If you email hello@feji.fi, Feji Studios receives your email address and the information you choose to include, and uses them to answer your question or investigate your report. Please send only what is needed and remove private information from screenshots. Support correspondence is separate from expiring room data and is retained only as long as needed to handle the request and meet applicable legal obligations. You can ask about access, correction or deletion using the same address.',
      inlineLinks: [contact],
    },
    {
      title: 'Why information is processed',
      text: 'Online game information is used to provide the party you choose to create or join, including reconnection, scoring and results. Network limits and service diagnostics support the legitimate interest in keeping the service secure and available. Support correspondence is used to respond to your request and maintain the service. Where EU or EEA data protection law applies, the legal bases are providing the service you request and these legitimate interests; information may also be retained where required by law.',
    },
    {
      title: 'Your choices and rights',
      text: 'You can play One Phone mode without sending game data to the server, choose a nickname, skip a vote or prediction, leave a party, or ask the host to close it. Leaving does not necessarily remove your earlier game contributions immediately. To request access, correction, deletion, restriction or portability of personal information, or to object to processing based on legitimate interests, email hello@feji.fi. Rights depend on the law that applies and the information still held. Because there are no accounts, Feji Studios may need limited context to locate a temporary record and verify a request; do not send a secret reconnection token. You can also complain to your local data protection authority. In Finland, this is the Data Protection Ombudsman.',
      inlineLinks: [contact, { text: 'Data Protection Ombudsman', url: 'https://tietosuoja.fi/en' }],
    },
    {
      title: 'Intended audience and children',
      text: 'BanBan is intended for university students and adults at social gatherings, including parties. It is not directed at children. Online nicknames and game choices are shared with the party as described above, so players should avoid including private information. A parent or guardian with a question about a child’s information can contact Feji Studios at hello@feji.fi.',
      inlineLinks: [contact],
    },
    {
      title: 'Changes and contact',
      text: 'Updates to this policy will be published here with a new date when BanBan’s data handling changes. For privacy questions, contact Miki Piispanen at Feji Studios: hello@feji.fi. For help playing, visit BanBan Support.',
      inlineLinks: [contact, { text: 'BanBan Support', url: '/banban/support' }],
    },
  ],
};
