module Playbook
  module PbTimelineVertical
    class TimelineVertical < Playbook::PbKit::Base
      PROPS = [:configured_classname,
					:configured_data,
					:configured_id,
          :configured_icon,
          :configured_variant,
          :configured_title,
          :configured_detail].freeze

      def initialize(classname: default_configuration,
							data: default_configuration,
							id: default_configuration,)
        self.configured_classname = classname
				self.configured_data = data
				self.configured_id = id
      end

#props: icon, variant, title, detail

      def to_partial_path
        "pb_timeline_vertical/timeline_vertical"
      end


    private

      DEFAULT = Object.new
      private_constant :DEFAULT
      def default_configuration
        DEFAULT
      end
      attr_accessor(*PROPS)
    end
  end
end
