import { NotificarePassPreviewProps } from '~/components/NotificarePassPreview/NotificarePassPreview';

export const EVENT_TICKET: NotificarePassPreviewProps = {
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
          eventTicket: {
            headerFields: [
              {
                key: 'startDate',
                label: 'Starts',
                value: '{{startDate}}',
                textAlignment: 'PKTextAlignmentLeft',
                dateStyle: 'PKDateStyleNone',
                ignoresTimeZone: false,
                isRelative: false,
                timeStyle: 'PKDateStyleShort',
                changeMessage: null,
              },
            ],
            primaryFields: [
              {
                value: '{{eventName}}',
                key: 'eventName',
                label: 'Event',
                textAlignment: 'PKTextAlignmentLeft',
                changeMessage: null,
              },
            ],
            secondaryFields: [
              {
                key: 'name',
                label: 'Name',
                value: '{{ticketHolderName}}',
                textAlignment: 'PKTextAlignmentCenter',
                changeMessage: null,
              },
              {
                key: 'ticketNumber',
                label: 'Ticket Nr.',
                value: '{{ticketNumber}}',
                textAlignment: 'PKTextAlignmentCenter',
                changeMessage: null,
              },
            ],
            auxiliaryFields: [],
            backFields: [
              {
                key: 'doorsOpen',
                label: 'Seat',
                value: '{{seat}}',
                textAlignment: 'PKTextAlignmentLeft',
                changeMessage: null,
                attributedValue: null,
                dataDetectorTypes: [],
              },
              {
                key: 'row',
                label: 'Row',
                value: '{{row}}',
                textAlignment: 'PKTextAlignmentLeft',
                changeMessage: null,
                attributedValue: null,
                dataDetectorTypes: [],
              },
            ],
          },
          semantics: {
            artistIDs: [],
            awayTeamAbbreviation: null,
            awayTeamLocation: null,
            awayTeamName: null,
            duration: null,
            eventEndDate: null,
            eventName: '{{eventName}}',
            eventStartDate: null,
            eventType: 'PKEventTypeLivePerformance',
            genre: null,
            homeTeamAbbreviation: null,
            homeTeamLocation: null,
            homeTeamName: null,
            leagueAbbreviation: null,
            leagueName: null,
            performerNames: ['Martin Garrix'],
            seats: [],
            silenceRequested: null,
            sportName: null,
            totalPrice: {
              amount: '{{ticketValue}}',
              currencyCode: '{{currencyCode}}',
            },
            venueEntrance: null,
            venueLocation: {
              latitude: null,
              longitude: null,
            },
            venueName: '{{venueName}}',
            venuePhoneNumber: null,
            venueRoom: null,
            wifiAccess: [],
          },
        },
        images: {
          icon: '{{eventLogo}}',
          logo: '{{logo}}',
          thumbnail: null,
          strip: '{{strip}}',
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
          hexBackgroundColor: null,
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
          eventName: {
            defaultValue: {
              value: '{{eventName}}',
            },
          },
          eventId: '{{eventId}}',
          logo: {
            sourceUri: {
              uri: '{{eventLogo}}',
            },
          },
          venue: {
            name: {
              defaultValue: {
                value: '{{venueName}}',
              },
            },
            address: {
              defaultValue: {
                value: '{{venueAddress}}',
              },
            },
          },
          dateTime: {
            doorsOpen: '{{doorsOpen}}',
            start: '{{startDate}}',
            end: '{{endDate}}',
            doorsOpenLabel: 'DOORS_OPEN',
            customDoorsOpenLabel: {
              defaultValue: {
                value: null,
              },
            },
          },
          customConfirmationCodeLabel: {
            defaultValue: {
              value: null,
            },
          },
          seatLabel: 'SEAT',
          customSeatLabel: {
            defaultValue: {},
          },
          rowLabel: 'ROW',
          customRowLabel: {
            defaultValue: {
              value: null,
            },
          },
          sectionLabel: 'SECTION',
          customSectionLabel: {
            defaultValue: {
              value: null,
            },
          },
          gateLabel: 'GATE',
          customGateLabel: {
            defaultValue: {},
          },
          finePrint: {
            defaultValue: {
              value: '{{finePrint}}',
            },
          },
          confirmationCodeLabel: 'CONFIRMATION_CODE',
        },
        walletObject: {
          disableExpirationNotification: false,
          messages: [
            {
              header: 'Feel the Energy',
              body: 'Get ready for an unforgettable night of world-class electronic music, breathtaking visuals, and an electric atmosphere. Join thousands of fans for an incredible live experience featuring top DJs, immersive production, and nonstop energy from start to finish.',
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
              header: 'Important',
              body: 'Please arrive at least 30 minutes before the event starts to ensure a smooth entry. This is an 18+ event. A valid photo ID is required for entry. Cashless payments are available at all bars and merchandise stands. Free water refill stations will be available throughout the venue. Re-entry is not permitted once you leave the venue.',
            },
          ],
          linksModuleData: {
            uris: [
              {
                uri: 'https://www.bayfrontparkmiami.com/',
                description: 'Bayfront Park',
              },
            ],
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
          seatInfo: {
            seat: {
              defaultValue: {
                value: '{{seat}}',
              },
            },
            row: {
              defaultValue: {
                value: '{{row}}',
              },
            },
            section: {
              defaultValue: {
                value: '{{section}}',
              },
            },
            gate: {
              defaultValue: {
                value: '{{gate}}',
              },
            },
          },
          reservationInfo: {
            confirmationCode: '{{confirmationCode}}',
          },
          ticketHolderName: '{{ticketHolderName}}',
          ticketType: {
            defaultValue: {
              value: '{{ticketType}}',
            },
          },
          faceValue: {
            micros: '{{ticketValue}}',
            currencyCode: '{{currencyCode}}',
          },
          linkedOfferIds: [],
          hexBackgroundColor: '{{backgroundColor}}',
          ticketNumber: '{{ticketNumber}}',
        },
      },
    },
    barcodeDesign: {
      format: 'code128',
      showAltText: true,
    },
    type: 'eventTicket',
    passData: [
      {
        key: 'backgroundColor',
        type: 'color',
        default: '#7968a6',
        _id: '6a4bbc503ee58fa1402f9c42',
      },
      {
        key: 'foregroundColor',
        type: 'color',
        default: '#000000',
        _id: '6a4bbc503ee58fa1402f9c43',
      },
      {
        key: 'labelColor',
        type: 'color',
        default: '#000000',
        _id: '6a4bbc503ee58fa1402f9c44',
      },
      {
        key: 'icon',
        type: 'image',
        default: 'https://images.notifica.re/placeholder/58x58.png',
        _id: '6a4bbc503ee58fa1402f9c45',
      },
      {
        key: 'logo',
        type: 'image',
        default:
          'https://push.notifica.re/upload/passbook/ba85caa4d851e6b2412338ec41a57e7b991b9c01d55baf2e8c6b33804afb5662/cf0c18b39ff1447d1d9c9998526a2f7e62795b7ec337fe709e69176b12d8190e',
        _id: '6a4bbc503ee58fa1402f9c46',
      },
      {
        key: 'strip',
        type: 'image',
        default:
          'https://push.notifica.re/upload/passbook/ba85caa4d851e6b2412338ec41a57e7b991b9c01d55baf2e8c6b33804afb5662/c631a495183fd751ca74a19cf2c2e639ef4ee24890a08f16beb10daad898c5b1',
        _id: '6a4bbc503ee58fa1402f9c47',
      },
      {
        key: 'heroImage',
        type: 'image',
        default:
          'https://push.notifica.re/upload/passbook/ba85caa4d851e6b2412338ec41a57e7b991b9c01d55baf2e8c6b33804afb5662/a07cb339d92cf57244ba3f1c8821589a5c0fdd2eed0619c2b5e42374aadee695',
        _id: '6a4bbc503ee58fa1402f9c48',
      },
      {
        key: 'ticketHolderName',
        type: 'string',
        default: 'N/A',
        _id: '6a4bbc503ee58fa1402f9c49',
      },
      {
        key: 'ticketNumber',
        type: 'string',
        default: 'N/A',
        _id: '6a4bbc503ee58fa1402f9c4a',
      },
      {
        key: 'ticketType',
        type: 'string',
        default: 'Adult',
        _id: '6a4bbc503ee58fa1402f9c4b',
      },
      {
        key: 'confirmationCode',
        type: 'string',
        default: 'N/A',
        _id: '6a4bbc503ee58fa1402f9c4c',
      },
      {
        key: 'currencyCode',
        type: 'string',
        default: 'USD',
        _id: '6a4bbc503ee58fa1402f9c4d',
      },
      {
        key: 'ticketValue',
        type: 'string',
        default: '80',
        _id: '6a4bbc503ee58fa1402f9c4e',
      },
      {
        key: 'gate',
        type: 'string',
        default: 'N/A',
        _id: '6a4bbc503ee58fa1402f9c4f',
      },
      {
        key: 'section',
        type: 'string',
        default: 'N/A',
        _id: '6a4bbc503ee58fa1402f9c50',
      },
      {
        key: 'row',
        type: 'string',
        default: 'N/A',
        _id: '6a4bbc503ee58fa1402f9c51',
      },
      {
        key: 'seat',
        type: 'string',
        default: 'N/A',
        _id: '6a4bbc503ee58fa1402f9c52',
      },
    ],
    templateData: [
      {
        key: 'issuerName',
        type: 'string',
        value: 'Pulse Entertainment',
        _id: '6a4b955bb8e7231fc84bd88e',
      },
      {
        key: 'eventName',
        type: 'string',
        value: 'Martin Garrix',
        _id: '6a4b955bb8e7231fc84bd88f',
      },
      {
        key: 'eventLogo',
        type: 'image',
        value:
          'https://push.notifica.re/upload/passbook/ba85caa4d851e6b2412338ec41a57e7b991b9c01d55baf2e8c6b33804afb5662/e178d0638bab46072b1596a4ff6914f6fc28dd288292cc03aced6dcfb1d8024f',
        _id: '6a4b955bb8e7231fc84bd890',
      },
      {
        key: 'wideLogo',
        type: 'image',
        value: 'https://images.notifica.re/placeholder/1032x336.png',
        _id: '6a4b955bb8e7231fc84bd891',
      },
      {
        key: 'startDate',
        type: 'date',
        value: '2026-07-23T15:00:00.000Z',
        _id: '6a4b955bb8e7231fc84bd892',
      },
      {
        key: 'endDate',
        type: 'date',
        value: '2026-07-24T00:00:00.000Z',
        _id: '6a4b955bb8e7231fc84bd893',
      },
      {
        key: 'doorsOpen',
        type: 'date',
        value: '2026-07-23T12:00:00.000Z',
        _id: '6a4b955bb8e7231fc84bd894',
      },
      {
        key: 'eventId',
        type: 'string',
        value: '293116',
        _id: '6a4b955bb8e7231fc84bd895',
      },
      {
        key: 'finePrint',
        type: 'string',
        value:
          'By purchasing or using a ticket for this event, you agree to the following:  A valid ticket is required for entry. The organizer reserves the right to refuse entry or remove anyone behaving in a disruptive, unsafe, or illegal manner. Tickets are valid only for the specified date and venue and are non-refundable unless the event is cancelled. The event schedule, lineup, or other details may change without prior notice. Dangerous items, illegal substances, and weapons are strictly prohibited. Attendees are responsible for their personal belongings. The organizer is not liable for any lost, stolen, or damaged items. By attending the event, you consent to being photographed or recorded for promotional purposes. All attendees must follow the instructions of event staff and security at all times.',
        _id: '6a4b955bb8e7231fc84bd896',
      },
      {
        key: 'venueName',
        type: 'string',
        value: 'Bayfront Park',
        _id: '6a4b955bb8e7231fc84bd897',
      },
      {
        key: 'venueAddress',
        type: 'string',
        value: '301 Biscayne Blvd, Miami, FL 33132, United States',
        _id: '6a4b955bb8e7231fc84bd898',
      },
    ],
  },
  pass: {
    barcode: 'c51da6e9-d1f5-41cd-b4d6-9224ea71f7f2',
    data: {
      fields: {
        backgroundColor: '#705190',
        foregroundColor: null,
        labelColor: null,
        icon: null,
        logo: null,
        strip: null,
        heroImage: null,
        ticketHolderName: 'John Doe',
        ticketNumber: '123',
        ticketType: 'Adult',
        confirmationCode: '822',
        currencyCode: null,
        ticketValue: null,
        gate: 'B',
        section: 'H',
        row: '5',
        seat: '23',
      },
    },
  },
};

export const EVENT_TICKET_WITH_WIDE_LOGO: NotificarePassPreviewProps = {
  ...EVENT_TICKET,
  passTemplate: {
    ...EVENT_TICKET.passTemplate,
    templateDesign: {
      ...EVENT_TICKET.passTemplate.templateDesign,
      googlePay: {
        ...EVENT_TICKET.passTemplate.templateDesign.googlePay,
        walletClass: {
          ...EVENT_TICKET.passTemplate.templateDesign.googlePay.walletClass,
          wideLogo: {
            sourceUri: {
              uri: 'https://push.notifica.re/upload/passbook/ba85caa4d851e6b2412338ec41a57e7b991b9c01d55baf2e8c6b33804afb5662/3b6f1656c6726e0c9f85d14024660790fe5518f4100c6bd0fd2596050d2cf551',
            },
          },
        },
      },
    },
  },
};
