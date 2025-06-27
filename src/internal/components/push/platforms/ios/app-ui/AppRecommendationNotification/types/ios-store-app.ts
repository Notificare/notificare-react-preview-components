export type IosStoreApp = {
  resultCount: number;
  results: IosStoreAppData[];
};

export type IosStoreAppData = {
  artworkUrl512: string;
  screenshotUrls: string[];
  averageUserRating: number;
  sellerName: string;
  trackName: string;
  primaryGenreName: string;
  currentVersionReleaseDate: string;
  releaseNotes: string;
  version: string;
  trackContentRating: string;
  userRatingCount: number;
};
