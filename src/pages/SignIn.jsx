import { Field, Form, Formik } from 'formik'
import { Input } from '../components/forms'
import { Button } from '../components'

const initialValues = {
  email: '',
  password: '',
  passwordRepeat: ''
}

export const SignIn = () => {
  const submit = (data) => {
    console.log('data______ ', data)
  }

  return (
    <div className="max-w-sm mx-auto">
      <h1 className="mx-auto max-w-max mb-4 text-3xl">Авторизация</h1>
      <Formik onSubmit={submit} initialValues={initialValues}>
        <Form className="flex flex-col gap-1">
          <Field name="email" placeholder="Введите Email" component={Input} />
          <Field name="password" placeholder="Введите пароль" component={Input} />
          <Button className="mt-4 ml-auto max-w-max" text="Войти" />
        </Form>
      </Formik>
    </div>
  )
}
