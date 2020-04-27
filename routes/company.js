var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('company', { title: 'company' });
});


router.get('/history', function(req, res, next) {
    var history = [{
        "year":"2009.02",
        "content":"(주)이랑씨에스 법인 설립"
      },{
        "year":"2010.03",
        "content":"위생관리업, 경비업, 소독업 등록"
      },{
        "year":"2010.05",
        "content":"창동 및 경남지사 설립"
      },{
        "year":"2014.05",
        "content":'법인 명 "(주)티엔엘넷플러스"로 변경'
      },{
        "year":"2015.10",
        "content":"(주)대림 우수협력업체 등록"
      },{
        "year":"2016.12",
        "content":"R&D센터 창동지사 설립"
      },{
        "year":"2019.04",
        "content":"송파사옥 이전"
      },{
        "year":"2019.05",
        "content":"(주)이랑이앤지 설비법인 추가"
      },{
        "year":"2019.05",
        "content":"(주)이랑씨에스 법인 변경"
      }];
      history = JSON.stringify(history);
    res.render('history', { 
        title: 'history',
        history: history
    });
});

router.get('/client', function(req, res, next) {
    res.render('client', { 
        title: 'client'
    });
});

router.get('/certification', function(req, res, next) {
    res.render('certification', { 
        title: 'certification'
    });
});

module.exports = router;
