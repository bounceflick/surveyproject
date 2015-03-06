class CreateAnswer < ActiveRecord::Migration
  def change
    create_table :answers do |t|
      t.boolean :answer_boolean
      t.integer :question_id
      t.integer :taker_id

      t.timestamps
    end
  end
end
