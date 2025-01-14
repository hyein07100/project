import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import S from './style.js';
import BasicButton from '../../components/button/BasicButton.jsx';



const LostnFoundExplain = () => {
  const { id, company } = useParams();
  const [lostnfoundexplain, setLostnFoundExplain] = useState([]);

  useEffect(() => {
    fetch(`https://port-0-playtopia-rccln2llw1nwqng.sel5.cloudtype.app/lostnfoundexplain/list`)
      .then((res) => res.json())
      .then((data) => setLostnFoundExplain(data.LostnFoundExplain));
  }, []);

  const companyNames = {
    lotteworld: '롯데월드',
    everland: '에버랜드',
    seoulland: '서울랜드'
  };

  return (
    <>
      <S.margin></S.margin>
      <S.header>분실물 센터</S.header>
      <S.container2>
        {lostnfoundexplain.map((item) => {
          if (parseInt(item.no) === parseInt(id) && item.company === company) {
            return (
              <div key={item._id}>
                   <S.imagebox>
                  <img src={item.img} alt="분실물 url" />
                </S.imagebox>

                <S.content>
                  <p>습득 장소 : {companyNames[item.company] || item.company} {item.found}</p>
                  <p>습득물 : {item.item}</p>
                  <p>습득일자 : {item.date}</p>
                  <p>결과 : {item.result}</p>
                </S.content>

                <S.buttonbox>
        
        <S.backbutton >
        <Link style={{color:'#1FB1D9'}} to={`/lostnfound/list/${company}`}>목록으로</Link>
        </S.backbutton>
        
      

      <S.okbutton  >
      <Link style={{color:'#fff'}}to={`/lostnfound/search/${item.no}/${item.company}`}>찾기</Link>
      </S.okbutton>

    </S.buttonbox>

                
              </div>
            );
          }
          return null; 
        })}
      </S.container2>
    </>
  );
};

export default LostnFoundExplain;
