/**
 * Gets the Fintoc object in order to create a widget. For that,
 * you need to include the fintoc.js script in your page. If it doesn't
 * exist, it will be loaded from the Fintoc server.
 * @returns {Promise<Fintoc>}
 */
export function getFintocObject(): Promise<Fintoc> {
  return new Promise((resolve, reject) => {

    const modifiedDocument = document as FintocDocument;
    let script = document.getElementById('fintoc-js');

    if (!script) {
      const script = document.createElement('script');

      script.src = 'https://js.fintoc.com/v1/';
      script.id = 'fintoc-js';
      script.onload = function() {
        resolve(modifiedDocument.Fintoc);
      };
      document.head.appendChild(script);
    } else {
      resolve(modifiedDocument.Fintoc);
    }

    setTimeout(() => {
      reject({
        message: 'The loading of the Fintoc script timed out',
      });
    }, 1500);
  });
}
