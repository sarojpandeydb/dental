window.CSbuttons=window.CSbuttons||{},CSbuttons.cache={shareButtons:$(".social-sharing")},CSbuttons.init=function(){CSbuttons.socialSharing()},CSbuttons.socialSharing=function(){var t=CSbuttons.cache.shareButtons,a=t.attr("data-permalink"),n=t.find("a").addClass("tester"),e=(t.find("span.share-count"),$(".share-facebook")),s=$(".share-twitter"),o=$(".share-pinterest"),c=$(".share-google");e.length&&$.getJSON("https://graph.facebook.com/?id="+a+"&callback=?",function(t){t.shares?e.find(".share-count").text(t.shares).addClass("is-loaded"):e.find(".share-count").remove()}),s.length&&$.getJSON("https://cdn.api.twitter.com/1/urls/count.json?url="+a+"&callback=?",function(t){t.count>0?s.find(".share-count").text(t.count).addClass("is-loaded"):s.find(".share-count").remove()}),o.length&&$.getJSON("https://api.pinterest.com/v1/urls/count.json?url="+a+"&callback=?",function(t){t.count>0?o.find(".share-count").text(pinShares).addClass("is-loaded"):o.find(".share-count").remove()}),c.length&&c.find(".share-count").addClass("is-loaded"),n.on("click",function(t){t.preventDefault();var a=$(this),n=a.attr("class").replace("-","_"),e=a.attr("href"),s=700,o=400;switch(n){case"share-twitter":o=300;break;case"share-fancy":s=480,o=720;break;case"share-google":s=500}window.open(e,n,"width="+s+", height="+o)})},$(document).ready(function(){window.CSbuttons.init()});