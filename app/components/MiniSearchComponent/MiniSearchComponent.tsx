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
	useState,
} from 'react';
import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { useDebounce } from 'use-debounce';

interface SearchInputComponentProps {
	currentSearch: string;
	setCurrentSearch: Dispatch<SetStateAction<string>>;
	debounceTime?: number;
}

const SearchInputComponent: FunctionComponent<SearchInputComponentProps> = ({
	debounceTime = 300,
	currentSearch,
	setCurrentSearch,
}) => {
	const [searchInput, setSearchInput] = useState(currentSearch);

	const [debouncedSearchInput] = useDebounce(searchInput, debounceTime);

	useEffect(() => {
		setCurrentSearch(debouncedSearchInput);
	}, [debouncedSearchInput, setCurrentSearch]);

	return (
		<Stack
			sx={{
				// backgroundColor: 'grey.A200',
				border: '1px solid',
				borderColor: 'var(--mui-palette-divider)',
				borderRadius: 2,
				overflow: 'hidden',
			}}
			width={'100%'}
			direction={'column'}
		>
			<Stack
				height={'2rem'}
				// width={'20rem'}
				width={'100%'}
				direction={'row'}
			>
				<Box
					component={'input'}
					type="search"
					placeholder="Pesquisar..."
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
					width={'100%'}
					name="search-input"
					value={searchInput}
					onChange={(e) => {
						setSearchInput(e.target.value);
					}}
				/>
				<Box
					height={'100%'}
					display={'flex'}
					alignItems={'center'}
					px={1}
					component={'button'}
					bgcolor={'grey.A200'}
					border={'none'}
					sx={{
						':hover': {
							backgroundColor: 'rgba(0, 0, 0, 0.3)',
						},
						':active': {
							backgroundColor: 'rgba(0, 0, 0, 0.4)',
						},
					}}
				>
					<SearchIcon />
				</Box>
			</Stack>
		</Stack>
	);
};

export default SearchInputComponent;
