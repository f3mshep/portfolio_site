Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  scope "api" do
    resources :posts
    post 'user_token' => 'user_token#create'
  end
end
