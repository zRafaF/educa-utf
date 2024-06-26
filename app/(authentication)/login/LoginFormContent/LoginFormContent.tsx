// Copyright (c) 2023 Rafael Farias
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import React from 'react';
import { FunctionComponent } from 'react';
import TextField from '@mui/material/TextField/TextField';
import FormControlLabel from '@mui/material/FormControlLabel/FormControlLabel';
import Checkbox from '@mui/material/Checkbox/Checkbox';
import PasswordInput from '@/components/PasswordInput/PasswordInput';

interface LoginFormContentProps {}

const LoginFormContent: FunctionComponent<LoginFormContentProps> = () => {
	return (
		<React.Fragment>
			<TextField
				margin="normal"
				required
				fullWidth
				id="login"
				label="Usuário ou Email"
				name="login"
				type="text"
				autoComplete="login"
				helperText='Para alunos da UTFPR, utilize "a + RA". ex.: a12345678.'
				autoFocus
			/>
			<PasswordInput
				label="Senha"
				name="password"
				inputProps={{
					minLength: 6,
				}}
			/>
			<FormControlLabel
				control={
					<Checkbox
						value="remember"
						color="primary"
						name="remember"
						id="remember"
					/>
				}
				label="Manter-me conectado"
			/>
		</React.Fragment>
	);
};

export default LoginFormContent;
