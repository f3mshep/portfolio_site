class Post < ApplicationRecord
  include Sluggable
  before_validation :add_slug
  before_validation :format_time

  def add_slug
    self.slug = to_slug(title)
  end

  def format_time
    self.ordinal_time = Time.now.strftime("%B %dth, %Y")
  end

end