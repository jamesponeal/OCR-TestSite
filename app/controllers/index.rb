get '/' do
  erb :index
end

post '/ocr' do
	# use dotenv gem to set API_KEY
	response = RestClient.post "http://api.ocrapiservice.com/1.0/rest/ocr", :language => 'en', apikey: ENV["API_KEY"], :image => File.new(params["image"][:tempfile], 'rb')

  p response

end



# http://ocrapiservice.com/
