
import { useContext } from 'react';
import MaxWidthContext from '../scripts/maxWidthContext';
import defaultValues from './const';

const getNextImage = (fileImage) => {
    const maxWidth = useContext(MaxWidthContext);
    return '/_next/image?url=%2F' + fileImage + '&w=' + defaultValues.bgSizes[maxWidth.key] + '&q=75';
}

export default getNextImage;

