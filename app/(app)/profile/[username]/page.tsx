// Copyright (c) 2023 Rafael Farias
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import {
	getListOfUsersStats,
	getUserAvatarUrl,
	getUsersStatsByUsername,
} from '@/lib/apiHelpers/usersAPI';
import { FunctionComponent, Suspense } from 'react';
import Box from '@mui/material/Box/Box';
import dynamic from 'next/dynamic';
import type { Metadata } from 'next';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { getFormattedDate } from '@/lib/helper';
import PrivateDrawerContent from './PrivateDrawerContent';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import UserContentProfile from '@/components/UserContentProfile/UserContentProfile';
import IconButton from '@mui/material/IconButton';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import Button from '@mui/material/Button';
import Link from 'next/link';
import { ReportsTypeOptions } from '@/types/pocketbase-types';
import Tooltip from '@mui/material/Tooltip';

const EditablePfp = dynamic(
	() => import('@/components/EditablePfp/EditablePfp'),
	{
		ssr: false,
	}
);

const NoSSRPrivateUserComponent = dynamic(
	() => import('./PrivateUserComponent'),
	{
		ssr: false,
	}
);

interface PageProps {
	params: {
		username: string;
	};
}

export const revalidate = 0;

export async function generateStaticParams() {
	const result = await getListOfUsersStats();

	return result.map((user) => ({
		username: user.username,
	}));
}

export async function generateMetadata({
	params,
}: PageProps): Promise<Metadata> {
	try {
		const userStats = await getUsersStatsByUsername(params.username);
		const userAvatarUrl = await getUserAvatarUrl(userStats);
		return {
			title: `${userStats.username} (${userStats.name})  - EducaUTF`,
			description: `Perfil do ${userStats.username}: ${userStats.description}`,
			applicationName: 'EducaUTF',
			authors: [{ name: userStats.name }],
			openGraph: {
				title: userStats.username,
				description: `Perfil do ${userStats.username}`,
				siteName: 'EducaUTF',
				images: [{ url: userAvatarUrl }],
				locale: 'pt_BR',
				type: 'website',
			},
		};
	} catch (error) {
		return {
			title: 'Perfil',
		};
	}
}

const Page: FunctionComponent<PageProps> = async ({ params }) => {
	const userStats = await getUsersStatsByUsername(params.username);

	return (
		<Box display={'flex'} width={'100%'} minHeight="100dvh">
			<Box
				boxShadow={'0 0 4px #000'}
				width={'100%'}
				minWidth={0}
				zIndex={1}
			>
				<Container
					maxWidth="lg"
					sx={{
						px: { xs: 0.5, sm: 1, md: 2 },
						py: 2,
					}}
				>
					<Box
						display={'flex'}
						flexGrow={2}
						py={{ xs: 0.5, sm: 1, md: 2 }}
						gap={2}
						alignItems={'center'}
					>
						<Suspense fallback={<div>Carregando...</div>}>
							<EditablePfp userStats={userStats} />
						</Suspense>
						<Box display={'flex'} gap={2} alignItems={'center'}>
							<Box>
								<Typography
									variant="h3"
									fontSize={{
										xs: 'xx-large',
										sm: 'xxx-large',
									}}
									component="h1"
									color="primary"
									fontWeight={700}
								>
									{userStats.name}
									<Box component={'span'} ml={1}>
										<Tooltip title="Reportar usuário" arrow>
											<IconButton
												color="secondary"
												// sx={{
												// 	display: {
												// 		xs: 'block',
												// 		sm: 'none',
												// 		md: 'block',
												// 		lg: 'none',
												// 	},
												// }}
												LinkComponent={Link}
												href={`/report?type=${ReportsTypeOptions.Usuário}&id=${userStats.id}`}
											>
												<WarningAmberIcon />
											</IconButton>
										</Tooltip>
									</Box>
								</Typography>

								<Typography
									color="text.secondary"
									variant="subtitle2"
									component="p"
								>
									{userStats.description}
								</Typography>
							</Box>
						</Box>
					</Box>
				</Container>

				<Stack
					direction="column"
					justifyContent="center"
					alignItems="center"
					bgcolor={'grey.A700'}
				>
					<Divider flexItem />
					<Container
						maxWidth="lg"
						sx={{ py: 2, px: { xs: 1, sm: 1, md: 2 } }}
					>
						<Typography>
							<b>INFORMAÇÕES:</b>
						</Typography>
						<Box display={'flex'} pt={1} gap={1} flexWrap={'wrap'}>
							<Typography
								color="text.secondary"
								variant="subtitle2"
								component="p"
							>
								ID: <b>{userStats.id}</b>
							</Typography>
							{' | '}
							<Typography
								color="text.secondary"
								variant="subtitle2"
								component="p"
							>
								Juntou-se em:{' '}
								<b>{getFormattedDate(userStats.created)}</b>
							</Typography>
							{' | '}
							<Typography
								color="text.secondary"
								variant="subtitle2"
								component="p"
							>
								Visualizações:{' '}
								<b>
									{userStats.n_of_articles_views +
										userStats.n_of_chapters_views}
								</b>
							</Typography>
							{' | '}
							<Typography
								color="text.secondary"
								variant="subtitle2"
								component="p"
							>
								Likes:{' '}
								<b>
									{userStats.n_of_articles_likes +
										userStats.n_of_chapters_likes}
								</b>
							</Typography>
							{' | '}
							<Typography
								color="text.secondary"
								variant="subtitle2"
								component="p"
							>
								Artigos: <b>{userStats.n_of_articles}</b>
							</Typography>
							{' | '}
							<Typography
								color="text.secondary"
								variant="subtitle2"
								component="p"
							>
								Capítulos: <b>{userStats.n_of_chapters}</b>
							</Typography>
						</Box>
					</Container>
					<Divider flexItem />
				</Stack>
				<Container
					maxWidth="lg"
					sx={{
						py: 2,
						px: { xs: 1, sm: 1, md: 1, lg: 2 },
					}}
				>
					<Suspense fallback={<div>Carregando...</div>}>
						<UserContentProfile username={params.username} />
					</Suspense>
				</Container>
			</Box>
			<Suspense fallback={<div>Carregando...</div>}>
				<NoSSRPrivateUserComponent username={params.username}>
					<PrivateDrawerContent userId={userStats.id} />
				</NoSSRPrivateUserComponent>
			</Suspense>
		</Box>
	);
};

export default Page;
