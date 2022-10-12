class ReviewsController < ApplicationController
rescue_from ActiveRecord::RecordNotFound, with: :not_found_error
wrap_parameters format: []

  def create
    find_book
    @review = Review.create!(review_params)
    @review.user_id = current_user.id
   render json: @review, status: :accepted
  end
  
  def update
    find_book
    @review.update!(review_params)
    render json: @review, status: :accepted
  end

  def destroy
    find_book
    @review.destroy
    head :no_content
  end

  private
  def review_params
    params.permit(:review)
  end
  def find_review
    @review = Review.find(params[:id])
  end

  def find_book
    @book = Book.find(params[:id])
  end
  def not_found_error
    render json: {error: "Review not found"}, status: :not_found
  end
end
