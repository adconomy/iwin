!function(){var e,o=window.document,n=[[300,250]],d=[[728,90]],t={PREBID_TIMEOUT:2e3,AD_LOAD_DELAY:3e3,REFRESH_RATE:35e3,VIEWABLE_PERCENTAGE:.51},i="www.download-free-games.com"===o.location.hostname,a={bidder:"appnexus",params:{placementId:i?16416296:16076862}},r={bidder:"conversant",params:{site_id:i?"125068":"125019"}},s={bidder:"rubicon",params:{accountId:"21012",siteId:i?"270904":"265104",zoneId:i?"1349036":"1312084"}},g={bidder:"onedisplay",params:{placement:i?"5117249":"5096805",network:"11682.1"}},w={bidder:"medianet",params:{cid:"8CU7MDXB0",crid:"687327713"}},l=f(g);l.params.placement=i?"5117248":"5096807";var m=f(w);m.params.crid="925789351",f(r).params.mimes=["video/mp4"];var c=[{code:"sidebar-1",mediaTypes:{banner:{sizes:n}},bids:[a,r,s,g,w]},{code:"sidebar-2",mediaTypes:{banner:{sizes:n}},bids:[a,r,s,g,w]},{code:"leaderboard-1",mediaTypes:{banner:{sizes:d}},bids:[a,r,s,l,m]},{code:"video-container",mediaTypes:{video:{context:"outstream",playerSize:[640,480]}},renderer:{url:".",render:function(e){window.setVast(e.vastUrl),window.requestAds()}},bids:[{bidder:"appnexus",params:{placementId:13232385,video:{skippable:!0,playback_method:["auto_play_sound_off"]}}}]}],p={buckets:[{min:0,max:20,increment:.05}]};window.googletag=window.googletag||{},window.googletag.cmd=window.googletag.cmd||[],window.googletag.cmd.push((function(){window.googletag.pubads().disableInitialLoad()})),window.pbjs=window.pbjs||{},window.pbjs.que=window.pbjs.que||[];var u=o.getElementById("game-iframe");u?u.addEventListener("load",(function(){setTimeout(E,t.AD_LOAD_DELAY)})):E();var b={top:0,left:0,right:o.documentElement.clientWidth,bottom:o.documentElement.clientHeight};function f(e){return JSON.parse(JSON.stringify(e))}function E(){window.pbjs.que.push((function(){window.pbjs.addAdUnits(c),window.pbjs.setConfig({priceGranularity:p})})),h()}function h(){window.googletag.cmd.push((function(){window.pbjs.que.push((function(){var n=window.googletag.pubads().getSlots().filter((function(e){return function(e){var n=o.getElementById(e);if(!n)return!1;var d=n.getBoundingClientRect();if(!d||0===d.height||0===d.width)return!1;var i=Math.max(b.left,d.left),a=Math.max(b.top,d.top);return(Math.min(b.right,d.right)-i)*(Math.min(b.bottom,d.bottom)-a)/(d.height*d.width)>=t.VIEWABLE_PERCENTAGE}(e.getSlotElementId())})),d=n.map((function(e){return e.getSlotElementId()})),i=!!document.getElementById("video-container");window.pbjs.requestBids({timeout:t.PREBID_TIMEOUT,adUnitCodes:i?["video-container"]:d,bidsBackHandler:function(){if(i){clearInterval(e);var o=pbjs.getHighestCpmBids("video-container");o[0]?pbjs.renderAd(document,o[0].adId):window.noVastAvailable&&window.noVastAvailable()}else window.googletag.cmd.push((function(){window.pbjs.setTargetingForGPTAsync&&window.pbjs.setTargetingForGPTAsync(d),window.googletag.pubads().refresh(n),window.onAdconomyRender&&window.onAdconomyRender()}))}})}))}))}window.googletag.cmd.push((function(){window.googletag.defineSlot("/49790083/html5_game_companion_A_300x250",n,"sidebar-1").addService(window.googletag.pubads()),window.googletag.defineSlot("/49790083/html5_game_companion_B_300x250",n,"sidebar-2").addService(window.googletag.pubads()),window.googletag.defineSlot("/49790083/html5_game_leaderboard_728x90",d,"leaderboard-1").addService(window.googletag.pubads()),window.googletag.pubads().enableSingleRequest(),window.googletag.enableServices()})),e=setInterval(h,t.REFRESH_RATE)}();
//# sourceMappingURL=adconomy-min-test.js.map