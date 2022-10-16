class ReviewsController < ApplicationController
rescue_from ActiveRecord::RecordNotFound, with: :not_found_error
wrap_parameters format: []

def index
  render json: Review.all
end  

def show
  review = Review.find(params[:id])
  render json: review, status: :ok
end
def create
    find_book
    @review = @book.reviews.create!(review_params)
    #@review.user_id = @current_user.id
   render json: @review, status: :accepted
  end

  def destroy
    @review = Review.find(params[:id])
    @review.destroy
    head :no_content
  end

  private
  def review_params
    params.permit(:review, :book_id, :user_id)
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
