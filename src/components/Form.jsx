import CheckBoxSection from "./CheckBox";
import FormField from "./FormField";

function Form({ fields, checkbox, className }) {
  return (
    <form className={`${className}`}>
      {fields.map((field) => (
        <FormField
          key={field.name}
          type={field.type}
          name={field.name}
          value={field.value}
          onChange={field.onChange}
          placeholder={field.placeholder}
          error={field.error}
        />
      ))}
      <CheckBoxSection
        label={checkbox.label}
        linkText={checkbox.linkText}
        linkHref={checkbox.linkHref}
      />
    </form>
  );
}
export default Form;
