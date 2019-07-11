class AddValidEmailAccount < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :validated_account, :boolean, default: false
  end
end
