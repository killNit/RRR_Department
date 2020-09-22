class Section < ApplicationRecord
  has_many :items, dependent: :destroy
end
