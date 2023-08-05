import HomeTemplate from "@/templates/HomeTemplate";
import DefaultLayout from "@/templates/DefaultLayout";

export default async () => {
    return (
        <DefaultLayout isUseShadow={false}>
            <HomeTemplate/>
        </DefaultLayout>

    )
}