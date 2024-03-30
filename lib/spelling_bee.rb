module SpellingBee
    USER_AGENT = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36'
    
    def self.generate_url(year, month, day)
        base_url = 'https://www.nytimes.com'
        path = '/crosswords/spelling-bee-forum.html'
        "#{base_url}/#{year}/#{sprintf('%02d', month)}/#{sprintf('%02d', day)}#{path}"
    end
    
    def self.get_puzzle(url, user_agent)
        puts "Fetching #{url} with User Agent:\n#{user_agent}"
        # New Fetch URL method from this module --check for errors as well and return information on the front end about that.
        puzzle = {
            :center_letter => 'A',
            :outer_letters => ['B', 'C', 'D', 'E', 'F', 'G']
        }
    end
end