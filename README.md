# interactives_starterkit

#### Style guide

Our interactives style guide can be found at [here](https://github.com/DallasMorningNews/interactives_starterkit/blob/master/style-guide/style-guide.md).

#### Ads

The code that runs ads is in the head section of the index.html file. There is code for three ad positions for both large and small screens provided, though the second and third positions are noted out by default. Every interactive should have at least one ad, and if length of the interactive warrants a second and third ad.

To have more than one ad position, you must un-comment out the blocks of code for adSlot1 (the second ad) and adSlot2 (the third ad) in both spots.

Ad blocks have their own html code in the code blocks folders. To include ads, add `{%include "adblock1.html" %}`, `{%include "adblock2.html" %}` and `{%include "adblock3.html" %}` where you want to place them in your `index.html` file.


[HTML TextFixer](http://www.textfixer.com/html/convert-text-html.php)

## Interactives app

The [interactives app](https://github.com/DallasMorningNews/generator-dmninteractives) pulls some files directly from this repo while scaffolding a project directory.

#### templates

The `templates` directory contains Nunjucks templates:
- index.html
- base.html

**Important:** Any changes to the template need to be duplicated across these template files.

#### statics

The app also pulls in static assets:
- theme.scss
- _mixins.scss
- _variables.scss
- customES6.js
- css/components
- furniture.js
- slideshow.js

## Updating the meta.json file

The meta.json file drives many of the metadata aspects of interactive projects, along with setting the proper year and directory for interactives to publish into on AWS. Below is a breakdown of the fields, their formats, and what they are used for. Many of the attributes in this json file are used to populate attributes of various tags in the index.html file. See templating tags in index.html that correspond to keys in the meta.json file.

| Field | Format | Purpose |
|-------|--------|---------|
|id|String|Randomly-generated unique id number for the project. The generator will create one of these for you, but, each page in a project needs a unique id number, so you may have to hand edit any id numbers for additional pages|     
|name|String|Created when the project is initialized using the yeoman generator, this is the name of the directory in which the project will live on AWS|
|pageTitle|String|Populates the page's page title metadata attribute|
|shareTitle|String|Used to set the page's social media card title|
|shareText|String|Used to set the page's social media description text|
|tweetText|String|Used to set the tweet text for the project|
|publishYear|Integer|Year in which project is published|
|publishDate|String|Date and time of publication (example "2020-07-14T12:00:00Z”)|
|url|String|The final url of the project. It's comprised of "https://interactives.dallasnews.com/[[publishYear]]/[[name]]|
|authors|Array of strings|List of author names. Names should match how authors are listed in parsely|
|desk|String|The originating desk (News, Sports, Business, etc)|
|section|String|The section the story would fall in if in Arc. (Crime, Politics, Cowboys, Real Estate, etc)|
|keywords|Array of strings|List of tags for the interactive to be listed under in Parsely “interactives” should always be included, but also whatever tags the story would have had had it been published in Arc|
|imgURL|String|The url of the share image. This should always be found in the images directory of the project|
|imgWidth|String|Width of share image. Should always be “1200”, per facebook’s recommendations|
|imgHeight|String|Height of share image. Should always be “630”, per facebook’s recommendations|
|sectionTwitter|String|The twitter handle of the section story belongs to, without the “@” symbol. dallasnews is a good default, but more section-specific projects should use that section's twitter handle if they have one|
|authorTwitter|String|Author’s twitter handle, without the “@”|
|authorFBProfile|Strin|Url to author’s facebook profile if public. If not, leave as an empty string|
