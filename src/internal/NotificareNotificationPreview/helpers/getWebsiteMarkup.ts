export async function getWebsiteMarkup(url: string) {
  try {
    const response = await fetch(`https://dashboard.notifica.re/api/v2/proxy/?url=${url}`);
    return response.text();
  } catch (error) {
    console.error('Error fetching website', error);
    return '';
  }
}
