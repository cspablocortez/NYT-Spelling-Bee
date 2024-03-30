require 'sinatra'
require_relative 'lib/spelling_bee'

get '/' do
    t = Time.new
    url = SpellingBee.generate_url(t.year, t.month, t.day)
    @puzzle = SpellingBee.get_puzzle(url, SpellingBee::USER_AGENT)

    section_date = erb :date, layout: false
    section_puzzle = erb :puzzle, layout: false
    erb "#{section_date}#{section_puzzle}", layout: true
end