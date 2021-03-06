---
title: Intégrer Axeptio dans Nuxt
description: Vous souhaitez préparer votre site web Nuxt au RGPD. Découvrir Axeptio, un outil complet et facile pour mettre en conformité votre site internet avec le RGPD.
---

[Google Tag Manager][tagmanager] est l'outil de la gestion des balises le plus utilisé au monde. [Google Analytics][analytics], [Google Ads][ads], [Facebook Pixel][business], [Hotjar][hotjar], [Microsoft Advertising](https://ads.microsoft.com/), etc... Google Tag Manager vous permet de gérer l'ensemble de vos balises tierces.

Pourtant, toutes les sociétés l’utilisant risquent 10 M€ d'amende en cas de non-respect du Règlement Général sur la Protection des Données. [Commission Nationale de l'Informatique et des Libertés][cnil] à adopté des lignes directrices modificatives ainsi qu’une recommandation portant sur l’usage de cookies et autres traceurs :

- Concernant le consentement des utilisateurs :
  - la simple poursuite de la navigation sur un site ne peut plus être considérée comme une expression valide du consentement de l’internaute ;
  - les personnes doivent consentir au dépôt de traceurs par un acte positif clair (comme le fait de cliquer sur « j’accepte » dans une bannière cookie). Si elles ne le font pas, aucun traceur non-essentiel au fonctionnement du service ne pourra être déposé sur leur appareil.
- Les utilisateurs devront être en mesure de retirer leur consentement, facilement, et à tout moment.
- Refuser les traceurs doit être aussi aisé que de les accepter.
- Concernant l’information des personnes :
  - elles doivent clairement être informées des finalités des traceurs avant de consentir, ainsi que des conséquences qui s’attachent à une acceptation ou un refus de traceurs ;
  - elles doivent également être informées de l’identité de tous les acteurs utilisant des traceurs soumis au consentement.
- Les organismes exploitant des traceurs doivent être en mesure de fournir, à tout moment, la preuve du recueil valable du consentement libre, éclairé, spécifique et univoque de l’utilisateur.

Découvrir [Axeptio][axeptio], un outil complet et facile qui vous propose une solution innovante, facile à utiliser, user-friendly ! 100% conforme avec le GDPR et les guidelines de CNIL.

Allez sur [Axeptio](https://admin.axeptio.eu/) pour créer un compte, créer et configurer votre nouveau projet, copie votre identifiant du projet. Ensuite, ajouter les lignes suivantes dans `nuxt.config.js` :

```js
export default {
  head: {
    script: [
      { hid: 'axeptio', innerHTML: 'window.axeptioSettings = { clientId: "##CLIENT-ID##" };' },
      { src: 'https://static.axept.io/sdk-slim.js', async: true }
    ],
    __dangerouslyDisableSanitizersByTagID: {
      'axeptio': ['innerHTML']
    }
  }
}
```

[tagmanager]: https://tagmanager.google.com/
[analytics]: https://analytics.google.com/
[ads]: https://ads.google.com/
[business]: https://www.facebook.com/business/
[hotjar]: https://www.hotjar.com/
[cnil]: https://www.cnil.fr/
[axeptio]: https://www.axeptio.eu/
