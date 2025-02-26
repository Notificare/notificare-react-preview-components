export async function getPageTitle(url: string) {
  try {
    const response = await fetch(`https://dashboard.notifica.re/api/v2/proxy/?url=${url}`);
    const html = await response.text();

    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');

    return doc.querySelector('title')?.textContent ?? '';
  } catch (error) {
    console.error('Error getting page title: ', error);
    return '';
  }
}
