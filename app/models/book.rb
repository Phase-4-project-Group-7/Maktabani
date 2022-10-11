class Book < ApplicationRecord
    has_many :reviews
    has_many :users, through: :reviews
    validates :name, uniqueness: true, presence: true
    validates :category, presence: true
end
