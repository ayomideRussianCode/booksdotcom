import CheckBoxSection from "./CheckBox";
import FormField from "./FormField";
import Button from "./Button";

function Form({ fields, checkbox, buttonText, buttonHref }) {
  return (
    <form>
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

      <Button text={buttonText} href={buttonHref} className="mt-10" />
    </form>
  );
}
export default Form;
