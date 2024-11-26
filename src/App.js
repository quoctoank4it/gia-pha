import { useState } from "react";
import "./App.css";
import FamilyTree from "./Components/FamilyTree";

function App() {
  const [selectedMember, setSelectedMember] = useState(null);

  const handleNodeClick = (nodeData) => {
    setSelectedMember(nodeData);
  };

  return (
    <div className="App">
      <div className="container">
        <div className="header">
          GIA PHẢ HỌ DIỆP
          <br />
          <span>Gìn giữ cho muôn đời sau</span>
        </div>
        <div className="content">
          <div className="bg_title_news">Cây Gia Phả</div>
          <FamilyTree onNodeClick={handleNodeClick} />
          {/* <div className="tree-view">
            <ul>
              <li>
                Đời thứ 1 - Diệp Minh
                <ul>
                  <li>Đời thứ 2 - Diệp Quốc Phú</li>
                  <ul>
                    <li>Đời thứ 3 - Diệp Thị Như Ngọc</li>
                    <li>Đời thứ 3 - Diệp Quốc Thắng</li>
                  </ul>
                  <li>Đời thứ 2 - Diệp Quốc Thọ</li>
                  <ul>
                    <li>Đời thứ 3 - Diệp Dương Thị Thu Thủy</li>
                    <li>Đời thứ 3 - Diệp Quốc Bình</li>
                  </ul>
                  <li>Đời thứ 2 - Diệp Quốc Quang</li>
                  <ul>
                    <li>Đời thứ 3 - Diệp Quốc Ben</li>
                  </ul>
                  <li>Đời thứ 2 - Diệp Quốc Trung</li>
                  <ul>
                    <li>Đời thứ 3 - Diệp Giao</li>
                    <li>Đời thứ 3 - Diệp Chim Ri</li>
                  </ul>
                  <li>Đời thứ 2 - Diệp Thị Lệ Thu</li>
                  <ul>
                    <li>Đời thứ 3 - Ku Ken</li>
                    <li>Đời thứ 3 - thư Đen</li>
                  </ul>
                  <li>Đời thứ 2 - Diệp Quốc Thanh</li>
                  <li>Đời thứ 2 - Diệp Quốc Toàn</li>
                  <ul>
                    <li>Đời thứ 3 - Har Đít Thúi</li>
                  </ul>
                </ul>
              </li>
            </ul>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default App;
