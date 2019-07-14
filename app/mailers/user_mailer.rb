class UserMailer < ApplicationMailer
    def verification_email(user)
        #This is not redundant because you need this for erb files.
        @user = user
        mail(to: @user.email, subject: 'Syzygy: Please verify your account.')
    end

end