import React, { useState } from "react";
import calculateTotalPrice from "utils/calculateTotalPrice";
import { Redirect } from "react-router-dom";
import { useForm } from "react-hook-form";

const ConstructorPage = ({ updateOrderContext }) => {
  const { register, handleSubmit, watch } = useForm();
  const [submitted, setSubmitted] = useState(false);
  const selectedIngredients = watch();
  const totalPrice = calculateTotalPrice(selectedIngredients);

  const submitForm = () => {
    updateOrderContext({ selectedIngredients });
    setSubmitted(true);
  };

  if (submitted) {
    return <Redirect to="/checkout" />;
  }

  return (
    <form onSubmit={handleSubmit(submitForm)}>
      <h2>Конструктор Пицы</h2>

      <input type="submit" value={`Заказать за ${totalPrice}$`} />

      <fieldset>
        <legend>Размер:</legend>

        <input ref={register} type="radio" id="30cm" name="size" value="30cm" />
        <label htmlFor="30cm">30cm</label>

        <input ref={register} type="radio" id="35cm" name="size" value="35cm" />
        <label htmlFor="35cm">35cm</label>
      </fieldset>

      <fieldset>
        <legend>Тесто:</legend>

        <input
          ref={register}
          type="radio"
          id="тонкое"
          name="dough"
          value="тонкое"
        />
        <label htmlFor="тонкое">тонкое</label>

        <input
          ref={register}
          type="radio"
          id="пышное"
          name="dough"
          value="пышное"
        />
        <label htmlFor="пышное">пышное</label>
      </fieldset>

      <fieldset>
        <legend>Соус:</legend>

        <input
          ref={register}
          type="radio"
          id="томатный"
          name="sause"
          value="томатный"
        />
        <label htmlFor="томатный">томатный</label>

        <input
          ref={register}
          type="radio"
          id="белый"
          name="sause"
          value="белый"
        />
        <label htmlFor="белый">белый</label>

        <input
          ref={register}
          type="radio"
          id="острый"
          name="sause"
          value="острый"
        />
        <label htmlFor="острый">острый</label>
      </fieldset>

      <fieldset>
        <legend>Сыр:</legend>

        <input
          ref={register}
          type="checkbox"
          id="моцарелла"
          name="cheese"
          value="моцарелла"
        />
        <label htmlFor="моцарелла">моцарелла</label>

        <input
          ref={register}
          type="checkbox"
          id="чеддар"
          name="cheese"
          value="чеддар"
        />
        <label htmlFor="чеддар">чеддар</label>

        <input
          ref={register}
          type="checkbox"
          id="дорблю"
          name="cheese"
          value="дорблю"
        />
        <label htmlFor="дорблю">дорблю</label>
      </fieldset>

      <fieldset>
        <legend>Овощи:</legend>

        <input
          ref={register}
          type="checkbox"
          id="томаты"
          name="томаты"
          value="томаты"
        />
        <label htmlFor="томаты">томаты</label>

        <input
          ref={register}
          type="checkbox"
          id="грибы"
          name="грибы"
          value="грибы"
        />
        <label htmlFor="грибы">грибы</label>

        <input
          ref={register}
          type="checkbox"
          id="перец"
          name="перец"
          value="перец"
        />
        <label htmlFor="перец">перец</label>
      </fieldset>

      <fieldset>
        <legend>Мясо:</legend>

        <input
          ref={register}
          type="checkbox"
          id="бекон"
          name="бекон"
          value="бекон"
        />
        <label htmlFor="бекон">бекон</label>

        <input
          ref={register}
          type="checkbox"
          id="пепперони"
          name="пепперони"
          value="пепперони"
        />
        <label htmlFor="пепперони">пепперони</label>

        <input
          ref={register}
          type="checkbox"
          id="ветчина"
          name="ветчина"
          value="ветчина"
        />
        <label htmlFor="ветчина">ветчина</label>
      </fieldset>
      <br></br>
    </form>
  );
};

export default ConstructorPage;
