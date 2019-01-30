const app = getApp();
Page({
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    hidden: true,
    iconList: [{
      icon: 'cardboardfill',
      color: 'red',
      badge: 120,
      name: 'ps'
    }, {
      icon: 'recordfill',
      color: 'orange',
      badge: 1,
        name: 'ns'
    }, {
      icon: 'picfill',
      color: 'yellow',
      badge: 0,
        name: 'pc'
    }, {
      icon: 'noticefill',
      color: 'olive',
      badge: 22,
      name: 'xbox'
    }
],
    gridCol: 4,//这是设置每行行数
    skin: false
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
  },
  searchinfo:function(e){
    console.log("点击搜索按钮了")
    console.log();
  },
  showModal(e) {
    this.setData({
      modalName: e.currentTarget.dataset.target
    })
  },
  hideModal(e) {
    this.setData({
      modalName: null
    })
  },
  onShareAppMessage() {
    return {
      title: 'ColorUI-高颜值的小程序UI组件库',
      imageUrl: 'https://image.weilanwl.com/color2.0/share2215.jpg',
      path: '/pages/basics/home/home'
    }
  }
});