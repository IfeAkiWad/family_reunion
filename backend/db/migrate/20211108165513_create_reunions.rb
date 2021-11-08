class CreateReunions < ActiveRecord::Migration[6.0]
  def change
    create_table :reunions do |t|
      t.string :name
      t.integer :year
      t.integer :park_id
      t.integer :person_id

      t.timestamps
    end
  end
end
