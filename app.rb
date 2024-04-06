require 'sinatra'
require_relative 'lib/spelling_bee'

get '/' do
    t = Time.new.getlocal('-07:00')
    puts "Current time: #{t.ctime}"
    url = SpellingBee.generate_url(params['year'], params['month'], params['day'])
    puts "Generated URL: #{url}"

    html = SpellingBee.download_puzzle_html(url)

    @puzzle = SpellingBee.get_puzzle(html)
    erb :puzzle
end

get '/puzzle/:year/:month/:day' do
    "You reached #{params['year']}/#{params['month']}/#{params['day']}"
end