class User < ActiveRecord::Base
  has_many :surveys, foreign_key: 'creator_id'
  has_many :questions, through: :surveys
  has_many :answers, through: :questions

  validates_format_of :email, :with => /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\Z/i, :on => :create
  validates :name, :password_hash, :email, presence: true

  validates :email, uniqueness: true

  include BCrypt

  def password
    @password ||= Password.new(password_hash)
  end

  def password=(new_password)
    @password = Password.create(new_password)
    self.password_hash = @password
  end

  def authenticate(password)
    self.password == password
  end

end
