!function(){var e=[[300,250]],o=[[728,90]],n={PREBID_TIMEOUT:2e3,AD_LOAD_DELAY:3e3,REFRESH_RATE:35e3,VIEWABLE_PERCENTAGE:.51},t={bidder:"appnexus",params:{placementId:16076862}},d={bidder:"conversant",params:{site_id:"125019"}},i={bidder:"rubicon",params:{accountId:"21012",siteId:"265104",zoneId:"1312084"}},a={bidder:"onedisplay",params:{placement:"5096805",network:"11682.1"}},g=Object.assign({},a);g.params.placement="5096807";var s=[{code:"sidebar-1",mediaTypes:{banner:{sizes:e}},bids:[t,d,i,a]},{code:"sidebar-2",mediaTypes:{banner:{sizes:e}},bids:[t,d,i,a]},{code:"leaderboard-1",mediaTypes:{banner:{sizes:o}},bids:[t,d,i,g]}],r={buckets:[{min:0,max:20,increment:.05}]};window.googletag=window.googletag||{},window.googletag.cmd=window.googletag.cmd||[],window.googletag.cmd.push(function(){window.googletag.pubads().disableInitialLoad()}),window.pbjs=window.pbjs||{},window.pbjs.que=window.pbjs.que||[];var w=document.getElementById("game-iframe");w?w.addEventListener("load",function(){setTimeout(c,n.AD_LOAD_DELAY)}):c();var l=window.document,m={top:0,left:0,right:l.documentElement.clientWidth,bottom:l.documentElement.clientHeight};function c(){window.pbjs.que.push(function(){window.pbjs.addAdUnits(s),window.pbjs.setConfig({priceGranularity:r})}),u()}function u(){window.pbjs.que.push(function(){var e=window.googletag.pubads().getSlots().filter(function(e){return function(e){var o=l.getElementById(e);if(!o)return!1;var t=o.getBoundingClientRect();if(!t||0===t.height||0===t.width)return!1;var d=Math.max(m.left,t.left),i=Math.max(m.top,t.top);return(Math.min(m.right,t.right)-d)*(Math.min(m.bottom,t.bottom)-i)/(t.height*t.width)>=n.VIEWABLE_PERCENTAGE}(e.getSlotElementId())}),o=e.map(function(e){return e.getSlotElementId()});window.pbjs.requestBids({timeout:n.PREBID_TIMEOUT,adUnitCodes:o,bidsBackHandler:function(){window.googletag.cmd.push(function(){window.pbjs.setTargetingForGPTAsync&&window.pbjs.setTargetingForGPTAsync(o),window.googletag.pubads().refresh(e),window.onAdconomyRender&&window.onAdconomyRender()})}})})}window.googletag.cmd.push(function(){window.googletag.defineSlot("/49790083/html5_game_companion_A_300x250",e,"sidebar-1").addService(window.googletag.pubads()),window.googletag.defineSlot("/49790083/html5_game_companion_B_300x250",e,"sidebar-2").addService(window.googletag.pubads()),window.googletag.defineSlot("/49790083/html5_game_leaderboard_728x90",o,"leaderboard-1").addService(window.googletag.pubads()),window.googletag.pubads().enableSingleRequest(),window.googletag.enableServices()}),setInterval(u,n.REFRESH_RATE)}();