import { Field, Form, Formik, ErrorMessage } from 'formik'
import { Input } from '@/components/forms'
import { Button } from '@/components'
import { useAuthUser } from '@/hooks'
import { Link } from 'react-router-dom'
import * as Yup from 'yup'

const initialValues = {
  username: '',
  password: '',
  passwordRepeat: ''
}

const SignupSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, 'Логин не может быть менее 3 символов')
    .max(12, 'Логин не может быть длиннее 12 символов')
    .required('Поле обязательно для заполнения'),
  password: Yup.string()
    .min(6, 'Пароль может быть менее 6 символов')
    .required('Поле обязательно для заполнения'),
  passwordRepeat: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Пароли должны совпадать')
    .required('Поле обязательно для заполнения')
})

export const SignUp = () => {
  const { signupToRoute, mesReq } = useAuthUser()

  const submit = (formData) => {
    const body = {
      username: formData.username,
      password: formData.password
    }

    signupToRoute(body)
  }

  return (
    <div className="max-w-sm mx-auto">
      <h1 className="mx-auto max-w-max mb-4 text-3xl">Регистрация</h1>
      {mesReq.error && <p className="mt-2 text-red-500">{mesReq.error}</p>}
      <Formik
        onSubmit={submit}
        initialValues={initialValues}
        validationSchema={SignupSchema}
      >
        <Form className="flex flex-col gap-1">
          <ErrorMessage
            name="username"
            render={msg => <span className="text-sm text-red-500">{msg}</span>}
          />
          <Field
            name="username"
            placeholder="Придумайте логин"
            component={Input}
          />
          <ErrorMessage
            name="password"
            render={msg => <span className="text-sm text-red-500">{msg}</span>}
          />
          <Field
            name="password"
            placeholder="Придумайте пароль"
            component={Input}
          />
          <ErrorMessage
            name="passwordRepeat"
            render={msg => <span className="text-sm text-red-500">{msg}</span>}
          />
          <Field
            name="passwordRepeat"
            placeholder="Повторите пароль"
            component={Input}
          />
          <Button className="mt-4 ml-auto max-w-max" text="Отправить" />
          <Link
            to="/signin"
            className="mt-2 max-w-max hover:text-emerald-500"
          >
            Авторизоваться
          </Link>
        </Form>
      </Formik>
    </div>
  )
}
