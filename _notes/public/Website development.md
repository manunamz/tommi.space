---
date: 2020-02-02
updated: 2020-12-28
tags: geek
permalink: /development
redirect_from: ["/development-roadmap", "/roadmap", "/wip", "/issues", "/improvements", "/dev"]
---
Creative and technical aims, ideas annotation and drafts tracking.

## Not Working

- Algolia search is only in the posts / blog

<br>
<br>

## Content

### WIP

- [Making this website](/themakingof) article
- [[Giri]]
	- opera
	- teatro
	- concerti
	- conferenze
    - Alternanza Scuola-Lavoro
    - date ospiti Giffoni cineforum
    - Incontri Masterclass
    - Film in concorso Giffoni
- [[Playlist]]
- [[Cinema]]
- [[The Slot Philosophy]]
- [[Hebertismo]]
- [[Desk logging]]
- add a “première” section to the [Everyone](/everyone) page
- [[Around the world]]
- [drafts](/tags#draft "everything tagged as “draft”")

<br>

### To be created

- [[Articles ideas]]

<br>
<br>

## Roadmap

Items in the following list are <u>sorted by <b>priority</b></u>. Thus, quick and easy features might be at the bottom but might also be the first ones to be implemented, while the ones at the top might be the most important, but they may require a longer time and harder work to be completed, so they'll be finished later.

1. [implement side-notes](https://www.kooslooijesteijn.net/blog/sidenotes-without-js)
1. SEO
	- Replace [Jekyll SEO Tag](https://jekyll.github.io/jekyll-seo-tag/usage/) with Liquid syntax
2. Configure [jekyll-tagging](https://github.com/pattex/jekyll-tagging) plugin
3. Consider dropping Kramdown for better performance
	- MultiMarkdown?
	- [CommonMark](https://github.com/jekyll/jekyll-commonmark)?
4. The new Jar:
	- show only parent tags / notes
	- an unstyled simple bullet point list
	- show notes graph only
	- index note
		- not working links are because notes are private
		- definition of Zettelkasten / Digital gardening
5. Access tags colors from posts and jar lists (change the color slightly also for every entry which is untagged)
6. **Tags**
		1. Use [jekyll-datapage_gen](https://github.com/avillafiorita/jekyll-datapage_gen) to generate tags pages
		1. Check [this plugin](https://github.com/field-theory/jekyll-tag-pages))
		1. [article 1](https://blog.webjeda.com/jekyll-tags/)
		1. [article 2](https://kylewbanks.com/blog/creating-tag-pages-in-jekyll-without-plugins)
		1. Configure [jTag](https://github.com/ttscoff/jtag)
7. Zettelkasten graph
8. Switch from Algolia to Lunr or to [a simpler and lighter search service](https://project-awesome.org/agarrharr/awesome-static-website-services#search)
	1. [Searchyll](https://github.com/omc/searchyll)?
9. [**Visioni**](/visioni)
	- <https://github.com/maxvoltar/photo-stream>
	- <http://benschwarz.github.io/gallery-css/>
	- Tania Rascia's guide for a [responsive gallery](https://www.taniarascia.com/how-to-build-a-responsive-image-gallery-with-flexbox/)
	- Photo selection
	- horizontal instead of vertical scrolling of the gallery
	- PDF portfolio download
1. A script to check permalinks overlapping
12. Content history
	- now page
	- a timeline like [Jeremy gordon's](https://jgordon.io) or [jack.works](https://web.archive.org/web/20200513054829/http://jack.works/)
14. Add [humans.txt](http://humanstxt.org)
16. Implement little cool Javascript features, from [W3schools](https://www.w3schools.com/howto/ "W3Schools HowTos")
18. [Bookmarked threads](https://talk.jekyllrb.com/u/xplosionmind/activity/bookmarks) on [Jekyll Talk](https://talk.jekyllrb.com/) (Jelyll's forum)
19. [improve sticky header](https://www.w3schools.com/howto/howto_js_sticky_header.asp)
20. Configure global properties in `_config.yml` to perform changes in a quicker way
1. Consider using [Fontless](https://fontless.varld.co "self host fonts")
21. [[Typography]]
	- better reasoned typographic choices
	- [[Typography#Custom Font|Custom Font]]
22. Setup mailing list
	- [listmonk](https://listmonk.app) or [Mailtrain](https://mailtrain.org)
	- [awesome-emails](https://github.com/jonathandion/awesome-emails)
	- [responsive template](https://github.com/leemunroe/responsive-html-email-template)
23. Mailtrain automation with RSS
24. Italian content only RSS Feed
25. Hosting on [[Server]] instead of using [Netlify](https://netlify.com "Netlify official website")
27. **Sorting** / **filtering** (using JavaScript?)
	- in Zibaldone and The Jar: language and tag filter
	- in Books: Sorting
28. Configure [**Webmentions**](https://indieweb.org/Webmention)
	- Follow [Indiewebify](https://indiewebify.me/send-webmentions/)'s guide
	- Setup [Webmention.io](https://webmention.io/)
	- Setup [Bridgy](https://brid.gy/)
29. Stick the menu bar to the bottom instead of sticking it to the top, as in [Humane Tech website](https://humanetech.com "Humane Tech") and [Victoria Drake](https://victoria.dev)
30. Piwigo integration?
31. CSS only [dark/light mode **toggle**](https://youtu.be/b4FBTr5pSgw)
32. Create Jekyll theme
33. Switch to [Hugo](https://gohugo.io "Hugo official website")

<br>
<br>

### Creative ideas

- [Generative Art](http://tholman.com/post/generative-art-speedrun/ "Generative Art on Tim Holman's blog")
    - always-changing colors, see Zander Martineau’s [website](https://zander.wtf/)
- GIFs instead of images 
- Improve `blockquote`s
	- <https://codepen.io/valentingalmand/pen/doJvRR>
	- <https://codepen.io/joshuajcollinsworth/pen/obbvYQ>
	- <https://codepen.io/JoeHastings/pen/MOdRVm>

<br>
<br>

## Done

- Animations (little and simple but effective)
	- buttons: `x`s and menus (see <tokyo-voice.jp> or <traxmag.com>)
- back-to-top button
- basic colored biiig shapes
- Backlinks
- Better [Open Graph Protocol](https://ogp.me/) integration
- Button inner-shadow instead of transform when hovering
- “blogroll”: a list of blogs which inspire me, see [Pawlean](https://pawlean.com/blogroll)
- change mobile browser bar color
- Color Jar items according to the belonging tag
- custom selection color for text
- customize 404 page
- Creative Commons (or, in general, a license) for every image of the site (one for every image or one specified) **FOOTER CC LICENSE**
- tags description and link to stuff
- checkbox styling
- [Convert to **flex**](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- CSS cleanup
- CSV databases (check [this post](https://jekyllrb.com/tutorials/csv-to-table/))
- cursor styling
- final header configuration
- Fix [jekyll-target-blank](https://github.com/keithmifsud/jekyll-target-blank) plugin, which is **NOT WORKING**! See the [related issue](https://github.com/keithmifsud/jekyll-target-blank/issues/51).
- **Get rid of jQuery**: it’s used just in one case and it’s not worth it: downloading it takes around 1.5s of the website loading time. Use pure JavaScript instead ✅ 2020-12-25 **FINALLY** !
- **Global search**
	- [Algolia](https://www.algolia.com/)
		- [jekyll-algolia](https://community.algolia.com/jekyll-algolia/) plugin ([source](https://github.com/algolia/jekyll-algolia))
		- [Algolia for Open Source](https://www.algolia.com/for-open-source/)
	- [Lunr](https://lunrjs.com/)
		- [Lunr setup](https://zoeleblanc.com/blog/adding-search-to-jekyll-sites-with-lunr/) article 1
		- [Lunr setup](https://www.arcath.net/2016/02/setting-up-lunr-js-in-jekyll) article 2
	- [custom](https://nachtimwald.com/2020/06/10/full-text-search-with-jekyll/)
- Hover effects
- `id` anchor links
- `{% raw %}{% if page.tags contains 'draft' %}{% endraw %}` print a banner indicating that the page misses something ✅ 2020-12-25
- Improved and smart use of the `vh` and `vw` units. [A guide](https://css-tricks.com/fun-viewport-units/)
	- `.box` and `.stuff` max heights
- In [Books](/books) add IDs to every row corresponding to the title of the book (I posted [a question about this on the Jekyll forum](https://talk.jekyllrb.com/t/table-data-id-in-tablerow-loop/5398)) (done but to be improved: IDs are generated for every `td`, I think it's necessary to use a for loop instead of a `tablerow` loop). ✅ 2020.12.31
- inline code styling
- input fields styling
- Language selection straight from landing page - 2020.09.11
- language switch
- `letter-spacing` and `word spacing` (it's nice as it is)
- light/dark mode switch button (I'm deep and dark / I'm bright and shiny)
- list of belonging tags at the top of the post page
- Make [about](/about) a page
- Mobile optimisation
- move `stuff extended` to `The Jar`
- [Neumorphism](https://uxdesign.cc/neumorphism-in-user-interfaces-b47cef3bf3a6) **redesign**
	1. Start by smoothing corners
	1. go on by using [this tool](https://neumorphism.io/)
	1. use Eva icons
- [Now page](https://sivers.org/now)
- page image preview when sending link, see the [Open Graph Protocol](https://ogp.me/)
- Poetry
	- section instead of tag
	- custom styling
- Privacy Policy
- RSS Feed
- Self-host media and heavy files on `assets.tommi.space` to make git folder lighter
- separate website/repo/domain for web and online resources or for geek stuff in general (configured as [*The Jar*](/jar))
- Serif font styling in posts
- Share button
- [Share on Jekyll showcase](https://github.com/planetjekyll/showcase/pull/23)
- [*stuff extended*](/tutto)
- SVG buttons
- Switch to **SCSS** for styling
- Switch to [Zettelkasten](/zettelkasten)
	- [git submodules](https://www.taniarascia.com/git-submodules-private-content/)
	- make backlinks optional: insert `if` statement out of the `div` and make the box appear only if at least one backlink is present
	- convert Zetelkasten links to ordinary links 2020.12.12
	- Backlinking~~ 2020.12.03
- [table of contents](https://github.com/allejo/jekyll-toc)
- **Tags**
	- move tags specifications to `_data`
	- in every post, show the tags to which it belongs
	- create unique page for all tags, anchor to choose a single one
		1. Fix some tags which are repeated multiple times
		1. Fix gradient not being displayed as text color (check [CSS Tricks](https://css-tricks.com)' titles on hover)
		1. Display Jar elements in tags list
		1. choose once and for all **`categories`** VS **`tags`** (chose `tags`)
		1. Instead of inlining specific properties, create classes for every tag and create a `for` loop in SCSS accessing `site.data.tags` colors
- `text-shadow` CSS property in titles and in `a:hover` ✅ 2020.12.30
- Thumbnails in Zibaldone's feed ✅ 2020.12.30
- Use `@import` to add fonts instead of linking their CSS reference files in HTML ✅ 2020.12.25
- Use more Emojis ✅ 2020.12.30