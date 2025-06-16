import style from './css/UserProfile.module.css'
function UserProfile(){
    return(
        <div>
            <div>
                <img src="https://www.w3schools.com/howto/img_avatar.png" alt="" />
            </div>
            <div>
                <h4 className={style.heading}>Sumit Basu</h4>
                <p>Software Developer</p>
            </div>
        </div>
    )
}

export default UserProfile;