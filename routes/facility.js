var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    var facility_title = "시설관리 서비스 소개"
    var facility_info = `이랑씨에스는 건물의 Life Cycle 연장 및 유지관리 Cost 절감을 위해 타 업체와는 차별화된 시설관리,
    최적화 솔루션을 제공하여 항상 효율적인 고품질의 관리로 시설물 가치를 극대화하고 있습니다.`
    var system1 = "시설관리 기술 개요";
    var system2 = "기술 특징점";
    var intro =[
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
    
    var card =[
        {
            title: "골프장",
            sub_title: ["관 리 분 야", "관 리 내 용"],
            content:[{
                type: "시설 관리",
                _desc: "골프장 내 시설물 및 유지보수 관리업무"
            },{
                type: "현관(백반출) 관리",
                _desc: "고객차량의 골프백 상하차 서비스"
            },{
                type: "락카 관리",
                _desc: "고객응대 및 락카실, 파우더룸, 사우나실 청소 서비스"
            },{
                type: "미화 관리",
                _desc: "클럽하우스 공용구역(복도 및 화장실) 및 그늘집 청소 서비스"
            }],
            client_info:[{
                name: "이천실크밸리",
                address: "경기도 이천시 율면 임오산로 296",
                type: "미화/현관(백반출)/락카"
            },{
                name: "인천그랜드CC",
                address: "인천광역시 서구 원석로 195",
                type: "미화/현관(백반출)/락카"
            },{
                name: "오렌지듄스CC",
                address: "인천광역시 연수구 인천신항대로 1120",
                type: "미화/현관(백반출)/락카"
            }]
    },{
        title: "휴게소",
        sub_title: ["관 리 분 야", "관 리 내 용"],
        content:[{
            type: "주유원 관리",
            _desc: "고객차량의 주유 및 정산 서비스"
        },{
            type: "미화 관리",
            _desc: "휴게소 내의 청결유지(화장실/주차장/쓰레기통/분리수거 청소) 서비스"
        }],
        client_info:[{
            name: "함양휴게소",
            address: "경남 함양군 지곡면 효산길",
            type: "미화/주유/주차"
        },{
            name: "섬진강휴게소",
            address: "전남 광양시 진월면 섬진강 매화로",
            type: "미화/주차"
        },{
            name: "문산휴게소 외 3곳",
            address: "경남 진주시 문산읍 소문리",
            type: "미화/주유"
        }]
    },{
        title: "호텔",
        sub_title: ["관 리 분 야", "관 리 내 용"],
        content:[{
            type: "시설 관리",
            _desc: "호텔 내 시설물 및 유지보수 관리업무"
        },{
            type: "룸메이드 관리",
            _desc: "객실 내 청결 서비스 (침구류/비품/청소)"
        },{
            type: "미화 관리",
            _desc: "호텔 내 공용구역 청소 및 특별 청소 (대리석 및 카페트, 아스타일 유지관리 서비스)"
        }],
        client_info:[{
            name: "Dragon Hill Lodge",
            address: "용산사령부 사우스 포스트",
            type: "조리/객실/미화"
        },{
            name: "라마드관광/라마다서울호텔",
            address: "서울시 강남구 삼성동 112-5",
            type: "미화"
        }]
    },{
        title: "병원",
        sub_title: ["관 리 분 야", "관 리 내 용"],
        content:[{
            type: "시설 관리",
            _desc: "병원 내 시설물 및 유지보수 관리업무"
        },{
            type: "미화 관리",
            _desc: "병원 입원실 및 진료실, 공용구역 (화장실, 샤워실, 휴게실 등) 감염 방지 프로그램 운영"
        },{
            type: "안내 관리",
            _desc: "내방객 진료 접수 및 병원 시설 안내"
        },{
            type: "세탁 관리",
            _desc: "층별 환자복 및 객실 침대보 등 수거, 세탁물 정리 서비스"
        }],
        client_info:[{
            name: "자생한방병원",
            address: "서울시 강남구 언주로 868",
            type: "미화/안내"
        }]
    }];
    intro = JSON.stringify(intro);
    card = JSON.stringify(card);

    res.render('facility', { 
        title: 'facility',
        system1: system1,
        system2: system2,
        facility_title: facility_title,
        facility_info: facility_info,
        intro: intro,
        card,card
    });
});

module.exports = router;
