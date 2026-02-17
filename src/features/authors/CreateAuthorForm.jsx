import Button from '../../components/ui/Button';
import Form from '../../components/ui/Form';
import FormRow from '../../components/ui/FormRow';
import Input from '../../components/ui/Input';
import Select from 'react-select';
import { useCountry } from '../../hooks/useCountry';
import { customStyles } from '../../styles/CustomeStye.js';
import { useDarkMode } from '../../context/DarkModeContext.jsx';
import { Controller, useForm } from 'react-hook-form';

function CreateAuthorForm() {
  const { countries } = useCountry();
  const { isDarkMode } = useDarkMode();

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      {/* name */}
      <FormRow
        label="Author name"
        type="bookFormStyle"
        error={errors?.name?.message}
      >
        <Input
          type="text"
          placeholder="e.g. Robert C. Martin"
          className="h-[44px]"
          {...register('name', {
            required: 'Author name is required',
            minLength: {
              value: 3,
              message: 'Name must be at least 3 characters',
            },
          })}
        />
      </FormRow>

      {/* birth_date */}
      <FormRow
        label="Birth date"
        type="bookFormStyle"
        error={errors?.birth_date?.message}
      >
        <Input
          type="date"
          className="h-[44px]"
          isDarkMode={isDarkMode}
          {...register('birth_date', {
            required: 'Birth date is required',
          })}
        />
      </FormRow>

      {/* Country */}
      <FormRow
        label="Country"
        type="bookFormStyle"
        error={errors?.country?.message}
      >
        <Controller
          name="country"
          control={control}
          rules={{ required: 'Country is required' }}
          render={({ field }) => (
            <Select
              {...field}
              options={countries}
              styles={customStyles}
              placeholder="Select a nationality..."
              formatOptionLabel={(option) => (
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                  }}
                >
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
              value={field.value || null}
              onChange={field.onChange}
            />
          )}
        />
      </FormRow>

      {/* Buttons */}
      <FormRow
        type="hasbuttons"
        customeClasses="flex justify-end gap-[10px] items-center"
      >
        <Button variant="third" type="button" onClick={() => reset()}>
          Cancel
        </Button>

        <Button variant="formbutton">Add Author</Button>
      </FormRow>
    </Form>
  );
}

export default CreateAuthorForm;
