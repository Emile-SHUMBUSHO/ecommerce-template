import { useState } from 'react'
import { signInUserWithEmailAndPassword, signInWithGooglePopUp } from '../../utils/firebase/firebase.utils';
import FormInput from '../form-input/form-input.component';
import Button, {BUTTON_TYPE_CLASSES} from '../button/button.component';

import './sign-in-form.styles.scss';

const defaultValues = {
  email: "",
  password: "",
}

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultValues);
  const { email, password } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value })
  }

  const resetFormFields = () => {
    setFormFields(defaultValues);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await signInUserWithEmailAndPassword(email, password);
      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case 'auth/invalid-login-credentials':
          alert('Invalid login credentials');
          break;
        case 'auth/user-not-found':
          alert('no user associated with this email');
          break;
        default:
          console.log(error);
      }
    }
  }

  const signInWithGoogle = async () => {
    await signInWithGooglePopUp();

  }


  return (
    <div className='sign-in-container'>
      <h2>Already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput label={'Email'} type='email' required onChange={handleChange} name='email' value={email} />
        <FormInput label={'Password'} type='password' required onChange={handleChange} name='password' value={password} />
        <div className='buttons-container'>
          <Button type="submit" buttonType={'inverted'}>
            Sign In
          </Button>
          <Button type="button" buttonType={BUTTON_TYPE_CLASSES.google} onClick={signInWithGoogle}>
            Sign in with google
          </Button>
        </div>
      </form>
    </div>
  )
}

export default SignInForm