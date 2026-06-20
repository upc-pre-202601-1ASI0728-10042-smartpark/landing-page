/**
 * URLs de los productos hermanos de SmartPark a los que enlaza la landing.
 * Son los destinos de despliegue; ajustar al publicar cada producto.
 */

// Panel del operador (web-application, Angular) — despliegue en Azure.
// El guard de la app redirige a /login al no haber sesión.
export const PANEL_URL = "https://stsmartparkweb01.z20.web.core.windows.net/";

// App del conductor (mobile-app). Reemplazar por la ficha real de la store.
export const APP_URL = "https://play.google.com/store/apps/details?id=app.smartpark";
