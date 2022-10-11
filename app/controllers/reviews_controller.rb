class ReviewsController < ApplicationController

  def create
    review = @current_user.review.create!(:review_params)
    render json: review, status: :created
  end

  def update
    review = find(params[:id])
    review.update!(:user_params)
    render json: review, status: :accepted
  end

  def destroy
    review = find(params[:id])
    review.destroy
    head :no_content
  end

end
