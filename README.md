# iwin
Public repo for dynamic output.

  - `adconomy-min.js` - Minified configuration file for ads setup.  Will change depending on whether timings or ad networks are updated. Ideally loaded with [`<script defer />`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script#attr-defer) for best performance and to allow for the game iframe to complete loading before the ads begin.
  - `adconomy-min.js.map` - Source map for the above file to help with debugging.
  - `ads.txt` - For use by ad networks, to be served via the root domain.
  - `example.html` - Full example page with responsive styles, prebid, ad refreshing.
  - `prebid.js` - Custom built `prebid.js` lib with only the adapters required for current ad networks.

## Callback

If the wrapping page defines a globally scoped `onAdconomyRender` function, it will be called whenever ads are shown on the page.

This can be useful for sending beacons or analytics needed for third party revenue tracking.

An example of this callback is present in the [`example.html`]('example.html#L83-L88') page.