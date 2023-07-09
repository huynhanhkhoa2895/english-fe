import DefaultLayout from "@/templates/DefaultLayout";
import Provider from "@/reducers/provider";

const MainLayout = ({children} : any) => {
  return(
      <Provider>
        <DefaultLayout>
          {children}
        </DefaultLayout>
      </Provider>

  )
}
export default MainLayout