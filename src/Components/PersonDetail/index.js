import React from "react";
import { useNavigate, useParams } from "react-router-dom";
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
  const navigate = useNavigate();
  const { id } = useParams();
  const person = findPersonById(data.data, id);

  if (!person) {
    return <p>Không tìm thấy thông tin chi tiết cho ID: {id}</p>;
  }

  const handleBack = () => {
    navigate(-1); // Chuyển về trang trước đó
  };

  return (
    <div className="content">
      <div className="bg_title_news">Chi Tiết Gia Phả</div>
      <div style={{ padding: 20 }}>
        <p>
          <strong>Tên:</strong> {person.name || "Không có"}
        </p>
        {person.details && person.details.h && (
          <p>
            <strong>Chồng:</strong> {person.details.h}
          </p>
        )}
        {person.details && person.details.w && (
          <p>
            <strong>Vợ:</strong> {person.details.w}
          </p>
        )}
        <p>
          <strong>Năm sinh:</strong> {person.details?.born || "Không có"}
        </p>
        <p>
          <strong>Giới tính:</strong> {person.details?.gender || "Không có"}
        </p>
        <p>
          <strong>Địa chỉ:</strong>{" "}
          {person.details?.additionalInfo || "Không có"}
        </p>
        <p>
          <strong>Số điện thoại:</strong>{" "}
          {person.details?.phonenumber || "Không có"}
        </p>
      </div>
    </div>
  );
};

export default PersonDetail;
