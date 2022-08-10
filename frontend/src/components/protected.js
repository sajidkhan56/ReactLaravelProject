import {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';

function Protected(props)
{   let Cmp = props.cmp;
    const navigate = useNavigate();

    useEffect(() => {
        if(!localStorage.getItem('user-name')) {
            navigate('/login');
        }     
    },[]);

    return (
        <>
        <Cmp />
        </>
    );

}
export default Protected;