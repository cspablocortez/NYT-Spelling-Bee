require 'nokogiri'
require 'open-uri'

module SpellingBee
    FILE_PATH = 'puzzles'

    def self.generate_url(year, month, day)
        base_url = 'https://www.nytimes.com'
        path = '/crosswords/spelling-bee-forum.html'
        url = "#{base_url}/#{year}/#{sprintf('%02d', month)}/#{sprintf('%02d', day)}/#{path}"
    end

end