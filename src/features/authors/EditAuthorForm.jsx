import Button from '../../components/ui/Button';
import Form from '../../components/ui/Form';
import FormRow from '../../components/ui/FormRow';
import Input from '../../components/ui/Input';
import Select from 'react-select';
import { useCountry } from '../../hooks/useCountry';
import { customStyles } from '../../styles/CustomeStye.js';
import { useDarkMode } from '../../context/DarkModeContext.jsx';

function EditAuthorForm() {
  const { countries } = useCountry();
  const { isDarkMode } = useDarkMode();
  return (
    <Form>
      <FormRow label="Author name" type="bookFormStyle">
        <Input
          type="text"
          name="name"
          placeholder="e.g. Robert C. Martin"
          className="h-[44px]"
        />
      </FormRow>

      <FormRow label="Birth date" type="bookFormStyle">
        <Input
          type="date"
          name="birth_date"
          className="h-[44px]"
          isDarkMode={isDarkMode}
        />
      </FormRow>

      <FormRow label="Country" type="bookFormStyle">
        <Select
          options={countries}
          styles={customStyles}
          placeholder="Select a nationality..."
          formatOptionLabel={(option) => (
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <img
                src={option.flag}
                alt={`${option?.label} Flag`}
                width="20"
                height="15"
                style={{ borderRadius: '3px', objectFit: 'cover' }}
              />
              <span>{option.label}</span>
            </div>
          )}
        />
      </FormRow>

      <FormRow
        type="hasbuttons"
        customeClasses="flex justify-end gap-[10px] items-center"
      >
        <Button variant="third">Cancel</Button>
        <Button variant="formbutton">Add Author</Button>
      </FormRow>
    </Form>
  );
}

export default EditAuthorForm;
