async exportList(){
  try {
    const original_log_id = this.original_id ? { original_id: this.original_id } : {}
    await api.AlarmApi.getSkyeyeAlarmLogidsExportOriginalLog({filetype: 'xlsx', alarm_id: this.alarmId, ...original_log_id}, {responseType: 'blob'})
    this.$message.success('导出成功')
  } catch(err) {
    this.$message({
        type: 'error',
        message: err.message || String(err)
    })
  }
}