// Copyright (c) 2023 Rafael Farias
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import Box from '@mui/material/Box/Box';
import Paper from '@mui/material/Paper/Paper';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import { FunctionComponent } from 'react';
import { darkTheme } from '../Themes';
import Container from '@mui/material/Container/Container';
import Stack from '@mui/material/Stack/Stack';
import Tooltip from '@mui/material/Tooltip/Tooltip';
import IconButton from '@mui/material/IconButton/IconButton';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import GitHubIcon from '@mui/icons-material/GitHub';
import Typography from '@mui/material/Typography/Typography';
import DockerIcon from '../CustomIcons/DockerIcon';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import Link from 'next/link';

function Copyright() {
	return (
		<Typography variant="body2" color="text.secondary">
			{'Copyright © Rafael F. Meneses '}

			{new Date().getFullYear()}
			{'.'}
		</Typography>
	);
}

interface AppFooterProps {}

const AppFooter: FunctionComponent<AppFooterProps> = () => {
	return (
		<ThemeProvider theme={darkTheme}>
			<Paper
				component="footer"
				elevation={0}
				square
				sx={{
					marginTop: 'auto',
					py: { xs: 2, sm: 3, md: 4 },
				}}
			>
				<Container maxWidth="md">
					<Stack
						direction="row"
						justifyContent="space-between"
						alignItems="center"
						spacing={2}
					>
						<Grid container gap={1}>
							<Grid>
								<Tooltip title="Repositório no GitHub">
									<IconButton
										aria-label="github"
										href="https://github.com/ZRafaF/educa-utf"
										target="_blank"
									>
										<GitHubIcon />
									</IconButton>
								</Tooltip>
							</Grid>
							<Grid>
								<Tooltip title="Documentação">
									<IconButton
										aria-label="documentation"
										href="https://zrafaf.github.io/educa-utf/"
										target="_blank"
									>
										<MenuBookIcon />
									</IconButton>
								</Tooltip>
							</Grid>
							<Grid>
								<Tooltip title="Repositório no DockerHub">
									<IconButton
										aria-label="DockerHub-link"
										href="https://hub.docker.com/r/zrafaf/educa_utf_nextjs"
										target="_blank"
									>
										<DockerIcon />
									</IconButton>
								</Tooltip>
							</Grid>
						</Grid>
						<Stack
							direction="column"
							justifyContent="center"
							alignItems="center"
							spacing={2}
						>
							<Copyright />
							<Grid container gap={2}>
								<Grid>
									<Link
										href="/terms"
										style={{
											textDecoration: 'none',
										}}
									>
										<Typography
											variant="body2"
											color="white"
										>
											Termos de Serviço
										</Typography>
									</Link>
								</Grid>
								<Grid>
									<Link
										href="/privacy"
										style={{
											textDecoration: 'none',
										}}
									>
										<Typography
											variant="body2"
											color="white"
										>
											Política de Privacidade
										</Typography>
									</Link>
								</Grid>
							</Grid>
						</Stack>
					</Stack>
				</Container>
			</Paper>
		</ThemeProvider>
	);
};

export default AppFooter;
