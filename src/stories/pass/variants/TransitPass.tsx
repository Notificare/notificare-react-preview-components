import { NotificarePassPreviewProps } from '~/components/NotificarePassPreview/NotificarePassPreview';

export const TRANSIT_PASS_WITH_SINGLE_LEG_ITINERARY: NotificarePassPreviewProps = {
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
          boardingPass: {
            transitType: 'PKTransitTypeTrain',
            headerFields: [],
            primaryFields: [
              {
                value: '{{from}}',
                key: 'from',
                label: '{{fromName}}',
                textAlignment: 'PKTextAlignmentCenter',
                changeMessage: null,
              },
              {
                value: '{{to}}',
                key: 'to',
                label: '{{toName}}',
                textAlignment: 'PKTextAlignmentCenter',
                changeMessage: null,
              },
            ],
            secondaryFields: [],
            auxiliaryFields: [],
            backFields: [],
          },
          semantics: {
            boardingGroup: null,
            boardingSequenceNumber: null,
            carNumber: null,
            confirmationNumber: null,
            currentArrivalDate: null,
            currentBoardingDate: null,
            currentDepartureDate: null,
            departureLocation: {
              latitude: null,
              longitude: null,
            },
            departureLocationDescription: null,
            departurePlatform: null,
            departureStationName: null,
            destinationLocation: {
              latitude: null,
              longitude: null,
            },
            destinationLocationDescription: null,
            destinationPlatform: null,
            destinationStationName: null,
            duration: null,
            membershipProgramName: null,
            membershipProgramNumber: null,
            originalArrivalDate: null,
            originalBoardingDate: null,
            originalDepartureDate: null,
            passengerName: {
              familyName: null,
              givenName: null,
              middleName: null,
              namePrefix: null,
              nameSuffix: null,
              nickname: null,
              phoneticRepresentation: null,
            },
            priorityStatus: null,
            seats: [],
            securityScreening: null,
            silenceRequested: null,
            totalPrice: {
              amount: null,
              currencyCode: null,
            },
            transitProvider: null,
            transitStatus: null,
            transitStatusReason: null,
            vehicleName: null,
            vehicleNumber: null,
            vehicleType: null,
            wifiAccess: [],
          },
        },
        images: {
          logo: '{{logo}}',
          icon: '{{icon}}',
          footer: '{{footer}}',
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
              defaultValue: {
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
          hexBackgroundColor: null,
          localizedIssuerName: {
            defaultValue: {
              value: null,
            },
          },
          multipleDevicesAndHoldersAllowedStatus: 'MULTIPLE_HOLDERS',
          securityAnimation: {
            animationType: 'ANIMATION_UNSPECIFIED',
          },
          viewUnlockRequirement: 'VIEW_UNLOCK_REQUIREMENT_UNSPECIFIED',
          transitOperatorName: {
            defaultValue: {
              value: 'Operator Name',
            },
          },
          logo: {
            sourceUri: {
              uri: '{{transitLogo}}',
            },
          },
          wideLogo: {
            sourceUri: {
              uri: '{{transitLogo}}',
            },
          },
          transitType: 'BUS',
          watermark: {
            sourceUri: {
              uri: null,
            },
          },
          languageOverride: null,
          customTransitTerminusNameLabel: {
            defaultValue: {
              value: null,
            },
          },
          customTicketNumberLabel: {
            defaultValue: {
              value: null,
            },
          },
          customRouteRestrictionsLabel: {
            defaultValue: {
              value: null,
            },
          },
          customRouteRestrictionsDetailsLabel: {
            defaultValue: {
              value: null,
            },
          },
          customTimeRestrictionsLabel: {
            defaultValue: {
              value: null,
            },
          },
          customOtherRestrictionsLabel: {
            defaultValue: {
              value: null,
            },
          },
          customPurchaseReceiptNumberLabel: {
            defaultValue: {
              value: null,
            },
          },
          customConfirmationCodeLabel: {
            defaultValue: {
              value: null,
            },
          },
          customPurchaseFaceValueLabel: {
            defaultValue: {
              value: null,
            },
          },
          customPurchasePriceLabel: {
            defaultValue: {
              value: null,
            },
          },
          customDiscountMessageLabel: {
            defaultValue: {
              value: null,
            },
          },
          customCarriageLabel: {
            defaultValue: {
              value: null,
            },
          },
          customSeatLabel: {
            defaultValue: {
              value: null,
            },
          },
          customCoachLabel: {
            defaultValue: {
              value: null,
            },
          },
          customPlatformLabel: {
            defaultValue: {
              value: null,
            },
          },
          customZoneLabel: {
            defaultValue: {
              value: null,
            },
          },
          customFareClassLabel: {
            defaultValue: {
              value: null,
            },
          },
          customConcessionCategoryLabel: {
            defaultValue: {
              value: null,
            },
          },
          customFareNameLabel: {
            defaultValue: {
              value: null,
            },
          },
          enableSingleLegItinerary: true,
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
                defaultValue: {
                  value: null,
                },
              },
              description: {
                defaultValue: {
                  value: null,
                },
              },
              appTarget: {
                targetUri: {
                  uri: null,
                  description: null,
                  localizedDescription: {
                    defaultValue: {
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
                defaultValue: {
                  value: null,
                },
              },
              description: {
                defaultValue: {
                  value: null,
                },
              },
              appTarget: {
                targetUri: {
                  uri: null,
                  description: null,
                  localizedDescription: {
                    defaultValue: {
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
                defaultValue: {
                  value: null,
                },
              },
              description: {
                defaultValue: {
                  value: null,
                },
              },
              appTarget: {
                targetUri: {
                  uri: null,
                  description: null,
                  localizedDescription: {
                    defaultValue: {
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
          ticketNumber: '10',
          passengerNames: 'Jane Doe',
          tripId: '25',
          ticketStatus: 'REFUNDED',
          customTicketStatus: {
            defaultValue: {
              value: null,
            },
          },
          concessionCategory: 'SENIOR',
          customConcessionCategory: {
            defaultValue: {
              value: null,
            },
          },
          ticketRestrictions: {
            routeRestrictions: {
              defaultValue: {
                value: 'Route Restrictions',
              },
            },
            routeRestrictionsDetails: {
              defaultValue: {
                value: 'Route Restrictions Details',
              },
            },
            timeRestrictions: {
              defaultValue: {
                value: 'Time Restrictions',
              },
            },
            otherRestrictions: {
              defaultValue: {
                value: 'Other Restrictions',
              },
            },
          },
          purchaseDetails: {
            purchaseReceiptNumber: '1738',
            purchaseDateTime: '2026-07-02T13:00:00Z',
            accountId: '900',
            confirmationCode: '541',
            ticketCost: {
              faceValue: {
                currencyCode: 'USD',
                micros: '10',
              },
              purchasePrice: {
                currencyCode: 'USD',
                micros: '8',
              },
              discountMessage: {
                defaultValue: {
                  value: 'Some Discount Message',
                },
              },
            },
          },
          ticketLeg: {
            originStationCode: '{{from}}',
            destinationStationCode: '{{to}}',
            originName: {
              defaultValue: {
                value: '{{fromName}}',
              },
            },
            destinationName: {
              defaultValue: {
                value: '{{toName}}',
              },
            },
            departureDateTime: '2026-07-07T18:12:00Z',
            arrivalDateTime: '2026-07-07T20:12:20Z',
            fareName: {
              defaultValue: {
                value: '{{fareName}}',
              },
            },
            carriage: 'Carriage',
            platform: 'Platform',
            zone: 'Zone',
            ticketSeats: [
              {
                fareClass: 'FIRST',
                customFareClass: {
                  defaultValue: {
                    value: null,
                  },
                },
                coach: 'Coach 10',
                seat: 'Seat ABC',
                seatAssignment: {
                  defaultValue: {
                    value: null,
                  },
                },
              },
            ],
            transitOperatorName: {
              defaultValue: {
                value: 'Transit Operator Name',
              },
            },
          },
          ticketLegs: [],
          hexBackgroundColor: '{{backgroundColor}}',
          tripType: 'ONE_WAY',
          passengerType: 'SINGLE_PASSENGER',
        },
      },
    },
    barcodeDesign: {
      format: 'none',
      showAltText: false,
    },
    type: 'transit',
    passData: [
      {
        key: 'backgroundColor',
        type: 'color',
        default: '#FFFFFF',
        _id: '6a4f73365b32fe76df2ec844',
      },
      {
        key: 'foregroundColor',
        type: 'color',
        default: '#000000',
        _id: '6a4f73365b32fe76df2ec845',
      },
      {
        key: 'labelColor',
        type: 'color',
        default: '#000000',
        _id: '6a4f73365b32fe76df2ec846',
      },
      {
        key: 'icon',
        type: 'image',
        default: 'https://images.notifica.re/placeholder/58x58.png',
        _id: '6a4f73365b32fe76df2ec847',
      },
      {
        key: 'logo',
        type: 'image',
        default: 'https://images.notifica.re/placeholder/320x100.png',
        _id: '6a4f73365b32fe76df2ec848',
      },
      {
        key: 'footer',
        type: 'image',
        default: 'https://images.notifica.re/placeholder/572x30.png',
        _id: '6a4f73365b32fe76df2ec849',
      },
      {
        key: 'heroImage',
        type: 'image',
        default:
          'https://push.notifica.re/upload/passbook/ba85caa4d851e6b2412338ec41a57e7b991b9c01d55baf2e8c6b33804afb5662/dd82a5863c2e47b8a830f9da76798f758b1f5956837c1a07f86fa785702910c6',
        _id: '6a4f73365b32fe76df2ec84a',
      },
      {
        key: 'from',
        type: 'string',
        default: 'AMSSS',
        _id: '6a4f73365b32fe76df2ec84b',
      },
      {
        key: 'to',
        type: 'string',
        default: 'RDMmma',
        _id: '6a4f73365b32fe76df2ec84c',
      },
      {
        key: 'fromName',
        type: 'string',
        default: 'Amsterdam',
        _id: '6a4f73365b32fe76df2ec84d',
      },
      {
        key: 'toName',
        type: 'string',
        default: 'Rotterdam',
        _id: '6a4f73365b32fe76df2ec84e',
      },
      {
        key: 'fareName',
        type: 'string',
        default: 'Anytime',
        _id: '6a4f73365b32fe76df2ec84f',
      },
    ],
    templateData: [
      {
        key: 'issuerName',
        type: 'string',
        value: 'My Company',
        _id: '6a4e5f341444ea45df41392e',
      },
      {
        key: 'transitLogo',
        type: 'image',
        value: 'https://images.notifica.re/placeholder/512x512.png',
        _id: '6a4e5f341444ea45df41392f',
      },
    ],
  },
  pass: {
    barcode: '8ed7c809-f4ab-49f9-93e2-f77a79008828',
    data: {
      fields: {
        backgroundColor: '#912b2b',
        foregroundColor: null,
        labelColor: null,
        icon: null,
        logo: null,
        footer: null,
        heroImage: null,
        from: null,
        to: null,
        fromName: null,
        toName: null,
        fareName: null,
      },
    },
  },
};

export const TRANSIT_PASS_WITH_MULTIPLE_LEG_ITINERARY: NotificarePassPreviewProps = {
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
          boardingPass: {
            transitType: 'PKTransitTypeTrain',
            headerFields: [],
            primaryFields: [
              {
                value: '{{from}}',
                key: 'from',
                label: '{{fromName}}',
                textAlignment: 'PKTextAlignmentCenter',
                changeMessage: null,
              },
              {
                value: '{{to}}',
                key: 'to',
                label: '{{toName}}',
                textAlignment: 'PKTextAlignmentCenter',
                changeMessage: null,
              },
            ],
            secondaryFields: [],
            auxiliaryFields: [],
            backFields: [],
          },
          semantics: {
            boardingGroup: null,
            boardingSequenceNumber: null,
            carNumber: null,
            confirmationNumber: null,
            currentArrivalDate: null,
            currentBoardingDate: null,
            currentDepartureDate: null,
            departureLocation: {
              latitude: null,
              longitude: null,
            },
            departureLocationDescription: null,
            departurePlatform: null,
            departureStationName: null,
            destinationLocation: {
              latitude: null,
              longitude: null,
            },
            destinationLocationDescription: null,
            destinationPlatform: null,
            destinationStationName: null,
            duration: null,
            membershipProgramName: null,
            membershipProgramNumber: null,
            originalArrivalDate: null,
            originalBoardingDate: null,
            originalDepartureDate: null,
            passengerName: {
              familyName: null,
              givenName: null,
              middleName: null,
              namePrefix: null,
              nameSuffix: null,
              nickname: null,
              phoneticRepresentation: null,
            },
            priorityStatus: null,
            seats: [],
            securityScreening: null,
            silenceRequested: null,
            totalPrice: {
              amount: null,
              currencyCode: null,
            },
            transitProvider: null,
            transitStatus: null,
            transitStatusReason: null,
            vehicleName: null,
            vehicleNumber: null,
            vehicleType: null,
            wifiAccess: [],
          },
        },
        images: {
          logo: '{{logo}}',
          icon: '{{icon}}',
          footer: '{{footer}}',
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
              defaultValue: {
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
          hexBackgroundColor: null,
          localizedIssuerName: {
            defaultValue: {
              value: null,
            },
          },
          multipleDevicesAndHoldersAllowedStatus: 'MULTIPLE_HOLDERS',
          securityAnimation: {
            animationType: 'ANIMATION_UNSPECIFIED',
          },
          viewUnlockRequirement: 'VIEW_UNLOCK_REQUIREMENT_UNSPECIFIED',
          transitOperatorName: {
            defaultValue: {
              value: 'CP',
            },
          },
          logo: {
            sourceUri: {
              uri: '{{transitLogo}}',
            },
          },
          wideLogo: {
            sourceUri: {
              uri: null,
            },
          },
          transitType: 'BUS',
          watermark: {
            sourceUri: {
              uri: null,
            },
          },
          languageOverride: null,
          customTransitTerminusNameLabel: {
            defaultValue: {
              value: null,
            },
          },
          customTicketNumberLabel: {
            defaultValue: {
              value: null,
            },
          },
          customRouteRestrictionsLabel: {
            defaultValue: {
              value: null,
            },
          },
          customRouteRestrictionsDetailsLabel: {
            defaultValue: {
              value: null,
            },
          },
          customTimeRestrictionsLabel: {
            defaultValue: {
              value: null,
            },
          },
          customOtherRestrictionsLabel: {
            defaultValue: {
              value: null,
            },
          },
          customPurchaseReceiptNumberLabel: {
            defaultValue: {
              value: null,
            },
          },
          customConfirmationCodeLabel: {
            defaultValue: {
              value: null,
            },
          },
          customPurchaseFaceValueLabel: {
            defaultValue: {
              value: null,
            },
          },
          customPurchasePriceLabel: {
            defaultValue: {
              value: null,
            },
          },
          customDiscountMessageLabel: {
            defaultValue: {
              value: null,
            },
          },
          customCarriageLabel: {
            defaultValue: {
              value: null,
            },
          },
          customSeatLabel: {
            defaultValue: {
              value: null,
            },
          },
          customCoachLabel: {
            defaultValue: {
              value: null,
            },
          },
          customPlatformLabel: {
            defaultValue: {
              value: null,
            },
          },
          customZoneLabel: {
            defaultValue: {
              value: null,
            },
          },
          customFareClassLabel: {
            defaultValue: {
              value: null,
            },
          },
          customConcessionCategoryLabel: {
            defaultValue: {
              value: null,
            },
          },
          customFareNameLabel: {
            defaultValue: {
              value: null,
            },
          },
          enableSingleLegItinerary: false,
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
                defaultValue: {
                  value: null,
                },
              },
              description: {
                defaultValue: {
                  value: null,
                },
              },
              appTarget: {
                targetUri: {
                  uri: null,
                  description: null,
                  localizedDescription: {
                    defaultValue: {
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
                defaultValue: {
                  value: null,
                },
              },
              description: {
                defaultValue: {
                  value: null,
                },
              },
              appTarget: {
                targetUri: {
                  uri: null,
                  description: null,
                  localizedDescription: {
                    defaultValue: {
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
                defaultValue: {
                  value: null,
                },
              },
              description: {
                defaultValue: {
                  value: null,
                },
              },
              appTarget: {
                targetUri: {
                  uri: null,
                  description: null,
                  localizedDescription: {
                    defaultValue: {
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
          ticketNumber: '123',
          passengerType: 'MULTIPLE_PASSENGERS',
          passengerNames: 'John Doe, Andrew',
          tripId: null,
          ticketStatus: 'EXCHANGED',
          customTicketStatus: {
            defaultValue: {
              value: null,
            },
          },
          customConcessionCategory: {
            defaultValue: {
              value: null,
            },
          },
          ticketRestrictions: {
            routeRestrictions: {
              defaultValue: {
                value: 'Route Restrictions',
              },
            },
            routeRestrictionsDetails: {
              defaultValue: {
                value: 'Route Restrictions Details',
              },
            },
            timeRestrictions: {
              defaultValue: {
                value: 'Time Restrictions',
              },
            },
            otherRestrictions: {
              defaultValue: {
                value: 'Other Restrictions',
              },
            },
          },
          purchaseDetails: {
            purchaseReceiptNumber: '199',
            purchaseDateTime: '2026-07-05T15:10:00Z',
            accountId: '50',
            confirmationCode: '123',
            ticketCost: {
              faceValue: {
                currencyCode: 'EUR',
                micros: '16',
              },
              purchasePrice: {
                currencyCode: 'EUR',
                micros: '20',
              },
              discountMessage: {
                defaultValue: {
                  value: '20% discount was applied!',
                },
              },
            },
          },
          ticketLeg: null,
          ticketLegs: [
            {
              originStationCode: '{{from}}',
              destinationStationCode: '{{to}}',
              originName: {
                defaultValue: {
                  value: '{{fromName}}',
                },
              },
              destinationName: {
                defaultValue: {
                  value: '{{toName}}',
                },
              },
              departureDateTime: '2026-07-12T18:12:00Z',
              arrivalDateTime: '2026-07-12T20:12:00Z',
              fareName: {
                defaultValue: {
                  value: null,
                },
              },
              carriage: null,
              platform: null,
              zone: null,
              ticketSeats: [
                {
                  fareClass: 'FIRST',
                  customFareClass: {
                    defaultValue: {
                      value: null,
                    },
                  },
                  coach: 'coach',
                  seat: 'L0',
                  seatAssignment: {
                    defaultValue: {
                      value: 'seat assignment',
                    },
                  },
                },
                {
                  fareClass: 'ECONOMY',
                  customFareClass: {
                    defaultValue: {
                      value: null,
                    },
                  },
                  coach: 'L',
                  seat: 'L1',
                  seatAssignment: {
                    defaultValue: {
                      value: null,
                    },
                  },
                },
              ],
              transitOperatorName: {
                defaultValue: {
                  value: null,
                },
              },
            },
            {
              originStationCode: '{{from}}',
              destinationStationCode: '{{to}}',
              originName: {
                defaultValue: {
                  value: 'Porto',
                },
              },
              destinationName: {
                defaultValue: {
                  value: 'Lisbon',
                },
              },
              departureDateTime: '2026-07-13T21:12:00Z',
              arrivalDateTime: '2026-07-13T23:10:00Z',
              fareName: {
                defaultValue: {
                  value: '{{fareName}}',
                },
              },
              carriage: 'Carriage',
              platform: null,
              zone: 'Zone',
              ticketSeats: [
                {
                  fareClass: 'FIRST',
                  customFareClass: {
                    defaultValue: {
                      value: null,
                    },
                  },
                  coach: 'UNIR',
                  seat: '3B',
                  seatAssignment: {
                    defaultValue: {
                      value: 'seat assignment',
                    },
                  },
                },
                {
                  fareClass: 'ECONOMY',
                  coach: 'UNIR 2',
                  seat: '33A',
                  seatAssignment: {
                    defaultValue: {
                      value: 'seat assignment 2',
                    },
                  },
                },
              ],
              transitOperatorName: {
                defaultValue: {
                  value: 'Transit Operator',
                },
              },
            },
            {
              originStationCode: null,
              destinationStationCode: null,
              originName: {
                defaultValue: {
                  value: 'Setúbal',
                },
              },
              destinationName: {
                defaultValue: {
                  value: 'Faro',
                },
              },
              departureDateTime: '2026-07-15T18:12:00Z',
              arrivalDateTime: '2026-07-15T21:12:00Z',
              fareName: {
                defaultValue: {
                  value: 'Rede Expresso',
                },
              },
              carriage: 'Some Carriage',
              platform: 'Some Platform',
              zone: 'Some Zone',
              ticketSeats: [],
              transitOperatorName: {
                defaultValue: {
                  value: 'Setúbal Operators',
                },
              },
            },
          ],
          hexBackgroundColor: '{{backgroundColor}}',
          tripType: 'ROUND_TRIP',
          concessionCategory: 'ADULT',
        },
      },
    },
    barcodeDesign: {
      format: 'pdf417',
      showAltText: true,
    },
    type: 'transit',
    passData: [
      {
        key: 'backgroundColor',
        type: 'color',
        default: '#FFFFFF',
        _id: '6a4e5df804d9108140bd1f75',
      },
      {
        key: 'foregroundColor',
        type: 'color',
        default: '#000000',
        _id: '6a4e5df804d9108140bd1f76',
      },
      {
        key: 'labelColor',
        type: 'color',
        default: '#000000',
        _id: '6a4e5df804d9108140bd1f77',
      },
      {
        key: 'icon',
        type: 'image',
        default: 'https://images.notifica.re/placeholder/58x58.png',
        _id: '6a4e5df804d9108140bd1f78',
      },
      {
        key: 'logo',
        type: 'image',
        default: 'https://images.notifica.re/placeholder/320x100.png',
        _id: '6a4e5df804d9108140bd1f79',
      },
      {
        key: 'footer',
        type: 'image',
        default: 'https://images.notifica.re/placeholder/572x30.png',
        _id: '6a4e5df804d9108140bd1f7a',
      },
      {
        key: 'heroImage',
        type: 'image',
        default:
          'https://push.notifica.re/upload/passbook/ba85caa4d851e6b2412338ec41a57e7b991b9c01d55baf2e8c6b33804afb5662/f5e1e372f32039dda332eebc4049907d3728fac525fb20959b70109d1906f245',
        _id: '6a4e5df804d9108140bd1f7b',
      },
      {
        key: 'from',
        type: 'string',
        default: 'AMS',
        _id: '6a4e5df804d9108140bd1f7c',
      },
      {
        key: 'to',
        type: 'string',
        default: 'RDM',
        _id: '6a4e5df804d9108140bd1f7d',
      },
      {
        key: 'fromName',
        type: 'string',
        default: 'Amsterdam',
        _id: '6a4e5df804d9108140bd1f7e',
      },
      {
        key: 'toName',
        type: 'string',
        default: 'Rotterdam',
        _id: '6a4e5df804d9108140bd1f7f',
      },
      {
        key: 'fareName',
        type: 'string',
        default: 'Anytime',
        _id: '6a4e5df804d9108140bd1f80',
      },
    ],
    templateData: [
      {
        key: 'issuerName',
        type: 'string',
        value: 'My Company',
        _id: '6a4d1ff7e3bf24e2f0022daa',
      },
      {
        key: 'transitLogo',
        type: 'image',
        value: 'https://images.notifica.re/placeholder/512x512.png',
        _id: '6a4d1ff7e3bf24e2f0022dab',
      },
    ],
  },
  pass: {
    barcode: 'b49fd4f5-ebd8-49fa-ba25-b9cafe5363e9',
    data: {
      fields: {
        backgroundColor: '#7e3030',
        foregroundColor: '#ffffff',
        labelColor: '#ffffff',
        icon: null,
        logo: null,
        footer: null,
        heroImage: null,
        from: null,
        to: null,
        fromName: null,
        toName: null,
        fareName: null,
      },
    },
  },
};
