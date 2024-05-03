import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Grid, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useCallback, useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { UserRoleEnum } from '@/enums';
import { ISignInRequest } from '@/interfaces';
import { ROUTES } from '@/router/constants';
import { useSignInMutation } from '@/services/auth';
import { useAppDispatch } from '@/store';
import { authSlice } from '@/store/auth';
import { TSignInFormData } from '@/types';
import { FormTextInput } from '@/ui-kit';

import { signInSchema } from './schema';

const StyledForm = styled('form')(({ theme }) => ({
  [theme.breakpoints.up('xs')]: { width: '90%' },
  [theme.breakpoints.up('md')]: { width: '70%' },
  [theme.breakpoints.up('lg')]: { width: '40%' },
}));

export const SignInForm = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [signIn, { data: loginData, isLoading }] = useSignInMutation();

  const methods = useForm<TSignInFormData>({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onBlur',
    reValidateMode: 'onSubmit',
    resolver: zodResolver(signInSchema),
  });

  const { handleSubmit } = methods;

  const onSubmit = useCallback(
    (credentials: ISignInRequest) => {
      signIn(credentials);
    },
    [signIn],
  );

  useEffect(() => {
    if (!loginData || loginData?.user?.role !== UserRoleEnum.ADMIN) return;

    dispatch(
      authSlice.actions.setAccessToken({
        token: loginData?.token,
        user: loginData?.user,
      }),
    );
    navigate(ROUTES.HOME);
  }, [loginData, navigate, dispatch]);

  return (
    <FormProvider {...methods}>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2} mb={2}>
          <Grid item xs={12} mt={3}>
            <Typography variant="h3">Sign in</Typography>
          </Grid>
          <Grid item xs={12}>
            <FormTextInput<TSignInFormData> name="email" type="email" autoComplete="email" placeholder="email" />
          </Grid>

          <Grid item xs={12}>
            <FormTextInput<TSignInFormData>
              name="password"
              type="password"
              autoComplete="password"
              placeholder="password"
            />
          </Grid>

          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              disabled={isLoading}
              data-testid="sign-in-submit"
              fullWidth
            >
              Sign In
            </Button>
          </Grid>
        </Grid>
      </StyledForm>
    </FormProvider>
  );
};
