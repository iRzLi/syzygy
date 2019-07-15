# == Schema Information
#
# Table name: users
#
#  id                :bigint           not null, primary key
#  email             :string           not null
#  password_encrypt  :string           not null
#  session_token     :string           not null
#  first_name        :string           not null
#  last_name         :string           not null
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#  validated_account :boolean          default(FALSE)
#  confirm_token     :string
#

class User < ApplicationRecord
    validates :email, :password_encrypt, :session_token, presence: true, uniqueness: true
    validates :email, :format => /@/
    validates :first_name, :last_name, presence: true
    validates :password, length: {minimum: 8}, allow_nil: true

    attr_accessor :password
    
    before_create :create_email_token
    after_initialize :ensure_session_token

    def self.find_by_credentials(email, password)
        user = User.find_by_email(email)
        return unless user 
        return user if BCrypt::Password.new(user.password_encrypt).is_password?(password)
    end

 

    def password=(password)
        @password = password 
        self.password_encrypt = BCrypt::Password.create(password)
    end


    def ensure_session_token 
        self.session_token = SecureRandom::urlsafe_base64
    end

    def create_email_token
        self.confirm_token = SecureRandom::urlsafe_base64
    end

    def reset_session_token
        self.session_token = SecureRandom::urlsafe_base64
        self.save!
        self.session_token
    end

    def validate_account
        self.validated_account = true
        self.confirm_token = nil
        self.save! 
    end

end

