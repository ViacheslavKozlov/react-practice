import data from '../../../data/index'
import { HeaderListContainer } from './HeaderListStyled';

const HeaderList = () => {
    return (
        <HeaderListContainer>
        <ul className='headerList'>
            {data.header.map((headerItem) => (
                <li className='headerListItem' key={headerItem} > {headerItem} </li>
            ))}
            </ul>
        </HeaderListContainer>   
    );
};
export default HeaderList