!function(){var e=[[300,250]],o=[[728,90]],d=1e3,i={bidder:"appnexus",params:{placementId:16076862}},n={bidder:"conversant",params:{site_id:"125019"}},a=[{code:"sidebar-1",mediaTypes:{banner:{sizes:e}},bids:[i,n]},{code:"sidebar-2",mediaTypes:{banner:{sizes:e}},bids:[i,n]},{code:"leaderboard-1",mediaTypes:{banner:{sizes:o}},bids:[i,n]}];window.googletag=window.googletag||{},window.googletag.cmd=window.googletag.cmd||[],window.googletag.cmd.push(function(){window.googletag.pubads().disableInitialLoad()}),window.pbjs=window.pbjs||{},window.pbjs.que=window.pbjs.que||[];var g=document.getElementById("game-iframe");function s(){window.pbjs.que.push(function(){window.pbjs.addAdUnits(a)}),w()}function t(){window.googletag.cmd.push(function(){window.pbjs.setTargetingForGPTAsync&&window.pbjs.setTargetingForGPTAsync(),window.googletag.pubads().refresh()})}function w(){window.pbjs.que.push(function(){window.pbjs.requestBids({timeout:d,bidsBackHandler:t})})}g?g.addEventListener("load",function(){setTimeout(s,3e3)}):s(),window.googletag.cmd.push(function(){window.googletag.defineSlot("/19968336/header-bid-tag-1",e,"sidebar-1").addService(window.googletag.pubads()),window.googletag.defineSlot("/6355419/Travel/Europe/France/Paris",e,"sidebar-2").addService(window.googletag.pubads()),window.googletag.defineSlot("/19968336/header-bid-tag-3",o,"leaderboard-1").addService(window.googletag.pubads()),window.googletag.pubads().enableSingleRequest(),window.googletag.enableServices()}),setInterval(w,35e3)}();