require 'bundler'
Bundler.require()


get '/' do 
	erb :index, :locals => {:active => 'home'}
end

get '/about' do 
	erb :about, :locals => {:active => 'about'}
end

get '/services' do 
	erb :services, :locals => {:active => 'services'}
end