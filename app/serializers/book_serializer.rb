class BookSerializer < ActiveModel::Serializer
  attributes :id, :name, :author, :category
end
