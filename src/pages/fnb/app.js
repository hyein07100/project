import bodyParser from 'body-parser';
import express from 'express';
import cors from 'cors';
import fnbRouter from './fnb_router.js';
import connect from './connect.js';
import FnbSchema from './fnb_schema.js';
import fnbExplainRouter from '../fnbExplain/fnbExplain_router.js';
import FnbExplainSchema from '../fnbExplain/fnbExplain_schema.js';

const PORT = 8000;
const app = express();
connect();

app.use(bodyParser.json());
app.use(cors());
app.use('/fnb', fnbRouter);
app.use('/fnbExplain', fnbExplainRouter);


app.listen(PORT, ()=>{
	console.log(`server start on ${PORT}`);
});

// const fnbExplainInsert = await FnbExplainSchema.create(
// 	{
// 		ref_id: "663fcb77f0ae6b76b78d650a",
// 		menu: "잭다니엘 스테이크, 캐이준 후라이드치킨 샐러드",
// 		time: "일~목 10:00~21:00 / 금,토 10:00~22:00",
// 		guide: "라스트오더는 마감 1시간 전까지 가능합니다",
// 		img: "https://adventure.lotteworld.com/image/2018/6/20180620124748089_574.jpg",
// 	},
// 	{
// 		ref_id: "663fcb77f0ae6b76b78d650d",
// 		menu: "츄러스, 그릴소시지, 핫도그",
// 		time: "일~목 10:00~21:00 / 금,토 10:00~22:00",
// 		guide: "라스트오더는 마감 10분 전까지 가능합니다",
// 		img: "https://adventure.lotteworld.com/image/2018/6/20180620024607719_574.jpg",
// 		phone_num: "02-411-3587",
// 	},
// 	{
// 		ref_id: "663fcb77f0ae6b76b78d650e",
// 		menu: "오레츄러스와 딥소스",
// 		time: "일~목 10:00~21:00 / 금,토 10:00~22:00",
// 		guide: "라스트오더는 마감 10분 전까지 가능합니다",
// 		img: "https://adventure.lotteworld.com/image/2018/6/20180620024607719_574.jpg",
// 		phone_num: "02-2143-1131",
// 	},
// 	{
// 		ref_id: "663fcb77f0ae6b76b78d650f",
// 		menu: "타코, 퀘사디아, 마가리따",
// 		time: "일~목 10:00~21:00 / 금,토 10:00~22:00",
// 		guide: "라스트오더는 마감 10분 전까지 가능합니다",
// 		img: "https://adventure.lotteworld.com/image/2023/3/202303271033469800_574.jpg",
// 	},
// 	{
// 		ref_id: "663fcb77f0ae6b76b78d650b",
// 		menu: "오리지널 스팸마리, 장조림버터비빔밥, 김계떡",
// 		time: "일~목 10:00~21:00 / 금,토 10:00~22:00",
// 		guide: "라스트오더는 마감 40분 전까지 가능합니다",
// 		img: "https://adventure.lotteworld.com/image/2018/6/20180620024102737_574.jpg",
// 	},
// 	{
// 		ref_id: "663fcb77f0ae6b76b78d6511",
// 		menu: "떠먹는 퐁듀 떡볶이, 갈릭 우삽겹 덮밥, 케이준 감자피자",
// 		time: "일~목 10:00~21:00 / 금,토 10:00~22:00",
// 		guide: "라스트오더는 마감 1시간 전까지 가능합니다",
// 		img: "https://adventure.lotteworld.com/image/2018/6/20180620025857176_574.jpg",
// 		phone_num: "02-2143-1173",
// 	},
// 	{
// 		ref_id: "663fcb77f0ae6b76b78d6512",
// 		menu: "자장면, 짬뽕, 해물볶음밥, 탕수육",
// 		time: "일~목 10:30~21:00 / 금,토 10:30~22:00",
// 		guide: "라스트오더는 마감 1시간 전까지 가능합니다",
// 		img: "https://adventure.lotteworld.com/image/2018/6/20180620025621856_574.jpg",
// 	},
// 	{
// 		ref_id: "663fcb77f0ae6b76b78d650c",
// 		menu: "츄러스, 그릴소시지, 핫도그",
// 		time: "일~목 10:00~21:00 / 금,토 10:00~22:00",
// 		guide: "라스트오더는 마감 10분 전까지 가능합니다",
// 		img: "https://adventure.lotteworld.com/image/2018/9/201809200116369571_574.jpg",
// 		phone_num: "02-411-3642",
// 	},
// 	{
// 		ref_id: "663fcb77f0ae6b76b78d6514",
// 		menu: "프레즐 오리지널, 시나몬 스틱, 에이드",
// 		time: "일~목 10:00~20:30 / 금,토 10:00~21:30",
// 		guide: "라스트오더는 마감 10분 전까지 가능합니다",
// 		img: "https://adventure.lotteworld.com/image/2018/9/201809200116369571_574.jpg",
// 	},
// 	{
// 		ref_id: "663fcb77f0ae6b76b78d6517",
// 		menu: "자장면, 돈카츠, 로코모코",
// 		time: "일~목 10:30~21:00 / 금,토 10:30~22:00",
// 		guide: "라스트오더는 마감 10분 전까지 가능합니다",
// 		img: "https://adventure.lotteworld.com/image/2022/10/202210260949356121_574.jpg",
// 		phone_num: "02-2143-1153",
// 	}
// )

// const fnbInsert = await FnbSchema.create(
// 	{
// 		name: "캘리포니아피자키친",
// 		company: "seoulland",
// 		fnb_type: "restaurant",
// 		location: "미래의나라",
// 		img:"https://seoulland.co.kr/_File/facility/facility//listImgFile_1713942020_0.jpg",
// 		description: "양식",
//  },
// {
// 		name: "포메인",
// 		company: "seoulland",
// 		fnb_type: "restaurant",
// 		location: "세계의광장",
// 		img:"https://seoulland.co.kr/_File/facility/facility//listImgFile_1683080648_0.webp",
// 		description: "식당",
//  },
// {
// 		name: "쥬라기 바베큐",
// 		company: "seoulland",
// 		fnb_type: "restaurant",
// 		location: "미래의나라",
// 		img:"https://seoulland.co.kr/_File/facility/facility//listImgFile_1683080582_0.webp",
// 		description: "식당",
//  },
// {
// 		name: "바른치킨",
// 		company: "seoulland",
// 		fnb_type: "restaurant",
// 		location: "이벤트홀",
// 		img:"https://seoulland.co.kr/_File/facility/facility//listImgFile_1683080648_0.webp",
// 		description: "식당",
//  },
// {
// 		name: "쌈이맛",
// 		company: "seoulland",
// 		fnb_type: "restaurant",
// 		location: "미래의나라",
// 		img:"https://seoulland.co.kr/_File/facility/facility//listImgFile_1621929132_0.webp",
// 		description: "한식",
//  },
// {
// 		name: "크레이지 브루어리존",
// 		company: "seoulland",
// 		fnb_type: "restaurant",
// 		location: "베니스무대",
// 		img:"https://seoulland.co.kr/_File/facility/facility//listImgFile_1680568668_0.webp",
// 		description: "식당",
//  },
// {
// 		name: "푸드트럭",
// 		company: "seoulland",
// 		fnb_type: "restaurant",
// 		location: "베니스무대",
// 		img:"https://seoulland.co.kr/_File/facility/facility//listImgFile_1623290164_0.webp",
// 		description: "식당",
//  },
// {
// 		name: "장터",
// 		company: "seoulland",
// 		fnb_type: "restaurant",
// 		location: "삼천리동산",
// 		img:"https://seoulland.co.kr/_File/facility/facility//listImgFile_1621228865_0.webp",
// 		description: "한식",
//  },
// {
// 		name: "초당순두부",
// 		company: "seoulland",
// 		fnb_type: "restaurant",
// 		location: "삼천리동산",
// 		img:"https://seoulland.co.kr/_File/facility/facility//listImgFile_1621228803_0.webp",
// 		description: "한식",
//  },
// {
// 		name: "우동플러스",
// 		company: "seoulland",
// 		fnb_type: "restaurant",
// 		location: "미래의나라",
// 		img:"https://seoulland.co.kr/_File/facility/facility//listImgFile_1621228741_0.webp",
// 		description: "일식",
//  },
// {
// 		name: "카레원",
// 		company: "seoulland",
// 		fnb_type: "restaurant",
// 		location: "미래의나라",
// 		img:"https://seoulland.co.kr/_File/facility/facility//listImgFile_1621228611_0.webp",
// 		description: "일식",
//  },
// {
// 		name: "캐루셀라멘",
// 		company: "seoulland",
// 		fnb_type: "restaurant",
// 		location: "캐릭터타운",
// 		img:"https://seoulland.co.kr/_File/facility/facility//listImgFile_1714198680_0.jpg",
// 		description: "일식",
//  },
// {
// 		name: "키즈팔래스",
// 		company: "seoulland",
// 		fnb_type: "restaurant",
// 		location: "캐릭터타운",
// 		img:"https://seoulland.co.kr/_File/facility/facility//listImgFile_1714198660_0.jpg",
// 		description: "중식",
//  },
// {
// 		name: "로데오 레스토랑",
// 		company: "seoulland",
// 		fnb_type: "restaurant",
// 		location: "모험의나라",
// 		img:"https://seoulland.co.kr/_File/facility/facility//listImgFile_1621227724_0.webp",
// 		description: "양식",
//  },
// {
// 		name: "롯데리아 2호점",
// 		company: "seoulland",
// 		fnb_type: "restaurant",
// 		location: "세계의광장",
// 		img:"https://seoulland.co.kr/_File/facility/facility//listImgFile_1621227407_0.webp",
// 		description: "식당",
//  },
// {
// 		name: "앵무새 카페 시티 패럿",
// 		company: "seoulland",
// 		fnb_type: "cafe",
// 		location: "세계의광장",
// 		img:"https://seoulland.co.kr/_File/facility/facility//listImgFile_1679987343_0.webp",
// 		description: "카페",
//  },
// {
// 		name: "리애제와플",
// 		company: "seoulland",
// 		fnb_type: "cafe",
// 		location: "미래의나라",
// 		img:"https://seoulland.co.kr/_File/facility/facility//listImgFile_1621928234_0.webp",
// 		description: "카페",
//  },
// {
// 		name: "카페 초이빈&코코호도",
// 		company: "seoulland",
// 		fnb_type: "cafe",
// 		location: "미래의나라",
// 		img:"https://seoulland.co.kr/_File/facility/facility//listImgFile_1631065160_0.webp",
// 		description: "카페",
//  },
// {
// 		name: "카페리앙",
// 		company: "seoulland",
// 		fnb_type: "cafe",
// 		location: "캐릭터타운",
// 		img:"https://seoulland.co.kr/_File/facility/facility//listImgFile_1621228259_0.webp",
// 		description: "카페",
//  },
// {
// 		name: "CAFE쉼표",
// 		company: "seoulland",
// 		fnb_type: "cafe",
// 		location: "캐릭터타운",
// 		img:"https://seoulland.co.kr/_File/facility/facility//listImgFile_1621227809_0.webp",
// 		description: "카페",
//  },
// {
// 		name: "던킨도너츠",
// 		company: "seoulland",
// 		fnb_type: "cafe",
// 		location: "세계의광장",
// 		img:"https://seoulland.co.kr/_File/facility/facility//listImgFile_1649828093_0.webp",
// 		description: "카페",
//  },
// {
// 		name: "카페베네",
// 		company: "seoulland",
// 		fnb_type: "cafe",
// 		location: "세계의광장",
// 		img:"https://seoulland.co.kr/_File/facility/facility//listImgFile_1621227499_0.webp",
// 		description: "카페",
//  },
// {
// 		name: "쏘핫(카레원카트)",
// 		company: "seoulland",
// 		fnb_type: "snack",
// 		location: "미래의나라",
// 		img:"https://seoulland.co.kr/_File/facility/facility//listImgFile_1713846412_0.jpg",
// 		description: "간식",
//  },
// {
// 		name: "장터엿집",
// 		company: "seoulland",
// 		fnb_type: "snack",
// 		location: "삼천리동산",
// 		img:"https://seoulland.co.kr/_File/facility/facility//listImgFile_1679991822_0.webp",
// 		description: "간식",
//  },
// {
// 		name: "부자분식",
// 		company: "seoulland",
// 		fnb_type: "snack",
// 		location: "삼천리동산",
// 		img:"https://seoulland.co.kr/_File/facility/facility//listImgFile_1714194562_0.jpg",
// 		description: "간식",
//  },
// {
// 		name: "캐루셀 스낵",
// 		company: "seoulland",
// 		fnb_type: "snack",
// 		location: "캐릭터타운",
// 		img:"https://seoulland.co.kr/_File/facility/facility//listImgFile_1679991475_0.webp",
// 		description: "간식",
//  },
// {
// 		name: "델리만쥬",
// 		company: "seoulland",
// 		fnb_type: "snack",
// 		location: "캐릭터타운",
// 		img:"https://seoulland.co.kr/_File/facility/facility//listImgFile_1679989995_0.webp",
// 		description: "간식",
//  },
// {
// 		name: "카트라이더 팝콘카트",
// 		company: "seoulland",
// 		fnb_type: "snack",
// 		location: "캐릭터타운",
// 		img:"https://seoulland.co.kr/_File/facility/facility//listImgFile_1714193925_0.jpg",
// 		description: "간식",
//  },
// {
// 		name: "회오리감자",
// 		company: "seoulland",
// 		fnb_type: "snack",
// 		location: "미래의나라",
// 		img:"https://seoulland.co.kr/_File/facility/facility//listImgFile_1621928770_0.webp",
// 		description: "간식",
//  },
// {
// 		name: "모험스낵",
// 		company: "seoulland",
// 		fnb_type: "snack",
// 		location: "모험의나라",
// 		img:"https://seoulland.co.kr/_File/facility/facility//listImgFile_1714195021_0.jpg",
// 		description: "간식",
//  },
// {
// 		name: "삐애로스낵",
// 		company: "seoulland",
// 		fnb_type: "snack",
// 		location: "캐릭터타운",
// 		img:"https://seoulland.co.kr/_File/facility/facility//listImgFile_1621230915_0.webp",
// 		description: "간식",
//  },
// {
// 		name: "메르하바",
// 		company: "seoulland",
// 		fnb_type: "snack",
// 		location: "캐릭터타운",
// 		img:"https://seoulland.co.kr/_File/facility/facility//listImgFile_1621230798_0.webp",
// 		description: "간식",
//  },
// {
// 		name: "롤리폴리",
// 		company: "seoulland",
// 		fnb_type: "snack",
// 		location: "미래의나라",
// 		img:"https://seoulland.co.kr/_File/facility/facility//listImgFile_1621230453_0.webp",
// 		description: "간식",
//  },
// {
// 		name: "삼천리스낵",
// 		company: "seoulland",
// 		fnb_type: "snack",
// 		location: "삼천리동산",
// 		img:"https://seoulland.co.kr/_File/facility/facility//listImgFile_1621230391_0.webp",
// 		description: "간식",
//  },
// {
// 		name: "세븐일레븐",
// 		company: "seoulland",
// 		fnb_type: "conveniencestore",
// 		location: "세계의광장",
// 		img:"https://seoulland.co.kr/_File/facility/facility//listImgFile_1621231378_0.webp",
// 		description: "편의점",
//  },
// {
// 		name: "랜드스토어",
// 		company: "seoulland",
// 		fnb_type: "conveniencestore",
// 		location: "미래의나라",
// 		img:"https://seoulland.co.kr/_File/facility/facility//listImgFile_1621230329_0.webp",
// 		description: "편의점",
//  },
// )

// const fnbInsert = await FnbSchema.create(
// 	{
// 		name: "판타스틱 티카페",
// 		company: "everland",
// 		img: "https://www.everland.com/contents/ia/facilities/a2262235d81b4eb7b4df25d624b01826.png",
// 		fnb_type: "snack",
// 		description: "간식",
// 	},
// 	{
// 		name: "판다월드 카페",
// 		company: "everland",
// 		img: "https://www.everland.com/contents/ia/facilities/3fb279ed8ee745ffbbb76ba90134dffd.png",
// 		fnb_type: "cafe",
// 		description: "카페",
// 	},
// 	{
// 		name: "홀랜드 빌리지",
// 		company: "everland",
// 		img: "https://www.everland.com/contents/ia/facilities/9fc9e54ee66b4c9b933c5f6d522f7de9.jpg",
// 		fnb_type: "restaurant",
// 		description: "양식",
// 	},
// 	{
// 		name: "쿠치나 마리오",
// 		company: "everland",
// 		img: "https://www.everland.com/contents/ia/facilities/3cf6f96ed731448eb0f5fea851779258.jpg",
// 		fnb_type: "restaurant",
// 		description: "양식",
// 	},
// 	{
// 		name: "한가람",
// 		company: "everland",
// 		img: "https://www.everland.com/contents/ia/facilities/9985fe651fa74df1b45deaddbdb00018.jpg",
// 		fnb_type: "restaurant",
// 		description: "한식",
// 	},
// 	{
// 		name: "타운즈 마켓 레스토랑",
// 		company: "everland",
// 		img: "https://www.everland.com/contents/ia/facilities/c4df02f698fa4a51b497840c534d8cda.jpg",
// 		fnb_type: "restaurant",
// 		description: "일식",
// 	},
// 	{
// 		name: "가든 테라스(카페)",
// 		company: "everland",
// 		img: "https://www.everland.com/contents/ia/facilities/55e9f652b304428e897a9134fe441774.jpg",
// 		fnb_type: "cafe",
// 		description: "카페",
// 	},
// 	{
// 		name: "스타벅스",
// 		company: "everland",
// 		img: "https://www.everland.com/contents/ia/facilities/f45dcdd379cb4bafb482048da6f21142.jpg",
// 		fnb_type: "cafe",
// 		description: "카페",
// 	},
// 	{
// 		name: "커피빈",
// 		company: "everland",
// 		img: "https://www.everland.com/contents/ia/facilities/38281d83bdc2403ab3c4ec125825342a.jpg",
// 		fnb_type: "cafe",
// 		description: "카페",
// 	},
// 	{
// 		name: "차이나문",
// 		company: "everland",
// 		img: "https://www.everland.com/contents/ia/facilities/eba3e00fc76b4455a998d36bb308a539.jpg",
// 		fnb_type: "restaurant",
// 		description: "중식",
// 	},
// 	{
// 		name: "뉴욕 센트럴 스낵",
// 		company: "everland",
// 		img: "https://www.everland.com/contents/ia/facilities/3d3ab653325e4e5f94b97ce69e194486.jpg",
// 		fnb_type: "snack",
// 		description: "간식",
// 	},
// 	{
// 		name: "아마존 스낵",
// 		company: "everland",
// 		img: "https://www.everland.com/contents/ia/facilities/3eddc6958f9f48aca49bec8a78c32718.jpg",
// 		fnb_type: "snack",
// 		description: "간식",
// 	},
// )

// await FnbSchema.create(
// 	{
// 		name: "크리스탈팰리스(T.G.I.F)",
// 		company: "lotteworld",
// 		fnb_type: "retaurant",
// 		location: "어드밴처 1층",
// 		img:"https://adventure.lotteworld.com/image/2024/4/202404230228191040_275.jpg",
// 	},
// 	{
// 		name: "스쿨푸드",
// 		company: "lotteworld",
// 		fnb_type: "retaurant",
// 		location: "어드밴처 1층",
// 		img:"https://adventure.lotteworld.com/image/2018/6/20180620023405839_275.jpg",
// 		description: "양식",
// 	},
// 	{
// 		name: "아라비안바자",
// 		company: "lotteworld",
// 		fnb_type: "snack",
// 		location: "어드밴처 1층",
// 		img:"https://adventure.lotteworld.com/image/2018/9/201809200116378170_275.jpg",
// 		description: "분식",
// 	},
// 	{
// 		name: "스낵산호세",
// 		company: "lotteworld",
// 		fnb_type: "snack",
// 		location: "1어드밴처 1층",
// 		img:"https://adventure.lotteworld.com/image/2018/6/20180620023352611_275.jpg",
// 		description: "간식",
// 	},
// 	{
// 		name: "오마스딜라이트",
// 		company: "lotteworld",
// 		fnb_type: "snack",
// 		location: "어드밴처 1층",
// 		img:"https://adventure.lotteworld.com/image/2018/6/20180619112545823_275.jpg",
// 		description: "간식",
// 	},
// 	{
// 		name: "칠링스테이션",
// 		company: "lotteworld",
// 		fnb_type: "snack",
// 		location: "어드밴처 1층",
// 		img:"https://adventure.lotteworld.com/image/2023/3/202303271033486680_275.jpg",
// 		description: "간식",
// 	},
// 	{
// 		name: "폴바셋",
// 		company: "lotteworld",
// 		fnb_type: "cafe",
// 		location: "어드밴처 1층",
// 		img:"https://adventure.lotteworld.com/image/2022/9/202209071137421170_275.jpeg",
// 		description: "카페",
// 	},
// 	{
// 		name: "라쿠치나(김피라)",
// 		company: "lotteworld",
// 		fnb_type: "restaurant",
// 		location: "어드벤처 2층",
// 		img:"https://adventure.lotteworld.com/image/2022/9/202209071137421170_275.jpeg",
// 		description: "한식",
// 	},
// 	{
// 		name: "상하이 꽁시면관",
// 		company: "lotteworld",
// 		fnb_type: "restaurant",
// 		location: "어드벤처 2층",
// 		img:"https://adventure.lotteworld.com/image/2018/6/20180620023228772_275.jpg",
// 		description: "중식",
// 	},
// 	{
// 		name: "오이씨푸드",
// 		company: "lotteworld",
// 		fnb_type: "restaurant",
// 		location: "어드벤처 2층",
// 		img:"https://adventure.lotteworld.com/image/2018/6/20180620023156475_275.jpg",
// 		description: "일식",
// 	},
// 	{
// 		name: "앤티앤스 프레즐",
// 		company: "lotteworld",
// 		fnb_type: "snack",
// 		location: "어드벤처 2층",
// 		img:"https://adventure.lotteworld.com/image/2018/6/20180620023143563_275.jpg",
// 		description: "간식",
// 	},
// 	{
// 		name: "공차",
// 		company: "lotteworld",
// 		fnb_type: "cafe",
// 		location: "어드벤처 2층",
// 		img:"	https://adventure.lotteworld.com/image/2018/6/20180620023204635_275.jpg",
// 		description: "카페",
// 	},
// 	{
// 		name: "정글스낵",
// 		company: "lotteworld",
// 		fnb_type: "cafe",
// 		location: "어드벤처 3층",
// 		img: "https://adventure.lotteworld.com/image/2018/6/20180620023045837_275.jpg",
// 		description: "카페",
// 	},
// 	{
// 		name: "엠테이블",
// 		company: "lotteworld",
// 		fnb_type: "restaurant",
// 		location: "어드벤처 3층",
// 		img: "https://adventure.lotteworld.com/image/2022/10/202210260949370180_275.jpg",
// 		description: "푸드코트",
// 	},
// 	{
// 		name: "뉴욕핫도그",
// 		company: "lotteworld",
// 		fnb_type: "restaurant",
// 		location: "어드벤처 4층",
// 		img: "https://adventure.lotteworld.com/image/2018/6/20180620023020224_275.jpg",
// 		description: "양식",
// 	},
// 	{
// 		name: "파라오스낵",
// 		company: "lotteworld",
// 		fnb_type: "snack",
// 		location: "어드벤처 4층",
// 		img: "https://adventure.lotteworld.com/image/2021/1/202101190357183400_275.jpg",
// 		description: "간식",
// 	},
// 	{
// 		name: "레이크푸드(스쿨스토어)",
// 		company: "lotteworld",
// 		fnb_type: "restaurant",
// 		location: "매직아일랜드",
// 		img: "https://adventure.lotteworld.com/image/2018/6/20180620022955016_275.jpg",
// 		description: "분식",
// 	},
// 	{
// 		name: "비비큐빌리지",
// 		company: "lotteworld",
// 		fnb_type: "restaurant",
// 		location: "매직아일랜드",
// 		img: "https://adventure.lotteworld.com/image/2024/4/202404230229339940_275.jpg",
// 		description: "양식",
// 	},
// 	{
// 		name: "후르츠빌리지",
// 		company: "lotteworld",
// 		fnb_type: "snack",
// 		location: "매직아일랜드",
// 		img: "https://adventure.lotteworld.com/image/2018/6/20180620022724534_275.jpg",
// 		description: "간식",
// 	},
// 	{
// 		name: "어니스트밀크",
// 		company: "lotteworld",
// 		fnb_type: "cafe",
// 		location: "매직아일랜드",
// 		img: "https://adventure.lotteworld.com/image/2024/1/202401050913326410_275.jpg",
// 		description: "카페/아이스크림",
// 	},
// 	{
// 		name: "서호정(투썸플레이스)",
// 		company: "lotteworld",
// 		fnb_type: "cafe",
// 		location: "매직아일랜드",
// 		img: "https://adventure.lotteworld.com/image/2023/2/202302280336377260_275.jpg",
// 		description: "카페/아이스크림",	
// 	},
// 	{
// 		name: "페어리테일(도미노피자)",
// 		company: "lotteworld",
// 		fnb_type: "restaurant",
// 		location: "언더랜드 B1층",
// 		img: "https://adventure.lotteworld.com/image/2019/6/201906210441455500_275.jpg",
// 		description: "양식",	
// 	},
// 	{
// 		name: "101번지 남산돈까스",
// 		company: "lotteworld",
// 		fnb_type: "restaurant",
// 		location: "언더랜드 B1층",
// 		img: "https://adventure.lotteworld.com/image/2023/7/202307260924196240_275.jpg",
// 		description: "양식",
// 	},
// 	{
// 		name: "유브유부",
// 		company: "lotteworld",
// 		fnb_type: "restaurant",
// 		location: "언더랜드 B1층",
// 		img: "https://adventure.lotteworld.com/image/2023/4/202304200559115200_275.jpg",
// 		description: "분식",
// 	},
// 	{
// 		name: "츄로빅",
// 		company: "lotteworld",
// 		fnb_type: "restaurant",
// 		location: "언더랜드 B1층",
// 		img: "https://adventure.lotteworld.com/image/2018/6/20180620022640589_275.jpg",
// 		description: "간식",
// 	},
// );