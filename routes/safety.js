var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('safety', { title: 'safety' });
});

router.get('/intro', function(req, res, next) {
    var card =[
        {   
            title:[{
                src:"safety_1.png",
                name:"안 전 지 킴 이",
                _desc:"출력관리/안전조화/감시단TBM/PATROL/FEEDBACK/석회/정리"
            },
            {
                src:"safety_2.png",
                name:"호 이 스 트",
                _desc:"리프트 운행/점검"
            }],
            content_highlight:"안전한 환경을 조성하는 전문안전요원",
            content:"안전관리 총괄업무를 담당합니다.",
            list:["위험요소제거", "위험구역설정","작업자행동통제", "현장인원출입관리", "위험장비밀착관리", "화재사고방지점검"]
        },
    ];
    card = JSON.stringify(card);
    res.render('safety_intro', { 
        title: 'safety_intro',
        card: card
    });
});

router.get('/system',function(req, res, next){
    res.render('safety_system',{title: 'safety_system'});
});

router.get('/client',function(req, res, next){
    var card =[
        {
            title: "건설",
            sub_title: ["관 리 분 야", "관 리 내 용"],
            content:[{
                type: "안전감시단",
                _desc: "건물 내 시설물 및 유지보수 관리업무"
            },{
                type: "호이스트관리",
                _desc: "건물 내 사무실 및 공용구역 청소/ 특별 청소 (대리석 및 카페트, 아스타일 유지관리 서비스)"
            },{
                type: "경비관리",
                _desc: "외부 고객 응대 및 통제 / 건물 내외 순찰활동 및 유관기관과 협력"
            }],
            client_info:[{
                name: "대림e-편한세상 (독산현장)",
                address: "서울시 금천구 독상동 1007~19번지",
                type: "안전관리"
            },{
                name: "대림e-편한세상 (고덕현장)",
                address: "서울시 강동구 상일동 121",
                type: "안전관리"
            },{
                name: "대림e-편한세상 (서울숲현장)",
                address: "서울시 성동구 성수동 1가 680-700",
                type: "안전관리 / 호이스트"
            },{
                name: "대림e-편한세상 (보라매2차현장)",
                address: "서울시 영등포구 대림동 915-52",
                type: "안전관리"
            },{
                name: "대림e-편한세상 (구리-안성 고속 11공구)",
                address: "경기도 성남시 갈현동 ~ 하남시 감이동",
                type: "안전관리"
            },{
                name: "대림e-편한세상 (경북영천현장)",
                address: "경북 영천시 완산동 732-1",
                type: "안전관리"
            },{
                name: "대림e-편한세상 (구리/인창 3차 현장)",
                address: "경기도 구리시 인창동 320-2번지",
                type: "안전관리"
            },{
                name: "대림e-편한세상 (전주서신 2차 현장)",
                address: "전주시 완산구 서신동 68번지",
                type: "안전관리"
            },{
                name: "대림e-편한세상 (시티미사현장)",
                address: "경기도 미사강변도시 28단지",
                type: "경비"
            },{
                name: "금호건설 (남양산역현장)",
                address: "경상남도 양산시 금오 15길 10",
                type: "준공청소"
            },{
                name: "금호건설 (하남덕풍현장)",
                address: "경기도 하남시 덕풍동 364-6",
                type: "준공청소"
            },{
                name: "대림e-편한세상 (이대기숙사 현장)",
                address: "서울 서대문구 북아현동 북아현로4",
                type: "안전관리"
            }]
    }];
    card = JSON.stringify(card);
    res.render('safety_client',{
        title: "safety_client",
        card: card
    });
});

module.exports = router;
