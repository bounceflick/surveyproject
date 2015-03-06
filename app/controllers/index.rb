get '/' do
  erb :index
end

get '/user/:id' do
  @all_surveys = Survey.all
  erb :profile
end 

get '/surveys/:id' do 
  "You got to the survey page but we need an erb"
end

