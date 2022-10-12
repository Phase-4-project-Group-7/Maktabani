class BooksController < ApplicationController
rescue_from ActiveRecord::RecordNotFound, with: :not_found_error
wrap_parameters format: []
    def index
        render json: Book.all
      end
    
      def show
        find_book
        render json: @book
      end
    
      post create
        @book = Book.create!(params)
        render json: @book, status: :created
      end
    
      def update
        find_book
        @book.update!(params)
        render json: @book, status: :accepted
       end
    
      def destroy
        find_book
          @show.destroy
          head :no_content
      end
    
      private
      def find_book
        @book = Book.find(params[:id])
      end
      def params
        params.permit(:name, :author, :category)
      end    
      def not_found_error
        render json: {error: "Book not found"}, status: :not_found
      end

end
