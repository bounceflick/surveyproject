class CreateQuestion < ActiveRecord::Migration
  def change
    create_table :questions do |t|
      t.integer :survey_id
      t.string :description
      t.integer :order_id

      t.timestamps
    end
  end
end
