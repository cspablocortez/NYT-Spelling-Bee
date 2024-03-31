require 'nokogiri'
require 'open-uri'

module SpellingBee

    def self.generate_url(year, month, day)
        base_url = 'https://nytimes.com'
        path = '/crosswords/spelling-bee-forum.html'
        # TODO: GET URL BASED ON DATE
end