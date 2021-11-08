class Person < ApplicationRecord
    has_many :reunions
    has_many :parks, through: :reunions
end
