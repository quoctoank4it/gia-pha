import React from "react";
import { useParams } from "react-router-dom";
import data from "../../data.json";

const findPersonById = (data, id) => {
  for (let person of data) {
    if (person.id === id) return person;
    if (person.children) {
      const result = findPersonById(person.children, id);
      if (result) return result;
    }
  }
  return null;
};

const PersonDetail = () => {
  const { id } = useParams();
  const person = findPersonById(data.data, id);

  if (!person) {
    return <p>Không tìm thấy thông tin chi tiết cho ID: {id}</p>;
  }

  return (
    <div className="content">
      <div className="bg_title_news">Chi Tiết Gia Phả</div>
      <div style={{ padding: 20 }}>
        <p>
          <strong>Tên:</strong> {person.name || "Không có"}
        </p>
        <p>
          <strong>Năm sinh:</strong> {person.details?.born || "Không có"}
        </p>
        <p>
          <strong>Giới tính:</strong> {person.details?.gender || "Không có"}
        </p>
        <p>
          <strong>Vợ/Chồng:</strong>{" "}
          {person.details?.w || person.details?.h || "Không có"}
        </p>
        <p>
          <strong>Thông tin thêm:</strong>{" "}
          {person.details?.additionalInfo || "Không có"}
        </p>
      </div>
    </div>
  );
};

export default PersonDetail;
