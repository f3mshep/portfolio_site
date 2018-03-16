class User < ApplicationRecord
  has_secure_password

  # def self.from_token_request(request)
  #   # Returns a valid user, `nil` or raise `Knock.not_found_exception_class_name`
  #   username = request.params["auth"] && request.params["auth"]["username"]
  #   self.find_by(username: username)
  # end

end
