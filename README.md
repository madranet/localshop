# This is a Local Shop for Local People!

![localshop](https://github.com/madranet/localshop/assets/669658/b9a25fb8-d8f7-4a4f-bb06-d1417395bea2)


This is a simple script for use in Greasemonkey, Violentmonkey &lt;whatever&gt;monkey, which will reload the results page when you've searched for anything on eBay UK so it only shows results from UK. 

It drives me insane that eBay defaults to showing results from all over the globe whenever you search. Like I'm going to ask someone to post me a fucking car from America or a bloody fridge from Australia! And, being eBay, there's no way to change this by setting a preference or suchlike to only show local listings by default. Because eBay hates you and wants to piss you off.

All this script does is append the `&LH_PrefLoc=1` parameter to the search results page URL and then reloads the page, so you only see results from UK. I've not tested it with any other eBay sites but I'd imagine that parameter is universal. So you can probably just swap the listing results page URL in the `@match` section at the top, to make it work on your own country's eBay site.

TLDR: Fuck you eBay.
