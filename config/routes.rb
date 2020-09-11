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
    get 'creditcards', to: 'users/registrations#new_creditcard'
    post 'creditcards', to: 'users/registrations#create_creditcard'
  end
  root 'products#index'

  resources :products, only: [:index,:new,:show,:edit,:create]do
   # #Ajaxで動くアクションのルートを作成
   # collection do
   #   get 'get_category_children', defaults: { format: 'json' }
   #   get 'get_category_grandchildren', defaults: { format: 'json' }
   # end
  end

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

    ##end
end
