
import AssideRight from "../components/AssideRight";
import LinksNo from "../components/LinksNo";

export default function Administration() {
    return (
        <main className="bg-milk_gray 1024px:flex-col py-[20px] flex justify-center gap-[20px] relative">
            <LinksNo title="Администрация" pathTitle="Администрация" newsId={1} likes={0} />
            <AssideRight />
        </main>
    )
}
