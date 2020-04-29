var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('company', {
    title: 'company'
  });
});

router.get('/intro', function (req, res, next) {
  var overview = [{
    "title": "회사명",
    "content": "주식회사 이랑씨에스"
  }, {
    "title": "주 소",
    "content": "서울시 송파구 가락로 183 한양상가 3층 305호"
  }, {
    "title": "대 표 자",
    "content": "김 현 진"
  }, {
    "title": "설립일/자본금",
    "content": '2008년 12월 15일 / 4억'
  }, {
    "title": "매출/신용",
    "content": "100억(2018년) / BB-"
  }, {
    "title": "사업영역",
    "content": "건물종합관리(시설/미화/보안(경비)/주차/안전지킴이)"
  }];
  overview = JSON.stringify(overview);
  res.render('company_intro', {
    title: 'company_intro',
    overview: overview
  });
});


router.get('/history', function (req, res, next) {
  var history = [{
    "year": "2009.02",
    "content": "(주)이랑씨에스 법인 설립"
  }, {
    "year": "2010.03",
    "content": "위생관리업, 경비업, 소독업 등록"
  }, {
    "year": "2010.05",
    "content": "창동 및 경남지사 설립"
  }, {
    "year": "2014.05",
    "content": '법인 명 "(주)티엔엘넷플러스"로 변경'
  }, {
    "year": "2015.10",
    "content": "(주)대림 우수협력업체 등록"
  }, {
    "year": "2016.12",
    "content": "R&D센터 창동지사 설립"
  }, {
    "year": "2019.04",
    "content": "송파사옥 이전"
  }, {
    "year": "2019.05",
    "content": "(주)이랑이앤지 설비법인 추가"
  }, {
    "year": "2019.05",
    "content": "(주)이랑씨에스 법인 변경"
  }];
  history = JSON.stringify(history);
  res.render('company_history', {
    title: 'company_history',
    history: history
  });
});

router.get('/client', function (req, res, next) {
  var card = [
    {
      managing_type: "시설관리 분야 고객현황",
      name_title: "고객명",
      range_title: "관리범위",
      content: [{
        subtitle: "골프장",
        subcontent: [{
          name: "오렌지듄스 CC",
          size_title: "연면적",
          size: "1,721,882",
          range: "미화,락카,현관"
        },
        {
          name: "인천그랜드 CC",
          size_title: "연면적",
          size: "1,386,403",
          range: "미화,현관"
        },
        {
          name: "이천실크밸리 CC",
          size_title: "연면적",
          size: "2,462,107",
          range: "미화,락카,셔틀"
        }]
      }, 
      {
        subtitle: "고속도로휴게소",
        subcontent: [{
          name: "문산휴게소",
          size_title: "연면적",
          size: "52,026",
          range: "주유, 미화"
        },
        {
          name: "섬진강휴게소",
          size_title: "연면적",
          size: "53,420",
          range: "미화,교통"
        },
        {
          name: "함안휴게소",
          size_title: "연면적",
          size: "50,174",
          range: "캐셔"
        },
        {
          name: "덕평휴게소",
          size_title: "연면적",
          size: "176,876",
          range: "주유"
        }]
      },
      {
        subtitle: "업무시설",
        subcontent: [
          {
          name: "대상연구소",
          size_title: "연면적",
          size: "62,478",
          range: "시설,경비,미화,조리"
        },
        {
          name: "이화다이아몬드",
          size_title: "연면적",
          size: "65,400",
          range: "미화,경비"
        },
        {
          name: "서천산업",
          size_title: "연면적",
          size: "71,668",
          range: "미화,경비"
        },
        {
          name: "신광빌딩",
          size_title: "연면적",
          size: "32,926",
          range: "미화,주차"
        }]
      },
      {
        subtitle: "병원",
        subcontent: [{
          name: "자생한방병원",
          size_title: "연면적",
          size: "14,379",
          range: "미화,안내,린넨",
        }]
      },
      {
        subtitle: "호텔",
        subcontent: [{
          name: "라마다서울호텔",
          size_title: "객실수",
          size: "243실",
          range: "미화",
        }]
      }]
    },
    {
      managing_type: "안전관리 분야 고객현황",
      name_title: "고객명",
      range_title: "관리범위",
      content: [
        {
        subtitle: "건설사",
        subcontent: [
          {
          name: "테라스오포e편한세상",
          size_title: "세대수",
          size: "573세대",
          range: "경비,안전감시"
        },
        {
          name: "신촌e편한세상",
          size_title: "세대수",
          size: "1,910세대",
          range: "안전감시"
        },
        {
          name: "용인한숲e편한세상",
          size_title: "세대수",
          size: "6,800세대",
          range: "경비,미화,안전감시"
        }, {
          name: "서울숲e편한세상",
          size_title: "세대수",
          size: "지하7층~지상49층",
          range: "안전감시,호이스트"
        },
        {
          name: "영천e편한세상",
          size_title: "세대수",
          size: "1,210세대",
          range: "안전감시"
        },
        {
          name: "평거우방아이유쉘",
          size_title: "세대수",
          size: "339세대",
          range: "경비"
        }]
      }]
    },
    {
      managing_type: "기타 분야 고객현황",
      name_title: "고객명",
      range_title: "관리범위",
      content: [
        {
        subtitle: "방역",
        subcontent: [
          {
          name: "신한은행",
          size_title: "규모",
          size: "전국지점",
          range: "건물내 살충 및 살균"
        },
        {
          name: "신한데이터센터",
          size_title: "연면적",
          size: "65,400",
          range: "방역/청소"
        }]
      },
      {
        subtitle: "준공청소",
        subcontent: [
          {
          name: "남양산역금호건설",
          size_title: "세대수",
          size: "499세대",
          range: "준공청소"
        },
        {
          name: "하남덕풍금호건설",
          size_title: "세대수",
          size: "383세대",
          range: "준공청소"
        }]
      }]
    }];
  card = JSON.stringify(card);
  res.render('company_client', {
    title: 'company_client',
    card: card
  });
});

router.get('/certification', function (req, res, next) {
  var certis = '자격 증명서';
  res.render('company_certification', {
    title: 'company_certification',
    certis: certis
  });
});

module.exports = router;