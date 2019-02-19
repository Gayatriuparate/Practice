class Event < ActiveRecord::Base
    validates_presence_of :title, :description
    has_many :users, dependent: :destroy
end
