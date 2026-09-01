import { validateName, validateIngredients } from "../validators/orderValidator";
import React, { useState } from "react";
import type { MouseEvent, ChangeEvent, FormEvent } from "react";
import type { Ingredient } from "../types/ingredient";
import type { OrderFormData, OrderFormProps, ValidatableField, OrderFormErrors, PizzaSize } from "../types/orderForm";
import { Input, FormFeedback } from "reactstrap";

const malzemeListe: Ingredient[] = [
  { name: "Pepperoni", malzeme: "Pepperoni", isChecked: true },
  { name: "Sosis", malzeme: "Sosis", isChecked: true },
  { name: "Kanada Jambonu", malzeme: "Kanada Jambonu", isChecked: false },
  { name: "Tavuk Izgara", malzeme: "Tavuk Izgara", isChecked: false },
  { name: "Soğan", malzeme: "Soğan", isChecked: false },
  { name: "Domates", malzeme: "Domates", isChecked: false },
  { name: "Mısır", malzeme: "Mısır", isChecked: true },
  { name: "Brokoli", malzeme: "Brokoli", isChecked: false },
  { name: "Jalepeno", malzeme: "Jalepeno", isChecked: true },
  { name: "Sarımsak", malzeme: "Sarımsak", isChecked: false },
  { name: "Biber", malzeme: "Biber", isChecked: false },
  { name: "Sucuk", malzeme: "Sucuk", isChecked: false },
  { name: "Ananas", malzeme: "Ananas", isChecked: true },
  { name: "Kabak", malzeme: "Kabak", isChecked: false },
];

const formData: OrderFormData = {
  boyut: "Orta",
  kalinlik: "Orta",
  malzeme: malzemeListe.filter((m) => m.isChecked),
  isim: "",
  not: "",
  adet: 1,
};

const errorMessages = {
  isim: "En az 3 karakter içermelidir.",
  malzeme: "Malzeme en az 4 en fazla da 10 adet seçilebilir.",
};

const boyut: PizzaSize[] = ["Küçük", "Orta", "Büyük"];

export default function OrderForm({ onSubmit }: OrderFormProps) {
  const [form, setForm] = useState<OrderFormData>(formData);
  const [malzemeler, setMalzemeler] = useState<Ingredient[]>(malzemeListe);
  const [errors, setErrors] = useState<OrderFormErrors>({
    isim: false,
    malzeme: true,
  });

  const handleQuantityChange = (event: MouseEvent<HTMLButtonElement>) => {
    const { id } = event.currentTarget;

    const value = id === "increase" ? form.adet + 1 : form.adet > 1 ? form.adet - 1 : 1;

    setForm({ ...form, adet: value });
  }

  const handleIngredientChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;

    const updatedIngredients = [...malzemeler];
    const ingredientIndex = updatedIngredients.findIndex((ingredient) => ingredient.malzeme === value);

    updatedIngredients[ingredientIndex] = {
      ...updatedIngredients[ingredientIndex],
      isChecked: checked,
    };

    setMalzemeler(updatedIngredients);

    const selectedIngredients = updatedIngredients.filter(
      (ingredient) => ingredient.isChecked
    );

    setForm({
      ...form,
      malzeme: selectedIngredients,
    });

    validateField("malzeme", selectedIngredients);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;

    setForm({ ...form, [name]: value });

    if (name === "isim" || name === "malzeme") {
      validateField(name, value);
    }
  };

  const validateField = (name: ValidatableField, value: string | Ingredient[]) => {
    let isValid = true;

    if (name === "isim") {
      isValid = validateName(value);
    } else if (name === "malzeme") {
      isValid = validateIngredients(value);
    }

    setErrors((prevErrors) => ({ ...prevErrors, [name]: isValid }));
  };

  const isValid = Object.values(errors).every(Boolean);

  const selectedIngredientCount = malzemeler.filter(ingredient => ingredient.isChecked).length;

  const ingredientPrice = selectedIngredientCount * 5;

  const totalPrice = ingredientPrice + 85.5 * form.adet;

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(form, isValid);
  };

  return (
    <>
      <section className="container d-flex flex-column align-items-center justify-content-center mt-5">
        <h4>Position Absolute Acı Pizza</h4>
        <div className="d-flex mt-3 sp" style={{ width: "195px" }}>
          <span>85.50₺</span>
          <div className="d-flex gap-5" style={{ paddingLeft: "370px" }}>
            <span>4.9</span>
            <span>(200)</span>
          </div>
        </div>
        <article className="mt-3" style={{ width: "195px", textAlign: "left" }}>
          <p style={{ width: "530px" }}>
            Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı
            pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli
            diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun
            ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle
            yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan
            kökenli lezzetli bir yemektir. . Küçük bir pizzaya bazen pizzetta
            denir.
          </p>
          <form onSubmit={handleSubmit} className="order-form">
            <section
              className="form-section d-flex justify-content-between"
              style={{ width: "424px" }}
            >
              <div className="d-flex flex-column mt-3">
                <h6 className="mb-3">
                  Boyut Seç<span className="red-star">*</span>
                </h6>
                {boyut.map((b, i) => (
                  <div key={i} className="mb-3">
                    <input
                      type="radio"
                      name="boyut"
                      id={b}
                      value={b}
                      checked={form.boyut === b}
                      onChange={handleChange}
                    />
                    <label htmlFor={b} className="ps-2">
                      {b}
                    </label>
                  </div>
                ))}
              </div>
              <div className="dough-selection d-flex flex-column">
                <label
                  htmlFor="kalinlik"
                  className="mb-3"
                  style={{ fontWeight: 700, marginTop: ".85rem" }}
                >
                  Hamur Seç<span className="red-star">*</span>
                </label>
                <select
                  name="kalinlik"
                  id="kalinlik"
                  value={form.kalinlik}
                  onChange={handleChange}
                >
                  <option value="">Hamur Kalınlığı</option>
                  <option value="İnce">İnce</option>
                  <option value="Orta">Orta</option>
                  <option value="Kalın">Kalın</option>
                </select>
              </div>
            </section>
            <section className="mt-4">
              <h6 className="ingredients-title pb-2">
                Ek Malzemeler <span className="red-star">*</span>
              </h6>
              <p style={{ width: "300px" }}>
                En fazla 10 malzeme seçebilirsiniz. 5&#8378;
              </p>
              <div
                className="row row-cols-2 row-cols-md-3 mt-5 responsive-row"
                style={{
                  width: "600px",
                  fontWeight: "700",
                  color: "#5F5F5F",
                }}
              >
                {malzemeler.map((m, i) => {
                  return (
                    <div key={i} className="col mb-3">
                      <input
                        type="checkbox"
                        id={m.malzeme}
                        name="malzeme"
                        value={m.malzeme}
                        onChange={handleIngredientChange}
                        checked={m.isChecked}
                      />
                      <label htmlFor={m.malzeme} className="ms-3">
                        {m.name}
                      </label>
                    </div>
                  );
                })}
              </div>

              {errors.malzeme === false && (
                <div
                  className="alert alert-danger"
                  role="alert"
                  style={{ width: "32rem", marginTop: "2rem" }}
                >
                  {errorMessages.malzeme}
                </div>
              )}

              <label className="name-label mb-4 mt-5 f-weight" htmlFor="isim">
                İsim
              </label>
              <Input
                type="text"
                name="isim"
                id="isim"
                value={form.isim}
                onChange={handleChange}
                valid={errors.isim === true}
                invalid={errors.isim === false}
              />
              {!errors.isim && (
                <FormFeedback>{errorMessages.isim}</FormFeedback>
              )}
              <label className="note-label mb-4 mt-4 f-weight">
                Sipariş Notu
              </label>
              <textarea
                name="not"
                value={form.not}
                onChange={handleChange}
                className="form-control"
                placeholder="Siparişine eklemek istediğin bir not var mı?"
              ></textarea>
              <hr className="mt-4 form-divider" />
              <div
                className="d-flex order-container"
                style={{ width: "530px", height: "190px" }}
              >
                <div
                  className="card order-summary"
                  style={{ width: "22rem", order: "2", height: "190px" }}
                >
                  <div className=" w-100">
                    <div className="pd-4">
                      <p className="f-weight">Sipariş Toplamı</p>

                      <div className="d-flex mb-2">
                        <span className="me-5 pr-50">Seçimler</span>
                        <span>
                          {ingredientPrice}
                          &#8378;
                        </span>
                      </div>
                      <div className="d-flex f-weight">
                        <span className="me-5 red-special pr-60">Toplam</span>
                        <span className="red-special">
                          {totalPrice}
                          &#8378;
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="d-flex me-2 order-count"
                  style={{
                    height: "190px",
                    width: "12rem",
                    order: "1",
                  }}
                >
                  <div>
                    <button
                      type="button"
                      id="decrease"
                      name="adet"
                      className="btn btn-warning radius-left f-weight"
                      style={{ width: "50px", height: "50px" }}
                      value={form.adet}
                      onClick={handleQuantityChange}
                    >
                      -
                    </button>
                  </div>
                  <input
                    type="text"
                    value={form.adet}
                    readOnly
                    className="form-control bg-white f-weight"
                    style={{
                      textAlign: "center",
                      width: "50px",
                      height: "50px",
                    }}
                  />
                  <div>
                    <button
                      type="button"
                      id="increase"
                      name="adet"
                      className="btn btn-warning radius-right f-weight"
                      style={{ width: "50px", height: "50px" }}
                      value={form.adet}
                      onClick={handleQuantityChange}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
              <button
                type="submit"
                className="btn btn-warning rounded f-weight order-button"
                style={{
                  height: "50px",
                  width: "21.3rem",
                  marginLeft: "190px",
                }}
                disabled={!isValid}
              >
                SİPARİŞ VER
              </button>
            </section>
          </form>
        </article>
      </section>
    </>
  );
}
