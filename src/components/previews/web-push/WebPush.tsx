import { useEffect, useRef, useState } from 'react';
import '../../../preset.css';
import './WebPush.css';
import { hasFirstAttachment } from '../../../helpers/notification-utils';
import { BasePushMessage } from '../../../schemas/basePushMessageSchema';
import ExpandButton from './components/expand-button/ExpandButton';

export interface WebPushProps {
  notification: BasePushMessage;
  appName: string;
  appDomain: string;
}

export default function WebPush(props: WebPushProps) {
  const { notification, appName, appDomain } = props;

  const [expanded, setExpanded] = useState<boolean>(false);
  const [mouseOverNotification, setMouseOverNotification] = useState<boolean>(false);
  const [mouseOverButtonIndex, setMouseOverButtonIndex] = useState<number>(-1);
  const [expandable, setExpandable] = useState<boolean>(false);
  const [openOptions, setOpenOptions] = useState<boolean>(false);
  const [isClosing, setIsClosing] = useState<boolean>(false);
  const messageRef = useRef<HTMLDivElement>(null);
  const maxMessageLines = 3;
  const messageLineHeight = 16.8; // 14px font size X 1.2 line height

  useEffect(() => {
    if (messageRef.current) {
      const textHeight = messageRef.current.clientHeight;
      setExpandable(textHeight > maxMessageLines * messageLineHeight);
    }

    if (hasFirstAttachment(notification)) {
      setExpandable(true);
    }
  }, []);

  return (
    <div className="notificare">
      <div
        className={`notificare__web-push ${expanded && 'notificare__web-push--expanded'}`}
        onMouseEnter={() => setMouseOverNotification(() => true)}
        onMouseLeave={() => setMouseOverNotification(() => openOptions)}
      >
        {((expandable && mouseOverNotification) || expanded) && (
          <div className="notificare__web-push-expand-button-container">
            <ExpandButton
              open={expanded}
              onToggle={() => {
                if (expanded) {
                  setIsClosing(true);
                }

                setExpanded((prevState) => !prevState);

                setTimeout(() => {
                  setIsClosing(false);
                }, 1000);

                setOpenOptions(false);
              }}
            />
          </div>
        )}

        {!mouseOverNotification && !expanded && !isClosing && (
          <div className="notificare__web-push-time-container">
            <p className="notificare__web-push-time"> now </p>
          </div>
        )}

        <div className="notificare__web-push-main-content">
          <div className="notificare__web-push-browser-icon">
            <div className="notificare__web-push-browser-icon-background">
              <img
                className="notificare__web-push-browser-icon-image"
                src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Google_Chrome_icon_%28February_2022%29.svg"
                alt="Google Chrome Icon"
              />
            </div>
          </div>

          <div className="notificare__web-push-text-content">
            <p className="notificare__web-push-text notificare__web-push-text--title">
              {notification.title || appName}
            </p>
            <p className="notificare__web-push-text notificare__web-push-text--domain">
              {appDomain}
            </p>
            <p
              className={`notificare__web-push-text ${expanded || isClosing ? 'notificare__web-push-text--expanded-message' : 'notificare__web-push-text--message'}`}
            >
              {notification.message}
            </p>
          </div>

          {hasFirstAttachment(notification) &&
            !expanded &&
            !isClosing &&
            !mouseOverNotification && (
              <img
                className="notificare__web-push-small-media"
                src={notification.attachments?.[0].uri}
                alt="Small media icon"
              />
            )}

          {mouseOverNotification && !expanded && !isClosing && (
            <>
              {notification.actions && notification.actions.length > 0 ? (
                <>
                  <button
                    className="notificare__web-push-settings-button"
                    onClick={() => setOpenOptions((prevState) => !prevState)}
                  >
                    Options
                    <svg
                      className="notificare__web-push-settings-button-expand-icon"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                    </svg>
                  </button>

                  {openOptions && (
                    <div className="notificare__web-push-settings-selector">
                      {notification.actions.map((option, index) => (
                        <button
                          key={index}
                          className="notificare__web-push-settings-selector-option"
                        >
                          {option.label}
                        </button>
                      ))}

                      <button className="notificare__web-push-settings-selector-option">
                        Settings
                      </button>
                    </div>
                  )}
                </>
              ) : (
                <button className="notificare__web-push-settings-button"> Settings </button>
              )}
            </>
          )}
        </div>

        {(expanded || isClosing) && (
          <div className="notificare__web-push-expanded-content">
            {hasFirstAttachment(notification) && (
              <img
                className="notificare__web-push-expanded-media"
                src={notification.attachments?.[0].uri}
                alt="Expanded media"
              />
            )}

            <hr className="notificare__web-push-expanded-divisor" />

            {notification.actions?.map((action, index) => (
              <div key={index} className="notificare__web-push-action">
                <button
                  className="notificare__web-push-expanded-button"
                  onMouseEnter={() => setMouseOverButtonIndex(index)}
                  onMouseLeave={() => setMouseOverButtonIndex(-1)}
                >
                  {action.label}
                </button>

                <hr
                  className={`notificare__web-push-expanded-buttons-divisor ${(mouseOverButtonIndex === index || mouseOverButtonIndex - 1 === index) && 'notificare__web-push-expanded-buttons-divisor--transparent'}`}
                />
              </div>
            ))}

            <button
              className={'notificare__web-push-expanded-button'}
              onMouseEnter={() => setMouseOverButtonIndex(notification.actions?.length || -1)}
              onMouseLeave={() => setMouseOverButtonIndex(-1)}
            >
              Settings
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
