// Copyright (c) 2023 Rafael Farias
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import Paper from '@mui/material/Paper/Paper';
import { FunctionComponent } from 'react';
import Container from '@mui/material/Container/Container';
import Stack from '@mui/material/Stack/Stack';
import Tooltip from '@mui/material/Tooltip/Tooltip';
import IconButton from '@mui/material/IconButton/IconButton';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import GitHubIcon from '@mui/icons-material/GitHub';
import Typography from '@mui/material/Typography/Typography';
import DockerIcon from '../CustomIcons/DockerIcon';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import NextLink from 'next/link';
import Link from '@mui/material/Link/Link';
import Divider from '@mui/material/Divider/Divider';
import { MIN_FOOTER_HEIGHT } from '@/lib/helper';

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
		<div data-mui-color-scheme="dark">
			<Divider variant="middle" sx={{ mx: 0 }} />

			<Paper
				component="footer"
				elevation={0}
				square
				sx={{
					marginTop: 'auto',
					py: { xs: 3, sm: 4, md: 6 },
					backgroundColor: 'grey.A400',
					minHeight: MIN_FOOTER_HEIGHT,
				}}
			>
				<Container maxWidth="lg">
					<Grid
						container
						justifyContent={'center'}
						alignItems="center"
						gap={1}
						width={'100%'}
					>
						<Grid xs={12} sm={12} md>
							<Grid container gap={2} justifyContent={'center'}>
								<Grid>
									<Tooltip
										title="Repositório no GitHub"
										arrow
									>
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
									<Tooltip title="Documentação" arrow>
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
									<Tooltip
										title="Repositório no DockerHub"
										arrow
									>
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
						</Grid>
						<Grid xs={12} sm={12} md>
							<Stack
								direction="column"
								justifyContent="center"
								alignItems="center"
								spacing={1}
							>
								<Copyright />
								<Grid
									container
									gap={2}
									justifyContent={'center'}
								>
									<Grid>
										<Link
											href="/terms"
											component={NextLink}
											underline="hover"
											color={'white'}
										>
											<Typography variant="body2">
												Termos de Serviço
											</Typography>
										</Link>
									</Grid>
									<Grid>
										<Link
											href="/privacy"
											component={NextLink}
											underline="hover"
											color={'white'}
										>
											<Typography variant="body2">
												Política de Privacidade
											</Typography>
										</Link>
									</Grid>
									<Grid>
										<Link
											href="/attributions"
											component={NextLink}
											underline="hover"
											color={'white'}
										>
											<Typography variant="body2">
												Atribuições
											</Typography>
										</Link>
									</Grid>
									<Grid>
										<Link
											href="/report"
											component={NextLink}
											underline="hover"
											color={'white'}
										>
											<Typography variant="body2">
												Denunciar
											</Typography>
										</Link>
									</Grid>
								</Grid>
							</Stack>
						</Grid>
					</Grid>
				</Container>
			</Paper>
		</div>
	);
};

export default AppFooter;
