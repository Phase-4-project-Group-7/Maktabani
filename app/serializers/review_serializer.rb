class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :book_id, :review
  belongs_to :book
end
