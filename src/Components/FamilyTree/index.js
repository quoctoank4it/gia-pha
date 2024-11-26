import React, { useState } from "react";
import TreeImg from "../../Images/tree.gif";
import FaceImg from "../../Images/face.jpg";
import { useNavigate } from "react-router-dom";

const FamilyTree = () => {
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
        w: "Võ Thị Phương Anh",
      },
      children: [
        {
          id: "2_1",
          name: "Diệp Quốc Phú",
          details: {
            gender: "Nam",
            born: "1600",
            status: "",
            w_h: "",
            additionalInfo: "",
            w: "Phạm Thị Len",
          },
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
          details: {
            gender: "Nam",
            born: "1600",
            status: "",
            w_h: "",
            additionalInfo: "",
            w: "Dương Thị Thân",
          },
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
          details: {
            gender: "Nam",
            born: "1600",
            status: "",
            w_h: "",
            additionalInfo: "",
            w: "Duyên",
          },
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
          details: {
            gender: "Nam",
            born: "1600",
            status: "",
            w_h: "",
            additionalInfo: "",
            w: "Lê",
          },
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
          details: {
            gender: "Nam",
            born: "1600",
            status: "",
            w_h: "",
            additionalInfo: "",
            h: "Hà",
          },
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
          details: {
            gender: "Nam",
            born: "1600",
            status: "",
            additionalInfo: "",
            w: "Trần Thị Tây Nguyên",
          },
          children: [
            {
              id: "2_7_1",
              name: "Har Đích Thúi",
              children: [],
            },
          ],
        },
      ],
    },
  ];

  // Component hiển thị đệ quy
  const TreeNode = ({ node }) => {
    const navigate = useNavigate();

    const handleClick = (id) => {
      navigate(`/${id}`);
    };

    return (
      <div style={{ marginLeft: "20px", marginTop: "5px" }}>
        {/* Node chính */}
        <div
          style={{
            cursor: "pointer",
            color: "black",
          }}
          onClick={() => handleClick(node.id)}
        >
          <img src={TreeImg}></img>
          <img src={FaceImg} style={{ marginRight: 5 }}></img>
          <span style={{ color: "red" }}>
            Đời t{node.id.split("_").length}:
          </span>{" "}
          {node.name}
        </div>
        {/* {node.details && node.details.h && (
          <div
            style={{
              cursor: "pointer",
              color: "black",
            }}
          >
            <img src={FaceImg} style={{ marginRight: 5, marginLeft: 18 }}></img>
            <span style={{ color: "red" }}>Chồng:</span>{" "}
            <span>{node.details.h}</span>
          </div>
        )}
        {node.details && node.details.w && (
          <div
            style={{
              cursor: "pointer",
              color: "black",
            }}
          >
            <img src={FaceImg} style={{ marginRight: 5, marginLeft: 18 }}></img>
            <span style={{ color: "red" }}>Vợ:</span>{" "}
            <span>{node.details.w}</span>
          </div>
        )} */}

        <div>
          {node.children.map((child) => (
            <TreeNode key={child.id} node={child} />
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="content">
      <div className="bg_title_news">Cây Gia Phả</div>
      <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
        {familyData.map((rootNode) => (
          <TreeNode key={rootNode.id} node={rootNode} />
        ))}
      </div>
    </div>
  );
};

export default FamilyTree;
