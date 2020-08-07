Rails.application.routes.draw do
  devise_for :users
  root 'items#index'
  #root to 'products#show' do
  resources :products, only: [:index, :show] do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  end
end
