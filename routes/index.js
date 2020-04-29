var express = require('express');
var router = express.Router();
var fs = require('fs');
// var bodyParser = require('body-parser');

/* GET home page. */
router.get('/', function(req, res, next) {
  var welcome = '이랑씨에스에 오신 것을 환영합니다.'
  var service = '주요 서비스'
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
  var summary = [
    {
      "title":"시설관리",
      "src":"facility_1.png",
      "description":`이랑씨에스는 건물의 Life Cycle 연장 및 유지관리 Cost 절감을 위해 타 업체와는 차별화된 시설관리, 최적화 솔루션을 제공하여 항상 효율적인 고품질의 관리로 시설물 가치를 극대화하고 있습니다.
      `
    },
    {
      "title":"안전관리",
      "src":"safety_1.png",
      "description":`이랑씨에스는 건설현장 내 중대재해 가능요소를 사전 예방, 제거를 함으로써 현장근로자의 안전과 회사의 생산성 향상에 그 목적이 있으며 안전 사고 없는 무재해, 무사고 현장구축을 하고 있습니다.
      `
    },
    {
      "title":"방역관리",
      "src":"disinfect_1.png",
      "description":`이랑씨에스는 정밀 시설점검을 바탕으로 한 최적의 방제 서비스를 제공함으로써 고객사의 해충 발생 원인을 분석 모니터링 하여 드립니다.
      `
    },{
      "title":"준공청소",
      "src":"cleaning_1.png",
      "description":`준공청소 서비스는 체계적인 시스템으로 건물주와 입주자가 동시에 만족할 수 있도록 그 건물의 특징에 맞는 청소 서비스를 하여드립니다.
      `
    },
  ];
  summary = JSON.stringify(summary);
  console.log("asdf");
  res.render('index', { 
    welcome:welcome,
    service:service,
    history:history,
    summary:summary
  });
});

router.get('/contact',function(req, res, next){
  res.render('contact',{title: 'contact'});
});

router.post('/contact',function(req, res, next){
  
  var tel = req.body.tel;
  var company = req.body.company;
  var service = req.body.service;
  var complain = req.body.complain;
  var date = new Date();

  var data = {
    'tel':tel,
    'company': company,
    'service': service,
    'complain': complain,
    'timestamp':date
  }
  // data = JSON.stringify(data);
  // console.log(data);

  fs.readFile('public/write.json',(err, file)=>{
    console.log("file\t|"+file);
    var jsonData = JSON.parse(file);
    jsonData.push(data);
    console.log(jsonData);
    jsonData = JSON.stringify(jsonData);
    fs.writeFile('public/write.json', jsonData, ()=>{
    });
  });
  res.redirect('/');
});

router.get('/admin',function(req, res, next){
  console.log('admin\t|');
  fs.readFile('public/write.json',(err, file)=>{
    file = JSON.parse(file);
    file.sort(function (a, b){return  a.timestamp > b.timestamp ? true : false});
    console.log(file);
    file= JSON.stringify(file);
    res.render('admin',{file: file});
  });
});


module.exports = router;
