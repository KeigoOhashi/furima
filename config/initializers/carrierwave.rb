CarrierWave.configure do |config|
  if Rails.env.production?
    config.storage = :fog
    config.fog_provider = 'fog/aws'
    config.fog_directory  = 'rails-images-furima'
    config.asset_host = 'https://s3-ap-northeast-1.amazonaws.com/rails-images-furima'
    config.fog_credentials = {
      provider: 'AWS',
      aws_access_key_id: Rails.application.secrets.aws_access_key_id,
      aws_secret_access_key: Rails.application.secrets.aws_secret_access_key,
      region: 'ap-northeast-1'
    }
  else
    config.storage = :file
    config.enable_processing = false if Rails.env.test?
  end
  
end