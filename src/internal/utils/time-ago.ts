export function timeAgo(isoDate: string, locale: string) {
  const rtf = new Intl.RelativeTimeFormat(locale, { style: 'long' });

  const date = new Date(isoDate);
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  const intervals: { value: number; unit: Intl.RelativeTimeFormatUnit }[] = [
    { value: 60, unit: 'second' },
    { value: 60 * 60, unit: 'minute' },
    { value: 60 * 60 * 24, unit: 'hour' },
    { value: 60 * 60 * 24 * 7, unit: 'day' },
    { value: 60 * 60 * 24 * 30, unit: 'week' },
    { value: 60 * 60 * 24 * 365, unit: 'month' },
  ];

  for (let i = 0; i < intervals.length; i++) {
    const { value, unit } = intervals[i];

    if (diffInSeconds < value) {
      const count = Math.floor(diffInSeconds / (intervals[i - 1]?.value || 1));
      return rtf.format(-count, unit);
    }
  }

  const count = Math.floor(diffInSeconds / intervals[intervals.length - 1].value);
  return rtf.format(-count, 'year');
}
