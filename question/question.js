Page({

  /**
   * 页面的初始数据
   */
  data: {
     imageBg:'./actImage/book-bg.png',
    imageHead: './actimage/ic_head.png',
    titleImage: './actimage/ic_title_image.png',
    questionOptsTitle: ['A','B','C'],
    questionOpts: [{ 'head': 'ic_head', 'title':'ic_title_image','question':['先吃鸡蛋', '先吃西红柿', '无所谓'],'questionAnim':''},
            { 'head': 'ic_life_head', 'title': 'ic_life_title', 'question': ['30年', '40年', '50   |  100年'] ,'questionAnim':''},
            { 'head': 'ic_holday-head', 'title': 'ic_holday-title', 'question': ['电影或追剧', '出游', '加班或死宅'] ,'questionAnim':''},
            { 'head': 'ic_life_state', 'title': 'ic_life_state_title', 'question': ['一周前', '1到3个月', '一年及以上'],'questionAnim':'' },
                  ],
    selectIndex:null,
    currentPage:0,
    selectQuestionArray:[],
    contentStr: '出游30年40年一年及以上1到3个月',
    answerIndex:null,
    answerArray: [[''], [''], [''], [''], ['', ''], ['', ''], ['', '', '', ''], ['', ''], ['', '']],
    indexPageAnim:'',
    buttonImageIndex:'0',
    bottonImage:'./actimage/ic_answer_bottom_0.png',

  },
  qusetionClick: function (e) {
    console.log(e)
    var index = e.currentTarget.dataset.index
    var name = e.currentTarget.dataset.name
    var that = this
    that.setData({
      selectIndex: index
    });
  }, 
  continueAction: function() {
    var currentPageT = this.data.currentPage+1;
    if(this.data.currentPage == 0){
      console.log('hahah');
      this.setData({
        indexPageAnim:'question-animate',
        currentPage: currentPageT,
      })
      return;
    }
      
   if (this.data.selectIndex == null) {
      wx.showToast({
           title: '请选择一个选项',
           image: '/actimage/error.png',
           duration: 2000
        })
        return
   }

    var slect = this.data.questionOpts[this.data.currentPage-1].question[this.data.selectIndex]
    var selectArr = this.data.selectQuestionArray
    selectArr.push(slect)
    var that = this;
    var newQuestionOpts = this.data.questionOpts;
    newQuestionOpts[this.data.currentPage-1].questionAnim = 'question-animate';
    that.setData({
      questionOpts:newQuestionOpts,
      selectQuestionArray: selectArr,
      currentPage: currentPageT,
      id:currentPageT-1,
      selectIndex:null
    });
    if (this.data.currentPage == 5) {
      
      var index = Math.round(Math.random() * 3 + 1)

      for (var i = 0; i<this.data.selectQuestionArray.length;i++){
        var item = this.data.selectQuestionArray[i]
        if (this.data.contentStr.indexOf(item) >= 0){
          console.log('包含')
          index = Math.round(Math.random() * 3 + 5)
          break
        }
        
      }
      console.log(index)
      that.setData({
        answerIndex: index,
      });

    }

    if (this.data.answerIndex != null) {

    }
  },
  
  stateControl:function(e){
    var that = this
    
    
    if (this.data.currentPage < 5 && this.data.currentPage >= 0) {
       that.setData({
          buttonImageIndex: '1'
       });
    }
    if (this.data.currentPage == 4) {
       // 跳解读页面
       that.setData({
          buttonImageIndex: '2'
       });
    }
   //  if (this.data.currentPage == 0) {
   //     // 跳解读页面
   //     that.setData({
   //        buttonImageIndex: '0'
   //     });
   //  }
    
    var bottonAnsowerImageT = './actimage/ic_answer_bottom_' + this.data.buttonImageIndex + (e == true ? '_yellow' : '') + '.png'
    that.setData({
       bottonImage: bottonAnsowerImageT,
    });
  },
  touchStart:function(){
    console.log('开始点击')
    var that = this
    this.stateControl(true)
  },
  touchEnd:function(){
     console.log('结束点击')
     this.stateControl(false)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // this.data.questionOpts.reverse();
  },
  

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})