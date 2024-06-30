
import Performance from './performanceschema.js';



// 예시: controller.js 내의 getPerformancesByDate 함수
export const getPerformancesByDate = async (req, res) => {
    try {
      const date = new Date(req.params.date); // 날짜 파싱
      const performances = await Performance
        .find({ date })
        .sort('time') // 시간 순으로 정렬
        .exec();
      res.json(performances);
    } catch (error) {
      res.status(500).send(error);
    }
  };
  