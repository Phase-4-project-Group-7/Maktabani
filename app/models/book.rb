class Book < ApplicationRecord
    has_many :reviews, dependent: :destroy
    has_many :users, through: :reviews
    validates :name, uniqueness: true, presence: true
end
