require 'nokogiri'
require 'open-uri'

module SpellingBee
    # USER_AGENT = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36'
    USER_AGENT = 'Mozilla/5.0 (Windows NT 10.0; rv:91.0) Gecko/20100101 Firefox/91.0'
    FILE_PATH = 'puzzles'

    def self.generate_url(year, month, day)
        base_url = 'https://www.nytimes.com'
        path = '/crosswords/spelling-bee-forum.html'
        "#{base_url}/#{year}/#{sprintf('%02d', month)}/#{sprintf('%02d', day)}#{path}"
    end

    def self.download_puzzle_html(url, user_agent) 
        t = Time.new
        file_name = "#{t.year}-#{sprintf('%02d', t.month)}-#{sprintf('%02d', t.day)}.html"
        file_path = "#{FILE_PATH}/#{file_name}"

        begin
            if File.exist?(file_path)
                puts 'File already exists. No need to download again.'
            else
                puts "Fetching #{url}"
                URI.open(url) do |f|
                    content = f.read

                    File.open(file_path, 'w') do |file|
                        file.write(content)
                    end
                
                    puts "Contents saved to #{file_path}"
                end
            end
            file_path
        rescue OpenURI::HTTPError => e
            puts "HTTP Error: #{e.message}"
            return nil
        rescue SocketError => e
            puts "Socket Error: #{e.message}"
            return nil
        rescue Timeout::Error => e
            puts "Timeout Error: #{e.message}"
            return nil
        rescue OpenURI::HTTPRedirect => e
            puts "Redirected, new location: #{e.uri}"
            return nil
        rescue URI::InvalidURIError => e
            puts "Invalid URI: #{e.message}"
            return nil
        rescue StandardError => e
            puts "General error: #{e.message}"
            return nil
        end
    end
    
    def self.get_puzzle(html_file)
        puts "Reading from #{html_file}:"
        html = File.read(html_file)
        data = Nokogiri::HTML(html)
        content_spans = data.css('.content')
        letters = content_spans[1].text.gsub(/[\s\n\r]+/, '').split('').map(&:upcase)
        center_letter = letters.shift
        outer_letters = letters

        puzzle = {
            :center_letter => center_letter,
            :outer_letters => outer_letters
        }
    end
end