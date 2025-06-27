import { Key, useEffect, useRef, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import ExpandIcon from '~/assets/expand.svg';
import GoogleChromeIcon from '~/assets/google-chrome.svg';
import { useApplication } from '~/internal/context/application';
import { NotificareNotificationSchema } from '~/internal/schemas/notificare-notification';
import { hasFirstAttachment } from '~/internal/utils/push-previews/notification';
import { ExpandButton } from './ExpandButton/ExpandButton';

import './WebMacOSNotification.css';

const maxMessageLines = 3;
const messageLineHeight = 16.7;

export function WebMacOSNotification({ notification }: WebPushProps) {
  const [expanded, setExpanded] = useState<boolean>(false);
  const [mouseOverNotification, setMouseOverNotification] = useState<boolean>(false);
  const [mouseOverButtonIndex, setMouseOverButtonIndex] = useState<number>(-1);
  const [expandable, setExpandable] = useState<boolean>(false);
  const [openOptions, setOpenOptions] = useState<boolean>(false);
  const [isClosing, setIsClosing] = useState<boolean>(false);
  const [isExpanding, setIsExpanding] = useState<boolean>(false);
  const [initialPreviewHeight, setInitialPreviewHeight] = useState<string>('');
  const previewRef = useRef<HTMLDivElement>(null);
  const messageRef = useRef<HTMLDivElement>(null);

  const application = useApplication();

  useEffect(function enableExpandableOnMessageHeightAndSetInitialPreviewHeight() {
    if (previewRef.current && messageRef.current) {
      // calculate the message height
      const fullTextHeight = messageRef.current.scrollHeight;
      setExpandable(fullTextHeight > maxMessageLines * messageLineHeight);

      // set the scroll height of the preview as the REAL height of the preview and keep it in a state. It's necessary for expand/collapse animations to work properly
      const previewHeight = `${previewRef.current.scrollHeight}px`;
      previewRef.current.style.height = previewHeight;
      setInitialPreviewHeight(previewHeight);
    }
  }, []);

  useEffect(function enableExpandableOnAttachment() {
    if (hasFirstAttachment(notification)) {
      setExpandable(true);
    }
  }, []);

  return (
    <div
      ref={previewRef}
      className="notificare__push__web__desktop__lock-screen"
      onMouseEnter={() => setMouseOverNotification(() => true)}
      onMouseLeave={() => setMouseOverNotification(() => openOptions)}
      data-testid="web-desktop-notification"
    >
      {((expandable && mouseOverNotification) || expanded || isClosing) && (
        <div className="notificare__push__web__desktop__lock-screen__expand-button-container">
          <ExpandButton
            open={expanded}
            disabled={isClosing || isExpanding}
            onToggle={function animatePreview() {
              const previewElement = previewRef.current;
              const messageElement = messageRef.current;

              if (previewElement && messageElement) {
                if (expanded) {
                  previewElement.style.backgroundColor = '#f4f4f4';
                  previewElement.style.height = initialPreviewHeight; // reset the preview height to the initial height so the animation starts
                  setIsClosing(true);
                  setExpanded(false);
                  setTimeout(() => {
                    setIsClosing(false);
                    previewElement.style.overflow = ''; // unset overflow property (if it's 'hidden', it hides the expanded options)
                  }, 300);
                } else {
                  previewElement.style.backgroundColor = '#fff';
                  previewElement.style.overflow = 'hidden'; // set preview overflow property to 'hidden' so the expanded content is not shown immediately (but progressively with the animation)
                  setIsExpanding(true);
                  setExpanded(true);
                  setTimeout(() => {
                    // update the preview element REAL height with the current scroll height to start the animation
                    previewElement.style.height = `${previewElement.scrollHeight}px`;
                  }, 10);
                  setTimeout(() => {
                    setIsExpanding(false);
                  }, 300);
                }

                setOpenOptions(false);
              }
            }}
          />
        </div>
      )}

      {!mouseOverNotification && !expanded && !isClosing && (
        <div className="notificare__push__web__desktop__lock-screen__time-container">
          <p className="notificare__push__web__desktop__lock-screen__time">
            <FormattedMessage id="preview.web.desktop.macos.lockScreen.time" />
          </p>
        </div>
      )}

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
          <p className="notificare__push__web__desktop__lock-screen__text notificare__push__web__desktop__lock-screen__text--title">
            {notification.title || application.name}
          </p>
          <p className="notificare__push__web__desktop__lock-screen__text notificare__push__web__desktop__lock-screen__text--domain">
            {extractDomain(application.websitePushConfig.allowedDomains[0])}
          </p>
          <p
            ref={messageRef}
            className={`notificare__push__web__desktop__lock-screen__text ${expanded || isClosing ? 'notificare__push__web__desktop__lock-screen__text--expandable-message' : 'notificare__push__web__desktop__lock-screen__text--message'}`}
          >
            {notification.message}
          </p>
        </div>

        {hasFirstAttachment(notification) && !expanded && !isClosing && !mouseOverNotification && (
          <img
            className="notificare__push__web__desktop__lock-screen__small-media"
            src={notification.attachments?.[0].uri}
            alt="Small media icon"
          />
        )}

        {mouseOverNotification && !expanded && !isClosing && (
          <div className="notificare__push__web__desktop__lock-screen__settings-button-container">
            {notification.actions && notification.actions.length > 0 ? (
              <>
                <button
                  className="notificare__push__web__desktop__lock-screen__settings-button"
                  onClick={() => setOpenOptions((prevState) => !prevState)}
                  data-testid="web-desktop-settings-button"
                >
                  <FormattedMessage id="preview.web.desktop.macos.lockScreen.options" />
                  <ExpandIcon className="notificare__push__web__desktop__lock-screen__settings-button-expand-icon" />
                </button>

                {openOptions && (
                  <div className="notificare__push__web__desktop__lock-screen__settings-selector">
                    {notification.actions.map((option, index) => (
                      <button
                        key={index}
                        className="notificare__push__web__desktop__lock-screen__settings-selector-option"
                        data-testid={`web-desktop-options-action-${index}`}
                      >
                        {option.label}
                      </button>
                    ))}

                    <button className="notificare__push__web__desktop__lock-screen__settings-selector-option">
                      <FormattedMessage id="preview.web.desktop.macos.lockScreen.settings" />
                    </button>
                  </div>
                )}
              </>
            ) : (
              <button className="notificare__push__web__desktop__lock-screen__settings-button">
                <FormattedMessage id="preview.web.desktop.macos.lockScreen.settings" />
              </button>
            )}
          </div>
        )}
      </div>

      {(expanded || isClosing) && (
        <div className="notificare__push__web__desktop__lock-screen__expanded-content">
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
                onMouseEnter={() => setMouseOverButtonIndex(index)}
                onMouseLeave={() => setMouseOverButtonIndex(-1)}
                data-testid={`web-desktop-expanded-action-${index}`}
              >
                {action.label}
              </button>

              <hr
                className={`notificare__push__web__desktop__lock-screen__expanded-buttons-divisor ${(mouseOverButtonIndex === index || mouseOverButtonIndex - 1 === index) && 'notificare__push__web__desktop__lock-screen__expanded-buttons-divisor--transparent'}`}
              />
            </div>
          ))}

          <button
            className={'notificare__push__web__desktop__lock-screen__expanded-button'}
            onMouseEnter={() => setMouseOverButtonIndex(notification.actions?.length || -1)}
            onMouseLeave={() => setMouseOverButtonIndex(-1)}
          >
            Settings
          </button>
        </div>
      )}
    </div>
  );
}

export interface WebPushProps {
  key?: Key; // why do we receive a key?
  notification: NotificareNotificationSchema;
}

function extractDomain(url: string): string {
  try {
    const parsedUrl = new URL(url);
    return parsedUrl.hostname;
  } catch {
    return '';
  }
}
