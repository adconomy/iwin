!function(){var e,o=window.document,n=[[300,250]],t=[[728,90]],d={PREBID_TIMEOUT:2e3,AD_LOAD_DELAY:3e3,REFRESH_RATE:35e3,VIEWABLE_PERCENTAGE:.51},i={bidder:"appnexus",params:{placementId:16076862}},a={bidder:"conversant",params:{site_id:"www.download-free-games.com"===o.location.hostname?"125068":"125019"}},g={bidder:"rubicon",params:{accountId:"21012",siteId:"265104",zoneId:"1312084"}},s={bidder:"onedisplay",params:{placement:"5096805",network:"11682.1"}},r=(e=s,JSON.parse(JSON.stringify(e)));r.params.placement="5096807";var w=[{code:"sidebar-1",mediaTypes:{banner:{sizes:n}},bids:[i,a,g,s]},{code:"sidebar-2",mediaTypes:{banner:{sizes:n}},bids:[i,a,g,s]},{code:"leaderboard-1",mediaTypes:{banner:{sizes:t}},bids:[i,a,g,r]}],l={buckets:[{min:0,max:20,increment:.05}]};window.googletag=window.googletag||{},window.googletag.cmd=window.googletag.cmd||[],window.googletag.cmd.push(function(){window.googletag.pubads().disableInitialLoad()}),window.pbjs=window.pbjs||{},window.pbjs.que=window.pbjs.que||[];var m=o.getElementById("game-iframe");m?m.addEventListener("load",function(){setTimeout(u,d.AD_LOAD_DELAY)}):u();var c={top:0,left:0,right:o.documentElement.clientWidth,bottom:o.documentElement.clientHeight};function u(){window.pbjs.que.push(function(){window.pbjs.addAdUnits(w),window.pbjs.setConfig({priceGranularity:l})}),p()}function p(){window.pbjs.que.push(function(){var e=window.googletag.pubads().getSlots().filter(function(e){return function(e){var n=o.getElementById(e);if(!n)return!1;var t=n.getBoundingClientRect();if(!t||0===t.height||0===t.width)return!1;var i=Math.max(c.left,t.left),a=Math.max(c.top,t.top);return(Math.min(c.right,t.right)-i)*(Math.min(c.bottom,t.bottom)-a)/(t.height*t.width)>=d.VIEWABLE_PERCENTAGE}(e.getSlotElementId())}),n=e.map(function(e){return e.getSlotElementId()});window.pbjs.requestBids({timeout:d.PREBID_TIMEOUT,adUnitCodes:n,bidsBackHandler:function(){window.googletag.cmd.push(function(){window.pbjs.setTargetingForGPTAsync&&window.pbjs.setTargetingForGPTAsync(n),window.googletag.pubads().refresh(e),window.onAdconomyRender&&window.onAdconomyRender()})}})})}window.googletag.cmd.push(function(){window.googletag.defineSlot("/49790083/html5_game_companion_A_300x250",n,"sidebar-1").addService(window.googletag.pubads()),window.googletag.defineSlot("/49790083/html5_game_companion_B_300x250",n,"sidebar-2").addService(window.googletag.pubads()),window.googletag.defineSlot("/49790083/html5_game_leaderboard_728x90",t,"leaderboard-1").addService(window.googletag.pubads()),window.googletag.pubads().enableSingleRequest(),window.googletag.enableServices()}),setInterval(p,d.REFRESH_RATE)}();