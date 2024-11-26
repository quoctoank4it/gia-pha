import React, { useState } from "react";
import TreeImg from "../../Images/tree.gif";
import FaceImg from "../../Images/face.jpg";

const FamilyTree = () => {
  // Dữ liệu cây gia phả

  const familyData = [
    {
      id: "1",
      name: "Diệp Minh",
      details: {
        gender: "Nam",
        born: "1600",
        status: "",
        w_h: "",
        additionalInfo: "",
      },
      children: [
        {
          id: "2_1",
          name: "Diệp Quốc Phú",
          children: [
            {
              id: "2_1_1",
              name: "Diệp Thị Như Ngọc",
              children: [],
            },
            {
              id: "2_1_2",
              name: "Diệp Quốc Thắng",
              children: [],
            },
          ],
        },
        {
          id: "2_2",
          name: "Diệp Quốc Thọ",
          children: [
            {
              id: "2_2_1",
              name: "Diệp Dương Thị Thu Thủy",
              children: [],
            },
            {
              id: "2_2_2",
              name: "Diệp Quốc Bình",
              children: [],
            },
          ],
        },
        {
          id: "2_3",
          name: "Diệp Quốc Quang",
          children: [
            {
              id: "2_3_1",
              name: "Diệp Quốc Ben",
              children: [],
            },
          ],
        },
        {
          id: "2_4",
          name: "Diệp Quốc Trung",
          children: [
            {
              id: "2_4_1",
              name: "Diệp Giao",
              children: [],
            },
            {
              id: "2_4_2",
              name: "Diệp Chim Ri",
              children: [],
            },
          ],
        },
        {
          id: "2_5",
          name: "Diệp Thị Lệ Thu",
          children: [
            {
              id: "2_5_1",
              name: "Ku Ken",
              children: [],
            },
            {
              id: "2_5_2",
              name: "Bé Thư",
              children: [],
            },
          ],
        },
        {
          id: "2_6",
          name: "Diệp Quốc Thanh",
          children: [],
        },
        {
          id: "2_7",
          name: "Diệp Quốc Toàn",
          children: [
            {
              id: "2_7_1",
              name: "Har Đít Thúi",
              children: [],
            },
          ],
        },
      ],
    },
  ];

  // Component hiển thị đệ quy
  const TreeNode = ({ node }) => {
    const [isExpanded, setIsExpanded] = useState(true); // Trạng thái mở/đóng của node

    const toggleExpand = () => setIsExpanded(!isExpanded); // Toggle mở/đóng

    return (
      <div style={{ marginLeft: "20px", marginTop: "5px" }}>
        {/* Node chính */}
        <div
          style={{
            cursor: "pointer",
            color: "black",
          }}
          onClick={toggleExpand}
        >
          <img src={TreeImg}></img>
          <img src={FaceImg} style={{ marginRight: 5 }}></img>
          <span style={{ color: "red" }}>
            Đời thứ {node.id.split("_").length}:
          </span>{" "}
          {node.name}
        </div>

        <div>
          {node.children.map((child) => (
            <TreeNode key={child.id} node={child} />
          ))}
        </div>
      </div>
    );
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      {familyData.map((rootNode) => (
        <TreeNode key={rootNode.id} node={rootNode} />
      ))}
    </div>
  );
};

export default FamilyTree;
