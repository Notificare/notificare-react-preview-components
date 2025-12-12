import { useEffect, useRef, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import ExpandIcon from '~/assets/expand.svg';
import GoogleChromeIcon from '~/assets/google-chrome.svg';
import { ExpandButton } from '~/internal/components/push/platforms/web/lockscreen/ExpandButton/ExpandButton';
import { useApplication } from '~/internal/context/application';
import { VerifiedNotification } from '~/internal/schemas/notificare-notification';
import { hasActions, hasFirstAttachment } from '~/internal/utils/push-previews/notification';
import { getTopLevelDomain } from '~/internal/utils/url';
import { PUSH_TRANSLATIONS } from '~/locales/push/en';

import './WebMacOSNotification.css';

export function WebMacOSNotification({ notification }: WebMacOSNotificationProps) {
  const [previewState, setPreviewState] = useState<PreviewState>('collapsed');
  const [openOptions, setOpenOptions] = useState(false);
  const [mouseOverActionIndex, setMouseOverActionIndex] = useState<number>(-1);
  const [isExpandable, setIsExpandable] = useState(false);
  const collapsingTimeoutRef = useRef<NodeJS.Timeout>(null);

  const messageRef = useRef<HTMLDivElement>(null);

  const application = useApplication();

  useEffect(
    function checkIfNotificationIsExpandable() {
      if (hasFirstAttachment(notification) || hasActions(notification)) {
        setIsExpandable(true);
        return;
      }

      if (messageRef.current) {
        const maxLines = 3;

        const style = window.getComputedStyle(messageRef.current);
        const lineHeight = parseFloat(style.lineHeight);

        const realMessageHeight = messageRef.current.scrollHeight;
        const maxMessageHeight = lineHeight * maxLines;

        setIsExpandable(realMessageHeight > maxMessageHeight);
        return;
      }
    },
    [notification],
  );

  useEffect(function clearTimeoutOnRemount() {
    return () => {
      clearCollapsingTimeout();
    };
  }, []);

  function expandOrCollapsePreview() {
    clearCollapsingTimeout();

    if (previewState !== 'expanded') {
      setOpenOptions(false);
      setPreviewState('expanded');
      return;
    }

    setPreviewState('collapsing');
    collapsingTimeoutRef.current = setTimeout(() => {
      setPreviewState('collapsed');
    }, 400);
  }

  function clearCollapsingTimeout() {
    if (collapsingTimeoutRef.current) {
      clearTimeout(collapsingTimeoutRef.current);
    }

    return;
  }

  return (
    <div
      className={`notificare__push__web__desktop__lock-screen ${previewState === 'expanded' ? 'notificare__push__web__desktop__lock-screen--expanded' : 'notificare__push__web__desktop__lock-screen--collapsed'}`}
      data-testid="web-desktop-notification"
    >
      <div className="notificare__push__web__desktop__lock-screen__main-content">
        <div className="notificare__push__web__desktop__lock-screen__browser-icon">
          <div className="notificare__push__web__desktop__lock-screen__browser-icon-background">
            <GoogleChromeIcon
              className="notificare__push__web__desktop__lock-screen__browser-icon-svg"
              aria-label="Google Chrome icon"
            />
          </div>
        </div>

        <div className="notificare__push__web__desktop__lock-screen__text-content">
          <div className="notificare__push__web__desktop__lock-screen__time-and-title-wrapper">
            <p className="notificare__push__web__desktop__lock-screen__text notificare__push__web__desktop__lock-screen__text--title">
              {notification.title || application.name}
            </p>
            {!openOptions && (
              <div
                className={`notificare__push__web__desktop__lock-screen__time-container ${previewState !== 'collapsed' ? 'notificare__push__web__desktop__lock-screen__time-container--hidden' : ''}`}
              >
                <p className="notificare__push__web__desktop__lock-screen__text notificare__push__web__desktop__lock-screen__text--time">
                  <FormattedMessage
                    id="preview.web.desktop.macos.lockScreen.time"
                    defaultMessage={PUSH_TRANSLATIONS['preview.web.desktop.macos.lockScreen.time']}
                  />
                </p>
              </div>
            )}
          </div>

          <div className="notificare__push__web__desktop__lock-screen__domain-and-message-and-media-wrapper">
            <div>
              <p className="notificare__push__web__desktop__lock-screen__text notificare__push__web__desktop__lock-screen__text--domain">
                {application.websitePushConfig &&
                application.websitePushConfig.allowedDomains.length > 0
                  ? getTopLevelDomain(application.websitePushConfig.allowedDomains[0])
                  : 'example.com'}
              </p>
              <p
                ref={messageRef}
                className={`notificare__push__web__desktop__lock-screen__text notificare__push__web__desktop__lock-screen__text--message ${previewState === 'expanded' ? 'notificare__push__web__desktop__lock-screen__text--expandable-message' : 'notificare__push__web__desktop__lock-screen__text--collapsed-message'} ${previewState !== 'expanded' && hasFirstAttachment(notification) ? 'notificare__push__web__desktop__lock_screen__text--message-with-attachment' : ''}`}
              >
                {notification.message}
              </p>
            </div>

            {!openOptions && hasFirstAttachment(notification) && (
              <img
                className={`notificare__push__web__desktop__lock-screen__small-media ${previewState !== 'collapsed' ? 'notificare__push__web__desktop__lock-screen__small-media--hidden' : ''}`}
                src={notification.attachments?.[0].uri}
                alt="Small media icon"
              />
            )}
          </div>
        </div>
      </div>

      <div
        className={`notificare__push__web__desktop__lock-screen__expanded-content ${previewState === 'expanded' ? 'notificare__push__web__desktop__lock-screen__expanded-content--visible' : ''}`}
      >
        {hasFirstAttachment(notification) && (
          <img
            className="notificare__push__web__desktop__lock-screen__expanded-media"
            src={notification.attachments?.[0].uri}
            alt="Expanded media"
          />
        )}

        <hr className="notificare__push__web__desktop__lock-screen__expanded-divisor" />

        {notification.actions?.map((action, index) => (
          <div key={index} className="notificare__push__web__desktop__lock-screen__action">
            <button
              className="notificare__push__web__desktop__lock-screen__expanded-button"
              onMouseEnter={() => setMouseOverActionIndex(index)}
              onMouseLeave={() => setMouseOverActionIndex(-1)}
              data-testid={`web-desktop-expanded-action-${index.toString()}`}
            >
              {action.label}
            </button>

            <hr
              className={`notificare__push__web__desktop__lock-screen__expanded-buttons-divisor ${mouseOverActionIndex === index || mouseOverActionIndex - 1 === index ? 'notificare__push__web__desktop__lock-screen__expanded-buttons-divisor--transparent' : ''}`}
            />
          </div>
        ))}

        <button
          className={'notificare__push__web__desktop__lock-screen__expanded-button'}
          onMouseEnter={() => setMouseOverActionIndex(notification.actions?.length ?? -1)}
          onMouseLeave={() => setMouseOverActionIndex(-1)}
        >
          <FormattedMessage
            id="preview.web.desktop.macos.lockScreen.settings"
            defaultMessage={PUSH_TRANSLATIONS['preview.web.desktop.macos.lockScreen.settings']}
          />
        </button>
      </div>

      {isExpandable && (
        <div
          className={`notificare__push__web__desktop__lock-screen__expand-button-container ${openOptions || previewState !== 'collapsed' ? 'notificare__push__web__desktop__lock-screen__expand-button-container--visible' : ''}`}
        >
          <ExpandButton
            open={previewState === 'expanded'}
            disabled={false}
            onToggle={expandOrCollapsePreview}
          />
        </div>
      )}

      <div
        className={`notificare__push__web__desktop__lock-screen__settings-button-container ${openOptions ? 'notificare__push__web__desktop__lock-screen__settings-button-container--visible' : ''} ${previewState !== 'collapsed' ? 'notificare__push__web__desktop__lock-screen__settings-button-container--hidden' : ''}`}
      >
        {notification.actions && notification.actions.length > 0 ? (
          <>
            <button
              className="notificare__push__web__desktop__lock-screen__settings-button"
              onClick={() => setOpenOptions(!openOptions)}
              data-testid="web-desktop-settings-button"
            >
              <FormattedMessage
                id="preview.web.desktop.macos.lockScreen.options"
                defaultMessage={PUSH_TRANSLATIONS['preview.web.desktop.macos.lockScreen.options']}
              />
              <ExpandIcon className="notificare__push__web__desktop__lock-screen__settings-button-expand-icon" />
            </button>

            {openOptions && (
              <div className="notificare__push__web__desktop__lock-screen__settings-selector">
                {notification.actions.map((option, index) => (
                  <button
                    key={index}
                    className="notificare__push__web__desktop__lock-screen__settings-selector-option"
                    data-testid={`web-desktop-options-action-${index.toString()}`}
                  >
                    {option.label}
                  </button>
                ))}

                <button className="notificare__push__web__desktop__lock-screen__settings-selector-option">
                  <FormattedMessage
                    id="preview.web.desktop.macos.lockScreen.settings"
                    defaultMessage={
                      PUSH_TRANSLATIONS['preview.web.desktop.macos.lockScreen.settings']
                    }
                  />
                </button>
              </div>
            )}
          </>
        ) : (
          <button className="notificare__push__web__desktop__lock-screen__settings-button">
            <FormattedMessage
              id="preview.web.desktop.macos.lockScreen.settings"
              defaultMessage={PUSH_TRANSLATIONS['preview.web.desktop.macos.lockScreen.settings']}
            />
          </button>
        )}
      </div>
    </div>
  );
}

export interface WebMacOSNotificationProps {
  notification: VerifiedNotification;
}

type PreviewState = 'collapsed' | 'expanded' | 'collapsing';
