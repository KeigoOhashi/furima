require 'rails_helper'

RSpec.describe "Products", type: :request do

  describe "GET /buy" do
    it "returns http success" do
      get "/products/buy"
      expect(response).to have_http_status(:success)
    end
  end

end
