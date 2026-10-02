import { siteConfig } from './siteConfig.js'

/**
 * Structured legal templates. These are starting points, not legal advice:
 * bracketed items need company-specific information and the full text should
 * be reviewed by a qualified adviser before publication.
 */
const contactLine = `Contact: ${siteConfig.contact.emails.join(' or ')}, or call ${siteConfig.contact.phone}.`

export const legalNotice =
  'Template text. Bracketed items need company-specific details, and the whole document should be reviewed by a qualified legal adviser before it is relied on.'

export const lastUpdated = '[DATE: TO BE CONFIRMED]'

export const privacyPolicy = {
  title: 'Privacy Policy',
  intro: `This policy explains how ${siteConfig.name} ("we", "us") handles personal information collected through ${siteConfig.url}.`,
  sections: [
    {
      heading: 'Information we collect',
      body: [
        'We collect the information you choose to give us, and a limited amount of technical information needed to run the website.',
      ],
      list: [
        'Details you submit through the contact form: name, email address, phone number, organisation, subject and message.',
        'Your cookie preference, stored in your browser.',
        'Technical information such as browser type and pages visited, only where analytics are enabled and you have consented.',
      ],
    },
    {
      heading: 'Contact forms',
      body: [
        'Information sent through the contact form is used to respond to your enquiry and to keep a record of our correspondence. We do not use it for unrelated marketing without your agreement.',
      ],
    },
    {
      heading: 'Cookies',
      body: [
        'We use cookies to analyze website traffic and optimize your website experience. Analytics cookies are only set if you accept them. See the Cookie Policy for details and for how to change your choice.',
      ],
    },
    {
      heading: 'Analytics',
      body: [
        'Where you consent, analytics data is aggregated with all other user data and used to understand how the website is used. [ANALYTICS PROVIDER: TO BE CONFIRMED]',
      ],
    },
    {
      heading: 'Third-party services',
      body: [
        'We rely on service providers to host the website, store submitted enquiries and deliver email. They process information on our behalf and under our instructions. [LIST OF PROVIDERS: TO BE CONFIRMED]',
      ],
    },
    {
      heading: 'Data retention',
      body: [
        'We keep enquiry records for as long as needed to respond and to maintain a reasonable business record. [RETENTION PERIOD: TO BE CONFIRMED]',
      ],
    },
    {
      heading: 'Data security',
      body: [
        'We take reasonable technical and organisational measures to protect personal information. No method of transmission or storage is completely secure, and we cannot guarantee absolute security.',
      ],
    },
    {
      heading: 'Your rights',
      body: [
        'Depending on the law that applies to you, you may have the right to access, correct or delete your personal information, to object to or restrict its use, and to withdraw consent. [APPLICABLE LAW AND REGULATOR: TO BE CONFIRMED]',
      ],
    },
    {
      heading: 'Contact details',
      body: [`To ask about this policy or exercise your rights, get in touch. ${contactLine}`],
    },
  ],
}

export const cookiePolicy = {
  title: 'Cookie Policy',
  intro:
    'This policy explains what this website stores in your browser, why, and how you can control it.',
  sections: [
    {
      heading: 'What cookies are',
      body: [
        'Cookies and similar technologies, such as local storage, are small pieces of data a website saves in your browser so it can remember information between visits.',
      ],
    },
    {
      heading: 'Necessary storage',
      body: [
        'The website stores your cookie preference in your browser so that we do not ask again on every visit. This is required for the consent banner to work and cannot be switched off.',
      ],
    },
    {
      heading: 'Analytics cookies',
      body: [
        'We use cookies to analyze website traffic and optimize your website experience. By accepting our use of cookies, your data will be aggregated with all other user data.',
        'Analytics is off until you accept it. No analytics service is active on this website at the time of writing; this section describes how one will behave once connected. [ANALYTICS PROVIDER: TO BE CONFIRMED]',
      ],
    },
    {
      heading: 'Preference cookies',
      body: ['Apart from your consent choice, the website does not currently store other preferences.'],
    },
    {
      heading: 'Marketing cookies',
      body: ['This website does not use marketing or advertising cookies.'],
    },
    {
      heading: 'Managing your consent',
      body: [
        'You can change your choice at any time using the "Cookie settings" link in the footer of every page. You can also clear or block cookies through your browser settings.',
      ],
    },
    {
      heading: 'Contact details',
      body: [`Questions about this policy are welcome. ${contactLine}`],
    },
  ],
}

export const terms = {
  title: 'Terms of Use',
  intro: `These terms apply to your use of ${siteConfig.url}, operated by ${siteConfig.name}. [REGISTERED COMPANY NAME AND NUMBER: TO BE CONFIRMED]`,
  sections: [
    {
      heading: 'Using this website',
      body: [
        'You may use this website for lawful purposes only. You must not attempt to disrupt it, gain unauthorised access to it, or use it to transmit harmful material.',
      ],
    },
    {
      heading: 'Information on this website',
      body: [
        'Content is provided for general information about our capabilities. It is not an offer, and it is not technical, financial or legal advice. Any engagement is governed by a separate written agreement.',
      ],
    },
    {
      heading: 'Intellectual property',
      body: [
        `The ${siteConfig.name} name, logo and original content on this website belong to us or our licensors. You may not reproduce them without permission. Some photographs are used under third-party licences.`,
      ],
    },
    {
      heading: 'Links to other websites',
      body: ['Where we link to third-party websites, we are not responsible for their content or practices.'],
    },
    {
      heading: 'Liability',
      body: [
        'To the extent permitted by law, we are not liable for loss arising from reliance on this website or from it being unavailable. [LIMITATION OF LIABILITY WORDING: TO BE CONFIRMED]',
      ],
    },
    {
      heading: 'Governing law',
      body: ['[GOVERNING LAW AND JURISDICTION: TO BE CONFIRMED]'],
    },
    {
      heading: 'Changes to these terms',
      body: ['We may update these terms from time to time. The current version will always be available on this page.'],
    },
    {
      heading: 'Contact details',
      body: [contactLine],
    },
  ],
}
