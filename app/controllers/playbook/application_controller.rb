# frozen_string_literal: true

module Playbook
  class ApplicationController < ActionController::Base
    protect_from_forgery with: :exception

    helper Webpacker::Helper
    helper Playbook::PbKitHelper
    helper Playbook::PbDocHelper
    helper Playbook::PbSampleHelper
    append_view_path Playbook::Engine.root + "app/pb_kits"
  end
end
