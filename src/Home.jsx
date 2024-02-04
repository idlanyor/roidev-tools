import FiturCard from "./FiturCard";
import { data } from "./data/Fitur";
export function Home() {
    return (
        <div>
            <FiturCard data={data} />
        </div>
    );
}