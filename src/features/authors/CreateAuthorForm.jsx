import Button from '../../components/ui/Button';
import Form from '../../components/ui/Form';
import FormRow from '../../components/ui/FormRow';
import Input from '../../components/ui/Input';
import Select from 'react-select';
import { useCountry } from '../../hooks/useCountry';
import { customStyles } from '../../styles/CustomeStye.js';
import { useDarkMode } from '../../context/DarkModeContext.jsx';
import { Controller, useForm } from 'react-hook-form';
import { useCreateAuthor } from './useCreateAuthor.js';
import { useUpdateAuthor } from './useUpdateAuthor.js';
import SpinnerMini from '../../components/ui/SpinnerMini.jsx';

function CreateAuthorForm({ authorToEdit = {}, onCloseModal }) {
  const { countries } = useCountry();
  const { isDarkMode } = useDarkMode();

  const { id: editId, ...editValues } = authorToEdit;
  const isEditSession = Boolean(editId);

  const { createAuthor, isCreatingAuthor } = useCreateAuthor();
  const { updateAuthor, isUpdatingAuthor } = useUpdateAuthor();

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: isEditSession
      ? {
          ...editValues,
          country: countries.find((c) => c.label === editValues.country),
        }
      : {},
  });

  const isWorking = isCreatingAuthor || isUpdatingAuthor;

  function onSubmit(data) {
    console.log(data);
    const formattedData = {
      ...data,
      country: data.country.label,
    };

    if (isEditSession) {
      updateAuthor(
        { id: editId, newAuthorData: formattedData },
        {
          onSuccess: () => {
            reset();
            onCloseModal?.();
          },
        },
      );
    } else {
      createAuthor(formattedData, {
        onSuccess: () => {
          reset();
          onCloseModal?.();
        },
      });
    }
  }

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
        <Button
          variant="third"
          type="button"
          onClick={() => reset()}
          disabled={isWorking}
        >
          Cancel
        </Button>

        <Button variant="formbutton" disabled={isWorking}>
          {isWorking ? (
            <SpinnerMini />
          ) : isEditSession ? (
            'Edit Author'
          ) : (
            'Add Author'
          )}
        </Button>
      </FormRow>
    </Form>
  );
}

export default CreateAuthorForm;
