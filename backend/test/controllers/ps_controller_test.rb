require 'test_helper'

class PsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @p = ps(:one)
  end

  test "should get index" do
    get ps_url, as: :json
    assert_response :success
  end

  test "should create p" do
    assert_difference('P.count') do
      post ps_url, params: { p: { name: @p.name, reunion: @p.reunion, year: @p.year } }, as: :json
    end

    assert_response 201
  end

  test "should show p" do
    get p_url(@p), as: :json
    assert_response :success
  end

  test "should update p" do
    patch p_url(@p), params: { p: { name: @p.name, reunion: @p.reunion, year: @p.year } }, as: :json
    assert_response 200
  end

  test "should destroy p" do
    assert_difference('P.count', -1) do
      delete p_url(@p), as: :json
    end

    assert_response 204
  end
end
