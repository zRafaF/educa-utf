// Copyright (c) 2024 Rafael Farias
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

'use client';

import {
	Dispatch,
	FunctionComponent,
	SetStateAction,
	useEffect,
	useRef,
	useState,
} from 'react';
import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { usePathname, useRouter } from 'next/navigation';
import Button from '@mui/material/Button';
import SwapVertIcon from '@mui/icons-material/SwapVert';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';

interface SearchFieldProps {
	isExtended: boolean;
	setIsExtended: Dispatch<SetStateAction<boolean>>;
	onlySmallScreen: boolean;
}

const SearchField: FunctionComponent<SearchFieldProps> = ({
	isExtended,
	setIsExtended,
	onlySmallScreen,
}) => {
	const [searchInput, setSearchInput] = useState('');
	const pathname = usePathname();
	const paths = pathname.split('/');
	const router = useRouter();
	const [searchType, setSearchType] = useState<'Artigos' | 'Capítulos'>(
		'Artigos'
	);
	const searchInputRef = useRef<HTMLInputElement>(null);
	const disabled = paths.length > 1 && paths[1] === 'browse';

	useEffect(() => {
		setSearchInput('');
	}, [pathname]);

	if (!isExtended)
		return (
			<Tooltip
				title={
					disabled
						? 'A barra de busca está desabilitada nessa página.'
						: undefined
				}
				arrow
			>
				<Box
					sx={{ flexGrow: 1 }}
					display="flex"
					justifyContent={'end'}
					px={1}
				>
					<Stack direction="row" justifyContent="flex-end">
						<Tooltip title="Abrir barra de busca" arrow>
							<IconButton
								size="large"
								aria-label="search"
								aria-haspopup="true"
								color="inherit"
								disabled={disabled}
								onClick={() => setIsExtended(true)}
							>
								<SearchIcon />
							</IconButton>
						</Tooltip>
					</Stack>
				</Box>
			</Tooltip>
		);

	return (
		<Stack
			sx={{
				// backgroundColor: 'grey.A200',
				border: 'none',
				borderRadius: 1,
				overflow: 'hidden',
				opacity: disabled ? 0.3 : 1,
				pointerEvents: disabled ? 'none' : 'inherit',
			}}
			width={'100%'}
			maxWidth={600}
			direction={'column'}
			bgcolor={'grey.A200'}
			component={'form'}
			onSubmit={(e) => {
				e.preventDefault();
				router.push(
					`/browse/${
						searchType === 'Artigos' ? 'articles' : 'chapters'
					}?search=${searchInput}`
				);
				if (onlySmallScreen) setIsExtended(false);
				searchInputRef.current?.blur();
			}}
		>
			<Stack
				height={'2.5rem'}
				width={'100%'}
				direction={'row'}
				alignItems={'center'}
			>
				<Box
					component={'input'}
					type="search"
					placeholder="Buscar..."
					sx={{
						backgroundColor: 'transparent',
						border: 'none ',
						borderWidth: '1px',
						padding: '0 1rem',
						fontSize: '1rem',
						// Border radius only on left side
						borderTopLeftRadius: 5,
						borderBottomLeftRadius: 5,
						':focus': {
							outline: 'none',
						},
					}}
					autoFocus
					width={'100%'}
					name="search"
					value={
						disabled
							? '[Desabilitado] Utilize a busca local'
							: searchInput
					}
					onChange={(e) => {
						setSearchInput(e.target.value);
					}}
					ref={searchInputRef}
				/>
				<Box>
					<Tooltip title="Trocar item de busca" arrow>
						<Button
							sx={{
								textTransform: 'inherit',
								mx: 1,
								px: { xs: 0.8, sm: 1.25, md: 1.5 },
								// fontSize: 26,
								height: '2rem',
							}}
							variant="outlined"
							onClick={() => {
								setSearchType(
									searchType === 'Artigos'
										? 'Capítulos'
										: 'Artigos'
								);
							}}
						>
							{searchType} <SwapVertIcon fontSize="inherit" />
						</Button>
					</Tooltip>
				</Box>
				<Tooltip title="Buscar" arrow>
					<Box
						height={'100%'}
						display={'flex'}
						alignItems={'center'}
						px={1}
						component={'button'}
						border="none"
						sx={{
							':enabled': {
								':hover': {
									backgroundColor: 'rgba(0, 0, 0, 0.3)',
								},
								':active': {
									backgroundColor: 'rgba(0, 0, 0, 0.4)',
								},
							},
						}}
						type="submit"
					>
						<SearchIcon />
					</Box>
				</Tooltip>
			</Stack>
		</Stack>
	);
};

export default SearchField;
