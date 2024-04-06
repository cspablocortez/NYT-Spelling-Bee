require 'nokogiri'
require 'open-uri'

module SpellingBee
    FILE_PATH = 'puzzles'
    USER_AGENT = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.102 Safari/537.36'

    def self.generate_url(year, month, day)
        base_url = 'https://www.nytimes.com'
        path = 'crosswords/spelling-bee-forum.html'
        url = "#{base_url}/#{year}/#{sprintf('%02d', month)}/#{sprintf('%02d', day)}/#{path}"
    end

    def self.download_puzzle_html(url)
        t = Time.new
        file_name = "#{t.year}-#{sprintf('%02d', t.month)}-#{sprintf('%02d', t.day)}.html"
        file_path = "#{FILE_PATH}/#{file_name}"

        Dir.mkdir(FILE_PATH) unless Dir.exist?(FILE_PATH)

        if File.exist?(file_path)
            puts 'File already exists. No need to download again.'
        else
            puts "Fetching #{url}"
            URI.open(url, 'User-Agent' => USER_AGENT) do |f|
                content = f.read

                File.open(file_path, 'w') do |file|
                    file.write(content)
                end

                puts "Contents saved to #{file_path}."
            end
        end
        return file_path
    end

end