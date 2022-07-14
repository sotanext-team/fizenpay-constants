export const MERCHANT_CONST_EVENTS = {
  MERCHANT_REGISTRATION_PENDING_APPROVAL:
    'merchant.registraton_pending_approval',
  MERCHANT_ACTIVED: 'merchant.activated',
  MERCHANT_DEACTIVED: 'merchant.deactivated',
  MERCHANT_UPDATE_PAYMENT_SETTINGS: 'merchant.update_payment_settings',
  MERCHANT_UPDATE_CRYPTO_SETTINGS: 'merchant.update_crypto_settings',
  MERCHANT_SETUP_WALLET_SUCCESSFULLY: 'merchant.setup_wallet_successfully',
  MERCHANT_SERVICE_FEE_CHANGED: 'merchant.service_fee_changed',
  // Security
  SECURITY_AUTHENTICATION_DEVICE_UPDATED:
    'security.authentication_device_updated',
  SECURITY_PASSWORD_UPDATED: 'security.password_updated',
  SECURITY_REMIND_BACKUP_CODES_EXCEED_LIMIT:
    'security.remind_backup_codes_exceed_limit',
  // Settings
  SETTINGS_SUPPORT_EMAIL_UPDATED: 'settings.support_email_updated',
  SETTINGS_ACCEPT_CRYPTO_LIST: 'settings.accept_crypto_list',
  SETTINGS_FLEXIBLE_PAYMENT_UPDATED: 'settings.flexible_payment_updated',
  SETTINGS_AUTO_WITHDRAWAL_UPDATED: 'settings.auto_withdrawal_updated',
  SETTINGS_NEW_CHAIN_IS_CREATED: 'settings.new_chain_is_created',
};
