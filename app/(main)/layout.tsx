import Provider from "@/reducers/provider";

const MainLayout = ({children}: any) => {
    return (
        <Provider>
            {children}
        </Provider>

    )
}
export default MainLayout