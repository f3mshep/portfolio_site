class Post < ApplicationRecord
  include Sluggable
  before_validation :add_slug
  before_validation :format_time

  def self.find_slug(slug)
    Post.find_by(slug: slug)
  end

  def add_slug
    self.slug = to_slug(title)
  end

  def format_time
    self.ordinal_time = Time.now.strftime("%B %dth, %Y")
  end

  def next
    Post.where("id > ?", id).limit(1).first
  end

  def previous
    Post.where("id < ?", id).limit(1).first
  end

end