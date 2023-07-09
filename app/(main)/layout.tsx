import DefaultLayout from "@/templates/DefaultLayout";
import Provider from "@/reducers/provider";

export default ({children} : any) => {
  return(
      <Provider>
        <DefaultLayout>
          {children}
        </DefaultLayout>
      </Provider>

  )
}