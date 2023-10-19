import { useForm } from "react-hook-form";
import "./newshop.css";

function NewShopForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="hook">
      <label className="hook__text">Name</label>
      <input
        type="name"
        className="hook__input"
        {...register("name", { required: true })}
      />
      {errors.name && (
        <p className="hook__error">Name is required</p>
      )}

      <label className="hook__text">Description</label>
      <input
        type="description"
        className="hook__input"
        {...register("description", { required: true })}
      />
      {errors.description && <p className="hook__error">Description is required</p>}

      <button className="hook__button" type="submit">
        SUBMIT
      </button>

      <button className="hook__button" type="cancel">
        CANCEL
      </button>
    </form>
  );
}

export default NewShopForm;
