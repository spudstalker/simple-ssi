# Simple SSI Site

This is a small example website using Server-Side Includes for including
a header and footer.

Use it as a starting point or to inspect.

## Installation

This setup uses <kbd>nginx</kbd>, but any server supporting SSI works.

    git clone https://github.com/spudstalker/simple-ssi.git ~/ssi

Inspect or edit the files, and then:

    sudo vi /etc/nginx/nginx.conf

For debian or other systems, check `/etc/nginx/sites-available`.

Set document directory:

    location / {
		root /home/<USER>/ssi;
		index index.html index.htm;
		ssi on;
	}

... and start:

    sudo nginx
