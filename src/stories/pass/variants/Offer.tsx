import { NotificarePassPreviewProps } from '~/components/NotificarePassPreview/NotificarePassPreview';

export const OFFER: NotificarePassPreviewProps = {
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
          coupon: {
            headerFields: [],
            primaryFields: [
              {
                value: '{{title}}',
                key: 'offer',
                label: '',
                textAlignment: 'PKTextAlignmentLeft',
                changeMessage: null,
              },
            ],
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
          strip: '{{strip}}',
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
          title: '{{title}}',
          redemptionChannel: 'BOTH',
          provider: '{{issuerName}}',
          titleImage: {
            sourceUri: {
              uri: '{{titleImage}}',
            },
          },
          wideTitleImage: {
            sourceUri: {
              uri: null,
            },
          },
          details: null,
          finePrint: null,
          helpUri: {
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
          localizedTitle: {
            translatedValues: [],
            defaultValue: {
              language: 'en-US',
              value: null,
            },
          },
          localizedProvider: {
            translatedValues: [],
            defaultValue: {
              language: 'en-US',
              value: null,
            },
          },
          localizedDetails: {
            translatedValues: [],
            defaultValue: {
              language: 'en-US',
              value: null,
            },
          },
          localizedFinePrint: {
            translatedValues: [],
            defaultValue: {
              language: 'en-US',
              value: null,
            },
          },
          shortTitle: null,
          localizedShortTitle: {
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
        },
      },
    },
    barcodeDesign: {
      format: 'none',
      showAltText: false,
    },
    type: 'offer',
    passData: [
      {
        key: 'backgroundColor',
        type: 'color',
        default: '#FFFFFF',
        _id: '6a31680d3ee58fa140ea9bb3',
      },
      {
        key: 'foregroundColor',
        type: 'color',
        default: '#000000',
        _id: '6a31680d3ee58fa140ea9bb4',
      },
      {
        key: 'labelColor',
        type: 'color',
        default: '#000000',
        _id: '6a31680d3ee58fa140ea9bb5',
      },
      {
        key: 'icon',
        type: 'image',
        default: 'https://images.notifica.re/placeholder/58x58.png',
        _id: '6a31680d3ee58fa140ea9bb6',
      },
      {
        key: 'logo',
        type: 'image',
        default: 'https://images.notifica.re/placeholder/320x100.png',
        _id: '6a31680d3ee58fa140ea9bb7',
      },
      {
        key: 'strip',
        type: 'image',
        default: 'https://images.notifica.re/placeholder/750x246.png',
        _id: '6a31680d3ee58fa140ea9bb8',
      },
      {
        key: 'heroImage',
        type: 'image',
        default: 'https://images.notifica.re/placeholder/1032x336.png',
        _id: '6a31680d3ee58fa140ea9bb9',
      },
    ],
    templateData: [
      {
        key: 'issuerName',
        type: 'string',
        value: 'My Company',
        _id: '6a31680d3ee58fa140ea9bba',
      },
      {
        key: 'hexBackgroundColor',
        type: 'color',
        value: '#cc2a2a',
        _id: '6a31680d3ee58fa140ea9bbb',
      },
      {
        key: 'title',
        type: 'string',
        value: '20% off',
        _id: '6a31680d3ee58fa140ea9bbc',
      },
      {
        key: 'titleImage',
        type: 'image',
        value: 'https://images.notifica.re/placeholder/256x256.png',
        _id: '6a31680d3ee58fa140ea9bbd',
      },
    ],
  },
};

export const OFFER_WITH_WIDE_TITLE_IMAGE: NotificarePassPreviewProps = {
  ...OFFER,
  passTemplate: {
    ...OFFER.passTemplate,
    templateDesign: {
      ...OFFER.passTemplate.templateDesign,
      googlePay: {
        ...OFFER.passTemplate.templateDesign.googlePay,
        walletClass: {
          ...OFFER.passTemplate.templateDesign.googlePay.walletClass,
          wideTitleImage: {
            sourceUri: { uri: 'https://images.notifica.re/placeholder/1032x336.png' },
          },
        },
      },
    },
  },
};
