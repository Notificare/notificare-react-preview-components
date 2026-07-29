function normalizeHexColor(hex: string): string {
  const color = hex.trim().replace(/^#/, '');

  if (/^[0-9a-fA-F]{3}$/.test(color)) {
    return color
      .split('')
      .map((c) => c + c)
      .join('');
  }

  if (/^[0-9a-fA-F]{6}$/.test(color)) {
    return color;
  }

  throw new Error(`Invalid hex color: ${hex}`);
}

function getLuminance(hex: string): number {
  const normalized = normalizeHexColor(hex);

  const rgb = normalized.match(/[0-9a-fA-F]{2}/g)?.map((v) => parseInt(v, 16) / 255);

  if (!rgb || rgb.length !== 3) throw new Error(`Invalid hex color: ${hex}`);

  const [r, g, b] = rgb.map((c) => (c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4)));

  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

export function getTextColorByBackgroundLuminance(hexBackgroundColor: string) {
  try {
    const normalizedHexColor = normalizeHexColor(hexBackgroundColor);

    return getLuminance(normalizedHexColor) > 0.179 ? '#202124' : '#FFFFFF';
  } catch (error) {
    console.error(error);
  }
}
