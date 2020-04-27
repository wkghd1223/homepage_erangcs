var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('service', { title: 'Express' });
});


router.get('/facility', function(req, res, next) {
    var card =[
        {   
            title:[{
                src:"facility.png",
                name:"시설",
                _desc:"기계/전기/건축/소방/방재/영선/전기안전관리/자동제어"
            }],
            content_highlight:"최고의 기술력으로 시설물을 관리하는 사람들",
            content:"건물의 가치를 높이고 극대화 하겠습니다.",
            list:["정비/공급 설비", "기계 및 전기설비", "소화/방재설비", "공조냉난방", "통신설비", "기타설비관리"]
        },
        {   
            title:[{
                src:"facility.png",
                name:"미화",
                _desc:"기계/전기/건축/소방/방재/영선/전기안전관리/자동제어"
            }],
            content_highlight:"최고의 기술력으로 시설물을 관리하는 사람들",
            content:"건물의 가치를 높이고 극대화 하겠습니다.",
            list:["정비/공급 설비", "기계 및 전기설비", "소화/방재설비", "공조냉난방", "통신설비", "기타설비관리"]
        },
        {   
            title:[{
                src:"facility.png",
                name:"시설",
                _desc:"기계/전기/건축/소방/방재/영선/전기안전관리/자동제어"
            },
            {
                src:"facility.png",
                name:"시설",
                _desc:"기계/전기/건축/소방/방재/영선/전기안전관리/자동제어"
            }],
            content_highlight:"최고의 기술력으로 시설물을 관리하는 사람들",
            content:"건물의 가치를 높이고 극대화 하겠습니다.",
            list:["정비/공급 설비", "기계 및 전기설비", "소화/방재설비", "공조냉난방"]
        },
    ];
    card = JSON.stringify(card);
    res.render('facility', { 
        title: 'Express',
        card: card
    });
});

module.exports = router;
