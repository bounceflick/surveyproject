post '/signin' do

  @user = User.where(email: params[:email])
  puts @user
  if !@user.empty?
    session[:id] = @user.id
    redirect "/" #change to user route
  else
    erb :index
  end

end

get '/signup' do

  erb :"users/new"
end

post '/signup' do
  @user = User.new(params)

  if @user.save
    session[:id] = @user.id
    redirect "/user/#{@user.id}" #change to user route
  else
    redirect "/"
  end
end

get '/logout' do
  session[:id] = nil

  redirect "/"
end
