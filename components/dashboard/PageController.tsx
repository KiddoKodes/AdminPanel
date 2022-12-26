import LoginScreen from "./LoginScreen"
const PageController = ({ currentPage }: { currentPage: number }) => {
    switch (currentPage) {
        case 1:
            return <LoginScreen />
        default:
            return <h1>Hello</h1>
    }
}
export default PageController