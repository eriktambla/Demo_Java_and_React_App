import {Header} from "../../components/Header.tsx";
import {PublicButtonGroup} from "../../components/PublicButtonGroup.tsx";

export default function Home() {
    return (
        <div>
            <Header buttons={<PublicButtonGroup />}/>
            <main className="mt-10">
                <h2>Welcome to Selectors!</h2>
                <p>To continue sign up or log in</p>
            </main>
        </div>
    )
}