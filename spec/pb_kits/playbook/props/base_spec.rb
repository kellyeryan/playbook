# frozen_string_literal: true

RSpec.describe Playbook::Props::Base do
  describe "#validate!" do
    it "returns true when child class passes validation" do
      truthy_validation_class = Class.new(Playbook::Props::Base) do
        def validate(_value); true; end
      end

      expect(truthy_validation_class.new.validate!(nil)).to eq true
    end

    it "returns true when child class does not contain custom validation" do
      no_validation_class = Class.new(Playbook::Props::Base)

      expect(no_validation_class.new.validate!(nil)).to eq true
    end

    it "raises error when child class fails validation" do
      falsy_validation_class = Class.new(Playbook::Props::Base) do
        def validate(_value); false; end
      end

      expect { falsy_validation_class.new.validate!(nil) }.to(
        raise_error(Playbook::Props::Error)
      )
    end
  end
end
