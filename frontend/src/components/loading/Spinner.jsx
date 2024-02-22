import ScaleLoader from 'react-spinners/ScaleLoader';
import useCustomeContext from '../../context/useCustomeContext'


function Spinner() {

    const {
        loading
    } = useCustomeContext();

    return(
        loading
        ?
        <div style={{
            textAlign: 'center',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: '100vh',
            background: 'rgba(255, 255, 255, .5)',
            zIndex: 10000,
            position: 'fixed'
        }}>
            <ScaleLoader color = {'#18BC9C'} loading = { loading } size = { 200 } />
        </div>
        :null
    )
}

export default Spinner;