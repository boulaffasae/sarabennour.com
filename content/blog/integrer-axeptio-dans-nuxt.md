---
title: Intégrer Axeptio dans Nuxt
description: Vous souhaitez préparer votre site web Nuxt au RGPD. Découvrir Axeptio, un outil complet et facile pour mettre en conformité votre site internet avec le RGPD.
---

Google Tag Manager est l'outil de la gestion des balises le plus utilisé au monde.

Google Analytics, Google Ads, Facebook Pixel, Hotjar, Microsoft Advertising, etc.

Pourtant, vous risquez 10 M€ d'amende en cas de non-respect du Règlement Général sur la Protection des Données.

Allez sur Axeptio pour créer un compte https://www.axeptio.eu/.

## Intégration du SDK Axeptio

Pour charger le SDK, ajouter les lignes suivantes dans `nuxt.config.js` :

```js
export default {
  head: {
    script: [
      { hid: 'axeptio', innerHTML: 'window.axeptioSettings = { clientId: "Identifiant du projet" };' },
      { src: 'https://static.axept.io/sdk-slim.js', async: true }
    ],
    __dangerouslyDisableSanitizersByTagID: {
      'axeptio': ['innerHTML']
    }
  }
}
```
