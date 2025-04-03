/**
 * Defines the configuration keys needed for API requests.
 *
 * @property {string} serviceKey - The service key.
 * @property {string} googleMapsApiKey - The Google Maps API key (optional) - needed for web map notifications.
 */
export interface NotificareNotificationConfigKeys {
  serviceKey: string;
  googleMapsApiKey?: string;
}
