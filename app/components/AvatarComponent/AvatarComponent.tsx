// Copyright (c) 2023 Rafael Farias
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import Avatar from '@mui/material/Avatar/Avatar';
import { FunctionComponent } from 'react';
import { getInitials, stringToColor } from '@/lib/helper';

interface AvatarComponentProps {
	name: string;
	src: string | undefined;
	size?: 'small' | 'medium' | 'large' | 'x-large' | 'xx-large';
}

const AvatarComponent: FunctionComponent<AvatarComponentProps> = ({
	name,
	src,
	size = 'medium',
}) => {
	const sizeInPixels = () => {
		switch (size) {
			case 'small':
				return 28;
			case 'medium':
				return 40;
			case 'large':
				return 56;
			case 'x-large':
				return 70;
			case 'xx-large':
				return 80;

			default:
				return 40;
		}
	};

	return (
		<Avatar
			sx={{
				bgcolor: stringToColor(name),
				width: sizeInPixels(),
				height: sizeInPixels(),
				fontSize: size,
				fontWeight: '600',
				color: 'white',
			}}
			alt={name}
			src={src}
		>
			{getInitials(name)}
		</Avatar>
	);
};

export default AvatarComponent;
