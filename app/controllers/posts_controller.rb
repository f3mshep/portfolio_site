class PostsController < ApplicationController
  before_action :post_setter, only: [:update]

  def index
    @posts = Post.all
    render json: @posts
  end

  def show
    if params[:next]
      @next = Post.find_slug(params[:next]).next
      render json: @next
    elsif params[:previous]
      @prev = Post.find_slug(params[:previous]).previous
      render json: @prev
    else
      post_setter
      render json: @post
    end
  end

  def update
    @post.update(post_params)
  end

  def create
    @post = Post.new
    @post.assign_attributes(post_params)
    @post.save
  end

  private

  def post_setter
    @post = Post.find_slug(params[:id])
  end

  def post_params
    params.require(:post).permit(:title, :content)
  end

end