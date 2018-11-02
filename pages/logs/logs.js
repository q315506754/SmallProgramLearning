//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: []
  },
  onLoad: function () {
     wx.reportMonitor('logs', 1)
      // wx.getLogManager.debug("launch logs.")

    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })

      wx.showToast({
          title:"you are enter",
          icon: 'success',
          // mask:true,
          duration: 2000,
          complete:()=>{

          }
      })
  }
})
