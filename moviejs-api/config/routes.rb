Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :actor_movies
      resources :directors
      resources :actors
      resources :movies
    end
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
