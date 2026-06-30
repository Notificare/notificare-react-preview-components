function getLuminance(color: string) {
  const rgb = color.match(/\w\w/g)?.map((x) => parseInt(x, 16) / 255);

  if (rgb) {
    const [r, g, b] = rgb.map((c) => {
      return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
    });
    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
  }

  return 0;
}

export function getTextColorByBackgroundLuminance(backgroundColor: string) {
  const luminance = getLuminance(backgroundColor);
  return luminance > 0.5 ? '#202124' : '#FFFFFF';
}
