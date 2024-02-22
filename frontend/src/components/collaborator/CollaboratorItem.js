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
        <div className="col-md-4 col-sm-6 col-12 col-lg-4 col-xl-3 mx-1">
            <div className="profile-widget" >
                <div className="profile-img">
                    <span className="avatar">
                        <img src='http://localhost:8080/images/image.png' alt="avatar" />
                    </span>
                </div>
                <h5 className="user-name m-t-10 mb-0 text-ellipsis ">
                    <span className="text-black h5 text-decoration-none">{userLastName} {userName}</span>
                </h5>
                <div className="small text-muted">{deptName.toUpperCase()}</div>
                <div className="small text-muted">{posName}</div>
                <div className="small text-muted">{userEmail}</div>
            </div>
        </div>
    )

    // return(
    //     <div className="collaborator-item">
    //         <div className='user-image-container'>
    //             <img src = 'http://localhost:8080/images/image.png' alt = 'user image' />
    //         </div>
            
    //         <div className='user-info'>
    //             <div className="personal-info">
    //                 <span> {`${ userName } ${userLastName}`} </span>
    //             </div>
    //             <div className="professional-info">
    //                 <span><span className='info-key'>Email :</span><span> { userEmail } </span></span>
    //                 <span><span className='info-key'>Poste :</span><span> { posName } </span></span>
    //                 <span><span className='info-key'>Département :</span><span> { deptName } </span></span>
    //             </div>
    //         </div>
    //     </div>
    // )
}