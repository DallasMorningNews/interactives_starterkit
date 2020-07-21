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

The meta.json file drives many of the metadata aspects of interactive projects, along with setting the proper year and directory for interactives to publish into on AWS. Below is a breakdown of the fields, their formats, and what they are used for.

| Field | Format | Purpose |
|-------|--------|---------|


"id": randomly-generated unique id number for the project (string)
 "name": project name (string) which assigns the directory the project lives in on AWS. 
 "pageTitle": text of projects page title meta tag (string)
 "shareTitle": text for social media share card titles (string)
 "shareText": text for social media share text (string)
 "tweetText": text for tweets (string)
 "publishYear": year in which project is published (integer)
 "publishDate": date and time of publication, string (example ‘2020-07-14T12:00:00Z”)
 "url": the final url of the project. (string),
 "authors": comma separated array of author names. Author names should match how they are in parsely,
 "desk": the originating desk (news, sports, business, etc) (string)
 "section": the section (crime, politics, cowboys, real estate, etc) (string),
 "keywords": comma separated array of keywords. “Interactives” should always be included, but also whatever tags the story would have had had it been published in Arc. 
 "imgURL": The url of the share image. This should always be found in the images directory of the project (string)
 "imgWidth": width of share image. Should always be “1200”, per facebook’s recommendations (string),
 "imgHeight": height of share image. Should always be “630”, per facebook’s recommendations (string),
 "sectionTwitter": the twitter handle of the section story belongs to, without the “@” symbol. dallasnews is a good default (string),
 "authorTwitter": author’s twitter handle, without the “@” (string),
 "authorFBProfile": url to author’s facebook profile if public. If not, leave as an empty string (string)
