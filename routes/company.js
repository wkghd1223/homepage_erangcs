var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('company', { title: 'company' });
});

router.get('/intro', function(req, res, next) {
  var overview = [{
      "title":"회사명",
      "content":"주식회사 이랑씨에스"
    },{
      "title":"주 소",
      "content":"서울시 송파구 가락로 183 한양상가 3층 305호"
    },{
      "title":"대 표 자",
      "content":"김 현 진"
    },{
      "title":"설립일/자본금",
      "content":'2008년 12월 15일 / 4억'
    },{
      "title":"매출/신용",
      "content":"100억(2018년) / BB-"
    },{
      "title":"사업영역",
      "content":"건물종합관리(시설/미화/보안(경비)/주차/안전지킴이)"
    }];
    overview = JSON.stringify(overview);
  res.render('company_intro', { 
      title: 'company_intro',
      overview: overview
  });
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
    res.render('company_history', { 
        title: 'company_history',
        history: history
    });
});

router.get('/client', function(req, res, next) {
    res.render('company_client', { 
        title: 'company_client'
    });
});

router.get('/certification', function(req, res, next) {
    res.render('company_certification', { 
        title: 'company_certification'
    });
});

module.exports = router;
