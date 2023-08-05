import DefaultLayout from "@/templates/DefaultLayout";

const MainLayout = ({children}: any) => {
    return (
        <DefaultLayout isUseShadow>
            {children}
        </DefaultLayout>
    )
}
export default MainLayout