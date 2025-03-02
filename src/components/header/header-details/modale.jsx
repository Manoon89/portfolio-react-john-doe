import GitHubInfos from "./githubinfos.jsx";

export default function Modale (props) {
    return (
        <div className="text-center modal-box">
            <button type="button" className="btn btn-danger btn-lg" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
            En savoir plus
            </button>
            
            <div className="modal" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" 
            aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content bg-dark border border-secondary">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5 fw-medium" id="staticBackdropLabel">Mon profil GitHub</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body d-md-flex align-items-center">
                            <img className="m-2" src={props.photo} alt="Photo de profil de John Doe" style={{ width: '50%', height: '50%' }}/>
                            <GitHubInfos />
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Fermer</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}