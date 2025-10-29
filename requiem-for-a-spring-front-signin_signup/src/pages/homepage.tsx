import PartitionClefSolFingerPrint from "../components/PartitionClefSolFingerPrint";

import "../styles/homepage.css";

export default function HomePage() {
    return (
        <main className="homepage">

            <div>
                <h2 className="h2Bienvenue">Bienvenue sur l'application Requiem for a Spring</h2>
                <p className="by">By Le Totem</p>
            </div>
            <div className="partition">
                <PartitionClefSolFingerPrint />
                <PartitionClefSolFingerPrint />
            </div>

        </main>
    );
}
