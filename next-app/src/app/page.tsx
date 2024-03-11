import React from "react";

function page() {
  return (
    <html lang="ko">
      <head>
        <meta charSet="UTF-8" />
        <title>Dream Jeju</title>
      </head>

      <body>
        <div id="container">
          <header>
            <div id="logo">
              <a href="index-footer.html">
                <h1>Dream Jeju</h1>
              </a>
            </div>
            <nav>
              <ul id="topMenu">
                <li>
                  <a href="#">단체 여행</a>
                </li>
                <li>
                  <a href="#">맞춤 여행</a>
                </li>
                <li>
                  <a href="#">갤러리</a>
                </li>
                <li>
                  <a href="#">문의하기</a>
                </li>
              </ul>
            </nav>
          </header>
          <main className="contents">
            <section id="headling">
              <h2>몸과 마음이 치유되는 섬</h2>
              <div className="detail">
                <strong>
                  <p>쉼(Healing)의 공간으로 안내합니다</p>
                </strong>
                <p>
                  탁 트인 바다, 시원한 바람에 몸을 맡기고 뚜벅뚜벅 오름을 오르고
                  올렛길을 걷다보면 온전히 나에게 집중할 수 있습니다.{" "}
                </p>
              </div>
              <div className="schedule">
                <h3>상세 일정</h3>
                <ul>
                  <li>여행 기간 : 2박 3일</li>
                  <li>
                    여행 일정 : (여행 일정은 상담을 통해 결정 및 조정
                    가능합니다)
                  </li>
                </ul>
              </div>
            </section>
            <section id="activity">
              <h2>다양한 액티비티가 기다리는 섬</h2>
              <div className="detail">
                <p>모험과 스릴이 넘치는 레저의 천국으로 안내합니다.</p>
                <p>둘러보기만 하는 여행을 하셨나요? </p>
                <p>
                  하늘을 날며 시원한 바다를 내려다보는 패러글라이딩과 투명한
                  물빛 속을 여행하는 스킨스쿠버... 아름다운 제주 해안도로를 씽씽
                  전동바이크나 전동킥보드로 달려보세요. 시원한 바다를 가까이에서
                  느낄 수 있는 요트 체험과 배낚시도 빼놓을 수 없겠죠?
                </p>
              </div>
            </section>
          </main>
          <footer>
            <section id="bottomMenu">
              <ul>
                <li>
                  <a href="#">회사 소개</a>
                </li>
                <li>
                  <a href="#">개인정보처리방침</a>
                </li>
                <li>
                  <a href="#">여행약관</a>
                </li>
                <li>
                  <a href="#">사이트맵</a>
                </li>
              </ul>
            </section>
          </footer>
        </div>
      </body>
    </html>
  );
}

export default page;
