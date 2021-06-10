---
date: 2021-05-28T22:53:04.011867+02:00
updated: 2021-05-28T22:53:04.011867+02:00
tags: meta geek/apps
description: 'The tool I build this website with'
---
## Features requests

- Instead of {% raw %}`{% for movie in site.data.watchlist %}`{% endraw %} geting data from the URL of a file at build time, for example {% raw %}`{% for movie in 'https://cloud.publiclink.net/watchlist.csv' %}`{% endraw %}. This should work for data files (YAML, CSV, JSON) but it could also work for partials: {% raw %}`{% include 'https://example.com/partials/head.html' %}`{% endraw %}.