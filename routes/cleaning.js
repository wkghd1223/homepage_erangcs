var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('cleaning', {
        title: 'cleaning'
    });
});


router.get('/intro', function (req, res, next) {
    var cleaning_title = '준공청소 서비스 소개';
    var cleaning_info = `준공청소 서비스는 체계적인 시스템으로 건물주와 입주자가 동시에 만족할 수 있도록 그 건물의 특징에 맞는 청소 서비스를 하여드립니다.`;
    var card = {
        src: "facility_2.png",
        name: "준공청소",
        sub: [{
            title: "01. 고객과의 의견교환",
            descript: "고객이 특별히 신경쓰는 부분이 있다면 말씀해주시기 바랍니다."
        }, {
            title: "02. 마감재 및 잔재물 제거",
            descript: "마감재 및 인테리어 잔재물, 먼지, 오염물질 제거"
        }, {
            title: "03. 현관, 문, 난간, 계단 청소",
            descript: "창문, 창틀, 조명기구, 스티커 제거 청소"
        }, {
            title: "04. 복도, 바닥, 지하 청소",
            descript: "전체 바닥, 승강기, 화장실, 주변쓰레기 청소"
        }, {
            title: "05. 습식 청소",
            descript: "2차 소독 습식 마무리 청소 및 폐기물 정리"
        }, {
            title: "06. 바닥왁스",
            descript: "고객 요청시 왁스 작업을 합니다."
        }, {
            title: "07. 고객에게 청소완료 연락",
            descript: "마무리 고객 검숙, 청소장비 정리작업"
        }, {
            title: "08. 청소완료",
            descript: "고객 확인 후 청소완료 대금 지불"
        },],

    };
    card = JSON.stringify(card);
    res.render('cleaning_intro', {
        cleaning_title, cleaning_title,
        cleaning_info,
        title: 'cleaning_intro',
        card: card
    });
});


router.get('/client', function (req, res, next) {
    var card = [{
        title: "준공청소",
        sub_title: ["관 리 분 야", "관 리 내 용"],
        content: [{
            type: "준공청소",
            _desc: "준공청소 서비스는 체계적인 시스템으로 건물주와 입주자가 동시에 만족할 수 있도록 그 건물의 특징에 맞는 청소 서비스를 하여드립니다."
        }],
        client_info: [{
            name: "동양건설",
            address: "동양파라곤 II 주상복합",
            type: "준공청소 / 입주 청소"
        }, {
            name: "동양건설",
            address: "용인 마북리 아파트",
            type: "준공청소 / 입주 청소"
        }, {
            name: "동양건설",
            address: "김포 걸포동 아파트",
            type: "준공청소 / 입주 청소"
        }, {
            name: "한라건설",
            address: "구미 한라 시그마밸리",
            type: "준공청소 / 입주 청소"
        }, {
            name: "한라건설",
            address: "대전 서남부 14블럭",
            type: "준공청소 / 입주 청소"
        }, {
            name: "한라건설",
            address: "현대백화점 대구점",
            type: "준공청소 / 입주 청소"
        }, {
            name: "한라건설",
            address: "파주교하 A22 블록",
            type: "준공청소 / 입주 청소"
        }]
    }];
    card = JSON.stringify(card);
    res.render('cleaning_client', {
        title: "cleaning_client",
        card: card
    });
});


module.exports = router;