// PocketBase client configured for production.
// Set VITE_POCKETBASE_URL in your Netlify environment variables
// to point to your own PocketBase instance (e.g. https://db.zeoxy.tech).
// If no URL is provided, contact form submissions will be disabled gracefully.

let pocketbaseClient = null;

const POCKETBASE_URL = import.meta.env.VITE_POCKETBASE_URL;

if (POCKETBASE_URL) {
  import('pocketbase').then(({ default: Pocketbase }) => {
    pocketbaseClient = new Pocketbase(POCKETBASE_URL);
  });
}

export { pocketbaseClient };
export default pocketbaseClient;
