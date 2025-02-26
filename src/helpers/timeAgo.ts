export function timeAgo(isoDate: string) {
  const date = new Date(isoDate);
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  const intervals: { value: number; label: string }[] = [
    { value: 60, label: 'second' },
    { value: 60 * 60, label: 'minute' },
    { value: 60 * 60 * 24, label: 'hour' },
    { value: 60 * 60 * 24 * 7, label: 'day' },
    { value: 60 * 60 * 24 * 30, label: 'week' },
    { value: 60 * 60 * 24 * 365, label: 'month' },
    { value: Infinity, label: 'year' },
  ];

  for (let i = 0; i < intervals.length; i++) {
    const { value, label } = intervals[i];
    if (diffInSeconds < value) {
      const count = Math.floor(diffInSeconds / (intervals[i - 1]?.value || 1));
      return count <= 1 ? `a ${label} ago` : `${count} ${label}s ago`;
    }
  }

  return 'a long time ago';
}
