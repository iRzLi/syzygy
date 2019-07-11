class SessionsController < ApplicationController

    def create 
        user = User.find_by_credentials(session_params[:email], session_params[:password])

        if user
            login(user)
            render json: ['User logged in'], status: 200
        else 
            render json: ['Log in failed'], status: 422
        end
    end


    def destroy
        logout
    end

    private
    def session_params
        params.require(:user).permit(:email, :password)
    end
end