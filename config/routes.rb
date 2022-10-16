Rails.application.routes.draw do
  resources :books, only: [:index, :show, :create, :destroy]
 # resources :reviews, only: [:index,:show, :destroy, :post]

  resources :reviews, only: [:index,:show, :destroy]

  post '/signup', to: 'users#create'
  get '/me', to: 'users#show'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  post '/books/:id/reviews', to: 'reviews#create'
  
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  
  get '/',
  to: 'fallback#index',
  constraints: ->(req) { !req.xhr? && req.format.html? }
end
