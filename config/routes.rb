Rails.application.routes.draw do
  get 'products/index'
  get 'users/profile'
  devise_for :users, controllers: {
    sessions: 'users/sessions',
    # omniauth_callbacks: 'users/omniauth_callbacks',
    registrations: 'users/registrations'
    }
  devise_scope :user do
    get 'addresses', to: 'users/registrations#new_address'
    post 'addresses', to: 'users/registrations#create_address'
  end
  root 'products#index'

end
  resources :products, only: [:index,:show,:create]

  resources :users, only: [:show, :edit, :update]do
    member do
      get 'profile'
      patch 'profile_update'
      get 'logout'
    end
  end
    ##collection do
    ##  get 'ready'
    ##end
    ##end
    ##namespace :products do
    ##resources :searches, only: [:index,:show]
    ##
    end

