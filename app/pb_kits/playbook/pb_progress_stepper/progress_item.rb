# frozen_string_literal: true

module Playbook
    module PbProgressStepper
      class ProgressItem
        include Playbook::Props
  
        partial "pb_progress_stepper/progress_item"
  
        prop :status, type: Playbook::Props::Enum,
            values: %w[complete active inactive],
            default: "inactive"
        prop :orientation, type: Playbook::Props::Enum,
            values: %w[vertical horizontal],
            default: "horizontal"
  
        def classname
          generate_classname("pb_progress_stepper_item_kit", orientation, status)
        end
      end
    end
  end
  