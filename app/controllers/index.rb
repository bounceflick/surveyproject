get '/' do
  erb :index
end

get '/user/:id' do
  @all_surveys = Survey.all
  erb :profile
end 

get '/surveys/:id' do 
  "You got to "
end

