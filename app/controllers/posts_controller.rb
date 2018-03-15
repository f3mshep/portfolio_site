class PostsController < ApplicationController
  before_action :post_setter, only: [:show]

  def index
    @posts = Post.all
    render json: @posts
  end

  def show
    if params[:next]
      @post = @post.next
    elsif params[:previous]
      @post = @post.previous
    end
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
    @post = Post.find_slug(params[:id])
  end

end