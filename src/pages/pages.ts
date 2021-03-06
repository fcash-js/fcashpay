/* Pages */
import { AddPage } from '../pages/add/add';
import { FcashAppPage } from '../pages/add/fcashpay/fcashpay';
import { CreateWalletPage } from '../pages/add/create-wallet/create-wallet';
import { ImportWalletPage } from '../pages/add/import-wallet/import-wallet';
import { JoinWalletPage } from '../pages/add/join-wallet/join-wallet';
import { BackupGamePage } from '../pages/backup/backup-game/backup-game';
import { BackupWarningPage } from '../pages/backup/backup-warning/backup-warning';
import { SendFeedbackPage } from '../pages/feedback/send-feedback/send-feedback';
import { FinishModalPage } from '../pages/finish/finish';
import { BackupRequestPage } from '../pages/onboarding/backup-request/backup-request';
import { CollectEmailPage } from '../pages/onboarding/collect-email/collect-email';
import { DisclaimerPage } from '../pages/onboarding/disclaimer/disclaimer';
import { OnboardingPage } from '../pages/onboarding/onboarding';
import { TourPage } from '../pages/onboarding/tour/tour';
import { PaperWalletPage } from '../pages/paper-wallet/paper-wallet';
import { PayProPage } from '../pages/paypro/paypro';
import { SlideToAcceptPage } from '../pages/slide-to-accept/slide-to-accept';
import { TabsPage } from '../pages/tabs/tabs';
import { TxDetailsPage } from '../pages/tx-details/tx-details';
import { TxpDetailsPage } from '../pages/txp-details/txp-details';
import { SearchTxModalPage } from '../pages/wallet-details/search-tx-modal/search-tx-modal';
import { WalletBalancePage } from '../pages/wallet-details/wallet-balance/wallet-balance';
import { WalletDetailsPage } from '../pages/wallet-details/wallet-details';
import { WalletTabsPage } from '../pages/wallet-tabs/wallet-tabs';

// Integrations: Coinbase
import { BuyCoinbasePage } from '../pages/integrations/coinbase/buy-coinbase/buy-coinbase';
import { CoinbasePage } from '../pages/integrations/coinbase/coinbase';
import { CoinbaseSettingsPage } from '../pages/integrations/coinbase/coinbase-settings/coinbase-settings';
import { CoinbaseTxDetailsPage } from '../pages/integrations/coinbase/coinbase-tx-details/coinbase-tx-details';
import { SellCoinbasePage } from '../pages/integrations/coinbase/sell-coinbase/sell-coinbase';

// Integrations: Glidera
import { BuyGlideraPage } from '../pages/integrations/glidera/buy-glidera/buy-glidera';
import { GlideraPage } from '../pages/integrations/glidera/glidera';
import { GlideraSettingsPage } from '../pages/integrations/glidera/glidera-settings/glidera-settings';
import { GlideraTxDetailsPage } from '../pages/integrations/glidera/glidera-tx-details/glidera-tx-details';
import { SellGlideraPage } from '../pages/integrations/glidera/sell-glidera/sell-glidera';

// Integrations: ShapeShift
import { ShapeshiftPage } from '../pages/integrations/shapeshift/shapeshift';
import { ShapeshiftConfirmPage } from '../pages/integrations/shapeshift/shapeshift-confirm/shapeshift-confirm';
import { ShapeshiftDetailsPage } from '../pages/integrations/shapeshift/shapeshift-details/shapeshift-details';
import { ShapeshiftSettingsPage } from '../pages/integrations/shapeshift/shapeshift-settings/shapeshift-settings';
import { ShapeshiftShiftPage } from '../pages/integrations/shapeshift/shapeshift-shift/shapeshift-shift';

// Integrations: FcashCard
import { FcashCardPage } from '../pages/integrations/fcash-card/fcash-card';
import { FcashCardIntroPage } from '../pages/integrations/fcash-card/fcash-card-intro/fcash-card-intro';
import { FcashCardTopUpPage } from '../pages/integrations/fcash-card/fcash-card-topup/fcash-card-topup';
import { FcashSettingsPage } from '../pages/integrations/fcash-card/fcash-settings/fcash-settings';

/*Includes */
import { CardItemPage } from '../pages/includes/card-item/card-item';
import { FeedbackCardPage } from '../pages/includes/feedback-card/feedback-card';
import { GravatarPage } from '../pages/includes/gravatar/gravatar';
import { TxpPage } from '../pages/includes/txp/txp';
import { WalletActivityPage } from '../pages/includes/wallet-activity/wallet-activity';

/* Tabs */
import { HomePage } from '../pages/home/home';
import { ReceivePage } from '../pages/receive/receive';
import { ScanPage } from '../pages/scan/scan';
import { SendPage } from '../pages/send/send';
import { SettingsPage } from '../pages/settings/settings';

/* Home */
import { ActivityPage } from '../pages/home/activity/activity';
import { ProposalsPage } from '../pages/home/proposals/proposals';

/* Settings */
import { FingerprintModalPage } from '../pages/fingerprint/fingerprint';
import { AmazonSettingsPage } from '../pages/integrations/amazon/amazon-settings/amazon-settings';
import { MercadoLibreSettingsPage } from '../pages/integrations/mercado-libre/mercado-libre-settings/mercado-libre-settings';
import { PIN_COMPONENTS } from '../pages/pin/pin';
import { AboutPage } from '../pages/settings/about/about';
import { SessionLogPage } from '../pages/settings/about/session-log/session-log';
import { AddressbookAddPage } from '../pages/settings/addressbook/add/add';
import { AddressbookPage } from '../pages/settings/addressbook/addressbook';
import { AddressbookViewPage } from '../pages/settings/addressbook/view/view';
import { AdvancedPage } from '../pages/settings/advanced/advanced';
import { AltCurrencyPage } from '../pages/settings/alt-currency/alt-currency';
import { FeePolicyPage } from '../pages/settings/fee-policy/fee-policy';
import { LanguagePage } from '../pages/settings/language/language';
import { LockPage } from '../pages/settings/lock/lock';
import { NotificationsPage } from '../pages/settings/notifications/notifications';
import { SharePage } from '../pages/settings/share/share';

/* Wallet Settings */
import { WalletColorPage } from '../pages/settings/wallet-settings/wallet-color/wallet-color';
import { WalletNamePage } from '../pages/settings/wallet-settings/wallet-name/wallet-name';
import { WalletSettingsPage } from '../pages/settings/wallet-settings/wallet-settings';

/* Wallet Advanced Settings */
import { FcashCashPage } from '../pages/settings/wallet-settings/wallet-settings-advanced/bitcoin-cash/bitcoin-cash';
import { AllAddressesPage } from '../pages/settings/wallet-settings/wallet-settings-advanced/wallet-addresses/all-addresses/all-addresses';
import { WalletAddressesPage } from '../pages/settings/wallet-settings/wallet-settings-advanced/wallet-addresses/wallet-addresses';
import { WalletDeletePage } from '../pages/settings/wallet-settings/wallet-settings-advanced/wallet-delete/wallet-delete';
import { WalletExportPage } from '../pages/settings/wallet-settings/wallet-settings-advanced/wallet-export/wallet-export';
import { WalletExtendedPrivateKeyPage } from '../pages/settings/wallet-settings/wallet-settings-advanced/wallet-information/wallet-extended-private-key/wallet-extended-private-key';
import { WalletInformationPage } from '../pages/settings/wallet-settings/wallet-settings-advanced/wallet-information/wallet-information';
import { WalletServiceUrlPage } from '../pages/settings/wallet-settings/wallet-settings-advanced/wallet-service-url/wallet-service-url';
import { WalletTransactionHistoryPage } from '../pages/settings/wallet-settings/wallet-settings-advanced/wallet-transaction-history/wallet-transaction-history';

/* Send */
import { AmountPage } from '../pages/send/amount/amount';
import { ChooseFeeLevelPage } from '../pages/send/choose-fee-level/choose-fee-level';
import { ConfirmPage } from '../pages/send/confirm/confirm';

/* Receive */
import { CustomAmountPage } from '../pages/receive/custom-amount/custom-amount';
import { WideHeaderPage } from './templates/wide-header-page/wide-header-page';
import { WalletTabsChild } from './wallet-tabs/wallet-tabs-child';

import { GIFT_CARD_PAGES } from './integrations/gift-cards/gift-cards';

export const PAGES = [
  ActivityPage,
  AddPage,
  AmazonSettingsPage,
  MercadoLibreSettingsPage,
  AmountPage,
  AddressbookPage,
  AddressbookAddPage,
  AddressbookViewPage,
  AboutPage,
  AdvancedPage,
  AllAddressesPage,
  AltCurrencyPage,
  BackupRequestPage,
  FcashCashPage,
  FcashCardIntroPage,
  FcashCardPage,
  FcashSettingsPage,
  FcashCardTopUpPage,
  BuyCoinbasePage,
  BuyGlideraPage,
  ChooseFeeLevelPage,
  CreateWalletPage,
  CoinbasePage,
  CoinbaseTxDetailsPage,
  FcashAppPage,
  FeedbackCardPage,
  SharePage,
  ImportWalletPage,
  JoinWalletPage,
  BackupWarningPage,
  BackupGamePage,
  ConfirmPage,
  CustomAmountPage,
  DisclaimerPage,
  CollectEmailPage,
  ...GIFT_CARD_PAGES,
  GlideraPage,
  GravatarPage,
  FingerprintModalPage,
  HomePage,
  LanguagePage,
  LockPage,
  OnboardingPage,
  PaperWalletPage,
  PayProPage,
  GlideraTxDetailsPage,
  ...PIN_COMPONENTS,
  ProposalsPage,
  ReceivePage,
  ScanPage,
  SendPage,
  SettingsPage,
  SellCoinbasePage,
  SellGlideraPage,
  GlideraSettingsPage,
  CoinbaseSettingsPage,
  ShapeshiftConfirmPage,
  ShapeshiftDetailsPage,
  ShapeshiftSettingsPage,
  ShapeshiftPage,
  ShapeshiftShiftPage,
  NotificationsPage,
  FeePolicyPage,
  SearchTxModalPage,
  SessionLogPage,
  SendFeedbackPage,
  FinishModalPage,
  TourPage,
  TabsPage,
  TxpDetailsPage,
  TxDetailsPage,
  TxpPage,
  WalletSettingsPage,
  WalletNamePage,
  WalletColorPage,
  WalletInformationPage,
  WalletAddressesPage,
  WalletExportPage,
  WalletServiceUrlPage,
  WalletTransactionHistoryPage,
  WalletDeletePage,
  WalletExtendedPrivateKeyPage,
  WalletDetailsPage,
  WalletTabsChild,
  WalletTabsPage,
  WalletBalancePage,
  WalletActivityPage,
  WideHeaderPage,
  CardItemPage,
  SlideToAcceptPage
];
