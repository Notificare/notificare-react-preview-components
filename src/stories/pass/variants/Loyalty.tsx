import { NotificarePassPreviewProps } from '~/components/NotificarePassPreview/NotificarePassPreview';

export const LOYALTY: NotificarePassPreviewProps = {
  passTemplate: {
    type: 'loyalty',
    templateDesign: {
      appleWallet: {},
      googlePay: {
        walletClass: {
          issuerName: 'Notificare',
          messages: [],
          homepageUri: {
            uri: null,
            description: null,
            localizedDescription: {
              translatedValues: [],
              defaultValue: {
                language: 'en-US',
                value: null,
              },
            },
            id: null,
          },
          imageModulesData: [],
          textModulesData: [],
          redemptionIssuers: [],
          countryCode: null,
          heroImage: {
            sourceUri: {
              uri: null,
            },
          },
          enableSmartTap: false,
          hexBackgroundColor: '{{color}}',
          localizedIssuerName: {
            translatedValues: [],
            defaultValue: {
              language: 'en-US',
              value: null,
            },
          },
          multipleDevicesAndHoldersAllowedStatus: 'MULTIPLE_HOLDERS',
          programName: 'Loyalty Go',
          programLogo: {
            sourceUri: {
              uri: '{{logoUri}}',
            },
          },
          accountNameLabel: null,
          accountIdLabel: null,
          rewardsTier: '{{level}}',
          secondaryRewardsTierLabel: 'Secondary',
          secondaryRewardsTier: '{{level}}',
        },
        walletObject: {
          disableExpirationNotification: false,
          smartTapRedemptionValue: null,

          messages: [
            {
              header: '{{accountId}}',
              body: '{{accountId}}',
            },
          ],
          imageModulesData: [
            {
              mainImage: {
                sourceUri: {
                  uri: '{{heroImage}}',
                },
              },
            },
          ],
          textModulesData: [
            {
              header: 'Account Email',
              body: '{{accountEmail}}',
            },
            {
              header: '{{currency}}',
              body: '{{currency}}',
            },
          ],
          linksModuleData: {
            uris: [
              {
                uri: 'https://notificare.com',
                description: 'Notificare',
              },
            ],
          },
          heroImage: {
            sourceUri: {
              uri: '{{heroImage}}',
            },
          },
          accountName: '{{accountName}}',
          loyaltyPoints: {
            label: 'Credit',
            balance: {
              string: 'EUR',
              int: null,
              double: null,
              money: {
                micros: null,
                currencyCode: null,
              },
            },
          },
          linkedOfferIds: [],
          secondaryLoyaltyPoints: {
            label: 'Secondary',
            balance: {
              string: null,
              int: null,
              double: null,
              money: {
                micros: '{{credit}}',
                currencyCode: '{{currency}}',
              },
            },
          },
        },
      },
    },
    barcodeDesign: {
      format: 'none',
      showAltText: false,
    },
    passData: [
      {
        key: 'credit',
        type: 'money',
        default: '0',
        _id: '6a204d395a54b35208d9aa97',
      },
      {
        key: 'currency',
        type: 'string',
        default: 'EUR',
        _id: '6a204d395a54b35208d9aa98',
      },
      {
        key: 'accountName',
        type: 'string',
        default: 'Notificarista',
        _id: '6a204d395a54b35208d9aa99',
      },
      {
        key: 'accountId',
        type: 'string',
        default: 'my-id',
        _id: '6a204d395a54b35208d9aa9a',
      },
      {
        key: 'accountEmail',
        type: 'string',
        default: 'n/a',
        _id: '6a204d395a54b35208d9aa9b',
      },
      {
        key: 'heroImage',
        type: 'image',
        default:
          'https://push.notifica.re/upload/passbook/ba85caa4d851e6b2412338ec41a57e7b991b9c01d55baf2e8c6b33804afb5662/2fc16dce9acdbff9602c9dd4b2a5b57f2079ef099df1c541b522cc403db1548f',
        _id: '6a204d395a54b35208d9aa9c',
      },
    ],
    templateData: [
      {
        key: 'logoUri',
        type: 'image',
        value:
          'https://push.notifica.re/upload/passbook/ba85caa4d851e6b2412338ec41a57e7b991b9c01d55baf2e8c6b33804afb5662/d0105c34a1bff81f0d3522b295d8f9a0aced0f0e4f2c3c4cb6e4ea142bbfc91d',
        _id: '6295375a743d3783ee02802c',
      },
      {
        key: 'headerUri',
        type: 'image',
        value:
          'https://push.notifica.re/upload/passbook/ba85caa4d851e6b2412338ec41a57e7b991b9c01d55baf2e8c6b33804afb5662/d97f94661c0ead8cf6e5786d4db5d4fda93085b8897304f6e2859bb1502d12bf',
        _id: '6295375a743d3783ee02802d',
      },
      {
        key: 'level',
        type: 'string',
        value: 'Expert',
        _id: '6299e0b8dfbcc17b0c847204',
      },
      {
        key: 'color',
        type: 'color',
        value: '#11D2D0',
        _id: '629fd2585c1132b3dc33d518',
      },
    ],
  },
};

export const LOYALTY_WITH_WIDE_PROGRAM_LOGO: NotificarePassPreviewProps = {
  ...LOYALTY,
  passTemplate: {
    ...LOYALTY.passTemplate,
    templateDesign: {
      ...LOYALTY.passTemplate.templateDesign,
      googlePay: {
        ...LOYALTY.passTemplate.templateDesign.googlePay,
        walletClass: {
          ...LOYALTY.passTemplate.templateDesign.googlePay.walletClass,
          wideProgramLogo: {
            sourceUri: { uri: 'https://images.notifica.re/placeholder/1032x336.png' },
          },
        },
      },
    },
  },
};
