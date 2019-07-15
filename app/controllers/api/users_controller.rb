class Api::UsersController < ApplicationController
    def create 
        user = User.new(user_params)
        if user.save
            login(user)
            UserMailer.verification_email(user).deliver_later
            render json: ['User Logged In'], status: 200
        else 
            render json: user.errors_full_messages, status: 422
        end
    
    end

    def email_confirmation
        user = User.find_by_confirm_token(params[:token])
        if user 
            user.validate_account 
            render json: ['Account activated'], status: 200
        else 
            render json: ['Token for account is not valid'], status: 422
        end 
    end

    private
    def user_params
        params.require(:user).permit(:email, :password, :first_name, :last_name)
    end
end