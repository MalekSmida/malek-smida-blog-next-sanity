// node modules
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

// local files
import { searchSchema } from '../../utils/validationSchema';

// typing
interface IFormInput {
  searchText: string;
}
interface PropsSearchBar {
  onSearch: (param: IFormInput) => void;
}

function index({ onSearch }: PropsSearchBar) {
  // hooks
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({
    resolver: yupResolver(searchSchema),
  });

  // event
  const onSubmitForm: SubmitHandler<IFormInput> = (data) => {
    onSearch(data);
  };

  return (
    <form
      onChange={handleSubmit(onSubmitForm)}
      className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between bg-lightdark-color py-5 px-6"
    >
      <input
        {...register('searchText')}
        className="w-full rounded border py-2 px-5 shadow outline-primary-color"
        placeholder="Search..."
        type="text"
      />
    </form>
  );
}

export default index;
