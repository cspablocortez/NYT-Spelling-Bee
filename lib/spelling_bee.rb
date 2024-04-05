require 'nokogiri'
require 'open-uri'

module SpellingBee
    FILE_PATH = 'puzzles'
    USER_AGENT = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.102 Safari/537.36'

    def self.generate_url(year, month, day)
        base_url = 'https://www.nytimes.com'
        path = '/crosswords/spelling-bee-forum.html'
        url = "#{base_url}/#{year}/#{sprintf('%02d', month)}/#{sprintf('%02d', day)}/#{path}"
    end

end