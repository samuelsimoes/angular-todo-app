class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  self.responder = ApplicationResponder

  def javascript_exists?
    script = "#{Rails.root}/app/assets/javascripts/#{controller_path}.js"
    File.exists?(script)
  end
  helper_method :javascript_exists?
end
