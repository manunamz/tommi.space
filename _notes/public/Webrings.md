---
date: 2021-05-25T17:26:38+02:00
updated: 2021-05-25T17:26:38+02:00
tags: geek
description: Webrings this website belongs to
redirect_from: [/wr,/wrs]
toc: false
image: https://tommi.space/logos/webrings.svg
---
Webrings this website belongs to:

<ul>
	{% for w in site.data.webrings %}
		{% if w.joined %}
			<li><a href='{{ w.url }}' target='_blank' title='{{ w.name }}'>{{ w.name }}</a>, joined on {{ w.joined | date_to_long_string }}</li>
		{% endif %}
	{% endfor %}
</ul>

<br>
<br>

Webrings I am interested in:

<ul>
	{% for w in site.data.webrings %}
		<li><a href='{{ w.url }}' target='_blank' title='{{ w.name }}'>{{ w.name }}</a>, joined on {{ w.joined | date_to_long_string }}</li>
	{% endfor %}
</ul>
