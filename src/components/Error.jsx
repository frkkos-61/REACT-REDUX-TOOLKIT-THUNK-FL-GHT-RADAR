const Error = ({ info }) => {
  return (
    <div className="error">
      <h2>Bir sorun oluştu</h2>
      <p>{info} </p>
    </div>
  );
};

export default Error;
