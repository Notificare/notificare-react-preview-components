import CONFIG from '../../config';

export async function getWebshot(url: string, width: number, height: number, platform: string) {
  try {
    const response = await fetch(
      `/api/v2/webshot?application=${CONFIG.APPLICATION}&url=${url}&width=${width}&height=${height}&platform=${platform}&delay=3000`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${CONFIG.TOKEN}`,
        },
      },
    );

    const data = await response.json();
    return data.image;
  } catch (error) {
    console.error('Webshot error: ', error);
    return '';
  }
}
