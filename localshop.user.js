// ==UserScript==
// @name        This is a Local Shop for Local People
// @namespace   Violentmonkey Scripts
// @match       https://www.ebay.co.uk/sch/i.html
// @grant       none
// @version     1.0
// @author      madra.net
// @license     GNU GPLv3
// @description A simple script to reload eBay UK listing pages to only show you results from your UK.
// Annoyingly, no matter how many times you select "UK Only"  eBay defaults to showing international
// listings each time you search. This script will reload the search listing result page and append the
// appropriate parameter to the URL to show onky UK resutls. Obviously only tested with eBay UK. Shoule
// be trivial enough to adapt to your own local eBay.
// ==/UserScript==

var oldURL  = window.location;



/*--- Test if location UK only is in URL. ie ""&LH_PrefLoc=1 */

if ( ! /&LH_PrefLoc=1/.test (oldURL) ) {

    var newURL  = window.location+ "&LH_PrefLoc=1";
    /*-- reload window with updated URL. */
    window.location.replace (newURL);
}
