async getQrCode() {
  this.loading = true;
  try {
    const { img } = await api.ConfigApi.getSkyeyeConfigDeviceCode();
    this.img = 'data:image/jpg;base64,' + img
  } catch (error) {
    this.$message.error(error.message || '获取蓝信扫码失败');
  } finally {
    this.loading = false;
  }
}