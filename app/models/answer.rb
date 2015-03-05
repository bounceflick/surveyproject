class Answer < ActiveRecord::Base
  belongs_to :question
  belongs_to :taker, class_name: 'User', foreign_key: 'taker_id'
end
