class User < ActiveRecord::Base
  has_many :surveys, foreign_key: 'creator_id'
  has_many :questions, through: :surveys
  has_many :answers, through: :questions
end
