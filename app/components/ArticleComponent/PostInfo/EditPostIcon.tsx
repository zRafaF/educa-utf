// Copyright (c) 2023 Rafael Farias
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

'use client';

import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { FunctionComponent } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import Link from 'next/link';
import usePbAuth from '@/hooks/usePbAuth';
interface EditPostIconProps {
	articleId: string;
	articleAuthorId: string;
}

const EditPostIcon: FunctionComponent<EditPostIconProps> = ({
	articleId,
	articleAuthorId,
}) => {
	const [, user] = usePbAuth();

	if (user?.id === articleAuthorId)
		return (
			<Tooltip title="Editar esse artigo">
				<IconButton
					aria-label="editar artigo"
					LinkComponent={Link}
					href={`/edit/${articleId}`}
					size="small"
				>
					<EditIcon color="disabled" fontSize="small" />
				</IconButton>
			</Tooltip>
		);
};

export default EditPostIcon;
