class Park < ApplicationRecord
    has_many :reunions
    has_many :people, through: :reunions
end
