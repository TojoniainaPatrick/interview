import defaultImage from '../../images/user.default.image.jpg';

export default function CollaboratorItem({ collaborator }){

    const {
        userName,
        userLastName,
        userEmail,
        posName,
        deptName
    } = collaborator;

    return(
        <div className="collaborator-item">
            <div className='user-image-container'>
                <img src = { defaultImage } alt = 'user image' />
            </div>
            
            <div className='user-info'>
                <div className="personal-info">
                    <span> {`${ userName } ${userLastName}`} </span>
                </div>
                <div className="professional-info">
                    <span><span className='info-key'>Email :</span><span> { userEmail } </span></span>
                    <span><span className='info-key'>Poste :</span><span> { posName } </span></span>
                    <span><span className='info-key'>Département :</span><span> { deptName } </span></span>
                </div>
            </div>
        </div>
    )
}