export type AppStoreApp = {
  resultCount: number;
  results: AppStoreAppData[];
};

type AppStoreAppData = {
  isGameCenterEnabled: boolean;
  artistViewUrl: string;
  artworkUrl60: string;
  artworkUrl100: string;
  artworkUrl512: string;
  advisories: string[];
  features: string[];
  supportedDevices: string[];
  kind: string;
  screenshotUrls: string[];
  ipadScreenshotUrls: string[];
  appletvScreenshotUrls: string[];
  trackCensoredName: string;
  trackViewUrl: string;
  contentAdvisoryRating: string;
  minimumOsVersion: string;
  averageUserRating: number;
  artistId: number;
  artistName: string;
  genres: string[];
  price: number;
  bundleId: string;
  sellerName: string;
  genreIds: string[];
  trackId: number;
  trackName: string;
  primaryGenreName: string;
  primaryGenreId: number;
  isVppDeviceBasedLicensingEnabled: boolean;
  currentVersionReleaseDate: string;
  releaseNotes: string;
  version: string;
  wrapperType: string;
  currency: string;
  description: string;
  languageCodesISO2A: string[];
  fileSizeBytes: string;
  formattedPrice: string;
  userRatingCountForCurrentVersion: number;
  trackContentRating: string;
  averageUserRatingForCurrentVersion: number;
  sellerUrl: string;
  releaseDate: string;
  userRatingCount: number;
};
