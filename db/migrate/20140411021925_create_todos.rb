class CreateTodos < ActiveRecord::Migration
  def change
    create_table :todos do |t|
      t.string :title, null: false
      t.text :content
      t.datetime :deliver_date
      t.boolean :done, default: false

      t.timestamps
    end
  end
end
