class ApplicationController < ActionController::Base
    helper_method :login?, :enforce_login, :current_user

    def current_user 
        @current_user ||= User.find_by_session_token(session[:session_token])
    end

    def login?
        !!current_user
    end

    def login(user)
        @current_user = user
        session[:session_token] = user.reset_session_token
    end

    def logout
        current_user.reset_session_token
        session[:session_token] = nil
        current_user = nil        
    end

    def enforce_login
        render json: ['Require Authentication Token'], status: 403 unless login?
    end
end
