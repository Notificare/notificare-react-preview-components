export function markupHasNotificareOpenActionQueryParameter(html: string) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, 'text/html');

  const links = doc.querySelectorAll('a');

  let hasParameter = false;

  links.forEach((link) => {
    const url = new URL(link.href, window.location.origin);
    if (url.searchParams.has('notificareOpenAction')) {
      hasParameter = true;
    }
  });

  return hasParameter;
}
