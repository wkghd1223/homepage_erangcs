var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next){
    var infect = [
        {
            title:[{
                src:"disinfect_2.png",
                name:"방역/소독",
                _desc:"살충소독/살균소독/구서작업/정화조관리"
            }],
            content_highlight:"쾌적한 환경을 조성하는 방역전문가",
            content:"방역관리 총괄업무를 담당합니다.",
            list:["외부해충유입진단", "건물내모니터링", "해충서식지박멸", "해충별약품선별", "정화조특별관리"]
        },
    ];
    var card =[
        {
            title: "방역관리",
            sub_title: ["관 리 분 야", "관 리 내 용"],
            content:[{
                type: "방역/소독 관리",
                _desc: "살충소독/살균소독/구서작업/정화조관리"
            }],
            client_info:[{
                name: "신한은행",
                address: "전국 지점",
                type: "방역 / 미화"
            },{
                name: "신한 데이터 센터",
                address: "경기도 용인시 수지구 죽전동",
                type: "방역 / 청소"
            }]
    }];

    card = JSON.stringify(card);
    infect = JSON.stringify(infect);

    res.render('disinfect', { 
        infect: infect,
        card: card,

    });

});

module.exports = router;
