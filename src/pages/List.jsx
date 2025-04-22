import { useSelector } from "react-redux";
import Loader from "./../components/Loader";
import ReactPaginate from "react-paginate";
import { useState } from "react";

const List = ({ setDetailId }) => {
  const { isLoading, error, flights } = useSelector((store) => store.flight);

  //* Görüntülenecek ilk elemanın dizideki sırası
  const [start, setStart] = useState(0);

  //* Sayfa başına gösterilecek eleman sayısı
  const perPage = 10;

  //* Görüntülenecek son elemanın dizideki sırası
  const end = start + perPage;

  //* Slice ile başlangıç ve bitiş arasını kes
  const currentFlights = flights.slice(start, end);

  //* Toplam sayfa sayısını hesapla
  const totalPage = Math.ceil(flights.length / perPage);

  //* Sayfa değiştiğinde state'i güncelle
  const handleChange = (event) => {
    setStart(event.selected * perPage);
  };

  if (isLoading)
    return (
      <div>
        <Loader />
      </div>
    );

  if (error)
    return (
      <div>
        <Error info={error} />
      </div>
    );

  return (
    <div className="p-3 p-md-4">
      <table className="table table-dark table-striped table-hover table-responsive mt-5">
        <thead>
          <tr>
            <th>İd</th>
            <th>Kuyruk Kodu</th>
            <th>Enlem</th>
            <th>Boylam</th>
            <th>Derece</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {currentFlights.map((flight) => (
            <tr>
              <td>{flight.id} </td>
              <td>{flight.code} </td>
              <td>{flight.lay} </td>
              <td>{flight.lgn} </td>
              <td>{flight.deg} </td>
              <td>
                <button onClick={() => setDetailId(flight.id)}>Detay</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <ReactPaginate
        breakLabel="..."
        nextLabel="ileri >"
        onPageChange={handleChange}
        className="pagination"
        pageRangeDisplayed={5}
        pageCount={totalPage}
        previousLabel="< geri"
        renderOnZeroPageCount={null}
      />
    </div>
  );
};

export default List;
