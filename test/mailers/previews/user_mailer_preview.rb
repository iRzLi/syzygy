class UserMailerPreview < ActionMailer::Preview 
    def verification_email 
        UserMailer.verification_email(User.first)
    end
end