/**
 * Defines the configuration keys needed for API requests.
 *
 * @property {string} [serviceKey] - A service key provided by a Notificare admin (optional).
 * @property {string} [googleMapsApiKey] - A Google Maps API key (optional).
 */
export interface NotificareNotificationConfigKeys {
  serviceKey?: string;
  googleMapsApiKey?: string;
}
