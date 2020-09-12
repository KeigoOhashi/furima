Rails.application.routes.draw do
  get 'products/buy'
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
    get 'creditcards', to: 'users/registrations#new_creditcard'
    post 'creditcards', to: 'users/registrations#create_creditcard'
  end
  root 'products#index'

  resources :products, only: [:index,:new,:show,:create]do
  
    resources :users, only: [:show, :edit, :update]do
      member do
        get 'profile'
        patch 'profile_update'
        get 'logout'
      end
    end
  resources :products do
    member do
      post 'purchase'
      get 'purchased'
      get 'buy'
      get 'reserve'
      patch 'reserved'
      patch 'reserve_cancel'
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
end
