import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const initalFormValues = { fullname: "", phone_number: "" };
/**bu kod bizim verilerimizi giriş yapıp butona bastıkdan sonra sıfırlamamızı sağlıyor */

function Form({ addContact, contacts }) {
  const [form, setForm] = useState({ fullname: "", phone_number: "" });

  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault(); /**bu sayfada butona basınca
    sayfayı yenileme işlemini durduruyor */

    if (form.fullname === "" || form.phone_number === "") {
      return false; /**eğer telefon numarası ve isim boş ise 
        false döndüeüyor ve bilgiler gönderilmiyor */
    }
    addContact([...contacts, form]);
    setForm(initalFormValues);
    /**bunun amacı inputa veri ekleyince inputun içini temizlemiş olduk */
  };
  return (
    <div>
      <form className="mt-4" onSubmit={onSubmit}>
        <div className="row " >
          <div className="col-12">
            <input
              className="form-control"
              name="fullname"
              placeholder="First Name"
              onChange={onChangeInput}
              value={form.fullname}
            />
          </div>
        </div>

        <div className="row  mt-3">
          <div className="col-12">
            <input
              className="form-control"
              name="phone_number"
              placeholder="Phone Number"
              value={form.phone_number}
              onChange={onChangeInput}
            />
          </div>
        </div>
        <div className="row  mt-3 ">
          <div className="col-12 ">
            <button className="btn btn-light mx-auto d-flex">
              Kişiyi Ekle
            </button>
          </div>
        </div>
        
      </form>
    </div>
  );
}

export default Form;
