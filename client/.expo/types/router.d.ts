/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string | object = string> {
      hrefInputParams: { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/`; params?: Router.UnknownInputParams; } | { pathname: `/styles`; params?: Router.UnknownInputParams; } | { pathname: `/stylesAuction`; params?: Router.UnknownInputParams; } | { pathname: `/stylesDetails`; params?: Router.UnknownInputParams; } | { pathname: `/stylesSettings`; params?: Router.UnknownInputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `${'/(auth)'}/login` | `/login`; params?: Router.UnknownInputParams; } | { pathname: `${'/(auth)'}/register` | `/register`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/auction` | `/auction`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/checkout` | `/checkout`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/details` | `/details`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/newlisting` | `/newlisting`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/stats` | `/stats`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/transactions` | `/transactions`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/buyerSettings/updateAccountInfo` | `/buyerSettings/updateAccountInfo`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/buyerSettings/updateContact` | `/buyerSettings/updateContact`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/buyerSettings/updatePaymentInfo` | `/buyerSettings/updatePaymentInfo`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/settings` | `/settings`; params?: Router.UnknownInputParams; } | { pathname: `/sellerSettings/updateAccountInfo`; params?: Router.UnknownInputParams; } | { pathname: `/sellerSettings/updateBusinessInfo`; params?: Router.UnknownInputParams; } | { pathname: `/+not-found`, params: Router.UnknownInputParams & {  } };
      hrefOutputParams: { pathname: Router.RelativePathString, params?: Router.UnknownOutputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownOutputParams } | { pathname: `/`; params?: Router.UnknownOutputParams; } | { pathname: `/styles`; params?: Router.UnknownOutputParams; } | { pathname: `/stylesAuction`; params?: Router.UnknownOutputParams; } | { pathname: `/stylesDetails`; params?: Router.UnknownOutputParams; } | { pathname: `/stylesSettings`; params?: Router.UnknownOutputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(auth)'}/login` | `/login`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(auth)'}/register` | `/register`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(tabs)'}/auction` | `/auction`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(tabs)'}/checkout` | `/checkout`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(tabs)'}/details` | `/details`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(tabs)'}/newlisting` | `/newlisting`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(tabs)'}/stats` | `/stats`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(tabs)'}/transactions` | `/transactions`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(tabs)'}/buyerSettings/updateAccountInfo` | `/buyerSettings/updateAccountInfo`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(tabs)'}/buyerSettings/updateContact` | `/buyerSettings/updateContact`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(tabs)'}/buyerSettings/updatePaymentInfo` | `/buyerSettings/updatePaymentInfo`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(tabs)'}/settings` | `/settings`; params?: Router.UnknownOutputParams; } | { pathname: `/sellerSettings/updateAccountInfo`; params?: Router.UnknownOutputParams; } | { pathname: `/sellerSettings/updateBusinessInfo`; params?: Router.UnknownOutputParams; } | { pathname: `/+not-found`, params: Router.UnknownOutputParams & {  } };
      href: Router.RelativePathString | Router.ExternalPathString | `/${`?${string}` | `#${string}` | ''}` | `/styles${`?${string}` | `#${string}` | ''}` | `/stylesAuction${`?${string}` | `#${string}` | ''}` | `/stylesDetails${`?${string}` | `#${string}` | ''}` | `/stylesSettings${`?${string}` | `#${string}` | ''}` | `/_sitemap${`?${string}` | `#${string}` | ''}` | `${'/(auth)'}/login${`?${string}` | `#${string}` | ''}` | `/login${`?${string}` | `#${string}` | ''}` | `${'/(auth)'}/register${`?${string}` | `#${string}` | ''}` | `/register${`?${string}` | `#${string}` | ''}` | `${'/(tabs)'}/auction${`?${string}` | `#${string}` | ''}` | `/auction${`?${string}` | `#${string}` | ''}` | `${'/(tabs)'}/checkout${`?${string}` | `#${string}` | ''}` | `/checkout${`?${string}` | `#${string}` | ''}` | `${'/(tabs)'}/details${`?${string}` | `#${string}` | ''}` | `/details${`?${string}` | `#${string}` | ''}` | `${'/(tabs)'}/newlisting${`?${string}` | `#${string}` | ''}` | `/newlisting${`?${string}` | `#${string}` | ''}` | `${'/(tabs)'}/stats${`?${string}` | `#${string}` | ''}` | `/stats${`?${string}` | `#${string}` | ''}` | `${'/(tabs)'}/transactions${`?${string}` | `#${string}` | ''}` | `/transactions${`?${string}` | `#${string}` | ''}` | `${'/(tabs)'}/buyerSettings/updateAccountInfo${`?${string}` | `#${string}` | ''}` | `/buyerSettings/updateAccountInfo${`?${string}` | `#${string}` | ''}` | `${'/(tabs)'}/buyerSettings/updateContact${`?${string}` | `#${string}` | ''}` | `/buyerSettings/updateContact${`?${string}` | `#${string}` | ''}` | `${'/(tabs)'}/buyerSettings/updatePaymentInfo${`?${string}` | `#${string}` | ''}` | `/buyerSettings/updatePaymentInfo${`?${string}` | `#${string}` | ''}` | `${'/(tabs)'}/settings${`?${string}` | `#${string}` | ''}` | `/settings${`?${string}` | `#${string}` | ''}` | `/sellerSettings/updateAccountInfo${`?${string}` | `#${string}` | ''}` | `/sellerSettings/updateBusinessInfo${`?${string}` | `#${string}` | ''}` | { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/`; params?: Router.UnknownInputParams; } | { pathname: `/styles`; params?: Router.UnknownInputParams; } | { pathname: `/stylesAuction`; params?: Router.UnknownInputParams; } | { pathname: `/stylesDetails`; params?: Router.UnknownInputParams; } | { pathname: `/stylesSettings`; params?: Router.UnknownInputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `${'/(auth)'}/login` | `/login`; params?: Router.UnknownInputParams; } | { pathname: `${'/(auth)'}/register` | `/register`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/auction` | `/auction`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/checkout` | `/checkout`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/details` | `/details`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/newlisting` | `/newlisting`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/stats` | `/stats`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/transactions` | `/transactions`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/buyerSettings/updateAccountInfo` | `/buyerSettings/updateAccountInfo`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/buyerSettings/updateContact` | `/buyerSettings/updateContact`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/buyerSettings/updatePaymentInfo` | `/buyerSettings/updatePaymentInfo`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/settings` | `/settings`; params?: Router.UnknownInputParams; } | { pathname: `/sellerSettings/updateAccountInfo`; params?: Router.UnknownInputParams; } | { pathname: `/sellerSettings/updateBusinessInfo`; params?: Router.UnknownInputParams; } | `/+not-found` | { pathname: `/+not-found`, params: Router.UnknownInputParams & {  } };
    }
  }
}
