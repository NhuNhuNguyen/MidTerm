import { useForm } from "react-hook-form";
import "./newproduct.css";

function NewProductForm() {
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
        {...register("name", { required: true , minLength: 5})}
      />
      {errors.name && (
        <p className="hook__error">Name is required and at least 5 characters</p>
      )}

      <label className="hook__text">Description</label>
      <input
        type="description"
        className="hook__input"
        {...register("description", { required: true })}
      />
      {errors.description && <p className="hook__error">Description is required</p>}

      <label className="hook__text">Category</label>
      <input
        type="category"
        className="hook__input"
        {...register("category", { required: true })}
      />
      {errors.category && <p className="hook__error">Category is required</p>}

      <label className="hook__text">Quantity</label>
      <input
        type="quantity"
        className="hook__input"
        {...register("quantity", { pattern: {
          value: /^[0-9]+$/,
      }, })}
      />
      {errors.quantity && <p className="hook__error">Please enter a number</p>}

      <label className="hook__text">Price</label>
      <input
        type="price"
        className="hook__input"
        {...register("price", { pattern: {
          value: /^[0-9]+$/,
      }, })}
      />
      {errors.price && <p className="hook__error">Please enter a number</p>}

      <button className="hook__button" type="submit">
        Submit
      </button>

      <button className="hook__button" type="cancel">
        Cancel
      </button>
    </form>
  );
}

export default NewProductForm;
