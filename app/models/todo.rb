class Todo < ActiveRecord::Base
  validates :title, presence: true
  validates_datetime :deliver_date, after: :now, allow_blank: true
end
