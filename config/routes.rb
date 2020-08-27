Rails.application.routes.draw do
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
  resources :products, only: [:index, :show] 
    # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  
end
