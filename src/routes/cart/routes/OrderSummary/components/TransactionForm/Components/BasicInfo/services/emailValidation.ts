export default function customEmailValidation(str: string) {
  const errorState = {
    isError: false,
    message: '',
  };
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (regex.test(str)) {
    errorState.isError = false;
    errorState.message = '';
  } else {
    errorState.isError = true;
    errorState.message = 'El correo electrónico ingresado no es válido';
  }
  return { errorState };
}
