# frozen_string_literal: true

module Playbook
  module PbHashtag
    class Hashtag
      include Playbook::Props

      partial "pb_hashtag/hashtag"

      prop :text
      prop :dark, type: Playbook::Props::Boolean, default: false
      prop :type, type: Playbook::Props::Enum,
                  values: %w[default project home appointment],
                  default: "default"
      prop :url

      def classname
        generate_classname("pb_hastag_kit", dark_class)
      end

      def hashtag_text
        type_text + text
      end

    private

      def dark_class
        dark ? "dark" : nil
      end

      def type_text
        if type === "home"
          "H#"
        elsif type === "project"
          "P#"
        elsif type === "appointment"
          "A#"
        else
          "#"
        end
      end
    end
  end
end
