import { useRouter } from 'expo-router';
import React from 'react';

import { useLogin } from '@/api/auth';
import type { LoginFormProps } from '@/components/login-form';
import { LoginForm } from '@/components/login-form';
import { FocusAwareStatusBar } from '@/components/ui';
import { useAuth } from '@/lib';

export default function Login() {
  const router = useRouter();
  const signIn = useAuth.use.signIn();

  const { mutateAsync: login } = useLogin();

  const onSubmit: LoginFormProps['onSubmit'] = async (data) => {
    console.log(data);
    const { data: resp } = await login(data);
    signIn(
      {
        access: resp.tokens.accessToken,
        refresh: resp.tokens.refreshToken,
      },
      resp.user
    );
    router.push('/');
  };
  return (
    <>
      <FocusAwareStatusBar />
      <LoginForm onSubmit={onSubmit} />
    </>
  );
}
