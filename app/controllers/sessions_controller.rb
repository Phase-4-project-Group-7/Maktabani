class SessionsController < ApplicationController

  def create
    user = User.find_by(username: params[:username])
    if user&.aunthenticate(params[:password])
      session[:user_id] = user.id
      render json: user, status: :created
    else 
      render json: {errors: ["invalid username or password"]}, status: :unauthorized
  end

  def destroy
    session.delete :user_id 
    head :no_content
  end

end