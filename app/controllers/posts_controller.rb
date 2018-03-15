class PostsController < ApplicationController
  before_action :post_setter, only: [:show]

  def index
    @posts = Post.all
    render json: @posts
  end

  def show
    render json: @post
  end

  def update

  end

  def create
  end

  def destroy
  end

  private

  def post_setter
    @post = Post.find(params[:id])
  end

end