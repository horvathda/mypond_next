

function RolunkItems(props){
    return(
        <div className="rolunk__container--nevek">

            <div  className={props.oldal} >
                <div className={props.oldal_oldal}>


                    <div className="rolunk__container--image">
                         <img className="profil_kep" src={props.src}  alt="profil kép"/>
                    </div>
                    <div className={props.adatok_oldal}>
                        <div>

                        <p className="rolunk__nev"> {props.nev}</p>
                        <p className="rolunk__vegzettseg">{props.vegzettseg}</p>
                        <p className="rolunk__text">{props.text}</p>
                        <p className="rolunk__text_2">{props.text2}</p>
                        </div>

                    </div>

                </div>

            </div>
        </div>

    );

}

export default RolunkItems;