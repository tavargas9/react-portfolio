import CardDefault from "../components/Card";
import projects from "../projects";

export default function Portfolio() {
    return (
        <CardDefault projects={projects} />
    );
}