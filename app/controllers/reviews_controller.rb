class ReviewsController < ApplicationController
rescue_from ActiveRecord::RecordNotFound, with: :not_found_error
wrap_parameters format: []

  def create
    find_book
    @review = @book.reviews.create!(user_params)
   render json: @review, status: :accepted
  end
  

  def update
    find_review
    @review.update!(user_params)
    render json: @review, status: :accepted
  end

  def destroy
    find_review
    @review.destroy
    head :no_content
  end

  private
  def user_params
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
