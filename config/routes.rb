Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'


  namespace :api,  defaults: {format: 'json'} do 
    resources :users, only: [:create] 
    get '/users/email_confirmation/:confirmation_token', to: 'users#email_confirmation'

    resource :session, only: [:create, :destroy]
  end


end
