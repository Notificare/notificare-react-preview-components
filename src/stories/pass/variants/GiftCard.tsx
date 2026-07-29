import { NotificarePassPreviewProps } from '~/components/NotificarePassPreview/NotificarePassPreview';

export const GIFT_CARD: NotificarePassPreviewProps = {
  passTemplate: {
    templateDesign: {
      appleWallet: {
        dictionary: {
          description: '{{issuerName}}',
          organizationName: '{{issuerName}}',
          appLaunchURL: null,
          associatedStoreIdentifiers: [],
          userInfo: null,
          maxDistance: null,
          backgroundColor: '{{backgroundColor}}',
          foregroundColor: '{{foregroundColor}}',
          groupingIdentifier: null,
          labelColor: '{{labelColor}}',
          logoText: null,
          sharingProhibited: false,
          generic: {
            headerFields: [
              {
                value: '{{balance}}',
                key: 'balance',
                label: 'Balance',
                textAlignment: 'PKTextAlignmentRight',
                currencyCode: '{{currency}}',
                changeMessage: null,
              },
            ],
            primaryFields: [],
            secondaryFields: [],
            auxiliaryFields: [],
            backFields: [],
          },
          semantics: {
            totalPrice: {
              amount: null,
              currencyCode: null,
            },
            wifiAccess: [],
          },
        },
        images: {
          logo: '{{logo}}',
          icon: '{{icon}}',
          thumbnail: '{{thumbnail}}',
        },
        personalization: {
          requiredPersonalizationFields: [],
          description: null,
          termsAndConditions: null,
        },
        personalizationImages: {
          personalizationLogo: null,
        },
      },
      googlePay: {
        walletClass: {
          issuerName: '{{issuerName}}',
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
          linksModuleData: {
            uris: [],
          },
          countryCode: null,
          heroImage: {
            sourceUri: {
              uri: null,
            },
          },
          hexBackgroundColor: '{{hexBackgroundColor}}',
          localizedIssuerName: {
            translatedValues: [],
            defaultValue: {
              language: 'en-US',
              value: null,
            },
          },
          multipleDevicesAndHoldersAllowedStatus: 'MULTIPLE_HOLDERS',
          securityAnimation: {
            animationType: 'ANIMATION_UNSPECIFIED',
          },
          viewUnlockRequirement: 'VIEW_UNLOCK_REQUIREMENT_UNSPECIFIED',
          merchantName: 'Merchant namesads',
          programLogo: {
            sourceUri: {
              uri: '{{programLogo}}',
            },
          },
          pinLabel: null,
          eventNumberLabel: null,
          allowBarcodeRedemption: false,
          localizedMerchantName: {
            translatedValues: [],
            defaultValue: {
              language: 'en-US',
              value: null,
            },
          },
          localizedPinLabel: {
            translatedValues: [],
            defaultValue: {
              language: 'en-US',
              value: null,
            },
          },
          localizedEventNumberLabel: {
            translatedValues: [],
            defaultValue: {
              language: 'en-US',
              value: null,
            },
          },
          cardNumberLabel: null,
          localizedCardNumberLabel: {
            translatedValues: [],
            defaultValue: {
              language: 'en-US',
              value: null,
            },
          },
        },
        walletObject: {
          disableExpirationNotification: false,
          messages: [],
          imageModulesData: [],
          textModulesData: [],
          linksModuleData: {
            uris: [],
          },
          appLinkData: {
            androidAppLinkInfo: {
              appLogoImage: {
                sourceUri: {
                  uri: null,
                },
              },
              title: {
                translatedValues: [],
                defaultValue: {
                  language: 'en-US',
                  value: null,
                },
              },
              description: {
                translatedValues: [],
                defaultValue: {
                  language: 'en-US',
                  value: null,
                },
              },
              appTarget: {
                targetUri: {
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
              },
            },
            iosAppLinkInfo: {
              appLogoImage: {
                sourceUri: {
                  uri: null,
                },
              },
              title: {
                translatedValues: [],
                defaultValue: {
                  language: 'en-US',
                  value: null,
                },
              },
              description: {
                translatedValues: [],
                defaultValue: {
                  language: 'en-US',
                  value: null,
                },
              },
              appTarget: {
                targetUri: {
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
              },
            },
            webAppLinkInfo: {
              appLogoImage: {
                sourceUri: {
                  uri: null,
                },
              },
              title: {
                translatedValues: [],
                defaultValue: {
                  language: 'en-US',
                  value: null,
                },
              },
              description: {
                translatedValues: [],
                defaultValue: {
                  language: 'en-US',
                  value: null,
                },
              },
              appTarget: {
                targetUri: {
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
              },
            },
          },
          heroImage: {
            sourceUri: {
              uri: '{{heroImage}}',
            },
          },
          groupingInfo: {
            sortIndex: null,
            groupingId: null,
          },
          passConstraints: {
            screenshotEligibility: 'SCREENSHOT_ELIGIBILITY_UNSPECIFIED',
            nfcConstraint: [],
          },
          cardNumber: '{{cardNumber}}',
          pin: '{{pin}}',
          balance: {
            micros: '{{balance}}',
            currencyCode: '{{currency}}',
          },
          balanceUpdateTime: {
            date: '{{balanceDateTime}}',
          },
          eventNumber: '123',
        },
      },
    },
    barcodeDesign: {
      format: 'qr',
      showAltText: false,
    },
    type: 'giftCard',
    passData: [
      {
        key: 'backgroundColor',
        type: 'color',
        default: '#FFFFFF',
        _id: '6a44e3d804d9108140aa90cc',
      },
      {
        key: 'foregroundColor',
        type: 'color',
        default: '#000000',
        _id: '6a44e3d804d9108140aa90cd',
      },
      {
        key: 'labelColor',
        type: 'color',
        default: '#000000',
        _id: '6a44e3d804d9108140aa90ce',
      },
      {
        key: 'icon',
        type: 'image',
        default: 'https://images.notifica.re/placeholder/58x58.png',
        _id: '6a44e3d804d9108140aa90cf',
      },
      {
        key: 'logo',
        type: 'image',
        default: 'https://images.notifica.re/placeholder/320x100.png',
        _id: '6a44e3d804d9108140aa90d0',
      },
      {
        key: 'thumbnail',
        type: 'image',
        default: 'https://images.notifica.re/placeholder/180x180.png',
        _id: '6a44e3d804d9108140aa90d1',
      },
      {
        key: 'heroImage',
        type: 'image',
        default:
          'https://push.notifica.re/upload/passbook/ba85caa4d851e6b2412338ec41a57e7b991b9c01d55baf2e8c6b33804afb5662/1b927fc38004d44659ef7c545d2f28dec1687587b5e780887eb102d7fdc0c24c',
        _id: '6a44e3d804d9108140aa90d2',
      },
      {
        key: 'cardNumber',
        type: 'string',
        default: '123456789',
        _id: '6a44e3d804d9108140aa90d3',
      },
      {
        key: 'balance',
        type: 'money',
        default: '0',
        _id: '6a44e3d804d9108140aa90d4',
      },
      {
        key: 'currency',
        type: 'string',
        default: 'EUR',
        _id: '6a44e3d804d9108140aa90d5',
      },
      {
        key: 'pin',
        type: 'string',
        default: 'N/A',
        _id: '6a44e3d804d9108140aa90d6',
      },
      {
        key: 'balanceDateTime',
        type: 'date',
        default: '2026-06-30T16:42:00.000Z',
        _id: '6a44e3d804d9108140aa90d7',
      },
    ],
    templateData: [
      {
        key: 'issuerName',
        type: 'string',
        value: 'My Company',
        _id: '6a44e3d804d9108140aa90c8',
      },
      {
        key: 'hexBackgroundColor',
        type: 'color',
        value: '#5294ff',
        _id: '6a44e3d804d9108140aa90c9',
      },
      {
        key: 'programLogo',
        type: 'image',
        value: 'https://images.notifica.re/placeholder/256x256.png',
        _id: '6a44e3d804d9108140aa90ca',
      },
      {
        key: 'wideProgramLogo',
        type: 'image',
        value: 'https://images.notifica.re/placeholder/1032x336.png',
        _id: '6a44e3d804d9108140aa90cb',
      },
    ],
  },
};

export const GIFT_CARD_WITH_WIDE_PROGRAM_LOGO: NotificarePassPreviewProps = {
  ...GIFT_CARD,
  passTemplate: {
    ...GIFT_CARD.passTemplate,
    templateDesign: {
      ...GIFT_CARD.passTemplate.templateDesign,
      googlePay: {
        ...GIFT_CARD.passTemplate.templateDesign.googlePay,
        walletClass: {
          ...GIFT_CARD.passTemplate.templateDesign.googlePay.walletClass,
          wideProgramLogo: {
            sourceUri: { uri: 'https://images.notifica.re/placeholder/1032x336.png' },
          },
        },
      },
    },
  },
};
