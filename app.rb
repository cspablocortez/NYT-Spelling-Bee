require 'sinatra'
require_relative 'lib/spelling_bee'

get '/' do
    t = Time.new
    url = SpellingBee.generate_url(t.year, t.month, t.day)
    html = SpellingBee.download_puzzle_html(url)

    section_error = erb :error, layout: false
    section_date = erb :date, layout: false

    if html.nil?
        erb "#{section_date}#{section_error}", layout: true
    else
        @puzzle = SpellingBee.get_puzzle(html)
        section_puzzle = erb :puzzle, layout: false
        erb "#{section_date}#{section_puzzle}", layout: true
    end

    
end