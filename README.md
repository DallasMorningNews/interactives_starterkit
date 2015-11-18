# interactives_starterkit


####Ads

The code that runs ads is in the head section of the index.html file. There is code for three ad positions for both large and small screens provided, though the second and third positions are noted out by default. Every interactive should have at least one ad, and if length of the interactive warrants a second and third ad.

To have more than one ad position, you must un-comment out the blocks of code for adSlot1 (the second ad) and adSlot2 (the third ad) in both spots.

Ad blocks have their own html code in the code blocks folders. ad-blockTop is the first ad, ad-blockMiddle the second, and ad-blockBottom the third.

[HTML TextFixer](http://www.textfixer.com/html/convert-text-html.php)

[TheShrinkRay](http://theshrinkray.herokuapp.com/)

## Interactives app

The [interactives app](https://github.com/DallasMorningNews/generator-dmninteractives) pulls some files directly from this repo while scaffolding a project directory.

#### templates

The `templates` directory contains Nunjucks templates:
- index.html
- base.html

**Important:** Any changes to the template need to be duplicated across these template files and the `index.html` in this repo's outer directory.

#### statics

The app also pulls in static assets: 
- theme.scss
- _mixins.scss
- _variables.scss
- customJS.js
