import CheckBoxSection from "./CheckBox";
import FormField from "./FormField";
import Button from "../components/Button";

function Form({ fields, checkbox, buttonText, buttonHref, className }) {
  return (
    <form className={`${className}`}>
      {fields.map((field) => (
        <FormField
          key={field.id}
          type={field.type}
          placeholder={field.placeholder}
        />
      ))}
      <CheckBoxSection
        label={checkbox.label}
        linkText={checkbox.linkText}
        linkHref={checkbox.linkHref}
      />
      <Button text={buttonText} href={buttonHref} className={`mt-10`} />
    </form>
  );
}
export default Form;
