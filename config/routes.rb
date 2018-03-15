Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root :to => "static#index"
  resources :posts
  get '/posts/slugs/:slug', to: 'posts#slug', as: 'slug'
end
