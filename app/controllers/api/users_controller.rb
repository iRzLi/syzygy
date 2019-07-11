class Api::UsersController < ApplicationController

    def create 
        user = User.new(user_params)
        if user.save
            login(user)
            render json: ['User Logged In'], status: 200
        else 
            render json: user.errors_full_messages, status: 422
        end
    
    end


    private
    def user_params
        params.require(:user).permit(:email, :password, :first_name, :last_name)
    end
end