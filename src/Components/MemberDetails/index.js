const MemberDetails = ({ member }) => {
  if (!member) return <p>Chọn một thành viên để xem chi tiết</p>;

  return (
    <div>
      <h3>{member.name}</h3>
      <p>Giới tính: {member.details.gender}</p>
      <p>Ngày sinh: {member.details.born}</p>
      <p>Trạng thái: {member.details.status}</p>
      <p>Thông tin thêm: {member.details.additionalInfo}</p>
    </div>
  );
};

export default MemberDetails;
