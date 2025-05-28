/**
 * Defines the configuration keys needed for API requests.
 *
 * @property {string} [serviceKey] - A service key provided by a Notificare admin.
 * @property {string} [googleMapsAPIKey] - A Google Maps API key (optional).
 */
export interface NotificareNotificationOptions {
  serviceKey: string;
  googleMapsAPIKey?: string;
}
