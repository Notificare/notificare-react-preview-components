import { Key, useEffect, useRef, useState } from 'react';
import './WebMacOSNotification.css';
import { hasFirstAttachment } from '../../../../helpers/notification-utils';
import { NotificareNotificationSchema } from '../../../../schemas/notificare-notification/notificare-notification-schema';
import ExpandButton from './ExpandButton/ExpandButton';

export default function WebMacOSNotification({ notification, appName, appDomain }: WebPushProps) {
  const [expanded, setExpanded] = useState<boolean>(false);
  const [mouseOverNotification, setMouseOverNotification] = useState<boolean>(false);
  const [mouseOverButtonIndex, setMouseOverButtonIndex] = useState<number>(-1);
  const [expandable, setExpandable] = useState<boolean>(false);
  const [openOptions, setOpenOptions] = useState<boolean>(false);
  const [isClosing, setIsClosing] = useState<boolean>(false);
  const [isExpanding, setIsExpanding] = useState<boolean>(false);
  const [initialPreviewHeight, setInitialPreviewHeight] = useState<string>('');
  //const [initialMessageHeight, setInitialMessageHeight] = useState<string>('');
  const previewRef = useRef<HTMLDivElement>(null);
  const messageRef = useRef<HTMLDivElement>(null);
  const maxMessageLines = 3;
  const messageLineHeight = 16.7;

  useEffect(() => {
    if (previewRef.current && messageRef.current) {
      const fullTextHeight = messageRef.current.scrollHeight;
      setExpandable(fullTextHeight > maxMessageLines * messageLineHeight);

      const previewHeight = `${previewRef.current.scrollHeight}px`;
      previewRef.current.style.height = previewHeight;
      setInitialPreviewHeight(previewHeight);
    }

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
            onToggle={() => {
              const previewElement = previewRef.current;
              const messageElement = messageRef.current;

              if (previewElement && messageElement) {
                if (expanded) {
                  previewElement.style.backgroundColor = '#f4f4f4';
                  previewElement.style.height = initialPreviewHeight;
                  //messageElement.style.height = initialMessageHeight;
                  setIsClosing(true);
                  setExpanded(false);
                  setTimeout(() => {
                    setIsClosing(false);
                    previewElement.style.overflow = '';
                  }, 300);
                } else {
                  previewElement.style.backgroundColor = '#fff';
                  previewElement.style.overflow = 'hidden';
                  setIsExpanding(true);
                  setExpanded(true);
                  setTimeout(() => {
                    previewElement.style.height = `${previewElement.scrollHeight - messageElement.clientHeight + messageElement.scrollHeight}px`;
                    //messageElement.style.height = `${messageElement.scrollHeight}px`;
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
          <p className="notificare__push__web__desktop__lock-screen__time"> now </p>
        </div>
      )}

      <div className="notificare__push__web__desktop__lock-screen__main-content">
        <div className="notificare__push__web__desktop__lock-screen__browser-icon">
          <div className="notificare__push__web__desktop__lock-screen__browser-icon-background">
            <img
              className="notificare__push__web__desktop__lock-screen__browser-icon-image"
              src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Google_Chrome_icon_%28February_2022%29.svg"
              alt="Google Chrome Icon"
            />
          </div>
        </div>

        <div className="notificare__push__web__desktop__lock-screen__text-content">
          <p className="notificare__push__web__desktop__lock-screen__text notificare__push__web__desktop__lock-screen__text--title">
            {notification.title || appName}
          </p>
          <p className="notificare__push__web__desktop__lock-screen__text notificare__push__web__desktop__lock-screen__text--domain">
            {extractDomain(appDomain)}
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
                  Options
                  <svg
                    className="notificare__push__web__desktop__lock-screen__settings-button-expand-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                  </svg>
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
                      Settings
                    </button>
                  </div>
                )}
              </>
            ) : (
              <button className="notificare__push__web__desktop__lock-screen__settings-button">
                Settings
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

interface WebPushProps {
  key?: Key;
  notification: NotificareNotificationSchema;
  appName: string;
  appDomain: string;
}

function extractDomain(url: string): string {
  try {
    const parsedUrl = new URL(url);
    return parsedUrl.hostname;
  } catch {
    return '';
  }
}
