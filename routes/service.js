var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('service', { title: 'service' });
});


router.get('/facility', function(req, res, next) {
    var card =[
        {   
            title:[{
                src:"facility_1.png",
                name:"시  설",
                _desc:"기계/전기/건축/소방/방재/영선/전기안전관리/자동제어"
            }],
            content_highlight:"최고의 기술력으로 시설물을 관리하는 사람들",
            content:"건물의 가치를 높이고 극대화 하겠습니다.",
            list:["정비/공급 설비", "기계 및 전기설비", "소화/방재설비", "공조냉난방", "통신설비", "기타설비관리"]
        },
        {   
            title:[{
                src:"facility_2.png",
                name:"미  화",
                _desc:"클리닝/카펫/대리석/방역/방충"
            }],
            content_highlight:"전문기술로 쾌적한 환경을 조성하는 사람들",
            content:"보이지 않는 곳까지 청결한 환경을 조성합니다.",
            list:["복합쇼핑몰", "교육연수시설", "운동시설", "업무용시설", "주상복합단지", "병원/복지시설"]
        },
        {   
            title:[{
                src:"facility_3.png",
                name:"보 안 ( 경 비 )",
                _desc:"방법/시스템운영/출입관리"
            },
            {
                src:"facility_4.png",
                name:"시설",
                _desc:"안내센터/차량유도/주차장운영"
            }],
            content_highlight:"첨단장비와 투철한 정신으로 무장한 사람들",
            content:"그들의 눈과 귀는 '틈새'를 허용치 않습니다.",
            list:["시설경비", "시설보안", "주차보안", "안내데스크"]
        },
    ];
    card = JSON.stringify(card);
    res.render('facility', { 
        title: 'facility',
        card: card
    });
});

router.get('/safety', function(req, res, next) {
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
    res.render('safety', { 
        title: 'safety',
        card: card
    });
});

router.get('/etc', function(req, res, next){
    var card = [
        {
            title:[{
                src:"etc_1.png",
                name:"방역/소독",
                _desc:"살충소독/살균소독/구서작업/정화조관리"
            }],
            content_highlight:"쾌적한 환경을 조성하는 방역전문가",
            content:"방역관리 총괄업무를 담당합니다.",
            list:["외부해충유입진단", "건물내모니터링", "해충서식지박멸", "해충별약품선별", "정화조특별관리"]
        },
    ];
    card = JSON.stringify(card);

    var clean = [
        {
            title: [{
                src:"etc_2.png",
                name:"준공청소",
                sub:[{
                    title:"01. 고객과의 의견교환",
                    descript:"고객이 특별히 신경쓰는 부분이 있다면 말씀해주시기 바랍니다."
                },
                {
                    title:"02. 마감재 및 잔재물 제거",
                    descript:"마감재 및 인테리어 잔재물, 먼지, 오염물질 제거"
                },{
                    title:"03. 현관, 문, 난간, 계단 청소",
                    descript:"창문, 창틀, 조명기구, 스티커 제거 청소"
                },{
                    title:"04. 복도, 바닥, 지하 청소",
                    descript:"전체 바닥, 승강기, 화장실, 주변쓰레기 청소"
                },{
                    title:"05. 습식 청소",
                    descript:"2차 소독 습식 마무리 청소 및 폐기물 정리"
                },{
                    title:"06. 바닥왁스",
                    descript:"고객 요청시 왁스 작업을 합니다."
                },{
                    title:"07. 고객에게 청소완료 연락",
                    descript:"마무리 고객 검숙, 청소장비 정리작업"
                },{
                    title:"08. 청소완료",
                    descript:"고객 확인 후 청소완료 대금 지불"
                },
                ],
            }],  
        },
    ];
    clean = JSON.stringify(clean);

    res.render('etc', { 
        title: 'etc',
        card: card,
        clean: clean
    });

})

module.exports = router;
