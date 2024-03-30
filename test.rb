require_relative 'lib/spelling_bee'

t = Time.new
url = 'https://gist.githubusercontent.com/cspablocortez/3660f9c00d12bbce01f74104491cb642/raw/d4fb43deef47f4b7d6eb9a1d56a06aa11f7e909a/2024-29-03.html'

html = SpellingBee.fetch_html(url, SpellingBee::USER_AGENT)
p html # => nil