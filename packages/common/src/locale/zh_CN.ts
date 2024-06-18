import type { RequiredLocale } from '../types';

const localeValues: RequiredLocale = {
  ConnectButton: {
    connect: '连接钱包',
    disconnect: '断开连接',
    copyAddress: '复制地址',
    copied: '复制成功！',
    walletAddress: '钱包地址',
    moreWallets: '更多钱包',
  },
  ConnectModal: {
    title: '连接钱包',
    guideTitle: '什么是钱包？',
    guideInfos1Title: '管理私钥和资产',
    guideInfos1Desc: '管理私钥和对应链地址的资产',
    guideInfos2Title: '帮助你连接 DApp',
    guideInfos2Desc: '授权 DApp 获取你的地址，类似登录',
    guideInfos3Title: '调用智能合约',
    guideInfos3Desc: '通过授权私钥签名，发起与链上智能合约的交互',
    guideInfosGetWalletBtnText: '获取钱包',
    guideInfosMoreLinkText: '了解更多',
    getWalletBtnText: '获取',
    getWalletUniversalProtocolBtnText: '更多',
    getWalletPanelTitle: '获取钱包',
    getWalletPanelInfoDesc: '在左侧选择钱包，以开始使用不同的钱包提供商。',
    qrCodePanelTitleForDownload: '下载 {walletName}',
    qrCodePanelTitleForScan: '使用 {walletName} 扫描',
    qrCodePanelTitleForUniversalProtocol: '使用你的钱包扫描',
    qrCodePanelLinkForDownload: '点击前往下载页面',
    qrCodePanelLinkForConnect: '点击直接连接',
    qrCodePanelDownloadTipForReady: '扫描二维码下载钱包',
    qrCodePanelDownloadTipForNotReady: '暂无',
    qrCodePanelUniversalProtocolTipForNotReady: '不了解',
    walletCardPanelTitle: '获取 {selectedWalletName}',
    walletCardAppTitle: '在手机使用 {selectedWalletName}',
    walletCardAppDesc: '使用移动钱包探索以太坊世界。',
    walletCardExtensionTitle: '在 {selectedExtensionBrowserName} 浏览器中使用 {selectedWalletName}',
    guideTipTitle: '初次接触加密钱包?',
    guideTipLearnMoreLinkText: '了解更多',
    walletPanelPlugin: '插件',
    walletConnectSuccess: '钱包已连接！',
    getWalletTipsTitle: '没有找到您想要的？',
    getWalletTipsDesc: '在左侧选择一个新的钱包开始吧',
    linkWallet: '连接',
    walletConnecting: '连接中...',
  },
  NFTCard: {
    actionText: '立即购买',
  },
  Address: {
    copyTips: '复制地址',
    copiedTips: '地址复制成功！',
  },
  TokenSelect: {
    placeholder: '请选择代币',
  },
  CryptoInput: {
    placeholder: '请输入代币数量',
    maxButtonText: '最大',
  },
  PayPanel: {
    tips: '请扫描二维码或复制地址',
  },
};

export default localeValues;
